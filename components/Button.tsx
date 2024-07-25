import { View, Pressable, Text } from "react-native";

const Button = ({ label, onPress }: { label: string; onPress: () => void }) => {
  return (
    <View className="w-[320px] h-[68px] items-center justify-center p-1">
      <Pressable className="rounded-[10px] w-full h-full items-center justify-center bg-black" onPress={onPress}>
        <Text className="text-white text-base">{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
