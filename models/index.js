import { CurrentUser } from './CurrentUser';
import { CategoryStore } from './Categories';
import { CompanyStore } from './Companies';

import categories from '../assets/data/categories';
import companies from '../assets/data/companies';

const currentUser = CurrentUser.create();

const companyStore = CompanyStore.create({
  companies,
});

const categoryStore = CategoryStore.create({
  values: categories,
});

export const store = {
  currentUser,
  categoryStore,
  companyStore,
};

// TODO: Delete after development
window.MobxStore = store;
