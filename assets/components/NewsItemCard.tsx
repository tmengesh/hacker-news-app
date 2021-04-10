import {
  Button,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

interface NewsItemCardProps {
  heading: string;
  url: string;
  commentsUrl: string;
}

export const NewsItemCard = ({
  heading,
  url,
  commentsUrl,
}: NewsItemCardProps) => {
  return (
    <TouchableOpacity
      onPress={async () => {
        await Linking.openURL(url);
      }}
      key={`key-${heading}-${url}`}
      style={styles.container}
    >
      <Text style={styles.headerText}>{heading}</Text>
      <TouchableOpacity
        onPress={async () => {
          await Linking.openURL(commentsUrl);
        }}
        style={{
          width: 32,
          height: 32,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
        }}
      >
        <Feather name={"message-circle"} size={30} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 24,
    margin: 16,
    borderRadius: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 4,
  },
});
