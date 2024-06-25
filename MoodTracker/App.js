import "./global.css"
import { TouchableOpacity, Text, TextInput, View } from 'react-native';
import { Icon } from '@rneui/themed';
import MoodSelector from './components/MoodSelector.js'

export default function App() {
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
            <MoodSelector color="bg-red-400" text="1" iconName="sad-cry" iconType="font-awesome-5" size={33}/>
            <MoodSelector color="bg-red-200" text="2" iconName="emoticon-sad-outline" iconType="material-community"/>
            <MoodSelector color="bg-gray-200" text="3" iconName="emoticon-neutral-outline" iconType="material-community"/>
            <MoodSelector color="bg-green-200" text="4" iconName="smile" iconType="feather"/>
            <MoodSelector color="bg-green-400" text="5" iconName="smile-o" iconType="font-awesome"/>
        </View>
      </View>
      <View className="flex flex-col gap-1 items-start justify-center ml-[5vw]">
        <Text className="text-white text-xl font-medium mt-5">
          Anything noteworthy about today?
        </Text>
        <TextInput className="bg-gray-400/[0.1] w-[90vw] h-[20vh] rounded-xl border-2 border-gray-400 px-4 py-4 text-white" placeholder="Enter your thoughts here." placeholderTextColor="#909090" multiline={true} blurOnSubmit={true}>
        </TextInput>
      </View>
      <View className="flex items-center justify-center mt-8 w-full">
        <TouchableOpacity className="flex items-center justify-center bg-amber-300 rounded-2xl w-[90%] h-20">
          <Text className="font-extrabold text-black text-2xl">Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}