import { View, Text, Image, StyleSheet } from "react-native";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
    return (
        <View style={styles.container}>
                {/* User Avatar */}
        <Image
            source={{ uri: chat.user.image }}
            style={styles.image}
        />

                {/* Content Container */}
        <View style={styles.content}>
                    {/* Row */}
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>{chat.user.name}</Text>
                    <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
                </View>
            <Text style={styles.subTitle} numberOfLines={2}>
                {chat.lastMessage.text}
            </Text>
        </View>
        </View>
    );
};

export default ChatListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
        width: '95%'
    },
    image: {
        width: 60,
        height: 60,
        aspectRatio: 1,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,
        borderBottomColor: 'lightgray',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    name: {
        flex: 1,
        fontWeight: 'bold',       
    },
    subTitle: {
        color: 'grey',
    },
  });