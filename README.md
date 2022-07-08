Projeto realizado na semana o Novo Dev da Tracontecnologia.
No Frontend foi utilizado ReactJS, Typescript, TailwindCSS, Axios, Multer. 
No Backend foi utilizado NestJS, TypeOrm, JWT, Postgres e Docker. 
O funcionamento é bem simples, o usuário autenticado consegue postar suas NFTs na coleção desejada, para que outros usuários possam dar Like, criar coleções com esses NFTs e visualizar-los.
Na criação da NFT o usuário consegue fazer upload da imagem, atribuir uma categoria já criada, dar o nome e preço em Ethereum.
Posteriormente quero criar as paginas de atualização e de compras.

![175751307-3f51dc25-17bb-48ac-8534-f7a0098585c6](https://user-images.githubusercontent.com/66275588/178032789-0c9ae79d-24a6-4a81-ad0c-45c7d9ed1e8e.png)
![175751349-4ecf7d3c-a762-4acd-93df-3047d6b3870f](https://user-images.githubusercontent.com/66275588/178032793-880a5cff-068a-4187-beab-6376cde0d068.png)
![175751390-22ffc9aa-761d-485b-a810-5b2fec2d75c6](https://user-images.githubusercontent.com/66275588/178032802-82ec1b17-5751-447d-8ecb-b752b08e0f19.png)

Esta é uma API de criação e publicação de NFTs

* Para utilizar basta rodar o comando:
<code> docker-compose up -D</code>

* Além disso, é necessário editar o arquivo .env

Fluxo da API: <br>
  * Criação da conta do Usuário :arrow_heading_down:
  * Autenticação :arrow_heading_down:
  * Criação de uma coleção para as NFTs :arrow_heading_down:
  * Criação da NFT com Upload de imagens e definição de uma coleção

# Rotas:
## :white_check_mark: Auth 
 <h3>http://localhost:3000/auth</h3>
  @Post <br>
    <b> [ /singUp ] </b> : Cria uma conta com nome, email e senha passados como objeto.<br><br>
    
  @Post <br>
    <b>[ /singIn ] </b>: Autentica o usuário com email e senha e gera o token JWT.<br>
    
  @Get <br>
    <b>[ / ] </b>: Exibe as informações do usuário logado.</br>

## <h4> Obs.: As rotas abaixo utilizam o accessToken gerado na rota (/singnIn) para autorização, passado no Header da requisição.</h4>

<hr/>

## :white_check_mark: Users
<h3>http://localhost:3000/users</h3>
  <b> @Get ( /:id ) </b> : <br>
        - Utiliza as informações do usuário logado através de decorators. <br>
        - Utiliza o ID passado no parâmetros da rota para buscar informações do usuário relacionado com suas coleções e seus NFT. <br><br>

## :white_check_mark: NFTSs
<h3>http://localhost:3000/nfts</h3>
 <b> @Get ( ) </b> : <br>
        - Utiliza as informações do usuário logado através de decorators;<br>
        - Retorna um array de NFTs com todas suas informações;<br><br>
   
 <b> @Get ( /:id ) </b> : <br>
        - Utiliza as informações do usuário logado através de decorators;<br>
        - Utiliza o ID da NFT passado como parâmetro na rota para a busca;<br>
        - Retorna a informação de uma NFT com todas suas informações;<br><br>
  
 <b> @Post ( /:id/likes ) </b> : <br>
        - Utiliza as informações do usuário logado através de decorators;<br>
        - Utiliza o ID da NFT passado como parâmetro na rota para a busca;<br>
        - Adiciona ou remove um like para a NFT;<br><br>
         
 <b> @Delete ( /:id ) </b> : <br>
        - Utiliza as informações do usuário logado através de decorators;<br>
        - Utiliza o ID da NFT passado como parâmetro na rota para a busca;<br>
        - Remove a NFT pelo ID;<br><br>
         
## :white_check_mark: Collections     
<h3>http://localhost:3000/collections</h3>
 <b> @Post ( ) </b> : <br>
        - Utiliza as informações do usuário logado através de decorators;<br>
        - Cria uma nova coleção juntamente com as informações do author;<br><br>

 <b> @Post ( /:id/nfts ) </b> : <br>
        - Utiliza as informações do usuário logado através de decorators;<br>
        - O ID da coleção é passado como parâmetro para poder ser relacionado com a NFT criada;<br>
        - Cria um NFT com as informações passadas por JSON juntamente com um interceptor que realiza o Upload da imagem;<br><br>
           
 <b> @Delete ( /:id ) </b> : <br>
        - Utiliza o accessToken gerado na rota /singnIn para autorização, passado no Header da requisição<br>
        -  Utiliza o ID da coleção passado como parâmetro na rota para a busca;<br>
        -  Remove a Coleção pelo ID juntamente com todas as suas NFTs;<br><br>
        
 <b> @Get ( ) </b> : <br>
        - Utiliza as informações do usuário logado através de decorators<br>
        - Utiliza o ID da coleção passado como parâmetro na rota para a busca;<br>
        - Busca a Coleção pelo ID juntamente com todas as suas NFTs;<br><br>

