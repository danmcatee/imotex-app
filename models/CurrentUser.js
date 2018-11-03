import { types } from 'mobx-state-tree';

const UserInfo = types.model('UserInfo', {
  _id: types.identifier,
  firstName: types.string,
  lastName: types.string,
});

export const CurrentUser = types
  .model('CurrentUser', {
    authToken: types.maybe(types.string),
    info: types.maybe(UserInfo),
  })
  .actions(self => ({
    login: () => {
      console.log('Logged in');
    },
  }));
