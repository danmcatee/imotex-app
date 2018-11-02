import { types } from 'mobx-state-tree';

const User = types.model('User', {
  username: types.string,
  password: types.string,
  email: types.string,
  seller: false,
});

const UserStore = types
  .model('Users', {
    users: types.array(User),
  })
  .actions(self => ({
    addUser(user) {
      self.users.push(user);
    },
  }))
  .create({
    users: [
      {
        username: 'dan',
        password: 'pass123',
        email: 'info@danmcatee.com',
      },
      {
        username: 'bjorm',
        password: 'pass456',
        email: 'info@bjorn.com',
      },
    ],
  });

export default UserStore;
