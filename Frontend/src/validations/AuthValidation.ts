import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const SignInSchema = yup.object({
  email: yup.string().email('Digite um e-mail válido').required('Digite seu e-mail'),
  password: yup.string().required('Digite sua senha'),
});

export const SignInResolver = yupResolver(SignInSchema);

const SignUpSchema = yup.object({
  name: yup.string().required('Digite seu nome'),
  email: yup.string().email('Digite um e-mail válido').required('Digite seu e-mail'),
  password: yup.string().required('Digite sua senha'),
});

export const SignUpResolver = yupResolver(SignUpSchema);
