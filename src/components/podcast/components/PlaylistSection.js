import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';

const PlaylistSection = ({SectionTitleText, ButtonText}) => {
    return (
        <View style = {styles.PlaylistTopContainer}>
          <Text style = {styles.PlaylistTitle}>{SectionTitleText}</Text>
          <TouchableOpacity style={styles.Playbutton}>
            <Text style ={{color: '#FFFFFF'}}>{ButtonText}</Text>
          </TouchableOpacity>
        </View>
    );
}

export default PlaylistSection;

const styles = StyleSheet.create({
    PlaylistTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 30,
      },
    
      PlaylistTopContainer: {
        // backgroundColor:'#665421',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
      },
    
      Playbutton: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        padding: 5,
        borderRadius: 30,
        width: 100,
        alignItems: 'center',
        marginRight: 10,
      },
    

});
