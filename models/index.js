import { CurrentUser } from './CurrentUser';
import { types, getParent, destroy } from 'mobx-state-tree';

import categories from '../assets/data/categories';
import companies from '../assets/data/companies';
import sizes from '../assets/data/sizes';

const currentUser = CurrentUser.create();

// const companyStore = CompanyStore.create({
//   companies,
// });

// const categoryStore = CategoryStore.create({
//   values: categories,
// });
const Category = types
  .model('Category', {
    id: types.identifier,
    title: types.string,
    values: types.maybe(types.array(types.late(() => Category))),
  })
  .views(self => {
    return {
      getCategoryName(id) {
        return self.values.filter(category => category.id === id)[0].title;
      },
      getCategory(id) {
        return self.values.find(category => category.id === id);
      },
    };
  });

const Product = types
  .model('Product', {
    id: types.identifier,
    name: types.maybe(types.string),
    desc: types.maybe(types.string),
    image: '',
    isFavorite: false,
    fixed: false,
    sizes: types.maybe(types.array(types.string)),
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
      addProduct(product) {
        self.products.push(product);
      },
    };
  });

// const Size = types.model('Size', {
//   german: types.string,
//   international: types.string,
//   inches: types.string,
// });

// const Colors = types
//   .model('Colors', {
//     black: false,
//     red: false,
//     blue: false,
//     orange: false,
//     pink: false,
//     nature: false,
//     white: false,
//     grey: false,
//     green: false,
//     yellow: false,
//     brown: false,
//     jeans: false,
//   })
//   .actions(self => {
//     return {
//       selectColor(color) {
//         return (self[color] = !self[color]);
//       },
//     };
//   });

// const FilterOptions = types.model('filterOptions', {
//   colors: Colors,
//   sizes: types.array(Size),
// });

const ProductStore = types
  .model('ProductStore', {
    companies: types.array(Company),
    categories: types.array(Category),
    searchTerm: '',
    // filterOptions: FilterOptions,
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
      getSearchResults() {
        const matching = [];
        self.companies.map(company => {
          const matchingProducts = company.products.filter(product =>
            product.name.toLowerCase().includes(self.searchTerm.toLowerCase())
          );
          matching.push(...matchingProducts);
          return matchingProducts;
        });

        return matching;
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
      getCategoryName(id) {
        return self.categories.filter(category => category.id === id)[0].title;
      },
      getCategory(id) {
        return self.categories.find(category => category.id === id);
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
  })
  .actions(self => {
    return {
      setSearchTerm(searchString) {
        self.searchTerm = searchString;
      },
    };
  });

// const filterOptions = FilterOptions.create({
//   sizes,
// });

const productStore = ProductStore.create({
  companies,
  categories,
  // filterOptions,
});

export const store = {
  currentUser,
  productStore,
};

// TODO: Delete after development
window.MobxStore = store;
