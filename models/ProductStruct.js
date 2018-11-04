import { types } from 'mobx-state-tree';

export const SubSubCategory = types.model('SubSubCategory', {
  id: types.identifier,
  title: types.string,
});

export const SubCategory = types.model('SubCategory', {
  id: types.identifier,
  title: types.string,
  SubSubCategory: types.maybe(types.array(SubSubCategory)),
});

export const Category = types.model('Category', {
  id: types.identifier,
  title: types.string,
  subcategories: types.array(SubCategory),
});

export const ParentCategory = types.model('ParentCategory', {
  id: types.identifier,
  title: types.string,
  categories: types.array(Category),
});

export const ProductStruct = types.model('ProductStruct', {
  parentCategories: types.array(ParentCategory),
});
