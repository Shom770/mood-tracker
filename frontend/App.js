import "./global.css"
import React, { useState } from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import { Icon } from '@rneui/themed';
import MoodSelector from './components/MoodSelector.js'

const sendDataToApi = async (score, notes) => {
  return fetch("http://127.0.0.1:8000/send_data/", {
    "method": "POST",
    "body": JSON.stringify({
      "score": score,
      "notes": notes
    })
  })
      .then(response => response.json())
}

export default function App() {
  const [score, setScore] = useState(1)
  const [notes, setNotes] = useState("")

  return (
    <View className="bg-[#0d1117] flex flex-col h-full w-full items-start justify-center">
      <View className="flex flex-row gap-0.5 w-full items-baseline justify-center">
        <Text className="text-amber-300 text-5xl font-black">M</Text>
        <Icon name="smile" type='font-awesome-5' size={28} color="#FCD34D"/>
        <Icon name="smile" type='font-awesome-5' size={28} color="#FCD34D"/>
        <Text className="text-amber-300 text-5xl font-black">d Tracker</Text>
      </View>
      <View className="flex flex-col gap-1 items-start justify-center ml-[5vw]">
        <Text className="text-white text-xl font-medium mt-5">
          How was your day today?
        </Text>
        <View className="flex flex-row gap-2 items-start justify-center">
            <MoodSelector key={0} color="bg-red-400" score={1} setScore={() => setScore(1)} iconName="sad-cry" iconType="font-awesome-5" size={33}/>
            <MoodSelector key={1} color="bg-red-200" score={2} setScore={() => setScore(2)} iconName="emoticon-sad-outline" iconType="material-community"/>
            <MoodSelector key={2} color="bg-gray-200" score={3} setScore={() => setScore(3)} iconName="emoticon-neutral-outline" iconType="material-community"/>
            <MoodSelector key={3} color="bg-green-200" score={4} setScore={() => setScore(4)} iconName="smile" iconType="feather"/>
            <MoodSelector key={4} color="bg-green-400" score={5} setScore={() => setScore(5)} iconName="smile-o" iconType="font-awesome"/>
        </View>
      </View>
      <View className="flex flex-col gap-1 items-start justify-center ml-[5vw]">
        <Text className="text-white text-xl font-medium mt-5">
          Anything noteworthy about today?
        </Text>
        <TextInput className="bg-gray-400/[0.1] w-[90vw] h-[20vh] rounded-xl border-2 border-gray-400 px-4 py-4 text-white" placeholder="Enter your thoughts here." placeholderTextColor="#909090" multiline={true} blurOnSubmit={true} onChangeText={(text) => setNotes(text)}>
        </TextInput>
      </View>
      <View className="flex items-center justify-center mt-8 w-full">
        <TouchableOpacity className="flex items-center justify-center bg-amber-300 rounded-2xl w-[90%] h-20" onPress={() => {
          sendDataToApi(score, notes)
          Alert.alert("Mood Submitted", "Your mood and notes have been submitted.", [{"text": "OK"}])
        }}>
          <Text className="font-extrabold text-black text-2xl">Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}