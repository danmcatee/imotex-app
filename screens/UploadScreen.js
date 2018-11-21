import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { inject } from 'mobx-react/native';

import CategoryPicker from '../components/CategoryPicker';
import ColorPicker from '../components/ColorPicker';
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
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    collection: '',
    colorSection: true,
    segment: '',
    category: '',
    product: '',
  };
  render() {
    const { companyId } = this.state;
    const company = this.props.productStore.getCompany(companyId);
    const { categories } = this.props.productStore;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imgContainer}>
          <View style={styles.imgUpload}>
            {this.state.img1 && (
              <Image source={this.state.img1} style={styles.img} />
            )}
          </View>
          <View style={styles.imgUpload}>
            {this.state.img2 && (
              <Image source={this.state.img2} style={styles.img} />
            )}
          </View>
          <View style={styles.imgUpload}>
            {this.state.img3 && (
              <Image source={this.state.img3} style={styles.img} />
            )}
          </View>
          <View style={styles.imgUpload}>
            {this.state.img4 && (
              <Image source={this.state.img4} style={styles.img} />
            )}
          </View>
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
        <ColorPicker
          onPress={() =>
            this.setState({ colorSection: !this.state.colorSection })
          }
          colorSection={this.state.colorSection}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
