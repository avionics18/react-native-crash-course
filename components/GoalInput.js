import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function GoalInput({ addGoalHandler }) {
    const [enteredGoalText, setEneteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEneteredGoalText(enteredText);
    }

    function onSubmitHandler() {
        addGoalHandler(enteredGoalText);
        setEneteredGoalText("");
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your goal!"
                value={enteredGoalText}
                onChangeText={goalInputHandler}
            />
            <Button title="Add Goal" onPress={onSubmitHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 24,
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
});
