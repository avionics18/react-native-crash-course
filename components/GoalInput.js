import { useState } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal,
    Image,
} from "react-native";

export default function GoalInput({ addGoalHandler, isVisible, hideModal }) {
    const [enteredGoalText, setEneteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEneteredGoalText(enteredText);
    }

    function onSubmitHandler() {
        addGoalHandler(enteredGoalText);
        setEneteredGoalText("");
    }

    return (
        <Modal visible={isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/favicon.png")}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your goal!"
                    value={enteredGoalText}
                    onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            color="#5e0acc"
                            title="Add Goal"
                            onPress={onSubmitHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            color="#710cf5"
                            title="Cancel"
                            onPress={hideModal}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    image: {
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "100%",
        padding: 8,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
    },
    button: {
        width: "40%",
        marginHorizontal: 8,
    },
});
