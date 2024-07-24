import { View, Pressable, Text } from "react-native";

const Button = ({ label }: { label: string }) => {
  return (
    <View className="w-[320px] h-[68px] items-center justify-center p-1">
      <Pressable className="rounded-[10px] w-full h-full items-center justify-center bg-black" onPress={() => alert("You pressed a button.")}>
        <Text className="text-white text-base">{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
