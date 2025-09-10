# BenildeTrail

A web application developed for Web Development class that enables comprehensive management of school organizations and
their memberships. BenildeTrail streamlines the process of organization administration, member tracking, and event
management within the school environment.

## Features

- Organization Management
- Member Registration and Management
- Event Planning and Tracking
- User Authentication and Authorization
- Member Activity Monitoring
- Organization Reports Generation

## Technologies Used

- **Backend:**
    - Node.js
    - Express.js (v4.16.1)
    - SQLite3 (v5.1.6)
    - Sequelize ORM (v6.35.1)
    - bcrypt (v5.1.1)

- **Frontend:**
    - EJS Templates (v2.6.1)
    - HTML5/CSS3
    - JavaScript

- **Other Dependencies:**
    - morgan (v1.9.1)
    - cookie-parser (v1.4.4)
    - express-session (v1.17.3)
    - nodemon (v3.0.2)
    - debug (v2.6.9)
    - http-errors (v1.6.3)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/BenildeTrail.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
    - Create a `.env` file in the root directory
    - Add necessary environment variables

4. Initialize the database:
   ```bash
   npm run db:init
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Access the application:
    - Open your browser and navigate to `http://localhost:3000`
    - Login with your credentials

## Development

To contribute to the project:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Contributors

- [Your Name]
- [Other Contributors]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
