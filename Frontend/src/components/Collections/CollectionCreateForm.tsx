import { useForm } from 'react-hook-form';

import { ICreateCollectionForm } from 'interfaces';
import { CreateCollectionResolver } from 'validations';
import { useCollection } from 'hooks';

type Props = {
  onCreate?: VoidFunction;
};
export function CollectionCreateForm({ onCreate }: Props) {
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm<ICreateCollectionForm>({ resolver: CreateCollectionResolver });
  const { createNewCollection } = useCollection();
  async function onSubmit(values: ICreateCollectionForm) {
    await createNewCollection(values.name);
    reset();
    if (onCreate) {
      onCreate();
    }
  }
  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold text-center mb-4">Criar nova Coleção</h1>
      <label className="label" htmlFor="name">
        Nome
      </label>
      <input {...register('name')} className="input" type="text" name="name" id="name" />
      {errors?.name?.message && <p className="error-message">{errors.name.message}</p>}
      <button className="w-full button button--primary">Criar</button>
    </form>
  );
}
