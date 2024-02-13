import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    TextInput:{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
    }
})

const StyledTextInput = ({style = {}, ...props}) => {
    const inputStyled = [
        styles.TextInput,
        style
    ]
    return (
        <TextInput style={inputStyled} {...props}/>
    )
}

export default StyledTextInput