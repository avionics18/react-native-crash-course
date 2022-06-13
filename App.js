import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHandler(enteredGoalText) {
        if (enteredGoalText === "") {
            console.log("Please enter some goal...");
        } else {
            setCourseGoals((prev) => [
                ...prev,
                { text: enteredGoalText, id: Math.random().toString() },
            ]);
            setModalIsVisible(false);
        }
    }

    function delGoalHandler(id) {
        setCourseGoals((prev) => prev.filter((goal) => goal.id !== id));
    }

    return (
        <View style={styles.appContainer}>
            <Button
                title="Add New Goal"
                color="#5e0acc"
                onPress={() => setModalIsVisible(true)}
            />
            <GoalInput
                addGoalHandler={addGoalHandler}
                isVisible={modalIsVisible}
                hideModal={() => setModalIsVisible(false)}
            />
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
        paddingTop: 60,
        paddingHorizontal: 16,
        flex: 1,
    },
    goalsContainer: {
        flex: 5,
    },
});
