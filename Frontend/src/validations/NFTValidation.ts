import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const CreateNFTSchema = yup.object({
  photo: yup
    .mixed()
    .test('required', 'Selecione uma foto', (input) => input && input.length > 0)
    .test('size', 'Arquivo é muito grande', (input) => input && input[0] && input[0].size < 50000000)
    .test(
      'mimetype',
      'Esse tipo de arquivo não é permitido',
      (input) => input && input[0] && ['image/jpeg', 'image/png'].includes(input[0].type)
    ),
  collection: yup.string().required('Selecione a coleção da NFT'),
  name: yup.string().required('Digite o nome da NFT'),
  price: yup.string().required('Digite o preço da NFT'),
});

export const CreateNFTResolver = yupResolver(CreateNFTSchema);
