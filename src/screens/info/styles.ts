import { StyleSheet } from "react-native";
import useTheme from "../../theme";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: colors.accent,
      flex: 1,
    },
    name: {
      width: "60%",
      fontSize: 18,
      fontWeight: "600",
      textTransform: "uppercase",
      flexWrap: "wrap",
    },
    header: {
      padding: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    event: {
      fontSize: 16,
      fontWeight: "600",
      textTransform: "uppercase",
      textAlign: "center",
      marginTop: 20,
    },
    loading: {
      padding: 20,
      backgroundColor: colors.accent,
    },
  });
}
