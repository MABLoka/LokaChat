import { View, Text, ImageBackground, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import bg from "../../assets/images/BG.png";
import Message from "../components/Message"
import messages from "../../assets/data/messages.json"
import InputBox from "../components/InputBox";
import { FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params?.name) {
      navigation.setOptions({ title: route.params.name });
    }}, [route.params]);
    
  return (

    <KeyboardAvoidingView
      behavior={(Platform.OS === "ios" || Platform.OS === "android") ? "padding" : "height"}
      keyboardVerticalOffset={(Platform.OS === "ios" || Platform.OS === "android") ? 60 : 90}
      style={styles.bg}
    >

      <ImageBackground source={bg} style={styles.bg}>
          <FlatList
              data={messages}
              renderItem={({ item }) => <Message message={item} />}
              style={{ padding: 10, paddingBottom: 50 }}
              inverted
          />

          <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg:{
      flex: 1,
      width: "100%",
  },
});

export default ChatScreen;