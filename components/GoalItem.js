import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ id, text, delGoalHandler }) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={() => delGoalHandler(id)}
                android_ripple={{ color: "#fff" }}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalItemText}>{text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalItemText: {
        color: "#ffffff",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});
