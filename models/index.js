import { CurrentUser } from './CurrentUser';
import { types, getParent } from 'mobx-state-tree';

import categories from '../assets/data/categories';
import companies from '../assets/data/companies';

const currentUser = CurrentUser.create();

// const companyStore = CompanyStore.create({
//   companies,
// });

// const categoryStore = CategoryStore.create({
//   values: categories,
// });
const Category = types.model('Category', {
  id: types.identifier,
  title: types.string,
  values: types.maybe(types.array(types.late(() => Category))),
});

const Product = types
  .model('Product', {
    id: types.identifier,
    name: types.string,
    image: '',
    categories: types.array(types.reference(Category)),
  })
  .views(self => {
    return {
      get company() {
        return getParent(self).get(self);
      },
    };
  });

const Company = types
  .model('Company', {
    id: types.identifier,
    name: types.string,
    floor: '',
    room: '',
    phone: '',
    contactPerson: '',
    website: '',
    email: '',
    products: types.array(Product),
  })
  .views(self => {
    return {
      matchingProducts(cat) {
        return self.products.filter(
          product =>
            product.categories.filter(category => category.id === cat).length
        );
      },
    };
  });

const ProductStore = types
  .model('ProductStore', {
    companies: types.array(Company),
    categories: types.array(Category),
  })
  .views(self => {
    return {
      matchingCompanies(cat) {
        // console.log(cat);
        return self.companies.filter(
          company => company.matchingProducts(cat).length
        );
      },
    };
  });
const productStore = ProductStore.create({
  companies,
  categories,
});

export const store = {
  currentUser,
  productStore,
};

// TODO: Delete after development
window.MobxStore = store;
