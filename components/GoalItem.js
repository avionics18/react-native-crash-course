import { StyleSheet, View, Text } from "react-native";

function GoalItem({ text }) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalItemText}>{text}</Text>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    goalItemText: {
        color: "#ffffff",
    },
});
