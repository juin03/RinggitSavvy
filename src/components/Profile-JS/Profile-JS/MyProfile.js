import React from 'react';
import { View, Text, StyleSheet, Image, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';

const ProfileScreen = () => {
  const { user } = useUser();
  const [isNotificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);
  const handleLogout = () => {
    // Logic for handling user logout goes here
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
        <Text style={{fontWeight: 800, fontSize: 25}}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: user?.imageUrl }}
          style={styles.profilePic}
          resizeMode="cover"
        />
        <Text style={styles.fullName}>{user?.fullName || 'Your Name'}</Text>
        <Text style={styles.email}>{user?.primaryEmailAddress?.emailAddress || 'your-email@example.com'}</Text>
      </View>

      <View style={styles.settingsContainer}>
        <SettingOption icon="account-circle" title="My Account" />
        <SettingOption icon="notifications" title="Notification" isSwitch={true} switchValue={isNotificationsEnabled} onToggle={toggleNotifications} />
        <SettingOption icon="share" title="Share RinggitSavvy" />
        <SettingOption icon="help-outline" title="Help & Feedback" />
        <SettingOption icon="star-border" title="Rate Us" />
      </View>

      <TouchableOpacity style={styles.logoutContainer} onPress={handleLogout}>
        <MaterialIcons name="logout" size={24} color="#555" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      <Text style={styles.versionText}>RinggitSavvy v1.0</Text>
    </ScrollView>
  );
}

const SettingOption = ({ icon, title, isSwitch, switchValue, onToggle }) => (
  <View style={styles.settingOption}>
    <MaterialIcons name={icon} size={24} color="#555" />
    <Text style={styles.settingOptionText}>{title}</Text>
    {isSwitch && (
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={switchValue ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={onToggle}
        value={switchValue}
        style={styles.switch}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    marginBottom: 7,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  fullName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  settingsContainer: {
    paddingHorizontal: 20,
  },
  settingOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60, 
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderTopColor: '#eee',
  },
  settingOptionText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
  switch: {
    transform: [{ scaleX: .8 }, { scaleY: .8 }],
  },
  versionText: {
    textAlign: 'center',
    color: '#666',
    paddingVertical: 20,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  logoutText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
  },
});

export default ProfileScreen;
