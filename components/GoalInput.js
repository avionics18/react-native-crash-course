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
        if (enteredGoalText !== "") {
            addGoalHandler(enteredGoalText);
            hideModal();
            setEneteredGoalText("");
        } else {
            console.log("Please enter a valid task!!!");
        }
    }

    function onCancelHandler() {
        hideModal();
        setEneteredGoalText("");
    }

    return (
        <Modal visible={isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/images/goal.png")}
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
                            color="#f31282"
                            title="Cancel"
                            onPress={onCancelHandler}
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
        backgroundColor: "#311b6b",
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.3)",
        backgroundColor: "#cbb8fc",
        borderRadius: 6,
        color: "#120438",
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 16,
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
