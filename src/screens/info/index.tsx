import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
} from "react-native";
import useApiService from "../../service/api";
import useStyles from "./styles";
import useTheme from "../../theme";
import IconLink from "../../components/icon-link";
import Events from "../../components/events";
import { EventType } from "../../types";

export default function InfoScreen() {
  const route = useRoute();
  const apiService = useApiService();
  const [attraction, setAttraction] = useState<any>();
  const [events, setEvents] = useState<EventType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = route.params;
  const { colors } = useTheme();

  const styles = useStyles();

  const fetchData = async (id: string) => {
    setIsLoading(true);
    const search = await apiService.get(id);
    const searchEvent = await apiService.getEvents(id);
    const events = searchEvent?._embedded?.events;

    setIsLoading(false);
    setAttraction(search);
    setEvents(events);
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={"large"} color={colors.primary} />
      </View>
    );
  }

  const imageUrl = attraction?.images?.[0].url;
  const links = attraction?.externalLinks;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View>
        <FlatList
          ListEmptyComponent={
            <View style={styles.loading}>
              <Text style={styles.name}>No Upcoming Events</Text>
            </View>
          }
          ListHeaderComponent={
            <View>
              <Image
                resizeMode="cover"
                height={250}
                source={
                  imageUrl
                    ? { uri: imageUrl }
                    : require("../../../assets/default.jpeg")
                }
              />
              <View style={styles.header}>
                <Text style={styles.name}>{attraction?.name}</Text>
                <View style={{ flexDirection: "row" }}>
                  {links?.spotify && (
                    <IconLink
                      url={links?.spotify?.[0].url}
                      image={require("../../../assets/brand/spotify.png")}
                    />
                  )}
                  {links?.twitter && (
                    <IconLink
                      url={links?.spotify?.[0].url}
                      image={require("../../../assets/brand/twitter.png")}
                    />
                  )}
                  {links?.youtube && (
                    <IconLink
                      url={links?.spotify?.[0].url}
                      image={require("../../../assets/brand/youtube.png")}
                    />
                  )}
                  {links?.homepage && (
                    <IconLink
                      url={links?.spotify?.[0].url}
                      image={require("../../../assets/brand/web.png")}
                    />
                  )}
                </View>
              </View>
            </View>
          }
          data={events}
          renderItem={(item) => {
            return <Events {...item} />;
          }}
        />
      </View>
    </View>
  );
}
