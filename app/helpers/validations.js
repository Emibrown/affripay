import * as yup from 'yup'


export const loginSchema = yup.object().shape({
    phone: yup
        .string()
        .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
        .required('Phone number is required'),
})
