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
import CategoryButton from '../components/CategoryButton';
import theme from '../constants/Theme';
import { images } from '../constants/Images';
import { NavigationService } from '../api/NavigationService';

@inject('categoryStore')
class DailyFashionScreen extends Component {
  static navigationOptions = {
    title: 'Daily Fashion',
  };
  state = {
    activeSections: [],
  };
  // renderItem = ({ item }) => <ProductListItem {...item} />;
  _renderContent = section => (
    <View style={{ marginTop: 20 }}>
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
        <View>
          <Text style={styles.title}>Daily Fashion</Text>
          {/* <FlatList
          data={categories}
          renderItem={this.renderItem}
          keyExtractor={item => String(item.id)}
        /> */}
          <CategoryButton label="Alle" />
          <Accordion
            activeSections={this.state.activeSections}
            sections={this.props.categoryStore.values}
            renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={activeSections => this.setState({ activeSections })}
            underlayColor="transparent"
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <CategoryButton label="Firmen" />
          <CategoryButton label="Kollektionen" nounderline />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
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
