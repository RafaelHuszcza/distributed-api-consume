# Busca de Filmes com Conversão de Criptomoedas, Imagens de Cachorros e Dados de Pokémon

Disponível em: https://distribuidos.rafaelhuszcza.com/

Este projeto é uma aplicação web multifuncional que permite aos usuários:

- Buscar filmes e visualizar os rendimentos de bilheteria convertidos em várias criptomoedas.
- Visualizar imagens aleatórias de cachorros para diversão.
- Pesquisar Pokémon e visualizar informações detalhadas sobre eles.

Ele combina dados de várias APIs, incluindo uma API de filmes, a API CoinGecko, a API Random.dog e a PokeAPI, para oferecer uma experiência de usuário interativa e envolvente.

## Funcionalidades

- **Busca de Filmes**:
  - Buscar filmes usando uma API de banco de dados de filmes.
  - Visualizar informações detalhadas sobre os filmes, incluindo rendimentos de bilheteria.
  - Converter rendimentos de bilheteria em várias criptomoedas em tempo real.
  - Adicionar e remover criptomoedas personalizadas para conversão.
- **Imagens Aleatórias de Cachorros**:
  - Buscar e exibir imagens aleatórias de cachorros usando a API Random.dog.
- **Busca de Pokémon**:
  - Pesquisar Pokémon pelo nome.
  - Visualizar informações detalhadas sobre Pokémon, incluindo estatísticas e habilidades.
- **Gerenciamento de Favoritos**:
  - Salvar filmes e Pokémon favoritos localmente para acesso rápido.
- **Design Responsivo**:
  - Otimizado para diversos tamanhos de tela e dispositivos.

## Índice

1. [Clonando o Repositório](#clonando-o-repositorio)
2. [Construindo o Projeto](#construindo-o-projeto)
3. [Executando o Projeto](#executando-o-projeto)
4. [Executando com Docker](#executando-com-docker)
5. [Bibliotecas de Terceiros](#bibliotecas-de-terceiros)
6. [Variáveis de Ambiente](#variaveis-de-ambiente)

---

## Clonando o Repositório

Para clonar o repositório, execute o seguinte comando:

```bash
git clone https://github.com/rafaelhuszcza/distributed-api-consume.git
cd distributed-api-consume
```

## Construindo o Projeto

Certifique-se de ter o Node.js instalado. Em seguida, execute o seguinte comando para instalar as dependências:

```bash
npm install
```

## Executando o Projeto

Para executar o projeto localmente, use o seguinte comando:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Executando com Docker

Se preferir executar o projeto em um ambiente containerizado, você pode usar o Docker. O projeto inclui um `Dockerfile` e um `docker-compose.yml` para simplificar o processo.

### Construir a imagem Docker

```bash
docker-compose build
```

### Executar os containers

```bash
docker-compose up
```

O projeto estará disponível em `http://localhost:3000`.

## Bibliotecas de Terceiros

### ShadCN UI

- **Motivo**: O ShadCN UI é utilizado para fornecer uma biblioteca de componentes consistente e personalizável, permitindo a construção rápida de interfaces de usuário.

### Outras Bibliotecas

- **Next.js**: Um framework React usado para renderização do lado do servidor e geração de sites estáticos.
- **Docker & Docker Compose**: Usado para executar o projeto em um ambiente containerizado, facilitando a implantação e escalabilidade.

## Variáveis de Ambiente

Para executar o projeto, certifique-se de que as seguintes variáveis de ambiente estejam definidas em um arquivo `.env` na raiz do seu projeto:

```
NEXT_PUBLIC_API_URL=your_api_url_here
NEXT_PUBLIC_API_KEY=your_api_key_here
```

Essas variáveis são necessárias para o funcionamento correto da aplicação.

---

# Movie Search with Crypto Conversion, Dog Images, and Pokémon Data

Available at: https://distribuidos.rafaelhuszcza.com/

This project is a multifaceted web application that allows users to:

- Search for movies and view their box office earnings converted into various cryptocurrencies.
- View random dog images for fun.
- Search for Pokémon and view detailed information about them.

It combines data from multiple APIs, including a movie API, the CoinGecko API, the Random.dog API, and the PokeAPI, to deliver an interactive and engaging user experience.

## Features

- **Movie Search**:
  - Search for movies using a movie database API.
  - View detailed movie information, including box office earnings.
  - Convert box office earnings into various cryptocurrencies in real-time.
  - Add and remove custom cryptocurrencies for conversion.
- **Random Dog Images**:
  - Fetch and display random dog images using the Random.dog API.
- **Pokémon Search**:
  - Search for Pokémon by name.
  - View detailed Pokémon information, including stats and abilities.
- **Favorites Management**:
  - Save favorite movies and Pokémon locally for quick access.
- **Responsive Design**:
  - Optimized for various screen sizes and devices.

## Table of Contents

1. [Cloning the Repository](#cloning-the-repository)
2. [Building the Project](#building-the-project)
3. [Running the Project](#running-the-project)
4. [Running with Docker](#running-with-docker)
5. [Third-Party Libraries](#third-party-libraries)
6. [Environment Variables](#environment-variables)

---

## Cloning the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/rafaelhuszcza/distributed-api-consume.git
cd distributed-api-consume
```

## Building the Project

Make sure you have Node.js installed. Then, run the following command to install dependencies:

```bash
npm install
```

## Running the Project

To run the project locally, use the following command:

```bash
npm run dev
```

The application should now be available at `http://localhost:3000`.

## Running with Docker

If you prefer to run the project in a containerized environment, you can use Docker. The project includes a `Dockerfile` and `docker-compose.yml` to simplify the process.

### Build the Docker image

```bash
docker-compose build
```

### Run the containers

```bash
docker-compose up
```

The project will be available at `http://localhost:3000`.

## Third-Party Libraries

### ShadCN UI

- **Reasoning**: ShadCN UI is used to provide a consistent and customizable component library for building user interfaces quickly.

### Other Libraries

- **Next.js**: A React framework used for server-side rendering and static site generation.
- **Docker & Docker Compose**: Used to run the project in a containerized environment, allowing for easier deployment and scaling.

## Environment Variables

To run the project, ensure you have the following environment variables set in a `.env` file in the root of your project:

```
NEXT_PUBLIC_API_URL=your_api_url_here
NEXT_PUBLIC_API_KEY=your_api_key_here
```

These variables are required for the application to function correctly.
