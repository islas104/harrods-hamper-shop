# Harrods Hamper Shop - Technical Test

This project is a single-page application (SPA) that demonstrates a shopping basket functionality for Harrods hampers. Users can add products to their basket, adjust quantities, view the total, and proceed to purchase. This project was created as a proof of concept for the Harrods Digital Developer Technical Test.

## Features
- List of products fetched from a JSON file or an API endpoint.
- Add products to the basket.
- Remove products from the basket.
- Adjust quantities of products in the basket.
- Display total price for the basket.
- Purchase functionality that writes the basket data to a file or API.
- Responsive design using React and CSS to ensure a clean and elegant look.

## Technologies Used
- **React**: Frontend library for building the user interface.
- **CSS**: For styling and layout.
- **Express.js**: For backend API that handles purchase submissions.
- **Node.js**: Server runtime for handling backend functionality.

## Project Structure
The project consists of two main parts:
1. **Frontend** (React SPA):
   - Displays products.
   - Handles user interactions with the basket.
   - Allows the user to proceed with a purchase.
   
2. **Backend** (Express.js):
   - Serves the product list.
   - Receives purchase data and writes it to a file.

## Installation and Setup

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (version 14.x or later)
- **npm** (comes with Node.js)

### Getting Started
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/harrods-hamper-shop.git
   cd harrods-hamper-shop
    ```

2. Install frontend dependencies:
```bash
cd harrods-frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../harrods-backend
npm install
```

4. Start the frontend server:
```bash
cd ../harrods-frontend
npm start
```

The frontend will start running at http://localhost:3000.

5. Start the backend server:
```bash
cd ../harrods-backend
node server.js
```

The backend will start running at http://localhost:5001.

## API Endpoints
The backend provides the following API endpoints:

GET /products: Fetches the list of products available for purchase.
POST /purchase: Submits the purchase data.

## Running the Application
1. After starting both the frontend and backend servers, you can access the application at http://localhost:3000.
2. Add products to the basket, adjust quantities, and remove items.
3. Click the Purchase button to finalize your order.

## Known Issues and Limitations
This is a proof-of-concept application with minimal validations.
No real payment gateway is integrated.

## Future Improvements
Add product filtering and sorting.
Integrate with a real API for product data and payments.
Add unit and integration tests for both the frontend and backend.