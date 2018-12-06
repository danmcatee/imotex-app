import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts';

import { inject } from 'mobx-react/native';
import Theme from '../constants/Theme';
import { NavigationService } from '../api/NavigationService';

@inject('productStore')
class BrandsScreen extends Component {
  state = {};

  compare = (a, b) => {
    aName = a.name.toLowerCase();
    bName = b.name.toLowerCase();
    if (aName < bName) return -1;
    if (aName > bName) return 1;
    return 0;
  };
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <SectionListContacts
          ref={s => (this.sectionList = s)}
          letterTextStyle={{ color: Theme.colors.red, fontWeight: '600' }}
          sectionListData={this.props.productStore.companies}
          initialNumToRender={this.props.productStore.companies.length}
          showsVerticalScrollIndicator={false}
          SectionListClickCallback={(item, index) => {
            console.log('---SectionListClickCallback--:', item, index);
          }}
          otherAlphabet="#"
          renderHeader={this._renderHeader}
          renderItem={this._renderItem}
        />
        {/* //   {this.props.productStore.companies.sort(this.compare).map(company => (
      //     <View
      //       style={{
      //         padding: 10,
      //         borderBottomColor: Theme.colors.midGrey,
      //         borderBottomWidth: 0.2,
      //       }}
      //     >
      //       <Text>{company.name}</Text>
      //     </View>
      //   ))} */}
      </View>
    );
  }
  _renderHeader = params => {
    return (
      <View
        style={{
          backgroundColor: Theme.colors.grey,
          paddingLeft: 10,
          paddingVertical: 10,
        }}
      >
        <Text>{params.key}</Text>
      </View>
    );
  };

  _renderItem = (item, index, section) => {
    // console.log('---custom-renderItem--', item, index, section);
    return (
      <View
        style={{
          paddingLeft: 10,
          borderBottomWidth: 1,
          borderBottomColor: Theme.colors.grey,
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            NavigationService.navigate('CompanyOverview', {
              company: item,
            })
          }
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
}

export default BrandsScreen;
