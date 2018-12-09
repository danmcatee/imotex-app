import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';
import moment from 'moment';
import 'moment/locale/de';

import theme from '../constants/Theme';
import { productImgs } from '../constants/Images';
import { NavigationService } from '../api/NavigationService';
import AdminProduct from '../components/AdminProduct';
import Theme from '../constants/Theme';

@inject('productStore')
@observer
class AdminOverviewScreen extends Component {
  static navigationOptions = {
    title: 'Produktübersicht',
  };
  state = {
    companyId: '365',
  };
  company = this.props.productStore.getCompany(this.state.companyId);

  getArchived = () => {
    const archived = [];
    this.company.products.map(product => {
      var due = moment(product.due, 'L');
      if (due.diff(moment(), 'd') < 0) {
        archived.push(product);
      }
    });
    return archived;
  };

  archivedCount = () => {
    const archived = this.getArchived();
    return archived.length;
  };

  onlineCount = () => {
    const online = [];
    this.company.products.map(product => {
      var due = moment(product.due, 'L');
      if (due.diff(moment(), 'd') >= 0) {
        online.push(product);
      }
    });
    return online.length;
  };

  dueSections = () => {
    moment.locale('de');
    const sections = {};
    this.company.products.map(product => {
      const due = moment(product.due, 'L');
      const dueFormatted = moment(due).format('L');
      const buildSectionName = `${dueFormatted} [${due
        .fromNow()
        .toUpperCase()}]`;
      if (due.diff(moment(), 'd') >= 0) {
        if (sections[buildSectionName]) {
          sections[buildSectionName].push(product);
        } else {
          sections[buildSectionName] = [];
          sections[buildSectionName].push(product);
        }
      }
    });
    return sections;
  };

  render() {
    moment.locale('de');
    return (
      <View style={styles.container}>
        <View style={styles.count}>
          <View style={styles.countContainer}>
            <Text style={styles.countText}>Produkte online:</Text>
            <Text>{this.onlineCount()}</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() =>
              NavigationService.navigate('Archived', {
                archived: this.getArchived(),
              })
            }
          >
            <View style={styles.countContainer}>
              <Text style={styles.countText}>Produkte archiviert:</Text>
              <Text>{this.archivedCount()}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.ruler} />
        <ScrollView>
          {Object.keys(this.dueSections())
            .sort()
            .map((section, index) => (
              <View
                key={section}
                style={[
                  {
                    paddingTop: 20,
                    paddingBottom: 10,
                    marginBottom: 20,
                  },
                  index !== Object.keys(this.dueSections()).length - 1
                    ? {
                        borderBottomWidth: 1,
                        borderBottomColor: Theme.colors.midGrey,
                      }
                    : null,
                ]}
              >
                <Text>{section}</Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.imgContainer}
                >
                  {this.dueSections()[section].map(product => (
                    <AdminProduct
                      key={product.id}
                      product={product}
                      deleteProduct={this.company.deleteProduct}
                    />
                  ))}
                </ScrollView>
              </View>
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
