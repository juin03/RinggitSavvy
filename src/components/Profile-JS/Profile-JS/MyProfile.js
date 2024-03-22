import React from 'react';
import {View , Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useUser} from '@clerk/clerk-expo'

const ProfileScreen = () => {
  const {user,isLoading} = useUser()
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style ={styles.headerText}>Account</Text>
        <MaterialIcons name="logout" size={28} color="black" />
      </View>

      <View style={styles.profileContainer}>
        <View>
            <Image
              source={{uri:user?.imageUrl}} 
              style={styles.profilePic}
              resizeMode="cover"
            />        
        </View>
        <View style ={styles.BioContainer}>
          <Text style ={styles.headerText}>{user?.fullName}</Text>
          <Text style={{ color: '#555555' }}>{user?.primaryEmailAddress?.emailAddress}</Text>
          <TouchableOpacity>
            <Text style ={{color: '#406882', fontWeight:'bold'}}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style ={styles.InfoCotainer}>
        <View style ={styles.joinDateContainer}>
        <Text style = {styles.greyText}>Logged in with Google</Text> 
          <Text style ={styles.greyText}>joined March 2024</Text>
        </View>
        <View>
        </View>
      </View>

      <View style ={styles.RiskContainer}>
        <TouchableOpacity>
          <Text>
           Your Risk Tolerance Asssessment Result was
          </Text>   
        </TouchableOpacity>
      </View>

      <View style={styles.SettingContainer}>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <View style ={styles.SettingsButton}>
          <TouchableOpacity style={styles.ButtonPattern }> 
              <Text style={styles.ButtonText}>Subscription</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonPattern }> 
              <Text style={styles.ButtonText}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonPattern }> 
              <Text style={styles.ButtonText}>FAQ</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

export default ProfileScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  profileContainer: {
    // backgroundColor: '#662251',
    flexDirection: 'row',
    marginLeft: 30,
  },

  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 50,
    
  },

  BioContainer: {
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
  },

  InfoCotainer: {
    // backgroundColor:'#298233',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#000000',
    borderBottomWidth: 1,
  },

  joinDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  greyText: {
    color: '#999999',
  },

  RiskContainer: {
    width: 300,
    height: 200,
    alignContent: 'center',
    justifyContent: 'center',
    // backgroundColor: '#626262',
    marginTop: 20,
    marginLeft: 40,
  },

  SettingContainer: {
    marginTop: 20,
    marginLeft: 30,
    // backgroundColor: '#888888',
    
  },

  SettingsButton: {
    // backgroundColor: '#822122',
    width:'95%',
    alignSelf: 'center',
    padding: 10,
  },

  ButtonPattern: {
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#000000',
    backgroundColor: '#F5F8FF',
    // borderWidth: 1,
  },

  ButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});