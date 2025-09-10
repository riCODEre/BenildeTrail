# BenildeTrail

A web application developed for Web Development class that enables comprehensive management of school organizations and
their memberships. BenildeTrail streamlines the process of organization administration, member tracking, and event
management within the school environment.

## Features

- **User Management**
  - Student account registration and authentication
  - Secure password hashing with bcrypt
  - Session-based authentication

- **Organization Management**
  - Create and manage school organizations
  - View organization details including name, acronym, and description
  - Admin panel for organization oversight

- **Membership Management**
  - Join organizations as a student
  - View organizations you're a member of
  - View members of organizations

- **Admin Functionality**
  - Admin dashboard for managing all organizations
  - Add new organizations to the system
  - View all registered students

## Technologies Used

- **Backend:**
    - Node.js
    - Express.js (v4.16.1)
    - SQLite3 (v5.1.6)
    - Sequelize ORM (v6.35.1)
    - bcrypt (v5.1.1) for password hashing

- **Frontend:**
    - EJS Templates (v2.6.1)
    - HTML5/CSS3
    - JavaScript

- **Other Dependencies:**
    - morgan (v1.9.1) for HTTP request logging
    - cookie-parser (v1.4.4) for cookie handling
    - express-session (v1.17.3) for session management
    - nodemon (v3.0.2) for development auto-restart
    - debug (v2.6.9) for debugging
    - http-errors (v1.6.3) for HTTP error handling

## Project Structure

```
BenildeTrail/
├── app.js                  # Main application entry point
├── bin/                    # Server startup scripts
├── controllers/            # Business logic
│   └── account.controller.js  # User, organization, and membership logic
├── db/                     # Database files
│   └── betrail.db          # SQLite database
├── models/                 # Data models
│   ├── account.model.js    # User account model
│   ├── index.js            # Database connection and model initialization
│   ├── org.model.js        # Organization model
│   └── orgmember.model.js  # Organization membership model
├── public/                 # Static assets
├── routes/                 # Route definitions
│   └── accounts.js         # All application routes
└── views/                  # EJS templates
    ├── admin.ejs           # Admin dashboard
    ├── dashboard.ejs       # User dashboard
    ├── login.ejs           # Login page
    ├── myOrg.ejs           # User's organizations
    ├── newOrg.ejs          # Create organization form
    ├── signup.ejs          # Registration page
    └── viewMember.ejs      # Organization members view
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ricCODEre/BenildeTrail.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Initialize the database:
   The application uses SQLite which will automatically create the database file at `db/betrail.db` when the application starts.

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Access the application:
    - Open your browser and navigate to `http://localhost:3001` (note the port number)
    - Register a new account or login with existing credentials

3. Admin Access:
    - The admin email is hardcoded as `admin@gmail.com`
    - Access the admin panel at `/admin` when logged in as admin

## API Endpoints

- **Authentication**
  - `GET /signup` - Registration page
  - `POST /signup` - Create new account
  - `GET /login` - Login page
  - `POST /login` - Authenticate user
  - `POST /logout` - End user session

- **Dashboard**
  - `GET /` - Main dashboard (authenticated)
  - `GET /dashboard` - User dashboard (authenticated)

- **Organizations**
  - `GET /admin` - Admin dashboard (admin only)
  - `GET /newOrg` - Create organization form (admin only)
  - `POST /newOrg` - Create new organization (admin only)
  - `POST /joinOrg` - Join an organization
  - `GET /myOrg` - View user's organizations

- **Members**
  - `POST /viewMember` - Set organization for member viewing
  - `GET /viewMember` - View members of an organization

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
