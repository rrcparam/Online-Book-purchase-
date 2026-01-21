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
 