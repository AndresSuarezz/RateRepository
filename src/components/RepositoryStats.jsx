import React from 'react';
import {View, StyleSheet} from 'react-native';
import StyledText from './StyledText';

const parseThousands = value => {
    return value > 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
}

const RepositoryStats = props => {
    return (
        <View style={styles.r_container}>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(props.stargazersCount)}</StyledText>
                <StyledText align='center'>Stars</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(props.forksCount)}</StyledText>
                <StyledText align='center'>Forks</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{props.reviewCount}</StyledText>
                <StyledText align='center'>Reviews</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{props.ratingAverage}</StyledText>
                <StyledText align='center'>Rating</StyledText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    r_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})

export default RepositoryStats