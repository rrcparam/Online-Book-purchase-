# Online Book Purchaser

## Team  
- **Team Name:** Logic Masters  
- **Team Members:**  
  - Karamjeet Kaur  
  - Paramdeep Singh  

---

## Project Description  
This project is an online book purchasing application where users can browse a catalog of books and view details such as title, author, price, and book cover images. Users can also save books to a wishlist so they can keep track of what they want to read or buy later.

The application is being developed in multiple sprints and is designed to grow with more features like user accounts, shopping carts, and order tracking in the future.

---

## User Stories  
- As a user, I want to browse a list of books, so I can explore different titles and authors.  
- As a user, I want to view book details like price and cover images, so I can better decide what I want to read or buy.  
- As a user, I want to add and remove books from a wishlist, so I can save my favorite books for later.  

---

## Sprint 1 Scope  
In Sprint 1, we focused on setting up the project using React and TypeScript. We created the base structure of the app, including a Book Catalog component that displays a list of books. We also added a Header and Footer and created a style guide to keep the design consistent across the application.

---

## Sprint 2 Scope  
In Sprint 2, we worked on turning the project into a multi-page application. We added navigation between pages using routing and connected the Catalog and Wishlist using shared state. We also added book images, a search feature for filtering books, and improved the overall layout and user experience.

---

## Work Breakdown  
- **Karamjeet Kaur:** Book Catalog page, Wishlist integration, search feature, and book images.  
- **Paramdeep Singh:** Header, navigation, Home page layout, and overall styling support.

## Sprint 3 
In Sprint 3, our main goal was to refactor the front-end architecture of the project. Instead of adding new features, we focused on improving how our code is organized.

We applied the hook–service–repository pattern to make our application more structured, reusable, and easier to maintain.

This sprint was about making the project better, not bigger.

## Parmdeep Singh
Created useBooks.ts to manage book data and search logic.
Implemented BookService.ts to handle business logic for books.Created BookRepository.ts to manage book test data and refactored the Catalog page to use the hook instead of handling logic directly inside the component , ensured book data was properly connected through the architecture layers.
## Karmjeet Kaur
Created useWishlist.ts to manage wishlist state using a custom hook.
Moved the add and remove logic into wishlistService.ts so that business logic is separated from the UI.
Also, created wishlistRepository.ts to handle test data and simulate CRUD operations and  refactored the Wishlist page to remove prop drilling and use the custom hook instead.
Documented  architecture decisions inside the architecture document.
## Sprint 4 
In this sprint, we focused on connecting the frontend with a backend server and database.

🔹 Backend Work
Created Express backend using TypeScript
Added REST API routes for books and wishlist
Implemented controller and service structure
Configured Prisma ORM with PostgreSQL database
🔹 Frontend Integration
Updated frontend services to call backend APIs
Replaced static data with API data
Connected wishlist functionality with backend
🔹 Testing
Tested API endpoints using Postman
Verified data is saved and retrieved correctly
Confirmed frontend is communicating with backend

## Karmjeet Kaur
Implemented wishlist backend (routes, controller, service)
Connected frontend wishlist with backend API
Tested API and handled integration issues
## Paramdeep Singh
Implemented book backend and database setup
Connected catalog with backend API
Worked on frontend integration and structure