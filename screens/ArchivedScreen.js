import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { inject, observer } from 'mobx-react';

import { productImgs, images } from '../constants/Images';

@inject('productStore')
@observer
export default class ArchivedScreen extends React.Component {
  static navigationOptions = {
    title: 'Archiv',
  };

  state = {
    itemWidth: 0,
  };

  itemWidth = (Dimensions.get('window').width - 20) / 3;

  componentDidMount() {
    const { width } = Dimensions.get('window');
    this.setState({ itemWidth: (width - 20) / 3 });
  }

  renderItem = ({ item }) => {
    const companyId = item.id.slice(0, 3);
    const productPos = item.id.slice(-1);
    const company = this.props.productStore.getCompany(companyId);
    // const onPress = product => {
    //   NavigationService.navigate('ArchiveDetail');
    // };
    return (
      <View style={{ paddingRight: 10, paddingBottom: 10 }}>
        <Image
          source={productImgs[companyId][productPos]}
          style={[
            styles.image,
            {
              width: this.itemWidth,
              height: this.itemWidth,
            },
          ]}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={item.extend} style={styles.heartContainer}>
          <Image source={images.reactivate} style={styles.heart} />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { navigation } = this.props;
    const archived = navigation.getParam('archived', {});
    // console.log(archived);
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          data={this.props.productStore.getCompany('365').getArchived()}
          numColumns={3}
          horizontal={false}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          // extraData={this.props.productStore}

          // keyExtractor={item => String(item.id)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  image: {
    position: 'relative',
  },
  imgContainer: {},
  heart: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 30,
    width: 30,
  },
});
