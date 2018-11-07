import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { inject } from 'mobx-react/native';

import ProductListItem from '../components/ProductListItem';
import theme from '../constants/Theme';
import { images } from '../constants/Images';
import { NavigationService } from '../api/NavigationService';

categories = [
  {
    id: 1,
    title: 'Alle',
    content: 'Alle',
  },
  {
    id: 2,
    title: 'Damenmode',
    content: 'Damenmode',
  },
  {
    id: 3,
    title: 'Herrenmode',
    content: 'Herrenmode',
  },
  {
    id: 4,
    title: 'Kindermode',
    content: 'Kindermdoe',
  },
];

@inject('categoryRoot')
class DailyFashionScreen extends Component {
  static navigationOptions = {
    title: 'Daily Fashion',
  };
  state = {
    activeSections: [],
  };
  // renderItem = ({ item }) => <ProductListItem {...item} />;
  _renderContent = section => (
    <View>
      <ProductListItem category={{ title: 'Alle' }} />
      {section.values.map(category => (
        <ProductListItem key={category.id} category={category} />
      ))}
    </View>
  );
  _renderHeader = section => (
    <View style={styles.categoryContainer}>
      <Text style={styles.item}>{section.title}</Text>
      <Image source={images.startPageArrow} />
    </View>
  );
  // _renderSectionTitle = section => (
  //   <View>
  //     <Text>{section.content}</Text>
  //   </View>
  // );
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Daily Fashion</Text>
        {/* <FlatList
          data={categories}
          renderItem={this.renderItem}
          keyExtractor={item => String(item.id)}
        /> */}
        <TouchableOpacity
          onPress={() => NavigationService.navigate('SearchCompany')}
        >
          <View style={styles.categoryContainer}>
            <Text style={styles.item}>Alle</Text>
            <Image source={images.startPageArrow} />
          </View>
        </TouchableOpacity>
        <Accordion
          activeSections={this.state.activeSections}
          sections={this.props.categoryRoot.values}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={activeSections => this.setState({ activeSections })}
          underlayColor="transparent"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    marginVertical: 10,
    color: theme.colors.red,
  },
  categoryContainer: {
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    paddingVertical: 5,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default DailyFashionScreen;
