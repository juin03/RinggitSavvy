import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../Components/Button';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CourseList from '../../bitesizedlearning-JS/Components/HomeScreen/CourseList';

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

  const backHome = () => {
    navigation.navigate('Home');
  };


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

      <View style={{marginTop:10, marginLeft: 20}}>
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

      <View style ={styles.container_inner}>
        <ScrollView style = {styles.descriptionContainer}>
          <Text style ={styles.descriptionText}>
            {riskClassDescriptions[userRiskClass] || 'Default description'}
          </Text>
        </ScrollView>
          <ScrollView horizontal ={true}  style = {styles.linkingContainer} showsHorizontalScrollIndicator={false}>
            <CourseList level="Basic"/>
        </ScrollView>
          <Button title="Done" onPress={backHome} style ={{alignSelf:'center'}}></Button>

      </View>

    </GestureHandlerRootView>
);
}

const styles = StyleSheet.create({
  container_outer: {
    backgroundColor: '#406882',
    flex: 1, 
  },

  container_inner: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  titleContainer: {
    height: 70,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000000',
  },

  titleText: {
    fontSize: 26,
    fontFamily: "Inter-Bold",
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  resultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#998112',
    flexDirection: 'row',
  },

  conservativeType: {
    color: '#C0FF71', 
    fontSize: 36,
    fontFamily: "Inter-SemiBold",
  },

  moderateType: {
    color: '#FFF6A0', 
    fontSize: 36,
    fontFamily: "Inter-SemiBold",
  },

  aggressiveType: {
    color: '#FF8B8B', 
    fontSize: 36,
    fontFamily: "Inter-SemiBold",
  },

  defaultType: {
    color: '#FFFFFF', 
    fontSize: 36,
    fontFamily: "Inter-SemiBold",
  },

  descriptionContainer: {
    // backgroundColor: '#387122',
    marginTop: 10,
    width: 300,
    height:'auto',
  },

  descriptionText: {
    color: '#000000',
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },

  linkingContainer: {
    // backgroundColor: '#384442', 
    alignSelf: 'center',
    width: '100%',
    height: 230,
    height: 'auto',
    marginLeft: 20,
  },
  });




export default QuizResult;