import { Text, Image, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const ContactListItem = ({ user }) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={ () => {} } style={styles.container}  >
            <Image source={{ uri: user.image }} style={styles.image} />

            <View>
                <Text style={styles.name} numberOfLines={1}>
                    {user.name}
                </Text>

                <Text style={styles.subTitle} numberOfLines={2}>
                    {user.status}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
      },
      name: {
        fontWeight: 'bold',
      },
      subTitle: {
        color: 'gray',
      },
});

export default ContactListItem;
