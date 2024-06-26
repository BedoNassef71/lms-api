# LMS Microservice Project

This project consists of multiple microservices built with Node.js and Express.js, providing various functionalities for a Learning Management System (LMS). It includes services for user authentication, course management, and a proxy server for routing requests.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Security Considerations](#security-considerations)
- [Docker Configuration](#docker-configuration)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)
- MongoDB (running locally or accessible via URI)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/BedoNassef71/lms-microservice-api.git
```

2. Navigate to the project directory:

```bash
cd lms-microservice-api
```

3. Install dependencies for each microservice:

```bash
cd auth
npm install
cd ../courses
npm install
cd ../gateway
npm install
```

## Configuration

1. Create a `.env` file in the root directory of each microservice.

2. Define environment variables required for each microservice. Example `.env` files are provided in each microservice's directory.

## Usage

Start each microservice individually:

```bash
cd auth
npm start
```

```bash
cd courses
npm start
```

```bash
cd gateway
npm start
```

Alternatively, you can use Docker and Docker Compose for simplified deployment (see [Docker Configuration](#docker-configuration)).

## Endpoints

Each microservice provides its own set of endpoints. Refer to the API documentation or source code for more details on each endpoint.

## Security Considerations

Ensure the following security measures are in place:

- Use HTTPS to encrypt data transmitted between client and server.
- Implement input validation and sanitize user inputs to prevent injection attacks.
- Secure authentication and authorization mechanisms, such as JWT with bcrypt for password hashing.
- Set security headers to prevent common web vulnerabilities.
- Regularly update dependencies to address security vulnerabilities.

## Docker Configuration

This project includes a `docker-compose.yml` file for running the microservices using Docker Compose. Ensure Docker is installed on your system, then run:

```bash
docker-compose up
```

The services will be started and accessible on the specified ports.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
