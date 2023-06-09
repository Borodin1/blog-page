import * as yup from 'yup';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина ${min} символов';

// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'минимальная длина ${min} символов';


export const schema = yup.object().shape({
    firstName: yup
        .string()
        .min(5, tooShortMessage)
        .max(25, tooLongMessage)
        .required('*'),
    lastName: yup
        .string()
        .min(5, tooShortMessage)
        .max(25, tooLongMessage)
        .required('*'),
});
