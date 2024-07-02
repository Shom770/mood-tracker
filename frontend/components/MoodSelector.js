import "../global.css"
import React from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon } from '@rneui/themed';

const sendScoreToApi = async (score) => {
    return fetch(`http://127.0.0.1:8000/send_score?score=${score}`)
        .then(response => response.json())
}

export default function MoodSelector(props) {
    return (
        <TouchableOpacity onPress={props.setScore}>
            <View className={`flex flex-col w-20 h-20 items-center justify-center rounded-lg ${props.color}`}>
                <Icon name={props.iconName} type={props.iconType} size={!props.size ? 36 : props.size} color="#0D1117"/>
                <Text className="text-[#0d1117] text-xl font-light">
                    {props.score}
                </Text>
            </View>
        </TouchableOpacity>
    )
}