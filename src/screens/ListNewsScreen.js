import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Text, Header, Divider} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import NewsDummy from './NewsDummy';

const ListNewsScreen = ({navigation}) => {
  const {state} = useContext(AuthContext);
  const {user} = state;
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

      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{flex: 1, marginHorizontal: 10, marginTop: 10}}>
          {NewsDummy.map(item => (
            <TouchableOpacity
              style={styles.rowCardContainer}
              key={item.id}
              onPress={() =>
                navigation.navigate('NewsDetailScreen', {
                  id: item.id,
                })
              }>
              <View
                style={{
                  marginHorizontal: 10,
                  marginBottom: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: item.avatar}}
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 50,
                  }}
                />
                <Text style={{color: 'white', marginLeft: 10, fontSize: 15}}>
                  {item.author}
                </Text>
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.rowCardInfoContainer}>
                  <Text style={styles.rowCardText}>{item.title}</Text>
                  <Text style={styles.rowCardInfoText}>{item.description}</Text>
                </View>
                <Image source={{uri: item.image}} style={styles.rowCardImage} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

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
  filterContainer: {
    flex: 1,
    backgroundColor: '#012f47',
    elevation: 5,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButtonContainer: {
    flex: 1,
    backgroundColor: '#011e2e',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderRadius: 13,
    marginHorizontal: 5,
    paddingHorizontal: 15,
  },
  filterText: {
    color: 'white',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  hotClipTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  fireImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginTop: 4,
  },
  hotClipTitle: {
    color: 'white',
    fontFamily: 'Poppins-Black',
    fontSize: 18,
    marginLeft: 10,
  },
  hotClipMoreContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  hotClipMoreText: {
    color: 'white',
    alignSelf: 'center',
    color: '#ebebeb',
  },
  containerForCard: {
    flexDirection: 'row',
    color: 'white',
    fontSize: 16,
  },
  cardContainer: {
    width: 200,
    marginHorizontal: 5,
    marginRight: 5,
  },
  cardImage: {
    height: 100,
    width: 200,
    resizeMode: 'stretch',
    borderRadius: 15,
    marginBottom: 8,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
  },
  rowCardContainer: {
    marginBottom: 10,
    borderBottomColor: '#003854',
    borderBottomWidth: 0.5,
    height: 130,
  },
  rowCardImage: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
  },
  rowCardInfoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    height: 80,
  },
  rowCardText: {
    color: 'white',
    fontSize: 16,
  },
  rowCardInfoInContainer: {
    flexDirection: 'row',
  },
  rowCardIcon: {
    alignSelf: 'center',
  },
  rowCardInfoText: {
    color: 'white',
    fontSize: 14,
    color: '#828282',
  },
});

export default ListNewsScreen;
