import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from 'react-native';
import { useState } from "react";


const InputBox = () => {
    const [newMessage, setNewMessage] = useState('');
    const onSend = () => {
        console.warn("Send a new message: ", newMessage);
    };
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <AntDesign name="plus" size={24} color="royalblue" style={{paddingBottom: 7}} />
                <TextInput 
                    style={styles.input}
                    value={newMessage}
                    onChangeText={setNewMessage}
                    multiline 
                />
            </View>
            
                <MaterialIcons style={styles.send} name="send" size={24} color="white" onPress={onSend} />
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5,
        alignItems: 'center',
    },
    content: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 30,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "lightgrey",
        paddingHorizontal: 15,
        marginHorizontal: 15,
        paddingVertical: 5,
        alignItems: 'flex-end',
    },
    input: {
        flexGrow: 1,
        marginHorizontal: 10,
        overflow: "hidden",
        maxHeight: 150,
    },
    send: {
        backgroundColor: "royalblue",
        padding: 7,
        borderRadius: 15,
        overflow: "hidden",
    },
});



export default InputBox;