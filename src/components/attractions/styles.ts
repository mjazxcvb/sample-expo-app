import { StyleSheet } from "react-native";
import useTheme from "../../theme";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flexWrap: "wrap",
      borderRadius: 20,
      borderColor: colors.secondary,
      borderWidth: 1,
      margin: 20,
      backgroundColor: colors.white,
    },
    image: {
      width: "100%",
      height: 150,
      marginBottom: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    title: {
      flexWrap: "wrap",
      width: "90%",
      padding: 10,
      fontSize: 16,
    },
  });
}
