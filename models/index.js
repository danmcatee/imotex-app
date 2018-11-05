import { CurrentUser } from './CurrentUser';
import { ProductStruct } from './ProductStruct';
import { CompanyList } from './Companies';

import parentCategories from '../assets/data/parentCategories';
import companies from '../assets/data/companies';

const currentUser = CurrentUser.create();

const companyList = CompanyList.create({
  companies,
});

const productStruct = ProductStruct.create(parentCategories);

export const store = {
  currentUser,
  productStruct,
  companyList,
};

// TODO: Delete after development
window.MobxStore = store;
