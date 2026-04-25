Author
Paramdeep Singh and Karamjeet
RRC Polytech  Application Development and Delivery

Online Book Purchaser

This is a full stack web application where users can browse books, and logged-in users can add their own books and view them in “My Books”.

This project was built for Sprint 5 and mainly focuses on authentication and user-based data.

What the app does

Anyone can view the book catalog
Users can sign up and log in using Clerk
Logged-in users can:
Add new books
View only their own books
Each book is connected to the user who created it
Tech used

Frontend:

React
TypeScript
Vite
Clerk (authentication)

Backend:

Node.js
Express
Prisma
PostgreSQL
Authentication

Authentication is handled using Clerk.

Users can register and log in
Clerk provides session tokens
These tokens are sent to the backend for protected routes

Example:

/books → public
/books/mine → requires login

## Local Setup

1. Clone project
git clone https://github.com/rrcparam/Online-Book-purchase-.git
cd online-book-purchase
2. Backend setup
cd backend
npm install

Create a .env file:

DATABASE_URL="postgresql://postgres:PASSWORD@localhost:5432/online_book_purchase"
PORT=3001
FRONTEND_URL=http://localhost:5173

CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=_clerk_publishable_key

Run:

npx prisma generate
npx prisma migrate dev --name init
npm run dev

Backend runs on:

http://localhost:3001
3. Frontend setup
cd frontend
npm install

Create a .env file:

VITE_API_BASE_URL=http://localhost:3001
VITE_CLERK_PUBLISHABLE_KEY=_clerk_publishable_key

Run:

npm run dev

Frontend runs on:

http://localhost:5173

Main API routes
GET /books → get all books
GET /books/mine → get only logged-in user books
POST /books → add new book (logged-in only)

How user data works
When a user logs in, Clerk provides a user ID
Backend stores that ID in the database
Each book is linked to that user
/books/mine returns only books for that user

Notes
.env files are not included in the repository
PostgreSQL must be running locally
Clerk keys are required for authentication

