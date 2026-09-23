# Bloggie

Bloggie is a light, editorial-style multi-user blogging platform built with vanilla HTML/CSS/JavaScript, Node.js, Express and MySQL.

## Features
- Multi-user registration and JWT authentication
- Author profiles and avatar uploads
- Create, edit, delete, draft and publish posts
- Rich post editor with formatting, links, images and code blocks
- Categories and tags
- Search and pagination
- Comments and moderation
- Likes
- Author dashboard
- Admin dashboard and comment moderation
- MySQL relational data model
- Helmet, rate limiting, bcrypt, parameterized queries and HTML sanitization

## Local setup
1. Install Node.js and MySQL.
2. Open `backend` in a terminal.
3. Run `npm install`.
4. Create `backend/.env` from `.env.example`.
5. Import `database/schema.sql` into MySQL.
6. Run `npm start`.
7. Open `http://localhost:5001` in Chrome.

Do not use VS Code Live Server for this project. Express serves the frontend and API together.

## Admin account
The schema creates normal author accounts only. Promote a trusted account to admin after registration with:

```sql
UPDATE users SET role='admin' WHERE email='your-email@example.com';
```

Never commit `.env` or production secrets.
