# Movie Search with Crypto Conversion

Available at: https://distribuidos.rafaelhuszcza.com/

This project is a movie search application that allows users to search for movies and view their box office earnings converted into various cryptocurrencies. It combines data from a movie API and the CoinGecko API to provide up-to-date cryptocurrency conversions.

## Features

- Search for movies using a movie database API
- View movie details including box office earnings
- Convert box office earnings to various cryptocurrencies in real-time
- Add and remove custom cryptocurrencies for conversion
- Save favorite movies locally
- Responsive design for various screen sizes

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
