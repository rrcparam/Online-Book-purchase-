# Sprint 3 Architecture – Karmjeet Kaur

For Sprint 3, I refactored the wishlist part of the project to follow the hook-service pattern that we learned in class. In Sprint 2, most of the wishlist logic was inside the component, so I separated it properly in this sprint.

---

## wishlistService.ts

What it does:

This file contains the business logic for the wishlist. It handles adding a book, removing a book, and getting the current wishlist.

Why I created it:

In Sprint 2, the add and remove logic was written directly inside the component. That mixes UI with business logic. I moved that logic into a separate service file so that the component only focuses on displaying data.

Where it is used:

This service is used inside the custom hook `useWishlist`. The component does not directly use the service.

---

## useWishlist.ts

What it does:

This is a custom React hook that manages wishlist state. It connects the UI with the wishlistService. It returns:
- the current wishlist
- a function to add books
- a function to remove books

Why I created it:

Instead of passing wishlist and setWishlist through props (prop drilling), I created this hook to manage state in one place. This makes the code cleaner and easier to manage.

Where it is used:

The Wishlist page uses this hook. It can also be reused in other pages like Catalog in the future.

---

## Refactored Wishlist Page

What changed:

The Wishlist component no longer contains add/remove logic or uses props for state. It now just uses the custom hook.

Why this is better:

Now the component is only responsible for rendering the UI. All logic is separated into service and hook layers. This makes the project more organized and easier to maintain.

---

## Summary

In Sprint 3, I focused on improving the structure of the wishlist feature instead of adding new features. I separated business logic from UI logic and reduced prop drilling by using a custom hook.