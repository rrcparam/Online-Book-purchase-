# Sprint 3 Architecture – Karmjeet Kaur

For Sprint 3, I refactored the wishlist feature to follow the hook-service-repository pattern.

## Wishlist Repository

This file manages the data layer for the wishlist. It defines basic CRUD methods and initializes test data. It does not contain UI or business logic.

## Wishlist Service

The service handles business logic and connects the hook to the repository. It keeps logic separate from presentation.

## useWishlist Hook

This custom hook manages state for the wishlist and connects the component to the service.

## Wishlist Page

The page only handles UI and uses the hook instead of managing state directly.

This structure improves separation of concerns and reduces prop drilling.