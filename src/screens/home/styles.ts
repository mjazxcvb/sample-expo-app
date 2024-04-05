import { StyleSheet } from "react-native";
import useTheme from "../../theme";

export default function useStyles() {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: colors.accent,
    },
    search: {
      flexDirection: "row",
      padding: 10,
    },
    input: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 50,
      borderColor: colors.secondary,
    },
    btn: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: colors.primary,
      marginHorizontal: 5,
      borderRadius: 10,
      height: 40,
    },
    btnText: {
      color: colors.accent,
    },
    searchIcon: {
      width: 30,
      height: 30,
      position: "absolute",
      top: 15,
      left: 20,
    },
    header: {
      paddingHorizontal: 20,
      paddingTop: 10,
      fontSize: 18,
    },
    notFoundContainer: {
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.white,
      margin: 30,
      borderRadius: 20,
    },
    notFoundHeader: {
      paddingTop: 20,
      fontSize: 20,
      color: colors.primary
    }
  });
}
