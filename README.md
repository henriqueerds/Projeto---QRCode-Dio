# 🛒 E-commerce Utility Kit (QR Code & Password Generator)

Este projeto é um utilitário de linha de comando (CLI) desenvolvido em **Node.js**. Ele foi criado para auxiliar em tarefas comuns de e-commerce, como a geração de **QR Codes** para links e a criação de **senhas seguras** baseadas em variáveis de ambiente.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução.
* **Chalk**: Para estilizar e colorir as mensagens no terminal.
* **Prompt**: Para interagir com o usuário via linha de comando.
* **QR Code Terminal**: Para renderizar códigos QR diretamente no console.

---

## 📂 Estrutura do Projeto

Abaixo, a organização dos arquivos e pastas:

```text
projeto-qrcode/
├── src/
│   ├── prompts-schema/   # Definição visual e regras dos menus
│   ├── services/         # Lógica de negócio (Senhas e QR Code)
│   │   ├── password/     # Geração de senhas aleatórias
│   │   └── qr-code/      # Geração de imagens QR Code
│   └── index.js          # Ponto de entrada da aplicação
├── .env                  # Configurações de variáveis de ambiente
└── package.json          # Dependências e scripts

```

---

## ⚙️ Configuração (.env)

O projeto utiliza um arquivo `.env` para personalizar a geração de senhas. Certifique-se de configurá-lo na raiz do projeto:

| Variável | Descrição |
| --- | --- |
| `UPPERCASE_LETTERS` | Permite letras maiúsculas (`true`/`false`) |
| `LOWERCASE_LETTERS` | Permite letras minúsculas (`true`/`false`) |
| `NUMBERS` | Permite números (`true`/`false`) |
| `SPERCIAL_CHARACTERS` | Permite caracteres especiais (`true`/`false`) |
| `PASSWORD_LENGTH` | Define o tamanho da senha (ex: `8`) |

---

## 🚀 Como Executar

1. **Instale as dependências:**
```bash
npm install

```


2. **Inicie a aplicação:**
```bash
npm start

```



---

## 📝 Funcionalidades

### 1. Geração de QR Code

O usuário insere um link e escolhe entre dois formatos de visualização:

* **Normal**: QR Code em tamanho padrão.
* **Terminal**: QR Code em formato compacto.

### 2. Gerador de Senhas

Gera uma senha aleatória baseada nas restrições definidas no arquivo `.env`. O algoritmo seleciona caracteres de forma randômica entre os grupos permitidos (letras, números e símbolos).

---

## 📋 Detalhes dos Scripts

* `type: "module"`: O projeto utiliza **ESModules** (`import`/`export`).
* `start script`: Utiliza a flag nativa do Node `--env-file=.env` para carregar as variáveis sem precisar de bibliotecas externas como o *dotenv*.

---
### 🛠 Tecnologias e Ferramentas:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![JSON](https://img.shields.io/badge/json-5E5E5E?style=for-the-badge&logo=json&logoColor=white)

---

### 💻 Linguagens e Tecnologias:

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" alt="npm logo"  />
</div>

### 🤝 Contribuição

Fique à vontade para abrir uma *issue* ou enviar um *pull request* com melhorias!

---
