import React from 'react';
import { View } from 'react-native';

import DrawerButton from '../../components/DrawerButton';
import Theme from '../../constants/Theme';

const primaryHeader = {
  headerStyle: {
    backgroundColor: Theme.colors.headerGrey,
  },
  headerTintColor: Theme.colors.red,
  headerTitleStyle: {
    fontWeight: '500',
  },
  headerBackTitle: null,
  headerRight: (
    <View style={{ flexDirection: 'row', flex: 1 }}>
      {/* <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('Filter')}
      >
        <Image source={tabBarIcons.inactive.Filter} />
      </TouchableOpacity> */}
      <DrawerButton active />
    </View>
  ),
};

export { primaryHeader };
