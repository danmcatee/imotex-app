import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { inject } from 'mobx-react/native';

import theme from '../constants/Theme';
import { productImgs } from '../constants/Images';
import { NavigationService } from '../api/NavigationService';
import AdminProduct from '../components/AdminProduct';

@inject('productStore')
class AdminOverviewScreen extends Component {
  static navigationOptions = {
    title: 'Produktübersicht',
  };
  state = {
    companyId: '365',
  };
  render() {
    const { companyId } = this.state;
    const company = this.props.productStore.getCompany(companyId);
    return (
      <View style={styles.container}>
        <View style={styles.count}>
          <View style={styles.countContainer}>
            <Text style={styles.countText}>Produkte online:</Text>
            <Text>{company.productCount()}</Text>
          </View>
          <View style={styles.countContainer}>
            <Text style={styles.countText}>Produkte archiviert:</Text>
            <Text>15</Text>
          </View>
        </View>
        <View style={styles.ruler} />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.imgContainer}
        >
          {company.products.map(product => (
            <AdminProduct key={product.id} product={product} />
          ))}
        </ScrollView>
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
  count: {
    alignItems: 'center',
    marginBottom: 20,
  },
  countContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countText: {
    fontWeight: '500',
    marginBottom: 5,
  },
  ruler: {
    borderBottomWidth: 0.2,
    borderBottomColor: theme.colors.midGrey,
  },
  imgContainer: {
    marginVertical: 15,
  },
});

export default AdminOverviewScreen;
