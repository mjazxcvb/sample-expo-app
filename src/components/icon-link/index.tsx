import {
  Image,
  ImageSourcePropType,
  Linking,
  TouchableOpacity,
} from "react-native";

export default function IconLink({
  url,
  image,
}: {
  url: string;
  image: ImageSourcePropType;
}) {
  const openLink = async (url: string) => {
    if (await Linking.canOpenURL(url)) {
      Linking.openURL(url);
    }
  };

  return (
    <TouchableOpacity onPress={() => openLink(url)}>
      <Image
        resizeMode="cover"
        height={20}
        resizeMethod="scale"
        source={image}
      />
    </TouchableOpacity>
  );
}
