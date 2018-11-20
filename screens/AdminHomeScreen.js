import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { inject } from 'mobx-react/native';

import { NavigationService } from '../api/NavigationService';
import theme from '../constants/Theme';
import { images } from '../constants/Images';

@inject('productStore')
class AdminHomeScreen extends Component {
  state = {
    companyId: '365',
  };
  render() {
    const { companyId } = this.state;
    const company = this.props.productStore.getCompany(companyId);
    return (
      <View style={styles.container}>
        <Text>Willkommen {company.contactPerson}</Text>
        <Text>
          Aktuell haben Sie {company.productCount()} Produkte online und 0
          ungelesene Nachrichten.
        </Text>
        <Text>Wir haben 3 Artikel zu Ihrer &Uuml;bersicht gefunden.</Text>
        <TouchableOpacity
          style={styles.overview}
          onPress={() => NavigationService.navigate('AdminOverview')}
        >
          <Text>Produkt&uuml;bersicht</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>{company.productCount()}/30</Text>
            <Image source={images.startPageArrow} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  overview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default AdminHomeScreen;
