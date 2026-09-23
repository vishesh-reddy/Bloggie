# Bloggie

Bloggie is a light, editorial-style multi-user blogging platform where writers can publish stories, build profiles, interact through comments and likes, and manage content from a personal dashboard.

## Highlights
- Multi-user registration and JWT authentication
- Author profiles and avatar uploads
- Rich-text writing and editing with Quill
- Draft and published workflows
- Categories, tags, search, and pagination
- Comments, moderation, and likes
- Personal author dashboard
- Admin statistics and user management
- MySQL relational data model
- HTML sanitization, parameterized SQL, Helmet, and rate limiting
- Responsive light editorial UI

## Architecture
```text
Bloggie/
├── backend/
│   ├── config/       # MySQL connection
│   ├── controllers/  # Application/business logic
│   ├── middleware/   # JWT auth, roles, uploads, errors
│   ├── routes/       # REST API endpoints
│   ├── utils/        # Token and validation helpers
│   └── server.js     # Express entry point
├── database/
│   └── schema.sql    # Relational schema
├── frontend/
│   ├── assets/
│   ├── css/
│   ├── js/
│   └── *.html
└── tests/
    └── health.test.js
```

### Request flow
```text
Browser → HTML/CSS/JS → Express REST API → JWT middleware/controllers → MySQL
```

## Tech Stack
Frontend: HTML, CSS, JavaScript, Quill  
Backend: Node.js, Express.js  
Database: MySQL  
Authentication: JWT + bcrypt  
Security: Helmet, rate limiting, sanitize-html, parameterized queries

## Local setup
1. Install Node.js and MySQL.
2. Open `backend`.
3. Run `npm install`.
4. Create `backend/.env` from `.env.example`.
5. Import `database/schema.sql`.
6. Run `npm start`.
7. Open `http://localhost:5001`.

Admin setup:
```sql
UPDATE users SET role='admin' WHERE email='your-email@example.com';
```


## System Architecture

```mermaid
flowchart LR
    W[Writer / Reader / Admin] --> UI[Web UI HTML CSS JavaScript]
    UI --> API[Express REST API]
    API --> AUTH[JWT + bcrypt]
    AUTH --> CTRL[Controllers]
    CTRL --> DB[(MySQL)]
    CTRL --> S[Posts / Categories / Tags]
    CTRL --> C[Comments & Likes]
    CTRL --> P[Profiles & Uploads]
    CTRL --> ADM[Admin Tools]
```

## Publishing Workflow

```mermaid
flowchart TD
    A[Create Story] --> B[Rich Text Editor]
    B --> C{Save as}
    C -->|Draft| D[Draft]
    C -->|Publish| E[Published Post]
    E --> F[Public Feed]
    F --> G[Likes & Comments]
    G --> H[Author Dashboard]
```

## User Roles

```mermaid
flowchart LR
    R[Reader] --> F[Public Feed]
    W[Writer] --> D[Dashboard]
    W --> E[Editor]
    E --> P[Publish / Draft]
    A[Admin] --> M[Administration]
    M --> U[User & Content Management]
```
