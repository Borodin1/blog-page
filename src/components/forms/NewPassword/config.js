import * as yup from 'yup';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина = ${min} символов';

// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина = ${max}символов';

export const schema = yup.object().shape({
    oldPassword: yup
        .string()
        .required('*'),

    newPassword: yup
        .string()
        .min(5, tooShortMessage)
        .max(20, tooLongMessage)
        .required('*'),
});
