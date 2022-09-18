ts-node-dev serve para ficar rodando a aplicação automaticamente

##

## Casos de uso

- Listagem de games com contagem de anúncios
- Criação de novo anúncio
- Listagem de anúncios por game
- Buscar discord pelo ID do anúncio

## HTTP methods / API RESTful / HTTP Codes

- GET = Buscar
- POST = Criar
- PUT = Editar uma entidade
- PATCH = Editar uma informação específica
- DELETE = Deletar/Apagar

obs: O nome das rotas são sempre no plural

Status 201 - Algo foi criado
Status 200 - Resposta genérica de sucesso (ok)

Principais: 

- Começa com 2 -> Sucesso
- Começa com 3 -> Redirecionamento
- Começa com 4 -> Erro no código
- Começa com 5 ou derivados -> Erros inesperados

## Tipos de parâmetros

* Query -> Através do ponto de interrogação (?)
    - localhost:3333/ads?page=2
    - São usados para persistir o estado (o estado atual da página no momento)
    - Usados para paginação, ordenação, e coisas que não são sensíveis.
    - Nunca usar para enviar informações sensíveis (senha, etc)
    - Sempre precisa dar um nome para os parâmetros

* Route -> Parâmetros que não são nomeados, podem ser reconhecidos só de olhar para a URL
    - localhost:3333/ads/5 ou localhost:3333/post/como-criar-api-em-node (slug)
    - Usado quando queremos fazer a identificação de um recurso. Exemplo: ID

* Body -> Para enviar várias informações na requisição, geralmente para envio de formulário
    - Body não aparece na URL, fica escondido na requisição
    - Geralmente usado para enviar informações sensíveis

## Banco de Dados

- migration -> É um controle de versões do nosso banco de dados

## Cors

obs: cors -> serve para proteger o backend de frontend que não queremos que acesse. 
É uma forma de dizer quais endereços frontend a gente quer que acesse o nosso backend

app.use(cors({
    origin: 'http://rockeseat.com.br'
}))