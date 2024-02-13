import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import FormikInputValue from '../components/FormikInputValue';

const initialValues = {
    email: '',
    password: '',
}

export default function LogIn() {
    return (
        <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
            {({handleSubmit}) => {
                return (
                    <View style={styles.form}>
                        <FormikInputValue
                            name='email'
                            placeholder='Email' 
                        />
                        <FormikInputValue
                            name='password'
                            placeholder='password' 
                            secureTextEntry={true}
                        />
                        <Button onPress={handleSubmit} title='Log In'/>
                    </View>
                )
            }}
        </Formik>
    );
}

const styles = StyleSheet.create({
    form:{
        margin:12
    }
})