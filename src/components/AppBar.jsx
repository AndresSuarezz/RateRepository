import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";

const AppBar = () => {
    return (
        <View style={style.container}>
            <StyledText fontWeight='bold' style={style.text}>Repositories</StyledText>
        </View>
    );
}

const style = StyleSheet.create({
        container: {
            paddingTop: Constants.statusBarHeight + 10,
            backgroundColor: theme.appBar.primary,
            paddingBottom: 10,
            paddingLeft: 10,
        },
        text: {
            color: theme.appBar.textPrimary
        }
    }
);

export default AppBar