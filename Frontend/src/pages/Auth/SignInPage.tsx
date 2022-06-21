import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ArtCryptoLogo } from 'components';
import { SignInResolver } from 'validations';
import { useAuthContext } from 'contexts';
import { useAuth } from 'hooks';
import { setBearerToken } from 'providers';

interface ISigInForm {
  email: string;
  password: string;
}

export function SignInPage() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ISigInForm>({ resolver: SignInResolver });
  const { setAccessToken, setUser } = useAuthContext();
  const { signIn, getUserData } = useAuth();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  async function onSubmit(values: ISigInForm) {
    try {
      const accessToken = await signIn(values.email, values.password);
      if (accessToken) {
        setBearerToken(accessToken);
        const user = await getUserData();
        if (user) {
          setUser(user);
          setAccessToken(accessToken);
        }
      }
    } catch (error) {
      setIsError(true);
    }
  }

  return (
    <div className="px-4 w-full h-screen bg-primary-linear flex flex-col items-center justify-center">
      <ArtCryptoLogo width={158} height={35} />
      <div className="w-full max-w-lg bg-white rounded-md p-4 mt-10 shadow-lg">
        {isError && (
          <p className="bg-white border border-red-400 text-center text-red-400 rounded-md py-4 mb-4">
            E-mail e/ou senha estão inválidos
          </p>
        )}

        <h1 className="text-xl font-bold">Conecte-se</h1>
        <p>Acesse sua conta com seu e-mail e senha.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full py-4">
          <label htmlFor="email" className="label">
            E-mail
          </label>
          <input {...register('email')} type="email" name="email" id="email" placeholder="E-mail" className="input" />
          {errors?.email?.message && <p className="text-red-500 text-xs pb-2">{errors.email.message}</p>}
          <label htmlFor="password" className="label">
            Senha
          </label>
          <input
            {...register('password')}
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            className="input"
          />
          {errors?.password?.message && <p className="text-red-500 text-xs pb-2">{errors.password.message}</p>}

          <button type="submit" className="w-full mt-2 button button--primary">
            Conectar
          </button>
          <button
            type="button"
            className="w-full mt-2 button button--outline"
            onClick={() => navigate('/cadastrar-se')}
          >
            Cadastre-se
          </button>
        </form>
      </div>
    </div>
  );
}
