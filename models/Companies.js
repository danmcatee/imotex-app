import { types } from 'mobx-state-tree';
import { Category } from './Categories';

const Product = types.model('Product', {
  id: types.identifier,
  name: types.string,
  image: '',
  categories: types.array(types.string),
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
        return self.products.filter(product =>
          product.categories.includes(cat)
        );
      },
    };
  });

export const CompanyStore = types
  .model('CompanyList', {
    companies: types.array(Company),
  })
  .views(self => {
    return {
      matchingCompanies(cat) {
        return self.companies.filter(
          company => company.matchingProducts(cat).length
        );
      },
    };
  });
