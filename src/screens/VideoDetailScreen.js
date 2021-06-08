import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text, Header, Divider} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import NewsDummy from './NewsDummy';
import { WebView } from 'react-native-webview';

const NewsDetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: 'VIDEO',
          style: styles.headerText,
        }}
        backgroundColor="#003049"
        containerStyle={styles.headerContainerStyle}
        leftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back"
              size={28}
              color="white"
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View style={styles.authorCardContainer}>
            {/* <Image
              source={{
                uri: 'https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png',
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
              }}
            /> */}
            <View style={styles.authorCardInfoContainer}>
              <Text style={styles.authordCardInfoName}>Name Here</Text>
              <Text style={styles.authorCardInfoDate}>Date Here</Text>
            </View>
          </View>

          <View style={styles.bodyContentContainer}>
            <Text h4 style={styles.titleColor}>
              Title Here
            </Text>

            <WebView
                style={{ flex: 1, height: 210 }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{uri: 'https://www.youtube.com/embed/e0_qYu0Imt0' }}
            />

            <Text h5 style={styles.bodyText}>
              Description Here
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002437',
  },
  divider: {
    backgroundColor: '#003854',
    marginVertical: 10,
  },
  headerContainerStyle: {
    borderBottomColor: '#002437',
    borderBottomWidth: 1.5,
  },
  headerText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  authorCardContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  authorCardInfoContainer: {
    flex: 1,
    marginLeft: 20,
  },
  authordCardInfoName: {
    color: 'white',
  },
  authorCardInfoDate: {
    color: '#828282',
  },
  bodyContentContainer: {
    flex: 1,
    marginTop: 20,
  },
  titleColor: {
    color: 'white',
  },
  contentImage: {
    height: 180,
    marginTop: 20,
  },
  bodyText: {
    color: 'white',
    marginTop: 20,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
