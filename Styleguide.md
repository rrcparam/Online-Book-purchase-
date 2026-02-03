## Styleguide for our theme 
This is the styleguide explains how we re stlying our theme for our final project and also this will update everytime if we need to make changes in our plan and according to sprint requirenments.

# Color Palette 
- Primary Color:  #1E90FF (Use for buy buttons, book titles and highlights.)
- Secondary Color: #222222 (Headings and main text.)
- Background Color: #F5F5F5 (Overall background of the application.)
- Card Background: #FFFFFF (Background for book cards.)
- Border Color: #DDDDDD (Borders and dividers.)

## Fonts 
Main fonts are Arial, sstem-ui, sans-serif;

# Font Weights
Headings: Bold  
- Normal text: Regular  

## Size of Fonts
App Title (H1): **32px**
- Section Title (H2): **28px**
- Book Title (H3): **20px**
- Normal Text (p): **16px**
- Small Text: **14px**

**Spacing and Layout**
Page sections use **padding of 24px**
- Book cards use **padding of 16px**
- Space between cards is about **16px 20px**
- Cards and sections use **rounded corners**

# Buttons
**Buy Button Style**
- Background color: **#1E90FF**
- Text color: **White**
- Border radius: **8px**
- On hover: button becomes a darker blue

## Book gride design 
 Books are shown in a **grid layout**
- Grid adjusts based on screen size:
  - Desktop: multiple columns
  - Tablet: 2 columns
  - Mobile: 1 column
- Each book is inside a **card with a border and shadow on hover**

## Navigation Bar

- Navigation is placed at the top inside the header
- Uses buttons for:
  - Home
  - Search
  - Wishlist
  - Shop

## Accessibility Rules

- Headings follow order: **H1 → H2 → H3**
- Text color is dark on light background for easy reading
- Buttons are real `<button>` elements for keyboard access

For Sprint 1, all data is static:
- Books come from a local array in the component
- Buy and navigation buttons are for UI display only
- No backend, login, or database is connected yet
 
## Sprint 2 
This style guide explains how the design and layout are handled in Sprint 2. The focus of this sprint is on multi-page navigation, shared state (wishlist), and keeping a consistent look across Home, Catalog, and Wishlist pages.

---

## Color Palette  
- **Primary Blue:** `#1E90FF`  
  Used for main action buttons like “Add to Wishlist” and “Browse Books”.  
- **Dark Blue (Hover):** `#18036D`  
  Used for button hover effects.  
- **Background Gray:** `#F5F5F5`  
  Used as the main background for all pages.  
- **White:** `#FFFFFF`  
  Used for cards, book sections, and content areas.  
- **Text Dark Gray:** `#222222`  
  Used for headings and body text.

---

## Fonts  
- **Main Font:** `Arial, system-ui, sans-serif`  
  Used across all pages for consistency and readability.

---

## Font Sizes  
- **Page Title (H1):** 32px  
- **Section Titles (H2):** 26–28px  
- **Book Titles (H3):** 20px  
- **Body Text (p):** 16px  
- **Small Text:** 14px  

---

## Layout Rules  
- The app uses a **shared Header and Navigation bar** that stays the same across all pages.  
- Pages are separated into clear sections using `<section>` elements.  
- The main content is centered with padding for better spacing and readability.  
- The layout supports both desktop and mobile screens.

---

## Navigation  
- Navigation is placed at the top inside the Header.  
- Links/buttons include:  
  - Home  
  - Catalog  
  - Wishlist  
- The active page should be visually clear to the user.

---

## Book Catalog Design  
- Books are displayed in a **responsive grid layout**.  
- Each book is shown in a **card** that includes:  
  - Book image  
  - Title  
  - Author  
  - Price  
  - Wishlist button  
- Cards have rounded corners and a light shadow on hover.

---

## Wishlist Design  
- Wishlist displays books in a simple list or card format.  
- Users can remove books directly from the Wishlist page.  
- The wishlist count is shown in the Header and updates in real time.

---

## Forms and Inputs  
- Search input is placed at the top of the Catalog page.  
- Input fields use light borders and clear placeholder text.  
- Changes in the search field update results immediately.

---

## Accessibility Rules  
- Headings follow a clear order: **H1 → H2 → H3**.  
- Text has strong contrast against background colors.  
- Buttons and inputs can be used with a keyboard.  
- Images include `alt` text for screen readers.

---

## Sprint 2 Notes  
- Routing is handled using React Router.  
- Shared state for the wishlist is managed in `App.tsx` and passed to pages as props.  
- All book data is still static and stored locally in the Catalog component.  
- No backend or database is connected in this sprint.