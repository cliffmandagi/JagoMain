import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text, Header, Divider} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import VideoDummy from './VideoDummy';
import {WebView} from 'react-native-webview';

const NewsDetailScreen = ({route, navigation}) => {
  const {id} = route.params;

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
      <View style={{height: 220}}>
        <WebView
          style={{flex: 1}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
          source={{
            uri: `https://www.youtube.com/embed/${VideoDummy[id - 1].embed}`,
          }}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View style={styles.bodyContentContainer}>
            <Text h4 style={styles.titleColor}>
              {VideoDummy[id - 1].title}
            </Text>

            <Text style={styles.bodyText}>{VideoDummy[id - 1].date}</Text>

            <Divider style={styles.divider} />
            <Text style={styles.otherVideosText}>Video Lainnya</Text>

            <View>
              {VideoDummy.map(item => (
                <TouchableOpacity style={styles.cardContainer} key={item.id}>
                  <Image
                    source={{uri: VideoDummy[item.id - 1].image}}
                    style={styles.cardImage}
                  />
                  <View style={styles.cardInfoContainer}>
                    <Text numberOfLines={2} style={styles.cardInfoTitle}>
                      {VideoDummy[item.id - 1].title}
                    </Text>
                    <Text style={styles.cardInfoDate}>
                      {VideoDummy[item.id - 1].date}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
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
    marginTop: 20,
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
    marginHorizontal: 15,
    marginBottom: 20,
  },
  bodyContentContainer: {
    flex: 1,
    marginTop: 15,
  },
  titleColor: {
    color: 'white',
  },
  contentImage: {
    height: 180,
    marginTop: 20,
  },
  bodyText: {
    color: '#828282',
    marginTop: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
  },
  cardImage: {
    height: 70,
    width: 140,
    resizeMode: 'stretch',
    borderRadius: 15,
  },
  cardInfoContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  cardInfoTitle: {
    color: 'white',
    fontSize: 16,
  },
  cardInfoDate: {
    color: '#828282',
    fontSize: 14,
  },
  otherVideosText: {
    color: 'white',
    marginBottom: 10,
    fontSize: 16,
  },
});
