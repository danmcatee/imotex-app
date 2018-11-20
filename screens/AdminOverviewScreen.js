import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { inject } from 'mobx-react/native';

import theme from '../constants/Theme';
import { productImgs } from '../constants/Images';
import { NavigationService } from '../api/NavigationService';
import AdminProduct from '../components/AdminProduct';

@inject('productStore')
class AdminOverviewScreen extends Component {
  state = {
    companyId: '365',
  };
  render() {
    const { companyId } = this.state;
    const company = this.props.productStore.getCompany(companyId);
    return (
      <View style={styles.container}>
        <View style={styles.count}>
          <Text style={styles.countText}>
            Produkte online: {company.productCount()}
          </Text>
          <Text style={styles.countText}>Produkte archiviert: 15</Text>
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
    paddingHorizontal: 10,
  },
  count: {
    alignItems: 'center',
    marginBottom: 30,
  },
  countText: {
    fontWeight: '500',
  },
  ruler: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#bfc1c6',
  },
  imgContainer: {
    marginVertical: 15,
  },
});

export default AdminOverviewScreen;
