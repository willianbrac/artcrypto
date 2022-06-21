import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useCollection } from 'hooks';
import { IAuthoredCollection, ICreateNFTForm } from 'interfaces';
import { CreateNFTResolver } from 'validations';

type Props = {
  authoredCollections: IAuthoredCollection[];
};

export function NFTsCreateForm({ authoredCollections }: Props) {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ICreateNFTForm>({ resolver: CreateNFTResolver });

  const { createNewNFT } = useCollection();
  const navigate = useNavigate();

  async function onSubmit(values: ICreateNFTForm) {
    const response = await createNewNFT(values.collection, {
      photo: values.photo[0],
      name: values.name,
      price: values.price,
    });
    if (response) {
      navigate(`/nfts/${response.id}`);
    }
  }

  const collections = authoredCollections.map((collection) => ({
    label: collection.name,
    value: collection.id,
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Criar nova NFT</h1>

      <label className="label" htmlFor="photo">
        Foto
      </label>
      <input {...register('photo')} className="input" type="file" name="photo" id="photo" />
      {errors?.photo?.message && <p className="error-message">{errors.photo.message}</p>}

      <label className="label" htmlFor="collection">
        Coleção
      </label>
      <select 
        {...register('collection')}
        className="input"
        name="collection"
        id="collection"
      >
        <option value="">Selecione</option>
        {collections?.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {errors?.collection?.message && 
        <p className="error-message">{errors.collection.message}</p>}

      <label className="label" htmlFor="name">
        Nome
      </label>
      <input 
        {...register('name')}
        className="input"
        type="text"
        name="name"
        id="name"
      />
      {errors?.name?.message &&
        <p className="error-message">{errors.name.message}</p>}

      <label className="label" htmlFor="price">
        Preço
      </label>
      <input 
        {...register('price')}
        className="input"
        type="number"
        step=".01"
        name="price"
        id="price"
      />
      {errors?.price?.message &&
        <p className="error-message">{errors.price.message}</p>}
      <button className="w-full button button--primary">
        Criar
      </button>
    </form>
  );
}
