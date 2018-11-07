import { CurrentUser } from './CurrentUser';
import { CategoryRoot } from './Categories';
import { CompanyList } from './Companies';

import parentCategories from '../assets/data/parentCategories';
import companies from '../assets/data/companies';

const currentUser = CurrentUser.create();

const companyList = CompanyList.create({
  companies,
});

const categoryRoot = CategoryRoot.create({
  values: parentCategories,
});

export const store = {
  currentUser,
  categoryRoot,
  companyList,
};

// TODO: Delete after development
window.MobxStore = store;
