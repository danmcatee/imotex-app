import { CurrentUser } from './CurrentUser';
import { types, getParent, destroy } from 'mobx-state-tree';

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
    isFavorite: false,
    sizes: types.array(types.string),
    categories: types.array(types.reference(Category)),
  })
  .views(self => {
    return {
      get company() {
        return getParent(self).get(self);
      },
    };
  })
  .actions(self => {
    return {
      toggleFav() {
        self.isFavorite = !self.isFavorite;
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
    collections: types.array(types.string),
    products: types.array(Product),
  })
  .views(self => {
    return {
      productCount() {
        return self.products.length;
      },
      matchingProducts(cat) {
        return self.products.filter(
          product =>
            product.categories.filter(category => category.id === cat).length
        );
      },
    };
  })
  .actions(self => {
    return {
      deleteProduct(product) {
        destroy(product);
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
      getCompany(id) {
        return self.companies.find(el => el.id === id);
      },
      matchingCompanies(cat) {
        // console.log(cat);
        return self.companies.filter(
          company => company.matchingProducts(cat).length
        );
      },
      favoriteProducts() {
        const favorites = [];
        self.companies.map(company =>
          company.products.map(product => {
            if (product.isFavorite) favorites.push(product);
          })
        );

        return favorites;
      },
      getCategoryPickerObject() {
        return self.categories.map(category => {
          const obj = {};
          obj.key = category.id;
          obj.value = category.id;
          obj.label = category.title;
          return obj;
        });
      },
      getSecondCategoryPickerObject(segment) {
        return self.categories
          .filter(category => category.id === segment)[0]
          .values.map(subCategory => {
            const obj = {};
            obj.key = subCategory.id;
            obj.value = subCategory.id;
            obj.label = subCategory.title;
            return obj;
          });
      },
      getThirdCategoryPickerObject(segment, category) {
        return self.categories
          .filter(category => category.id === segment)[0]
          .values.filter(subCategory => subCategory.id === category)[0]
          .values.map(subSubCategory => {
            const obj = {};
            obj.key = subSubCategory.id;
            obj.value = subSubCategory.id;
            obj.label = subSubCategory.title;
            return obj;
          });
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
