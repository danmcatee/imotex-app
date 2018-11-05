import { types } from 'mobx-state-tree';

const Product = types.model('Product', {
  id: types.identifier,
  name: types.string,
  image: '',
  categories: types.array(types.string),
});

const Company = types.model('Company', {
  id: types.identifier,
  name: types.string,
  products: types.array(Product),
});

export const CompanyList = types.model('CompanyList', {
  companies: types.array(Company),
});
