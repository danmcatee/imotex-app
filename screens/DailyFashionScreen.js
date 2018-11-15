import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { inject } from 'mobx-react/native';

import ProductListItem from '../components/ProductListItem';
import CategoryButton from '../components/CategoryButton';
import theme from '../constants/Theme';
import { images } from '../constants/Images';
import { NavigationService } from '../api/NavigationService';

@inject('productStore')
class DailyFashionScreen extends Component {
  static navigationOptions = {
    title: 'Daily Fashion',
  };
  state = {
    activeSections: [],
    activeSectionsSub: [],
  };
  // renderItem = ({ item }) => <ProductListItem {...item} />;
  _renderContent = section => (
    <View style={{ marginTop: 20 }}>
      <ProductListItem category={{ title: 'Alle', id: section.id }} />
      <Accordion
        activeSections={this.state.activeSectionsSub}
        sections={section.values}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeaderSub}
        renderContent={this._renderContentSub}
        onChange={activeSections =>
          this.setState({ activeSectionsSub: activeSections })
        }
        underlayColor="transparent"
      />
    </View>
  );
  _renderHeader = section => (
    <View style={styles.categoryContainer}>
      <Text style={styles.item}>{section.title}</Text>
      <Image source={images.startPageArrow} />
    </View>
  );

  _renderContentSub = section => (
    <View>
      <ProductListItem category={{ title: 'Alle', id: section.id }} />
      {section.values.map(category => (
        <ProductListItem key={category.id} category={category} />
      ))}
    </View>
  );

  _renderHeaderSub = section => (
    <View style={styles.categoryContainerSub}>
      <Text style={styles.subItem}>{section.title}</Text>
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
      <View style={styles.outer}>
        <ScrollView contentContainerStyle={styles.container}>
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
              sections={this.props.productStore.categories}
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
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
  categoryContainerSub: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subItem: {
    paddingVertical: 5,
    fontWeight: '500',
    fontSize: 14,
  },
  subCat: {
    fontSize: 12,
  },
});

export default DailyFashionScreen;
