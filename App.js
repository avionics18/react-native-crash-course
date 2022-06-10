import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((prev) => [
            ...prev,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
    }

    function delGoalHandler(id) {
        setCourseGoals((prev) => prev.filter((goal) => goal.id !== id));
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput addGoalHandler={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    keyExtractor={(item, index) => item.id}
                    renderItem={(itemData) => (
                        <GoalItem
                            id={itemData.item.id}
                            text={itemData.item.text}
                            delGoalHandler={delGoalHandler}
                        />
                    )}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    goalsContainer: {
        flex: 5,
    },
});
