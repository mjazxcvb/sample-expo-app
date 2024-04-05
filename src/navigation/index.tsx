import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import HomeScreen from "../screens/home";
import InfoScreen from "../screens/info";
import useTheme from "../theme";
import NavigationHeader from "./header";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type RootStackList = {
  Home: undefined;
  Info: { id: string };
};
export type RootStackProps = NativeStackNavigationProp<RootStackList>;
const Stack = createNativeStackNavigator<RootStackList>();

export default function Navigator() {
  const { colors } = useTheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.black,
            },
            header: ({ options }) => <NavigationHeader {...options} />,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Info" component={InfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
