import { CurrentUser } from './CurrentUser';
import { ProductStruct } from './ProductStruct';
import { CompanyList } from './Companies';

const currentUser = CurrentUser.create();

const companyList = CompanyList.create({
  companies: [
    {
      id: '1',
      name: 'Acconda Fashion',
    },
    {
      id: '2',
      name: 'Believe Mode',
    },
    {
      id: '3',
      name: 'Chalona',
    },
    {
      id: '4',
      name: 'C. U Papaya',
    },
    {
      id: '5',
      name: 'Baykon',
    },
  ],
});

const productStruct = ProductStruct.create({
  parentCategories: [
    {
      id: '1',
      title: 'Damenmode',
      categories: [
        {
          id: '11',
          title: 'Blusen/Tuniken',
          subCategories: [],
        },
        {
          id: '12',
          title: 'Shirts/Tops',
          subCategories: [],
        },
        {
          id: '13',
          title: 'Röcke',
          subCategories: [],
        },
        {
          id: '14',
          title: 'Hosen',
          subCategories: [],
        },
        {
          id: '15',
          title: 'Jeans',
          subCategories: [],
        },
        {
          id: '16',
          title: 'Strick/Masche',
          subCategories: [],
        },
        {
          id: '17',
          title: 'Kleider',
          subCategories: [],
        },
        {
          id: '18',
          title: 'Mäntel',
          subCategories: [],
        },
        {
          id: '19',
          title: 'Leder',
          subCategories: [],
        },
        {
          id: '20',
          title: 'Cocktail/Abendmode',
          subCategories: [],
        },
        {
          id: '21',
          title: 'Brautmoden',
          subCategories: [],
        },
      ],
    },
    {
      id: '2',
      title: 'Herrenmode',
      categories: [
        {
          id: '21',
          title: 'Hemden',
          subcategories: [],
        },
        {
          id: '22',
          title: 'Hosen',
          subcategories: [],
        },
        {
          id: '23',
          title: 'Strick/Masche',
          subcategories: [],
        },
        {
          id: '24',
          title: 'Shirts',
          subcategories: [],
        },
        {
          id: '25',
          title: 'Anzüge',
          subcategories: [],
        },
        {
          id: '26',
          title: 'Sakkos',
          subcategories: [],
        },
        {
          id: '27',
          title: 'Jacken',
          subcategories: [],
        },
        {
          id: '28',
          title: 'Mäntel',
          subcategories: [],
        },
        {
          id: '29',
          title: 'Leder',
          subcategories: [],
        },
      ],
    },
    {
      id: '3',
      title: 'Kindermode',
      categories: [
        {
          id: '31',
          title: 'Mädchen 2-9',
          subcategories: [],
        },
        {
          id: '32',
          title: 'Mädchen 9-16',
          subcategories: [],
        },
        {
          id: '33',
          title: 'Jungen 2-9',
          subcategories: [],
        },
        {
          id: '34',
          title: 'Jungen 9-16',
          subcategories: [],
        },
        {
          id: '35',
          title: 'Babies 0-2',
          subcategories: [],
        },
      ],
    },
  ],
});

export const store = {
  currentUser,
  productStruct,
  companyList,
};

// TODO: Delete after development
window.MobxStore = store;
