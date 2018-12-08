import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
  FlatList,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { HeaderBackButton } from 'react-navigation';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';

import { productImgs } from '../constants/Images';
import theme from '../constants/Theme';
import { images, tabBarIcons } from '../constants/Images';
import { observer } from 'mobx-react/native';

const options = ['Abbrechen', 'Telefon', 'SMS', 'E-Mail'];

@observer
class ProductDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('company').name,
      headerLeft: (
        <HeaderBackButton
          tintColor={theme.colors.red}
          onPress={() => {
            if (navigation.getParam('back') === 'SearchResult') {
              return navigation.navigate('SearchResult');
            }
            if (navigation.getParam('back') === 'FavHome') {
              return navigation.navigate('FavHome');
            }
            if (navigation.getParam('back') === 'CompanyOverview') {
              return navigation.navigate('CompanyOverview');
            }
            return navigation.navigate('SearchCompany');
          }}
        />
      ),
    };
  };
  state = {
    itemWidth: 0,
    moreImages: false,
    activeSections: [],
    cats: [
      { title: 'Informationen' },
      { title: 'Farben' },
      { title: 'Größen' },
    ],
  };

  componentDidMount() {
    const { width } = Dimensions.get('window');
    this.setState({ itemWidth: (width - 20) / 3 });
  }

  showActionSheet = () => {
    this.ActionSheet.show();
  };

  _renderContent = section => (
    <View>
      {section.title === 'Informationen' && (
        <View style={{ paddingVertical: 10 }}>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={{ fontWeight: '500' }}>Artikelbezeichnung: </Text>
            <Text style={{ fontWeight: '300' }}>Bluse</Text>
          </View>

          <Text style={{ fontWeight: '500' }}>
            Informationen des Verkäufers:{' '}
            <Text style={{ fontWeight: '300' }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod{' '}
            </Text>
          </Text>
        </View>
      )}
      {section.title === 'Farben' && (
        <View style={{ paddingVertical: 10 }}>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={{ fontWeight: '500' }}>Farben: </Text>
            <Text style={{ fontWeight: '300' }}>schwarz</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: '500' }}>Mehrere Farben: </Text>
            <Text style={{ fontWeight: '300' }}>Nein</Text>
          </View>
        </View>
      )}
      {section.title === 'Größen' && (
        <View style={{ paddingVertical: 10 }}>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={{ fontWeight: '500' }}>Größen: </Text>
            <Text style={{ fontWeight: '300' }}>S / M / L / XL</Text>
          </View>
        </View>
      )}
    </View>
  );
  _renderHeader = section => (
    <View style={styles.catContainer}>
      <Text style={styles.cat}>{section.title}</Text>
      <Image source={images.startPageArrow} />
    </View>
  );
  handleMoreImages = () => {
    this.setState({ moreImages: !this.state.moreImages });
  };

  renderItem = ({ item, index }) => (
    <View style={{ paddingRight: 10, paddingBottom: 10 }}>
      {index === 0 ? (
        <TouchableOpacity onPress={this.handleMoreImages}>
          <Image
            source={item}
            style={[
              styles.image,
              {
                width: this.state.itemWidth,
                height: this.state.itemWidth,
              },
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <Image
          source={item}
          style={[
            styles.image,
            {
              width: this.state.itemWidth,
              height: this.state.itemWidth,
            },
          ]}
          resizeMode="contain"
        />
      )}
    </View>
  );
  render() {
    const product = this.props.navigation.getParam('product');
    const company = this.props.navigation.getParam('company');
    const companyId = product.id.slice(0, 3);
    const productPos = product.id.slice(-1);
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        style={{ backgroundColor: 'white' }}
      >
        <View style={styles.imgContainer}>
          <Image
            source={productImgs[companyId][productPos]}
            style={styles.mainImg}
            resizeMode="contain"
          />
          {!this.state.moreImages && (
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleMoreImages}
            >
              <Image source={images.smallBoxes} />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => product.toggleFav()}
            style={styles.heartContainer}
          >
            <Image
              source={
                tabBarIcons[product.isFavorite ? 'active' : 'inactive']
                  .Favorites
              }
              style={styles.heart}
            />
          </TouchableOpacity>
        </View>
        {!!this.state.moreImages && (
          <FlatList
            data={[
              images.smallBoxes,
              productImgs[companyId][productPos],
              productImgs[companyId][productPos],
              productImgs[companyId][productPos],
            ]}
            numColumns={3}
            horizontal={false}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
            // keyExtractor={item => String(item.id)}
          />
          // <View style={styles.moreImagesContainer}>
          //   <Image
          //     style={[
          //       styles.moreImage,
          //       {
          //         width: this.state.itemWidth,
          //         height: this.state.itemWidth,
          //       },
          //     ]}
          //     resizeMode="contain"
          //     source={productImgs[companyId][productPos]}
          //   />
          //   <Image
          //     style={[
          //       styles.moreImage,
          //       {
          //         width: this.state.itemWidth,
          //         height: this.state.itemWidth,
          //       },
          //     ]}
          //     resizeMode="contain"
          //     source={productImgs[companyId][productPos]}
          //   />
          //   <Image
          //     style={[
          //       styles.moreImage,
          //       {
          //         width: this.state.itemWidth,
          //         height: this.state.itemWidth,
          //       },
          //     ]}
          //     resizeMode="contain"
          //     source={productImgs[companyId][productPos]}
          //   />
          // </View>
        )}
        <Text style={styles.collection}>KOLLEKTION: CHALENE</Text>

        <View style={styles.description}>
          <Accordion
            activeSections={this.state.activeSections}
            sections={this.state.cats}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={activeSections => this.setState({ activeSections })}
            underlayColor="transparent"
          />

          <TouchableOpacity
            style={styles.catContainer}
            onPress={this.showActionSheet}
          >
            <Text style={styles.cat}>Unternehmen kontaktieren</Text>
            <Image source={images.startPageArrow} />
          </TouchableOpacity>
          <ActionSheet
            ref={o => (this.ActionSheet = o)}
            title="Unternehmen kontaktieren"
            message="Wählen Sie aus verschiedenen Optionen das Unternehmen zu kontaktieren"
            options={options}
            cancelButtonIndex={0}
            onPress={index => {
              if (index === 1) Linking.openURL(`tel:067324640`);
              if (index === 2) Linking.openURL(`sms:067324640`);
              if (index === 3) Linking.openURL(`mailto:info@danmcatee.com`);
            }}
          />
          <TouchableOpacity style={styles.catContainer}>
            <Text style={styles.cat}>Unternehmensinformationen</Text>
            <Image source={images.startPageArrow} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.catContainer}>
            <Text style={styles.cat}>Pushnachrichten aktivieren</Text>
            <Image source={images.startPageArrow} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: 'white',
    flexGrow: 1,
  },
  collection: {
    paddingVertical: 5,
    fontWeight: '500',
    textAlign: 'center',
  },
  catContainer: {
    borderBottomWidth: 0.5,
    borderColor: theme.colors.midGrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  cat: {
    fontSize: 16,
  },
  imgContainer: {
    flex: 2,
    width: '95%',
    position: 'relative',
  },
  heartContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  heart: {
    height: 50,
    width: 50,
  },
  mainImg: {
    flex: 1,
    width: '100%',
    marginTop: 10,
    borderRadius: 20,
    position: 'relative',
  },
  moreImagesContainer: {
    height: 100,
    flexDirection: 'row',
    paddingRight: 10,
    marginBottom: 20,
  },
  moreImage: {},
  button: {
    position: 'absolute',
    width: 35,
    height: 35,
    backgroundColor: theme.colors.grey,
    borderRadius: 60,
    top: 30,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default ProductDetailScreen;
