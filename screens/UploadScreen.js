import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { inject } from 'mobx-react/native';
import { ImagePicker, Permissions } from 'expo';
import { HeaderBackButton } from 'react-navigation';

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

  _handleAdd = () => {
    this.setState({ product: '', category: '' });
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
    console.log(this.state.img1);
    const { companyId } = this.state;
    const company = this.props.productStore.getCompany(companyId);
    const { categories } = this.props.productStore;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.container}
        >
          <View style={styles.imgContainer}>
            {this.state.img1 && (
              // <View style={styles.imgUpload}>
              <Image
                source={{ uri: this.state.img1 }}
                style={styles.uploadedImg}
              />
              // </View>
            )}
            {!this.state.img1 && (
              <TouchableOpacity onPress={this._pickImage1}>
                <View style={styles.imgUpload}>
                  <Image source={images.camera} />
                </View>
              </TouchableOpacity>
            )}
            {this.state.img2 && (
              // <View style={styles.imgUpload}>
              <Image
                source={{ uri: this.state.img2 }}
                style={styles.uploadedImg}
              />
              // </View>
            )}
            {!this.state.img2 && (
              <TouchableOpacity onPress={this._pickImage2}>
                <View style={styles.imgUpload}>
                  <Image source={images.camera} />
                </View>
              </TouchableOpacity>
            )}
            {this.state.img3 && (
              // <View style={styles.imgUpload}>
              <Image
                source={{ uri: this.state.img3 }}
                style={styles.uploadedImg}
              />
              // </View>
            )}
            {!this.state.img3 && (
              <TouchableOpacity onPress={this._pickImage3}>
                <View style={styles.imgUpload}>
                  <Image source={images.camera} />
                </View>
              </TouchableOpacity>
            )}
            {this.state.img4 && (
              // <View style={styles.imgUpload}>
              <Image
                source={{ uri: this.state.img4 }}
                style={styles.uploadedImg}
              />
              // </View>
            )}
            {!this.state.img4 && (
              <TouchableOpacity onPress={this._pickImage4}>
                <View style={styles.imgUpload}>
                  <Image source={images.camera} />
                </View>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.ruler} />
          <View>
            <Text style={styles.heading}>Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => this.setState({ name: text })}
            />
          </View>
          <View>
            <Text style={styles.heading}>Beschreibung</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={[styles.input, { height: 100 }]}
              onChangeText={text => this.setState({ desc: text })}
            />
          </View>
          <CategoryPicker
            title="Kollektion"
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
          />
          <View style={styles.segmentSection}>
            <CategoryPicker
              title="Produktsegment"
              items={this.props.productStore.getCategoryPickerObject()}
              label="Wählen Sie Ihr Produktsegment"
              onValueChange={value => {
                this.setState({
                  segment: value,
                  category: '',
                  product: '',
                });
              }}
            />
          </View>
          {this.state.segment && (
            <View style={styles.segmentSection}>
              <CategoryPicker
                title="Produktkategorie"
                items={this.props.productStore.getSecondCategoryPickerObject(
                  this.state.segment
                )}
                label="Wählen Sie Ihre Produktkategorie"
                onValueChange={value => {
                  this.setState({
                    category: value,
                    product: '',
                  });
                }}
              />
            </View>
          )}
          {this.state.category && (
            <View style={styles.segmentSection}>
              <CategoryPicker
                title="Produkt"
                items={this.props.productStore.getThirdCategoryPickerObject(
                  this.state.segment,
                  this.state.category
                )}
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
            colorSection={this.state.colorSection}
            colors={this.state.colors}
            selectColor={this.selectColor}
          />
          <SizePicker
            onPress={() =>
              this.setState({ sizeSection: !this.state.sizeSection })
            }
            sizeSection={this.state.sizeSection}
            sizes={this.state.sizes}
            selectSize={this.selectSize}
          />
          {this.state.product && (
            <View style={{ marginTop: 10 }}>
              <Button
                title="Hinzufügen"
                onPress={this._handleAdd}
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
    justifyContent: 'space-between',
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
