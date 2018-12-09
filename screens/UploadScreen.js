import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Button,
  TextInput,
  Modal,
  SafeAreaView,
} from 'react-native';
import moment from 'moment';
import 'moment/locale/de';
import RNPickerSelect from 'react-native-picker-select';
import { inject } from 'mobx-react/native';
import { ImagePicker, Permissions } from 'expo';
import { HeaderBackButton } from 'react-navigation';

import UploadModal from '../components/UploadModal';
import CategoryPicker from '../components/CategoryPicker';
import ColorPicker from '../components/ColorPicker';
import SizePicker from '../components/SizePicker';
import { images } from '../constants/Images';
import Theme from '../constants/Theme';
import { NavigationService } from '../api/NavigationService';
import { womenPants } from '../assets/data/sizes';

const { width, height } = Dimensions.get('window');
@inject('productStore')
class UploadScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Dong Fang',
      headerLeft: (
        <HeaderBackButton
          tintColor={Theme.colors.red}
          onPress={() => navigation.navigate('AdminHome')}
        />
      ),
    };
  };
  state = {
    companyId: '365',
    img1: null,
    img2: null,
    img3: null,
    img4: null,
    img5: null,
    collection: '',
    colorSection: true,
    sizeSection: true,
    segment: '',
    category: '',
    product: '',
    colors: {
      black: true,
      red: false,
      blue: false,
      orange: false,
      pink: false,
      nature: false,
      white: false,
      grey: false,
      green: false,
      yellow: false,
      brown: false,
      jeans: false,
    },
    name: '',
    desc: '',
    sizes: {
      '0': true,
      '1': false,
      '2': false,
      '3': false,
      '4': false,
      '5': false,
      '6': false,
      '7': false,
      '8': false,
      '9': false,
      '10': false,
      '11': false,
      '12': false,
      '13': false,
      '14': false,
      '15': false,
    },
    modalVisible: false,
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  _pickImage1 = async () => {
    const perms = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    console.log(perms);
    // const status1 = await Permissions.askAsync(Permissions.CAMERA_ROLL).status;
    // const status2 = await Permissions.askAsync(Permissions.CAMERA).status;
    if (perms.status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: 'Images',
        aspect: [1, 1],
      });

      console.log(result);

      if (!result.cancelled) {
        this.setState({ img1: result.uri });
      }
    } else {
      console.log('No Permission');
    }
  };

  _pickImage2 = async () => {
    const perms = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    console.log(perms);
    // const status1 = await Permissions.askAsync(Permissions.CAMERA_ROLL).status;
    // const status2 = await Permissions.askAsync(Permissions.CAMERA).status;
    if (perms.status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: 'Images',
        aspect: [1, 1],
      });

      console.log(result);

      if (!result.cancelled) {
        this.setState({ img2: result.uri });
      }
    } else {
      console.log('No Permission');
    }
  };

  _pickImage3 = async () => {
    const perms = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    console.log(perms);
    // const status1 = await Permissions.askAsync(Permissions.CAMERA_ROLL).status;
    // const status2 = await Permissions.askAsync(Permissions.CAMERA).status;
    if (perms.status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: 'Images',
        aspect: [1, 1],
      });

      console.log(result);

      if (!result.cancelled) {
        this.setState({ img3: result.uri });
      }
    } else {
      console.log('No Permission');
    }
  };

  _pickImage4 = async () => {
    const perms = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    console.log(perms);
    // const status1 = await Permissions.askAsync(Permissions.CAMERA_ROLL).status;
    // const status2 = await Permissions.askAsync(Permissions.CAMERA).status;
    if (perms.status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: 'Images',
        aspect: [1, 1],
      });

      console.log(result);

      if (!result.cancelled) {
        this.setState({ img4: result.uri });
      }
    } else {
      console.log('No Permission');
    }
  };

  _pickImage5 = async () => {
    const perms = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    console.log(perms);
    // const status1 = await Permissions.askAsync(Permissions.CAMERA_ROLL).status;
    // const status2 = await Permissions.askAsync(Permissions.CAMERA).status;
    if (perms.status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: 'Images',
        aspect: [1, 1],
      });

      console.log(result);

      if (!result.cancelled) {
        this.setState({ img5: result.uri });
      }
    } else {
      console.log('No Permission');
    }
  };

  _handleAdd = () => {
    const company = this.props.productStore.companies.find(
      el => el.id === this.state.companyId
    );

    moment.locale('de');

    const product = {
      id: company.id + (company.products.length + 1),
      name: this.state.name,
      desc: this.state.desc,
      images: [
        this.state.img1,
        this.state.img2,
        this.state.img3,
        this.state.img4,
        this.state.img5,
      ].filter(el => el != null),
      isFavorite: false,
      // sizes: this.state.sizes,
      categories: [this.state.segment, this.state.category, this.state.product],
      created: moment().format('L'),
      due: moment().add(7, 'd'),
    };

    console.log(product);

    company.addProduct(product);

    this.setState({
      product: '',
      category: '',
      segment: '',
      collection: '',
      img1: '',
      img2: '',
      img3: '',
      img4: '',
      img5: '',
      name: '',
      desc: '',
      modalVisible: false,
    });

    NavigationService.navigate('AdminHome');
  };

  selectColor = color => {
    this.setState({
      colors: { ...this.state.colors, [color]: !this.state.colors[color] },
    });
  };

  selectSize = index => {
    const newState = this.state.sizes;
    newState[index] = !newState[index];
    this.setState({
      sizes: newState,
    });
  };
  render() {
    const { companyId } = this.state;
    const company = this.props.productStore.getCompany(companyId);
    const { categories } = this.props.productStore;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <UploadModal
            modalVisible={this.state.modalVisible}
            setModalVisible={this.setModalVisible}
            width={width}
            segment={this.state.segment}
            getCategoryName={this.props.productStore.getCategoryName}
            getCategory={this.props.productStore.getCategory}
            category={this.state.category}
            product={this.state.product}
            collection={this.state.collection}
            imgs={[
              this.state.img1,
              this.state.img2,
              this.state.img3,
              this.state.img4,
            ]}
            name={this.state.name}
            desc={this.state.desc}
            add={this._handleAdd}
          />
        </Modal>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.container}
        >
          <TouchableOpacity onPress={() => this.setModalVisible(true)}>
            <Text>Vorschau</Text>
          </TouchableOpacity>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <View style={{ width: width / 2 - 10 }}>
              {!!this.state.img1 && (
                // <View style={styles.imgUpload}>
                <TouchableOpacity onPress={this._pickImage1}>
                  <Image
                    source={{ uri: this.state.img1 }}
                    style={{
                      borderWidth: 2,
                      borderColor: Theme.colors.red,
                      width: width / 2 - 10,
                      height: width / 2 - 10,
                      borderRadius: 3,
                    }}
                  />
                </TouchableOpacity>
                // </View>
              )}
              {!this.state.img1 && (
                <TouchableOpacity onPress={this._pickImage1}>
                  <View
                    style={{
                      borderWidth: 2,
                      borderColor: Theme.colors.red,
                      backgroundColor: Theme.colors.darkGrey,
                      borderRadius: 3,
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: width / 2 - 10,
                    }}
                  >
                    <Image source={images.camera} />
                  </View>
                </TouchableOpacity>
              )}
            </View>
            <View style={{ width: width / 2 - 10 }}>
              <View style={styles.imgContainer}>
                {!!this.state.img2 && (
                  // <View style={styles.imgUpload}>
                  <TouchableOpacity onPress={this._pickImage2}>
                    <Image
                      source={{ uri: this.state.img2 }}
                      style={styles.uploadedImg}
                    />
                  </TouchableOpacity>
                  // </View>
                )}
                {!this.state.img2 && (
                  <TouchableOpacity onPress={this._pickImage2}>
                    <View style={styles.imgUpload}>
                      <Image source={images.camera} />
                    </View>
                  </TouchableOpacity>
                )}
                {!!this.state.img3 && (
                  // <View style={styles.imgUpload}>
                  <TouchableOpacity onPress={this._pickImage3}>
                    <Image
                      source={{ uri: this.state.img3 }}
                      style={styles.uploadedImg}
                    />
                  </TouchableOpacity>
                  // </View>
                )}
                {!this.state.img3 && (
                  <TouchableOpacity onPress={this._pickImage3}>
                    <View style={styles.imgUpload}>
                      <Image source={images.camera} />
                    </View>
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.imgContainer}>
                {!!this.state.img4 && (
                  // <View style={styles.imgUpload}>
                  <TouchableOpacity onPress={this._pickImage4}>
                    <Image
                      source={{ uri: this.state.img4 }}
                      style={styles.uploadedImg}
                    />
                  </TouchableOpacity>
                  // </View>
                )}
                {!this.state.img4 && (
                  <TouchableOpacity onPress={this._pickImage4}>
                    <View style={styles.imgUpload}>
                      <Image source={images.camera} />
                    </View>
                  </TouchableOpacity>
                )}
                {!!this.state.img5 && (
                  // <View style={styles.imgUpload}>
                  <TouchableOpacity onPress={this._pickImage5}>
                    <Image
                      source={{ uri: this.state.img5 }}
                      style={styles.uploadedImg}
                    />
                  </TouchableOpacity>
                  // </View>
                )}
                {!this.state.img5 && (
                  <TouchableOpacity onPress={this._pickImage5}>
                    <View style={styles.imgUpload}>
                      <Image source={images.camera} />
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>

          <Text style={{ color: Theme.colors.darkGrey, marginTop: 5 }}>
            * Das erste Bild wird als Ihr Hauptbild genutzt
          </Text>
          <View style={styles.ruler} />
          <View>
            <Text style={styles.heading}>Artikel</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => this.setState({ name: text })}
              value={this.state.name}
            />
          </View>
          <View>
            <Text style={styles.heading}>Beschreibung</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={[styles.input, { height: 100 }]}
              onChangeText={text => this.setState({ desc: text })}
              value={this.state.desc}
            />
          </View>

          <CategoryPicker
            title="Kollektion"
            required
            items={company.collections.map(collection => {
              const obj = {};
              obj.key = collection;
              obj.value = collection;
              obj.label = collection;
              return obj;
            })}
            label="Wählen Sie Ihre Kollektion"
            onValueChange={value => {
              this.setState({
                collection: value,
              });
            }}
            value={this.state.collection}
          />
          <View style={styles.segmentSection}>
            <CategoryPicker
              title="Produktsegment"
              required
              items={this.props.productStore.getCategoryPickerObject()}
              label="Wählen Sie Ihr Produktsegment"
              value={this.state.segment}
              onValueChange={value => {
                this.setState({
                  segment: value,
                  category: '',
                  product: '',
                });
              }}
            />
          </View>
          {!!this.state.segment && (
            <View style={styles.segmentSection}>
              <CategoryPicker
                title="Produktkategorie"
                required
                items={this.props.productStore.getSecondCategoryPickerObject(
                  this.state.segment
                )}
                label="Wählen Sie Ihre Produktkategorie"
                value={this.state.category}
                onValueChange={value => {
                  this.setState({
                    category: value,
                    product: '',
                  });
                }}
              />
            </View>
          )}
          {!!this.state.category && (
            <View style={styles.segmentSection}>
              <CategoryPicker
                title="Produkt"
                required
                items={this.props.productStore.getThirdCategoryPickerObject(
                  this.state.segment,
                  this.state.category
                )}
                value={this.state.product}
                label="Wählen Sie Ihr Produkt"
                onValueChange={value => {
                  this.setState({
                    product: value,
                  });
                }}
              />
            </View>
          )}

          <ColorPicker
            onPress={() =>
              this.setState({ colorSection: !this.state.colorSection })
            }
            required
            colorSection={this.state.colorSection}
            colors={this.state.colors}
            selectColor={this.selectColor}
          />
          <SizePicker
            onPress={() =>
              this.setState({ sizeSection: !this.state.sizeSection })
            }
            required
            sizeSection={this.state.sizeSection}
            sizes={this.state.sizes}
            selectSize={this.selectSize}
          />
          {!!this.state.product && !!this.state.img1 && this.state.collection && (
            <View style={{ marginTop: 10 }}>
              <Button
                title="Hinzufügen"
                onPress={() => this.setModalVisible(true)}
                color="#A61B29"
              />
            </View>
          )}
        </ScrollView>
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
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  imgUpload: {
    width: width / 4 - 10,
    height: width / 4 - 10,
    backgroundColor: Theme.colors.darkGrey,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadedImg: {
    width: width / 4 - 10,
    height: width / 4 - 10,
    borderRadius: 3,
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  ruler: {
    borderBottomWidth: 0.2,
    borderBottomColor: Theme.colors.midGrey,
    marginVertical: 20,
  },
  heading: {
    fontWeight: '700',
    fontSize: 16,
  },
  collectionContainer: {
    marginTop: 10,
  },
  segmentSection: {
    marginTop: 20,
  },
  input: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
    marginTop: 10,
    marginBottom: 20,
  },
});

export default UploadScreen;
