import { Text, View, TextInput, Image, Pressable, ScrollView } from 'react-native';
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ProductRootStackParams, ProductScreenEnum } from './ProductRootTabParams';
import { styles } from '../css/Explorecss';
type ExploreProp =
  BottomTabNavigationProp<ProductRootStackParams, ProductScreenEnum.Explore>;

const Explore = (): React.JSX.Element => {
  return (
    <View style={styles.body}>
      <View style={styles.contaiTxt}>
        <Image source={require('../../media/vitri.png')} />
        <Text style={styles.txtLungangen}>Categories</Text>
      </View>
      <View>
        <TextInput
          placeholder='          Search'
          style={styles.input} >
        </TextInput>
        <Image style={styles.imgserch} source={require('../../media/search.png')} />
      </View>
      <ScrollView style={styles.scrolView} horizontal={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.contaiscrol}>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon}>
              <Image source={require('../../media/chumnho.png')} />
            </View>
            <Text >Fruits</Text>
          </View>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon2}>
              <Image source={require('../../media/bi.png')} />
            </View>
            <Text >Vegtables</Text>
          </View>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon3}>
              <Image source={require('../../media/bittet.png')} />
            </View>
            <Text >Meat</Text>
          </View>
        </View>
        <View style={styles.contaiscrol}>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon4}>
              <Image source={require('../../media/fish.png')} />
            </View>
            <Text >Fish</Text>
          </View>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon5}>
              <Image source={require('../../media/Shrimp.png')} />
            </View>
            <Text >Sea food</Text>
          </View>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon6}>
              <Image source={require('../../media/juce.png')} />
            </View>
            <Text >Juice</Text>
          </View>
        </View>
        <View style={styles.contaiscrol}>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon7}>
              <Image source={require('../../media/ruu.png')} />
            </View>
            <Text >water</Text>
          </View>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon8}>
              <Image source={require('../../media/cream.png')} />
            </View>
            <Text >Ice cream</Text>
          </View>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon9}>
              <Image source={require('../../media/book.png')} />
            </View>
            <Text >Book</Text>
          </View>
        </View>
        <View style={styles.contaiscrol}>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon10}>
              <Image source={require('../../media/Wash.png')} />
            </View>
            <Text >Wash</Text>
          </View>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon}>
              <Image source={require('../../media/bi.png')} />
            </View>
            <Text >Vegtables</Text>
          </View>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon}>
              <Image source={require('../../media/bittet.png')} />
            </View>
            <Text >Meat</Text>
          </View>
        </View>
        <View style={styles.contaiscrol}>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon}>
              <Image source={require('../../media/chumnho.png')} />
            </View>
            <Text >Fruits</Text>
          </View>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon}>
              <Image source={require('../../media/bi.png')} />
            </View>
            <Text >Vegtables</Text>
          </View>
          <View style={styles.contaiicon}>
            <View style={styles.imgicon}>
              <Image source={require('../../media/bittet.png')} />
            </View>
            <Text >Meat</Text>
          </View>
        </View>
       

        {/* <View style={styles.contaiicon}>
            <View style={styles.imgicon}>
              <Image source={require('../../media/fish.png')} />
            </View>
            <Text >Fish</Text>
          </View> */}
      </ScrollView>
    </View>
  )
}

export default Explore