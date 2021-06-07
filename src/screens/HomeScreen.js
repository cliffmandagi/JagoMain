import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Text, Header, Divider} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import NewsDummy from './NewsDummy';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  const {state, signout} = useContext(AuthContext);
  const {user} = state;
  const category = [
    'Mobile Legends: Bang Bang',
    'PUBG Mobile',
    'Free Fire',
    'Others',
  ];

  return (
    <View style={styles.container}>
      <Header
        placement="left"
        centerComponent={{
          text: 'Jagomain',
          style: styles.headerText,
        }}
        backgroundColor="#003049"
        containerStyle={styles.headerContainerStyle}
        rightComponent={
          <TouchableOpacity>
            <Icon
              name="add"
              size={28}
              color="white"
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        }
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ------Filter Area----- */}
        <View style={styles.filterContainer}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <TouchableOpacity style={styles.filterButtonContainer}>
              <Text style={styles.filterText}>All</Text>
            </TouchableOpacity>
            {category.map(item => (
              <TouchableOpacity key={item} style={styles.filterButtonContainer}>
                <Text style={styles.filterText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {/* ------End Filter Area----- */}

        <View style={styles.contentContainer}>
          {/* ------Hot Clip Area----- */}
          <View style={styles.hotClipTitleContainer}>
            <Image
              source={require('../../assets/fire.png')}
              style={styles.fireImage}
            />
            <Text style={styles.hotClipTitle}>VIDEO TRENDING</Text>
            <TouchableOpacity style={styles.hotClipMoreContainer}>
              <Text style={styles.hotClipMoreText}>More</Text>
              <Icon
                name="chevron-forward"
                size={26}
                color="#ebebeb"
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
          </View>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.containerForCard}>
              {NewsDummy.map(item => (
                <TouchableOpacity style={styles.cardContainer} key={item.id}>
                  <Image source={{uri: item.image}} style={styles.cardImage} />
                  <Text style={styles.cardText}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          {/* ------End Hot Clip Area----- */}

          <Divider style={styles.divider} />

          {/* ------Clip Area----- */}
          <View style={{flex: 1}}>
            {NewsDummy.map(item => (
              <TouchableOpacity style={styles.rowCardContainer} key={item.id}>
                <Image source={{uri: item.image}} style={styles.rowCardImage} />
                <View style={styles.rowCardInfoContainer}>
                  <Text style={styles.rowCardText}>{item.title}</Text>
                  <View style={styles.rowCardInfoInContainer}>
                    <Icon
                      name="calendar-outline"
                      size={16}
                      color="#828282"
                      style={styles.rowCardIcon}
                    />
                    <Text style={styles.rowCardInfoText}>{item.date}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          {/* ------End Clip Area----- */}

          <Divider style={styles.divider} />

          {/* ------Latest News Area----- */}
          <View style={styles.hotClipTitleContainer}>
            <Image
              source={require('../../assets/tv.png')}
              style={styles.fireImage}
            />
            <Text style={styles.hotClipTitle}>BERITA TERBARU</Text>
            <TouchableOpacity
              style={styles.hotClipMoreContainer}
              onPress={() => navigation.navigate('ListNewsScreen')}>
              <Text style={styles.hotClipMoreText}>More</Text>
              <Icon
                name="chevron-forward"
                size={26}
                color="#ebebeb"
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
          </View>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.containerForCard}>
              {NewsDummy.map(item => (
                <TouchableOpacity style={styles.cardContainer} key={item.id} onPress={() => navigation.navigate('NewsDetailScreen', {
                  id: item.id
                })}>
                  <Image source={{uri: item.image}} style={styles.cardImage} />
                  <Text style={styles.cardText}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          {/* ------End Latest News Area----- */}

          <Divider style={styles.divider} />

          {/* ------News Area----- */}
          <View style={{flex: 1}}>
            {NewsDummy.map(item => (
              <TouchableOpacity style={styles.rowCardContainer} key={item.id} onPress={() => navigation.navigate('NewsDetailScreen', {
                id: item.id
              })}>
                <Image source={{uri: item.image}} style={styles.rowCardImage} />
                <View style={styles.rowCardInfoContainer}>
                  <Text style={styles.rowCardText}>{item.title}</Text>
                  <View style={styles.rowCardInfoInContainer}>
                    <Icon
                      name="calendar-outline"
                      size={16}
                      color="#828282"
                      style={styles.rowCardIcon}
                    />
                    <Text style={styles.rowCardInfoText}>{item.date}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          {/* ------End News Area----- */}
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
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  rowCardImage: {
    height: 80,
    width: 120,
    resizeMode: 'stretch',
    borderRadius: 15,
  },
  rowCardInfoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
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
    marginLeft: 5,
  },
});

export default HomeScreen;
