import "./global.css"
import { Text, View } from 'react-native';
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
            <MoodSelector color="bg-red-400" text="1" />
            <MoodSelector color="bg-red-200" text="2" />
            <MoodSelector color="bg-gray-200" text="3" />
            <MoodSelector color="bg-green-200" text="4" />
            <MoodSelector color="bg-green-400" text="5" />
        </View>
      </View>
    </View>
  );
}

