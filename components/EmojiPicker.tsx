import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { FlatList, Image, Platform } from "react-native";

export default function EmojiPicker({ isVisible, onClose, onSelect, onCloseModal }: any) {
  const [emoji] = useState([require("../assets/images/emoji1.png"), require("../assets/images/emoji2.png"), require("../assets/images/emoji3.png"), require("../assets/images/emoji4.png"), require("../assets/images/emoji5.png"), require("../assets/images/emoji6.png")]);

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={Platform.OS === "web"}
          data={emoji}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => {
                onSelect(item);
                onCloseModal();
              }}
            >
              <Image source={item} key={index} style={styles.image} />
            </Pressable>
          )}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
