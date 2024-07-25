import { Text, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialIconsGlyphs from "@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/MaterialIcons.json";
type MaterialIconName = keyof typeof MaterialIconsGlyphs;

export default function IconButton({ icon, label, onPress }: { icon: MaterialIconName; label: string; onPress: () => void }) {
  return (
    <Pressable className=" justify-center items-center" onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text className="mt-3 text-white">{label}</Text>
    </Pressable>
  );
}
