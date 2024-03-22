import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

export default function BusinessListItem({ business, booking }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push('business-detail', {
        business: business
      })}
    >
      <Image
        source={{ uri: business?.images[0]?.url }}
        style={styles.image}
      />
      <View style={styles.subContaner}>
        <Text style={{
          fontFamily: 'outfit',
          color: Colors.GRAY,
          fontSize: 15
        }}>
          {business.contactPerson}
        </Text>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 19 }}>
          {business.name}
        </Text>

        {!booking?.id ? (
          <View style={styles.addressContainer}>
            <Ionicons name="location-sharp" size={20}
                color={Colors.PRIMARY} />

            <Text style={{
              fontFamily: 'outfit',
              color: Colors.GRAY,
              fontSize: 16,
              width: 200
            }}>
              {business.address}
            </Text>
          </View>
        ) : (
          <Text style={[styles.bookingStatus, {
            backgroundColor: booking.bookingStatus === 'Completed' ? Colors.GREEN :
              booking.bookingStatus === 'Canceled' ? Colors.RED :
                Colors.PRIMARY_LIGHT
          }]}>
            {booking.bookingStatus}
          </Text>
        )}

        {booking?.id &&
          <Text style={{
            fontFamily: 'outfit',
            color: Colors.GRAY,
            fontSize: 16
          }}>
            <AntDesign name="calendar" size={24}
              color={Colors.PRIMARY} style={{ marginRight: 15 }} />
            {booking.date} at {booking.time}
          </Text>
        }
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  subContaner: {
    display: 'flex',
    gap: 8
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15
  },
  addressContainer: {
    width: 200, // Adjust the width as needed
    display: 'flex',
    flexDirection: 'row',
  },
  bookingStatus: {
    padding: 5,
    borderRadius: 5,
    fontSize: 14,
    alignSelf: 'flex-start'
  }
})
