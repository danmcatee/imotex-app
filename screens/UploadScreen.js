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
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { inject } from 'mobx-react/native';
import { ImagePicker, Permissions } from 'expo';

import CategoryPicker from '../components/CategoryPicker';
import ColorPicker from '../components/ColorPicker';
import SizePicker from '../components/SizePicker';
import { images } from '../constants/Images';
import Theme from '../constants/Theme';

const { width, height } = Dimensions.get('window');
@inject('productStore')
class UploadScreen extends Component {
  static navigationOptions = {
    title: 'Dong Fang',
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
  };

  render() {
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
            <TouchableOpacity onPress={this._pickImage1}>
              <View style={styles.imgUpload}>
                {!this.state.img1 && <Image source={images.camera} />}
                {this.state.img1 && (
                  <Image source={{ uri: this.state.img1 }} style={styles.img} />
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._pickImage2}>
              <View style={styles.imgUpload}>
                {!this.state.img1 && <Image source={images.camera} />}
                {this.state.img2 && (
                  <Image source={{ uri: this.state.img2 }} style={styles.img} />
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._pickImage3}>
              <View style={styles.imgUpload}>
                {!this.state.img1 && <Image source={images.camera} />}
                {this.state.img3 && (
                  <Image source={{ uri: this.state.img3 }} style={styles.img} />
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._pickImage4}>
              <View style={styles.imgUpload}>
                {!this.state.img1 && <Image source={images.camera} />}
                {this.state.img4 && (
                  <Image source={{ uri: this.state.img4 }} style={styles.img} />
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.ruler} />
          <CategoryPicker
            title="Kollektionen"
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
          {this.state.product && (
            <View style={{ marginTop: 10 }}>
              <Button
                title="Hinzufügen"
                onPress={this._handleAdd}
                color="#A61B29"
              />
            </View>
          )}
          <ColorPicker
            onPress={() =>
              this.setState({ colorSection: !this.state.colorSection })
            }
            colorSection={this.state.colorSection}
          />
          <SizePicker
            onPress={() =>
              this.setState({ sizeSection: !this.state.sizeSection })
            }
            sizeSection={this.state.sizeSection}
          />
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
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
});

export default UploadScreen;
