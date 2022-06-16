import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
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
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <View style={styles.addGoalWrapper}>
                    <Button
                        title="Add New Goal"
                        color="#5e0acc"
                        onPress={() => setModalIsVisible(true)}
                    />
                </View>
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
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    addGoalWrapper: {
        flex: 1,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.3)",
    },
    goalsContainer: {
        flex: 5,
        paddingTop: 24,
    },
});
