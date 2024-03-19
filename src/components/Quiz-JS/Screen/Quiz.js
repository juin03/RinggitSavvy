import React, { useEffect, useState} from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import OptionButton from '../Components/OptionButton';
import  Button  from '../Components/Button';
import { useNavigation } from '@react-navigation/native';

const Quiz = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [optionWeightage, setOptionWeightage] = useState([]);
  const [totalWeightage, setTotalWeightage] = useState(0);
  const MaxQuestion = 20;
  const navigation = useNavigation();

  const fetchQuizData = () => {
    fetch(`http://10.0.2.2:3000/quiz?number=${questionNumber}`)
      .then(response => response.json())
      .then(data => setQuestion(data[0].quizQuestion))
      .catch(error => console.error(error));
  
    fetch(`http://10.0.2.2:3000/option?number=${questionNumber}`)
      .then(response => response.json())
      .then(data => { 
        setOptions(data.map(option => option.quizOption)); 
        setOptionWeightage(data.map(option => option.optionWeightage));
      })
      .catch(error => console.error(error));
  };
  
  useEffect(() => {
    fetchQuizData();
    console.log('\nQuestion Number',questionNumber);
    // console.log('Total Weightage', totalWeightage);
  }, [questionNumber]);

  const onPressButton = (index) => {
    setSelectedButtonIndex(index);
    // console.log(`\nOption ${index + 1} is selected`);
    // console.log(`\nOption Weightage ${optionWeightage[index]}`)
  }
  const calculateRiskClass = (totalWeightage) => {
    let riskClass;
  
    if (totalWeightage <= 24) {
      riskClass = 'Conservative';
    } else if (totalWeightage <= 47) {
      riskClass = 'Moderate';
    } else {
      riskClass = 'Aggressive';
    }
  
    return riskClass;
  };


  const onPressNext = () => {
    if (selectedButtonIndex === null) {
      alert('Please make a selection before moving to the next question.');
      return;
    }

    setTotalWeightage(prevTotalWeightage => {
      const newTotalWeightage = prevTotalWeightage + optionWeightage[selectedButtonIndex];
      console.log('Total Weightage', newTotalWeightage);
      return newTotalWeightage;
    });


    if (questionNumber < MaxQuestion) {
    setQuestionNumber(questionNumber + 1);
    setSelectedButtonIndex(null);
    // console.log('Next button is pressed');

      
    }
    else
    {
    const userRiskClass = calculateRiskClass(totalWeightage); 

    // Redirect user to the result page
    navigation.navigate('QuizResult', { userRiskClass });
    }
  }

  return (
      <View style={styles.container_outer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>RinggitSavvy</Text>
        </View>
        <View style={styles.container_inner}>
          <Text style={styles.questionNumber}>Question {questionNumber} of {MaxQuestion}</Text>
            <View style ={ styles.questionContainer}>
                <Text style= {styles.questionFont}>{question}</Text>
            </View>

            <ScrollView contentContainerStyle ={ styles.optionContainer }>
                {options.map((option, index) => (
                  <OptionButton 
                    key={index}
                    onPress={() => onPressButton(index)} 
                    title={option} 
                    style={selectedButtonIndex === index ? styles.buttonPressed : null}
                    textStyle={selectedButtonIndex === index ? styles.buttonPressedText : null}
                  />
                ))}
            </ScrollView>

            <View style ={styles.buttonContainer}>
                <Button onPress={onPressNext} title="Next" /> 
            </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container_outer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#406882'
  },

  container_inner: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 80,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'relative'
  },

  questionContainer: {
    marginTop: 30,
    // backgroundColor: '#858358',
  },

  optionContainer: { 
    marginTop: 10,
    // backgroundColor: '#567437',
    justifyContent: 'top',
  },

  questionFont: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', 
    width: 320,
  },

  buttonContainer: {
    marginBottom: 30,
  } ,

  buttonPressed: {
    backgroundColor: '#406882',
  },

  buttonPressedText: {
    color: '#FFFFFF',
  },

  titleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  questionNumber : {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  }
});

export default Quiz;