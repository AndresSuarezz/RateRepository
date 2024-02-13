import React from 'react'
import StyledTextInput from './StyledTextInput'
import { useField } from 'formik'

const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name)
    return (
        <StyledTextInput 
            value={field.value} 
            onChangeText={value => helpers.setValue(value)} 
            {...props}
        />
    )
}

export default FormikInputValue