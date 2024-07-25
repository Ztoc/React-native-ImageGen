import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, View } from "react-native";

const CircleButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <View className="w-[84px] h-[84px] rounded-full border-4 border-[#ffd33d] p-1 mx-[60px]">
      <Pressable className="flex-1 justify-center items-center rounded-full bg-white" onPress={onPress}>
        <MaterialIcons name="add" size={38} color={"#25292e"} />
      </Pressable>
    </View>
  );
};

export default CircleButton;
