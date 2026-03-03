Architecture Document  Paramdeep Singh (Sprint 3)


In Sprint 3, I refactored the Book-related features of the application to follow the Hook → Service → Repository architecture.

My  goal was to clear to  separate:

Presentation Logic (Hooks)

Business Logic (Services)

Data Access Logic (Repositories)

This improves  readability and prepares the application for future backend integration.

1. BookRepository
What does it do?

BookRepository manages access to book data.
It provides CRUD-like methods for interacting with book resources.

It currently imports test data from bookData.ts.

Why this logic belongs here

Repository layer is responsible for data access only.
It does NOT handle filtering, validation, or UI logic.

This ensures that when we replace test data with a backend (API or database), only this layer needs modification.

Where is it used?

It is used inside:

BookService

Components do NOT directly access the repository.

2. BookService
What does it do?

BookService contains business logic related to books, such as:

Filtering books

Searching books

Sorting (if applicable)

Why this logic belongs here

Business rules should not exist inside components.
By moving this logic into a service, components remain focused on rendering UI.

Where is it used?

It is used inside:

useBooks hook

Components never call the service directly.

3. useBooks Hook
What does it do?

useBooks manages presentation logic and UI state:

Holds book list state

Manages search input state

Calls BookService

Returns data to components

Why this logic belongs here

Hooks are responsible for presentation state logic.
They coordinate between service and UI without mixing concerns.

Where is it used?

It is used in:

Catalog page

Architectural Separation Summary
Layer	Responsibility
Repository	Data access (test data for now)
Service	Business logic
Hook	UI state & presentation logic
Component	Rendering UI

This structure prepares the project for future backend 
integration using APIs or a PostgreSQL database without changing UI components.

Future Improvements

In the next module, the repository layer can be updated to:

Fetch data using API calls

Connect to a backend using PostgreSQL

Handle async operations and error states