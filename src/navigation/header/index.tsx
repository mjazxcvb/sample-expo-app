import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NavigationHeader: React.FC<NativeStackNavigationOptions> = ({
  headerStyle,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[headerStyle, { paddingTop: insets.top, paddingLeft: 10 }]}>
      <Image
        style={{ width: 200, height: 50 }}
        resizeMode="contain"
        source={require("../../../assets/brand/et-logo.png")}
      />
    </View>
  );
};

export default NavigationHeader;
