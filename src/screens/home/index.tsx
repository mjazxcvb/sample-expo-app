import { StatusBar } from "expo-status-bar";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import useTheme from "../../theme";
import { useState } from "react";
import useStyles from "./styles";
import useApiService from "../../service/api";
import Attractions from "../../components/attractions";
const _ = require("lodash");

export default function HomeScreen() {
  const { colors } = useTheme();
  const [query, setQuery] = useState<string>("");
  const [attr, setAttractions] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const styles = useStyles();
  const apiService = useApiService();

  const fetchData = async (page: number, isReset: boolean = false) => {
    if (!query) return;
    setIsLoading(isReset);

    const search = await apiService.search(query, page);
    if (search) {
      setIsLoading(false);
      const searchAttr = search._embedded?.attractions;
      const total = search.page.totalElements;
      const searchPage = search.page.number;
      
      const allAttractions = attr?.concat(searchAttr)
      const uniqueEvents = _.uniqBy(allAttractions, "id");
      setAttractions(isReset ? searchAttr : uniqueEvents);
      setTotalCount(total);
      setCurrentPage(searchPage);
    }
  };


  const onSearch = async (page: number) => {
    fetchData(page, true);
  };

  if (isLoading) {
    return (
      <View style={{ paddingTop: 30 }}>
        <ActivityIndicator size={"large"} color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={colors.primary} />
      <View style={styles.search}>
        <Image
          source={require("../../../assets/brand/search.png")}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={(e) => setQuery(e)}
        />
        <TouchableOpacity style={styles.btn} onPress={() => onSearch(1)}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {attr && Object.keys(attr).length ? (
        <View>
          <Text style={styles.header}>Found: {totalCount}</Text>
          <FlatList
            data={attr}
            onEndReached={() => fetchData(currentPage + 1)}
            renderItem={({ item }) => {
              return (
                <Attractions
                  id={item?.id}
                  attrName={item?.name}
                  imageSrcUrl={item?.images ? item.images[0].url : null}
                />
              );
            }}
          />
        </View>
      ) : (
        <></>
      )}

      {query && !attr && (
        <View style={styles.notFoundContainer}>
          <Image
            source={require("../../../assets/brand/sad.png")}
            width={100}
            height={100}
            resizeMode="contain"
          />
          <Text style={styles.notFoundHeader}>No Results Found</Text>
        </View>
      )}
    </View>
  );
}
