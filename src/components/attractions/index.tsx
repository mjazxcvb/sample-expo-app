import { View, Text, Image, TouchableOpacity } from "react-native";
import useStyles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { RootStackProps } from "../../navigation";
import { AttractionProps } from "../../types";

const Attractions: React.FC<AttractionProps> = ({
  attrName,
  imageSrcUrl,
  id,
}) => {
  const styles = useStyles();
  const navigation = useNavigation<RootStackProps>();

  const onPress = () => {
    navigation.navigate("Info", { id });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={
            imageSrcUrl
              ? { uri: imageSrcUrl }
              : require("../../../assets/default.jpeg")
          }
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{attrName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Attractions;
