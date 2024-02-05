import React from "react";
import {View, StyleSheet} from "react-native";
import RepositoryStats from "./RepositoryStats";
import RepositoryItemHeader from "./RepositoryItemHeader";

const RepositoryItem = ({props}) => {
    return (
        <View style={styles.container} key={props.id}>
            <RepositoryItemHeader {...props} />
            <RepositoryStats {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    }
})
export default RepositoryItem