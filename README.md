Bot

Descrição
Este é um bot desenvolvido utilizando a biblioteca Telegraf em TypeScript para interagir com usuários em plataformas de mensagens.

Instalação
Certifique-se de ter o Node.js e o npm instalados em sua máquina.
1. Clone este repositório.
2. Na raiz do projeto, execute o comando `npm install` para instalar as dependências.

Configuração
Antes de executar o bot, certifique-se de configurar as variáveis de ambiente necessárias. Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis de acordo com sua configuração.

Execução
Para executar o bot em modo de desenvolvimento, utilize o seguinte comando:
```
npm run dev
```

Para construir o bot e executá-lo em modo de produção, utilize os seguintes comandos:
```
npm run build
````
```
npm start
```

Dependências
- @telegraf/entity: ^0.5.0
- axios: ^1.7.2
- dotenv: ^16.4.5
- telegraf: ^4.16.3

Desenvolvimento
Este projeto utiliza TypeScript para desenvolvimento. Os arquivos de código-fonte estão localizados na pasta `src/`. Certifique-se de transpilar o código TypeScript para JavaScript antes de executar o bot em produção.
