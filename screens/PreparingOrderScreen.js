import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable"
import * as Progress from 'react-native-progress'
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000)
    }, [])
    return (
        <View className="bg-white flex-1 justify-center items-center">
            <Animatable.Image
                source={require("../assets/loading.gif")}
                animation="slideInUp"
                iterationCount={1}
                className="h-96 w-96 bg-blend-multiply"
            />
            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg text-black font-bold text-center"
            >
                Waiting for the Restaurant to accept your order!
            </Animatable.Text>
            <Progress.Circle className="pt-6" size={60} indeterminate={true} color="#00CCBB" />
        </View>
    );
};

export default PreparingOrderScreen;
