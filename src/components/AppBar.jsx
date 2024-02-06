import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const AppBarTab = ({children, to}) =>{
    const { pathname } = useLocation()
    const active = pathname === to

    const textStyles = [
        style.text,
        active && style.active
    ]

    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={style.container}>
            <ScrollView horizontal style={style.scroll}>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
        container: {
            paddingTop: Constants.statusBarHeight + 10,
            backgroundColor: theme.appBar.primary,
            paddingLeft: 10,
            flexDirection: 'row'
        },
        text: {
            color: theme.appBar.textSecondary,
            paddingHorizontal:10
        },
        scroll:{
            paddingBottom:15 
        },
        active: {
            color: theme.appBar.textPrimary
        }
    }
);

export default AppBar