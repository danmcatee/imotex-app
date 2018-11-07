import { CurrentUser } from './CurrentUser';
import { CategoryRoot } from './Categories';
import { CompanyList } from './Companies';

import categories from '../assets/data/categories';
import companies from '../assets/data/companies';

const currentUser = CurrentUser.create();

const companyList = CompanyList.create({
  companies,
});

const categoryRoot = CategoryRoot.create({
  values: categories,
});

export const store = {
  currentUser,
  categoryRoot,
  companyList,
};

// TODO: Delete after development
window.MobxStore = store;
