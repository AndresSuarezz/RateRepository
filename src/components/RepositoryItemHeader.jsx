import React from "react";
import {View, StyleSheet, Image, Platform} from "react-native";
import theme from "../theme";
import StyledText from "./StyledText";

const RepositoryItemHeader = ({ownerAvatarUrl, fullname, description, language}) => {
    return (
        <View style={styles.heading}>
            <View style={styles.imgHeading}>
                <Image source={{uri: ownerAvatarUrl}} style={styles.image} />
            </View>
            <View style={styles.subheading}>
                <StyledText fontSize='subheading' fontWeight='bold'>{fullname}</StyledText>
                <StyledText color='secondary'>{description}</StyledText>
                <StyledText style={styles.language}>{language}</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        paddingBottom: 2,
    },
    subheading: {
        flex: 1,
    },
    imgHeading: {
        paddingRight: 10,
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            ios: 'orange',
            default: 'purple',
        }),
        alignSelf: 'flex-start',
        marginVertical: 4,
        borderRadius: 4,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4,
    }
})

export default RepositoryItemHeader