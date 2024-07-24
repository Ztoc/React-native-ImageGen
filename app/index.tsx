import Button from "@/components/Button";
import React from "react";
import { View, Text, Image } from "react-native";

const index = () => {
  return (
    <View className="flex-1 bg-green-200 items-center  justify-center">
      <View className=" pt-14">
        <Image source={require("@/assets/images/background-image.png")} />
      </View>
      <View className="basis-1/2 items-center">
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
};

export default index;
