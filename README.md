# Harrods Hamper Shop

A full-stack shopping basket application for Harrods hampers, built using React for the frontend and Node.js with Express for the backend.

## Features

- **Product List View**: Displays a list of hampers available for purchase, each with an "Add to Basket" button.
- **Basket Functionality**: 
  - Users can add hampers to the basket, increase or decrease quantities, and remove hampers from the basket.
  - The basket dynamically calculates the total price based on quantities.
  - Validation ensures that items cannot be added to the basket beyond their available stock.
- **Purchase System**: 
  - On "Purchase" click, the basket data is submitted to the backend and written to a file.
  - A "Thank you" message is displayed after purchase.
- **API Integration**: 
  - Fetches product data from a provided API endpoint.
  - Posts purchase data to the backend for storage.
- **Responsive Design & Styling**: Styled with CSS for a polished, Harrods-like experience with improved spacing and layout.
- **Enhanced UX**: Improved notifications for errors and successful actions (e.g., toast messages).

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) for package management.

### Backend Setup (Node.js)

1. Navigate to the `harrods-backend` directory:
   ```bash
   cd harrods-backend


1. Navigate to the `harrods-backend` directory:
   ```bash
   cd harrods-backend
   ```

2. Install backend dependencies:
```bash
   npm install
   ```

3. Start the backend server:
```bash
   node server.js
   ```

4. Backend server will run at http://localhost:5001.

## Frontend Setup (React)

1. Navigate to the harrods-frontend directory:
```bash
   cd harrods-frontend
   ```

2. Install frontend dependencies:
```bash
   npm install
   ```

3. Start the frontend application:
```bash
   npm start
   ```

4. The React app will run at http://localhost:3000.

## Running the Full Application

1. Ensure both the backend and frontend are running:

Backend: http://localhost:5001
Frontend: http://localhost:3000

2. Open http://localhost:3000 in your browser to view the application.

## Usage
1. Adding Products to the Basket: Select products from the list on the left side and click "Add to Basket".
2. Viewing the Basket: Products added to the basket will appear on the right side. You can update the quantity or remove items.
3. Purchasing: Once you're satisfied with your selections, click the "Purchase" button. The basket data will be sent to the backend, and a confirmation will appear.

## Dependencies

## Backend
Express: Fast, unopinionated, minimalist web framework for Node.js.
CORS: Middleware for enabling Cross-Origin Resource Sharing.
Helmet: Helps secure the app by setting various HTTP headers.
Express-Rate-Limit: Basic rate-limiting middleware to prevent abuse.
Body-Parser: Node.js body parsing middleware for handling incoming request bodies (built-in with Express as of v4.16.0).

## Frontend 
React: A JavaScript library for building user interfaces.
PropTypes: Runtime type checking for React props.
CSS: Custom styles for a polished UI experience.
HTML-Webpack-Plugin: A plugin that simplifies creation of HTML files to serve webpack bundles (if using).

## Optional Enhancements
React Toastify (Optional): For better feedback messages to the user.
React-Icons (Optional): For using icons in the UI for a more polished look.


