<div align="center">
  <h1>Avaliação Sprint 4</h1>
</div>

<div align="center">
  <p>Equipe 5</p>
</div>

***

<a name="ancora"></a>
## 📖 Sumário
- [1 - Objetivo](#ancora1)
  - [1.1 - Tecnologias Utilizadas](#ancora1-1)
  - [1.2 - APIs Utilizadas](#ancora1-2)
- [2 - Desenvolvimento do Projeto](#ancora2)
  - [2.1 - Exemplo de Retorno das APIs](#ancora2-1)
  - [2.2 - Acesso à Aplicação](#ancora2-2)
- [3 - Estrutura de Pastas do Projeto](#ancora3)
- [4 - Arquitetura AWS](#ancora4)
- [4 - Dificuldades encontradas](#ancora5)
- [5 - Licença](#ancora6)

***

<a id="ancora1"></a>
## 1 - Objetivo

Criar uma API em Node.js (utilizando o framework Express) que consome duas APIs externas e fornece informações formatadas sobre piadas e atividades. As rotas "/api/piadas" e "/api/atividades" retornam dados obtidos das APIs de piadas do Chuck Norris ([Chuck Norris Jokes Api](https://api.chucknorris.io/jokes/random)) e de atividades aleatórias ([Bored Api](https://www.boredapi.com/api/activity)), respectivamente.

***

<a id="ancora1-1"></a>
## 1.1 - Tecnologias Utilizadas

<div style="display: inline-block" align="center">
  <img align="center" alt="NodeJs" height="28" width="42" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img align="center" alt="Express-Js" height="28" width="42" src="https://icongr.am/devicon/express-original.svg?size=148&color=00f030" />
  <img align="center" alt="Git" height="28" width="42" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg">
  <img align="center" alt="NPM-Js" height="28" width="42" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
  <img align="center" alt="AWS-Js" height="28" width="42" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
  <img align="center" alt="AWS-EBS" height="28" width="42" src="https://img.stackshare.io/service/210/aws-elastic-beanstalk.png" />
  <img align="center" alt="Axios" height="28" width="42" src="https://avatars.githubusercontent.com/u/32372333?v=4" />
</div>

<a id="ancora1-2"></a>
## 1.2 - APIs Utilizadas

- [Bored Api](https://www.boredapi.com/api/activity)
- [Chuck Norris Jokes Api](https://api.chucknorris.io/jokes/random)

***

<a id="ancora2"></a>
## 2 - Desenvolvimento

A aplicação foi desenvolvida em Node.js, utilizando o framework Express para criar as rotas e gerenciar as requisições HTTP. O projeto segue uma arquitetura de rotas separadas, com os arquivos das rotas em uma pasta chamada "routes". As dependências externas foram gerenciadas através do npm (Node Package Manager).
O projeto utiliza variáveis de ambiente para configurar a porta do servidor e as URLs das APIs de piadas e atividades. Assim permitindo uma maior flexibilidade e possibilidades de configurações desses valores de acordo com diferentes ambientes (desenvolvimento, teste, produção) sem a necessidade de alterar o código-fonte, além de ser uma imporetante prática de segurança.

<a id="ancora2-1"></a>
## 2.1 - Exemplo de Retorno das APIs

1. Rota GET /:
```
Este é o app do Grupo 5 😀
```

2. Rota GET /api/piadas:
```
{
  "data_atualizacao": "05-01-2020",
  "data_criacao": "05-01-2020",
  "icone": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id": "b7585687-b14b-406d-a557-9cfeea4a8c16",
  "piada": "CHUCK NORRIS can slit your throat with his pinkie toenail.",
  "referencia": "https://api.chucknorris.io/jokes/2itjvbXZTcScUiuAMoOPLA"
}
```
3. Rota GET /api/atividades:
```
{
  "id": "b7585687-b14b-406d-a557-9cfeea4a8c16",
  "atividade": "Wash your car",
  "tipo": "busywork",
  "participantes": 1,
  "acessibilidade": "15%"
}
```

<a id="ancora2-2"></a>
## 2.2 - Acesso à Aplicação 

Todos os integrantes do grupo realizaram o deploy na AWS para que todos pudessem por em pratica e, assim, aprender melhor o que foi ensinado.

Link Cristofer -> http://sprint4-app-env.eba-3e2ugy6p.us-east-1.elasticbeanstalk.com/

Link Gregory   -> http://equipe5-sprint4.us-east-1.elasticbeanstalk.com/

Link Matheus   -> http://equipe05-sprint04-app.us-east-1.elasticbeanstalk.com/

Link Nicolas   -> http://Sprint4-equipe5-N.us-east-1.elasticbeanstalk.com/

***

<a id="ancora3"></a>
## 3 - Estrutura de Pastas do Projeto
- **src**
  - `app.js`
  - **config**
    - `.env`
  - **utils**
    - `guid_generator.js`
  - **routes**
    - `atividades.js`
    - `informacoes.js`
    - `piadas.js`

***

<a id="ancora4"></a>
## 4 - Arquitetura AWS

<div align="center">
  <p>Figura 1 - Arquitetura do Projeto na AWS</p>
  <img src = "doc_img\Sprint4-Arch.png">
</div>

***

<a id="ancora5"></a>
## 5 - Dificuldades conhecidas

1. Realizar o Deploy da aplicação no AWS Elastic Beanstalk, devido ao problema de permissão que surgiu ao efetuar o deploy, é importante notar que, por padrão, o Elastic Beanstalk requer a criação de autoscaling group, porém nossas contas não tinham essa permissão.

***

<a id="ancora6"></a>
## 6 - Licença

Este projeto está licenciado sob a Licença MIT - consulte o [Link](https://mit-license.org/) para obter mais detalhes.
