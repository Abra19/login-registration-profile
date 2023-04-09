import * as yup from 'yup';

const loginSchema = (message:string) => yup.object().shape({
  username: yup.string().trim().required(message),
  password: yup.string().required(message),
});

const registrationSchema = (
  nameMsg: string,
  passwordMsg: string,
  equalMsg: string,
  requiredMsg: string,
) => yup.object().shape({
  username: yup.string().trim()
    .min(3, nameMsg)
    .max(20, nameMsg)
    .required(requiredMsg),
  password: yup.string().trim().min(6, passwordMsg).required(requiredMsg),
  passwordConfirmation: yup.string().trim().oneOf([yup.ref('password')], equalMsg).required(requiredMsg),
});

export {
  loginSchema,
  registrationSchema,
};
