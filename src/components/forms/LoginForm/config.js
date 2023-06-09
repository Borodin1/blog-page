import * as yup from 'yup';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина = ${min} символов';

// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина = ${min} символов';

export const schema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required('*'),
    password: yup
        .string()
        .required('*')
        .min(5, tooShortMessage)
        .max(16, tooLongMessage),
});
