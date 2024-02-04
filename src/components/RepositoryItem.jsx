import React from "react";
import {View, Image, StyleSheet} from "react-native";
import StyledText from "./StyledText";

const RepositoryItem = ({props}) => {
    return (
        <View style={styles.container} key={props.id}>
            <StyledText fontSize='subheading' fontWeight='bold'>{props.fullname}</StyledText>
            <StyledText>{props.description}</StyledText>
            <StyledText>{props.language}</StyledText>
            <StyledText>Forks: {props.forksCount}</StyledText>
            <StyledText>Stars: {props.stargazersCount}</StyledText>
            <StyledText>Review: {props.reviewCount}</StyledText>
            <StyledText>Rating: {props.ratingAverage}</StyledText>
            <Image source={{uri: props.ownerAvatarUrl}} style={{width: 50, height: 50}} />
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