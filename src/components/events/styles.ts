import { StyleSheet } from "react-native";
import useTheme from "../../theme";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: colors.white,
      marginVertical: 10,
    },
    image: {
      width: "40%",
    },
    details: {
      width: "40%",
      padding: 10,
    },
    name: {
      fontSize: 14,
      fontWeight: "600",
      paddingBottom: 10,
    },
    date: {
      fontSize: 14,
      fontWeight: "700",
    },
  });
}
