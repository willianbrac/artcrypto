import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const CreateCollectionSchema = yup.object({
  name: yup.string().required('Digite o nome da coleção'),
});

export const CreateCollectionResolver = yupResolver(CreateCollectionSchema);
