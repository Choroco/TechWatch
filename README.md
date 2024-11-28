# TechWatch

TechWatch é um programa criado para gerenciar e monitorar computadores em uma rede de lojas, verificando seus nomes, IPs, endereços MAC, sistemas operacionais, quantidade de memória RAM, data de instalação do sistema e a data da última execução do programa. Com essas informações, é possível gerenciar e melhorar a forma como a troca e manutenção desses equipamentos específicos são realizadas, permitindo que o departamento responsável consiga executar suas funções com maior precisão e agilidade. Este programa foi projetado para funcionar na estrutura de uma rede de lojas específica, mas pode ser adaptado para qualquer empresa.

As tecnologias utilizadas foram:

- **JavaScript (Back-End)**

Linguagem de programação usada para a implementação da lógica do sistema, permitindo interatividade e comunicação em tempo real.

- **NodeJs**

Ambiente de execução JavaScript no lado do servidor, utilizado para construir a API que interage com o banco de dados e manipula os dados do sistema de forma eficiente.

- **Express**

Framework para Node.js que facilita a criação e gestão de rotas e middleware, tornando a implementação da API mais organizada e escalável.

- **MySQL**

Sistema de gerenciamento de banco de dados relacional, utilizado para armazenar e organizar as informações coletadas sobre os dispositivos na rede, garantindo a persistência e a integridade dos dados.

- **JWT**

Framework utilizada para realizar a configuração de autenticação de usuário e senha com token.

- **React**

Utilizado para a criação do FrontEnd e estilização da página.

- **Vite**

Utilizado para a criação do FrontEnd e suas configurações.

- **JavaScript, Html, Css**

Utilizados para aplicar a lógica necessária no FrontEnd, criando e estilizando a página com todas as suas propriedades.

---

## 🚀 Pré-requisitos

- **Sistema Operacional**: Windows
- **Gerenciador de arquivos**: VS Code
- **NodeJs**: v22.11.0 
- **Banco de dados**: MySQL
- **Vite** instalado
- **Express** instalado

## 🎲 Rodando o BackEnd (servidor)

1. Crie o banco de dados no MySQL manualmente. O nome padrão do banco de dados da API é **"database"**. Se houver alteração no nome do banco ou senha altere o arquivo `TechWatch/BackEND/infraestrutura/conexao.js`.  
2. Dentro do banco, será criado duas tabelas automaticamente: **computadores** e **users**.

A tabela **computadores** com as seguintes colunas:
- id
- mac
- localHostName
- dataDeInstalacao
- processador
- ramSize
- sistemaOperacional
- ip
- loja
- dataAtual

A tabela **users** com as seguintes colunas:
- id
- login
- password
- role

## 🖥 Clone ou baixe o repositório

1. Clone ou baixe o repositório: **[https://github.com/Choroco/TechWatch.git](https://github.com/Choroco/TechWatch.git)**
2. Após clonar ou baixar, vá até **TechWatch/BackEND/** e execute o comando:

```bash
npm install express
```
Apos a instalação, basta executar no mesmo diretorio o comando.
```bash
node .\index.js
```
Apartir dai, o BackEND ja irá funcionar, a API vai startar, e utilizar a porta 8080.

---

## 🎲 Rodando o FrontEnd (servidor)

1. Clone ou baixe o repositório: **[https://github.com/Choroco/TechWatch.git](https://github.com/Choroco/TechWatch.git)**
2. Após clonar ou baixar, vá até **TechWatch/FrontEND/** e execute o comando:

```bash
$ npm install -D vite
```
Apos a instalação, basta executar no mesmo diretorio o comando.

```bash
npm run dev
```
Apartir dai, o FrontEND ja irá funcionar, a API vai startar, e utilizar a porta 5173.


## 🌟 Funcionalidades

- Executa uma API de monitoramento e checagem de computadores em um banco de dados.

- Mostra todos os computadores no banco de dados.

- Mostra um computador específico utilizando o ID como parametro.

- Mostra todos os computadores de uma loja especifica (ex loja05)

- Adiciona um computador manualmente no banco de dados.

- Deleta um computador manualmente no banco de dados.

- Edita um computador manualmente no banco de dados.

Vale lembrar que todas as funçoes exceto "Mostrar" devem ser utilizadas por um usuario "ADMIN".

##SEGUE LINK DA DOCUMENTAÇAO NO POSTMAM --> [https://documenter.getpostman.com/view/38631377/2sAYBUDY8x](https://documenter.getpostman.com/view/39307076/2sAYBXAViw)
