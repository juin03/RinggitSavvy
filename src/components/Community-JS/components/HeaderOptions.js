import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import Colors from '../utils/Colors';
import CustomIcon from './CustomIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../utils/Images';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { useUser} from '@clerk/clerk-expo'

const HeaderOptions = ({ iconLeft, navigation, isPostScreen }) => {
  const {user,isLoading} = useUser()
  return (
    <SafeAreaView
      style={styles.safeAreaView}>
      {isPostScreen ? (
        <TouchableOpacity onPress={() => navigation.navigate(Screens.HOME)} style={styles.iconLeftTouchable}>
          <CustomIcon name={iconLeft} size={30} color={Colors.BLACK} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate(Screens.PROFILE)} style={styles.profilePictureTouchable}>
          <Image source={{uri:user?.imageUrl}} style={styles.profilePicture} />
        </TouchableOpacity>
      )}

      {isPostScreen ? (
        <Text style={styles.sharePostText}>
          Share Post
        </Text>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={Colors.BLACK}
            style={styles.searchTextInput}
          />
        </View>
      )}

      <View style={{ justifyContent: 'center' }}>
        <Menu>
          <MenuTrigger>
            {isPostScreen ? (
              <Text style={styles.postText}>Post</Text>
            ) : (
              <CustomIcon
                size={28}
                color={Colors.GRAY}
                name="reorder-three-outline"
                style={styles.reorderIcon}
              />
            )}
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={styles.menuOptionsStyle}>
            <MenuOption onSelect={() => navigation.navigate(Screens.NETWORK)} text='Network' />
            <MenuOption onSelect={() => navigation.navigate(Screens.NOTIFICATION)} text='Notification' />
            <MenuOption onSelect={() => navigation.navigate(Screens.POST)} text='Create Post' />
          </MenuOptions>
        </Menu>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    elevation: 4,
    paddingVertical: 12,
  },
  iconLeftTouchable: {
    paddingLeft: 10,
  },
  profilePictureTouchable: {
    paddingLeft: 15,
  },
  profilePicture: {
    borderRadius: 50,
    height: 35,
    width: 35,
  },
  sharePostText: {
    marginHorizontal: 5,
    fontSize: 19,
    color: Colors.BLACK,
    fontFamily: "Inter-Bold",
    flex: 1,
    textAlign: 'center',
  },
  searchTextInput: {
    height: 34,
    width: '90%',
    backgroundColor: Colors.BLUE1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: Colors.BLACK,
    marginLeft: 12,
  },
  postText: {
    color: Colors.GRAY,
    fontSize: 16,
    fontFamily: "Inter-Bold",
  },
  reorderIcon: {
    marginRight: 13,
  },
  menuOptionsStyle: {
    padding: 15,
    width: 150,
    marginTop: 40,
    marginLeft: -16,
  },
});

export default HeaderOptions;
