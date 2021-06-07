import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text, Header, Divider} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import NewsDummy from './NewsDummy';

const NewsDetailScreen = ({route, navigation}) => {
  const {id} = route.params;

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: 'BERITA',
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
            <Image
              source={{
                uri: NewsDummy[id-1].avatar,
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
              }}
            />
            <View style={styles.authorCardInfoContainer}>
              <Text style={styles.authordCardInfoName}>{NewsDummy[id-1].author}</Text>
              <Text style={styles.authorCardInfoDate}>{NewsDummy[id-1].date}</Text>
            </View>
          </View>

          <View style={styles.bodyContentContainer}>
            <Text h4 style={styles.titleColor}>
              {NewsDummy[id-1].title}
            </Text>

            <Image
              source={{
                uri: NewsDummy[id-1].image
              }}
              style={styles.contentImage}
            />

            <Text h5 style={styles.bodyText}>
              {NewsDummy[id-1].description}
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
});
