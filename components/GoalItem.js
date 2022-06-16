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
        marginBottom: 12,
        backgroundColor: "#c2acff",
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalItemText: {
        color: "#1e085a",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
