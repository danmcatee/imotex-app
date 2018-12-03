import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { productImgs, tabBarIcons } from '../constants/Images';
import { observer, inject } from 'mobx-react/native';
import List from '../components/FlatList';

@inject('productStore')
@observer
class CompanyOverview extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('company').name,
    };
  };

  state = {
    itemWidth: (Dimensions.get('window').width - 20) / 3,
  };

  componentDidMount() {
    const { width } = Dimensions.get('window');
    this.setState({ itemWidth: (width - 20) / 3 });
  }

  // renderItem = ({ item }) => {
  //   const companyId = item.id.slice(0, 3);
  //   const productPos = item.id.slice(-1);
  //   const onPress = product => {
  //     NavigationService.navigate('ProductDetail', {
  //       product,
  //       company: this.props.productStore.getCompany(companyId),
  //     });
  //   };
  //   return (
  //     <View style={{ paddingRight: 10, paddingBottom: 10 }}>
  //       <TouchableOpacity onPress={() => onPress(item)}>
  //         <Image
  //           source={productImgs[companyId][productPos]}
  //           style={[
  //             styles.image,
  //             {
  //               width: this.state.itemWidth,
  //               height: this.state.itemWidth,
  //             },
  //           ]}
  //           resizeMode="contain"
  //         />
  //         <TouchableOpacity
  //           onPress={() => item.toggleFav()}
  //           style={styles.heartContainer}
  //         >
  //           <Image
  //             source={
  //               tabBarIcons[item.isFavorite ? 'active' : 'inactive'].Favorites
  //             }
  //             style={styles.heart}
  //           />
  //         </TouchableOpacity>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
  render() {
    return (
      <List
        data={this.props.navigation.getParam('company').products}
        itemWidth={this.state.itemWidth}
        store={this.props.productStore}
      />
      //     <FlatList
      //       data={this.props.navigation.getParam('company').products}
      //       numColumns={3}
      //       horizontal={false}
      //       renderItem={this.renderItem}
      //       keyExtractor={item => item.id}
      //       // keyExtractor={item => String(item.id)}
      //     />
      //     // <ScrollView style={styles.imgContainer}>
      //     //   {this.props.productStore.companies.map(company =>
      //     //     company.favoriteProducts.map(product => (
      //     //       <Image source={productImgs.P36212} style={styles.image} />
      //     //     ))
      //     //   )}
      //     // </ScrollView>
      //   );
      //   // return (
      //   //   <ScrollView contentContainerStyle={styles.container}>
      //   //     {this.props.navigation.getParam('company').products.map(product => (
      //   //       <View style={styles.imgContainer}>
      //   //         <ProductLink
      //   //           product={product}
      //   //           onPress={() => this.handlePress(product)}
      //   //           height={null}
      //   //           width={null}
      //   //           flex={1}
      //   //           resizeMode={'cover'}
      //   //         />
      //   //       </View>
      //   //     ))}
      //   //   </ScrollView>
      //   // );
      // }
    );
  }
}

export default CompanyOverview;
