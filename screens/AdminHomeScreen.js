import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { inject, observer } from 'mobx-react/native';

import { NavigationService } from '../api/NavigationService';
import theme from '../constants/Theme';
import { images } from '../constants/Images';
import Theme from '../constants/Theme';

@inject('productStore')
@observer
class AdminHomeScreen extends Component {
  state = {
    companyId: '365',
  };
  render() {
    const { companyId } = this.state;
    const company = this.props.productStore.getCompany(companyId);
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 20 }}>
          Willkommen {company.contactPerson},
        </Text>
        <Text>Aktuell haben Sie {company.productCount()} Produkte online</Text>
        <Text style={{ marginBottom: 20 }}>und 0 ungelesene Nachrichten.</Text>
        <Text>Wir haben 3 Artikel zu Ihrer &Uuml;bersicht gefunden.</Text>
        <TouchableOpacity
          style={styles.overview}
          onPress={() => NavigationService.navigate('AdminOverview')}
        >
          <Text style={styles.overviewHeading}>Produkt&uuml;bersicht</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: 10 }}>{company.productCount()}/30</Text>
            <Image source={images.startPageArrow} />
          </View>
        </TouchableOpacity>
        <View style={styles.archiveContainer}>
          <Text style={styles.archiveHeading}>&Uuml;BERSICHT</Text>
          <View style={styles.archiveMessage}>
            <Text>Am 02.08.2018 werden 3 Bilder gel&ouml;scht</Text>
          </View>
          <View style={styles.archiveMessage}>
            <Text>Am 10.08.2018 werden 9 Bilder gel&ouml;scht</Text>
          </View>
          <View style={styles.archiveMessage}>
            <Text>Am 15.08.2018 werden 2 Bilder gel&ouml;scht</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  overview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    paddingBottom: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: Theme.colors.midGrey,
  },
  overviewHeading: {
    fontWeight: '700',
  },
  archiveContainer: {
    marginTop: 50,
  },
  archiveHeading: {
    paddingBottom: 20,
    fontSize: 12,
    color: Theme.colors.darkGrey,
  },
  archiveMessage: {
    borderBottomWidth: 0.2,
    borderBottomColor: Theme.colors.midGrey,
    paddingBottom: 5,
    marginBottom: 10,
  },
});

export default AdminHomeScreen;
