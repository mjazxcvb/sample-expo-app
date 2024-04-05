import { View, Text, Image } from "react-native";
import useStyles from "./styles";
import { EventType } from "../../types";
import { shortenString } from "../../utils";

const Events: React.FC<{
  item: EventType;
}> = ({ item }) => {
  const styles = useStyles();
  const dates = item?.dates;
  const imageUrl = item?.images?.[0].url;
  const venues = item?._embedded?.venues?.[0];

  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        height={120}
        source={
          imageUrl ? { uri: imageUrl } : require("../../../assets/default.jpeg")
        }
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.name}>
          {shortenString(item?.name)}
        </Text>
        <Text style={styles.date}>
          {new Date(dates?.start?.localDate).toDateString()}
        </Text>
        <Text>{venues?.name}</Text>
      </View>
    </View>
  );
};

export default Events;
