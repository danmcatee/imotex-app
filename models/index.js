import { CurrentUser } from './CurrentUser';

const currentUser = CurrentUser.create();

export const store = {
  currentUser,
};

// TODO: Delete after development
window.MobxStore = store;
