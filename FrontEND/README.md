# TechWatch

TechWatch é um programa criado para gerenciar e monitorar computadores em uma rede de lojas, verificando seus nomes, IPs, endereços MAC, sistemas operacionais, quantidade de memória RAM, data de instalação do sistema e a data da última execução do programa. Com essas informações, é possível gerenciar e melhorar a forma como a troca e manutenção desses equipamentos específicos são realizadas, permitindo que o departamento responsável consiga executar suas funções com maior precisão e agilidade. Este programa foi projetado para funcionar na estrutura de uma rede de lojas específica, mas pode ser adaptado para qualquer empresa.

As tecnologias utilizadas foram:

- **Java**

Utilizado para inserir os dados dos computadores no banco de dados (programa feito externamente e inserido manualmente em todos os computadores). Também utilizado na API em Spring, onde todo o BackEnd da API foi desenvolvido em Java, utilizando as tecnologias do Spring.

- **Spring**

Utilizado no BackEnd em conjunto com Maven, e suas dependências, como JPA, JDBC e Spring Web.

- **Maven**

Utilizado no BackEnd em conjunto com o Spring e o Java para a criação da API e suas propriedades.

- **AWS - EC2**
 
Utilizado para instalação e configuração de uma máquina virtual onde seria configurado o banco de dados. Isso é necessário para possibilitar o acesso externo de todas as lojas e da matriz, sem a mudança constante de IP público dos provedores. No entanto, também pode ser utilizado um banco de dados local, se a configuração de rede for com IP fixo.

- **MySQL**

Utilizado dentro da VM na EC2 para receber as conexões e dados dos computadores e da API.

- **JDBC**

Dependência do Spring utilizada para configuração da API e suas propriedades.

- **JPA**

Dependência do Spring utilizada para configuração da API e suas propriedades.

- **JWT Security**

Dependência do Spring utilizada para fazer a configuração de autenticação de usuário e senha com token.

- **React**

Utilizado para a criação do FrontEnd e estilização da página.

- **Vite**

Utilizado para a criação do FrontEnd e suas configurações.

- **JavaScript, Html, Css**

Utilizados para aplicar a lógica necessária no FrontEnd, criando e estilizando a página com todas as suas propriedades.

## 🚀 Pré-requisitos

- **Sistema Operacional**: Windows
- **Gerenciador de arquivos**: VS Code, IntelliJ
- **Spring e dependências**: JPA, JDBC, Spring Web, JWT Security
- **Java 8** (mínimo)
- **Banco de dados**: MySQL
- **Vite** instalado

---

## 🎲 Rodando o FrontEnd (servidor)

1. Clone ou baixe o repositório: **[https://github.com/JaoFormentini/TechWatch.git](https://github.com/JaoFormentini/TechWatch.git)**
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

SEGUE LINK DA DOCUMENTAÇAO NO POSTMAM --> https://documenter.getpostman.com/view/38631377/2sAYBUDY8x
