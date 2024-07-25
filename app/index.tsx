import Button from "@/components/Button";
import React from "react";
import { View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";

const index = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [showAppOptions, setShowAppOptions] = useState(false);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result?.assets[0]?.uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };
  const onReset = () => {
    setShowAppOptions(false);
  };
  const onAddSticker = () => {
    // we will implement this later
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const onModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    <View className="flex-1 bg-green-200 items-center  justify-center">
      <View className=" pt-14">
        <Image source={selectedImage ? { uri: selectedImage } : require("@/assets/images/background-image.png")} className="w-[200px] h-[400px]" />
      </View>
      <View className="basis-1/2 items-center">
        <Button label="Choose a photo" onPress={pickImageAsync} />
        <Button
          label="Use this photo"
          onPress={() => {
            setShowAppOptions(true);
          }}
        />
      </View>
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose} onSelect={setPickedEmoji} onCloseModal={onModalClose}></EmojiPicker>
      {showAppOptions ? (
        <View className="absolute bottom-20">
          <View className=" justify-center flex-row">
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        ""
      )}
      {/* A list of emoji component will go here */}
    </View>
  );
};

export default index;
