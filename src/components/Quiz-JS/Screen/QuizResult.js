import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../Components/Button';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const QuizResult = ({ route }) => {
  const userRiskClass = route?.params?.userRiskClass || 'Null';
  const totalWeightage = route?.params?.totalWeightage || 0;
  const riskClassStyles = {
    Conservative: styles.conservativeType,
    Moderate: styles.moderateType,
    Aggressive: styles.aggressiveType,
  };

  const riskClassColors = {
    Conservative: '#C0FF71',
    Moderate: '#FFF6A0',
    Aggressive: '#FF8B8B',
  };


  const riskClassDescriptions = {
    Conservative: 'Conservative Investors prioritize capital preservation. They opt for low-risk assets like bonds and certificates of deposit (CDs). Their comfort lies in accepting lower returns to safeguard their principal investment.',
    Moderate: 'Moderate Investors strike a balance. They’re willing to take on some risk for higher returns. Their portfolio includes a mix of low- and medium-risk assets, such as dividend-paying stocks and equity funds. This approach aims for growth while maintaining a level of security.',
    Aggressive: 'Aggressive Investors embrace risk. They seek substantial gains and invest in high-risk assets like stocks and options. These individuals understand that their investments may experience significant fluctuations but are comfortable with this risk for the potential rewards.',
    Null: 'No risk class found.'
  };

  const navigation = useNavigation();


  return (
    <GestureHandlerRootView  style= {styles.container_outer}>
      <View style={styles.titleContainer}>
        <Text style = {styles.titleText}> RinggitSavvy</Text>
      </View>
      <View style = {styles.resultContainer}>
        <View>
          <Text style = {{color:'#B1D0E0', fontSize: 16, marginBottom: 10}}> Your result:</Text>
          <Text style = {riskClassStyles[userRiskClass] || styles.defaultType}>{userRiskClass}</Text>
          <Text style = {{color:'#FFFFFF', fontSize: 22, marginTop: 10, marginBottom: 10 }}>Risk Tolerance</Text>
        </View>

      <View style={{marginTop:10}}>
        <AnimatedCircularProgress
            size={110}
            width={15}
            rotation={0}
            fill={(totalWeightage/63)*100}
            tintColor={riskClassColors[userRiskClass] || '#FFFFFF'}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#D9D9D9">
            {
              (fill) => (
                <Text style={styles.titleText}>
                  { Math.round(fill) }
                </Text>
              )
            }
        </AnimatedCircularProgress>
      </View>

      </View>
      <View style={styles.container_inner}>
        <View style = {styles.descriptionContainer}>
          <Text style ={styles.descriptionText}>
            {riskClassDescriptions[userRiskClass] || 'Default description'}
          </Text>
          </View>
        <View style = {styles.linkingContainer}>  
        <ScrollView>
          <Text>
            Link to other pages
          </Text>
        </ScrollView>
        </View>
        <Button title="Done"></Button>
      </View>  
    </GestureHandlerRootView>
);
}

const styles = StyleSheet.create({
  container_outer: {
    backgroundColor: '#406882',
    flex: 1, 
    justifyContent: 'flex-end',
  },

  container_inner: {
    backgroundColor: '#FFFFFF',
    flex: 0.8,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'top',
  },

  titleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000000',
  },

  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  resultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#998112',
  },

  conservativeType: {
    color: '#C0FF71', 
    fontSize: 36,
    fontWeight: 'bold',
  },

  moderateType: {
    color: '#FFF6A0', 
    fontSize: 36,
    fontWeight: 'bold',
  },

  aggressiveType: {
    color: '#FF8B8B', 
    fontSize: 36,
    fontWeight: 'bold',
  },

  defaultType: {
    color: '#FFFFFF', 
    fontSize: 36,
    fontWeight: 'bold',
  },

  descriptionContainer: {
    // backgroundColor: '#387122',
    marginTop: 20,
    flex: 0.6,
    width: 300,
  },

  descriptionText: {
    color: '#000000',
    fontSize: 18,
  },

  linkingContainer: {
    // backgroundColor: '#384442',
    marginTop: 10,
    flex: 0.3,
    width: '100%',
  },
  });




export default QuizResult;