# Bank Account Transaction Manager

A full-stack **Bank Account Transaction Manager** application that allows users to manage bank accounts and perform financial transactions through a simple web interface.

The project demonstrates the integration of a **React frontend** with a **Node.js/Express backend** and provides a practical example of full-stack application development.

---

## 📌 Features

* Create and manage bank accounts
* View account details
* Deposit money
* Withdraw money
* Transfer money between accounts
* View transaction history
* Track account balance
* REST API-based backend
* Interactive frontend interface
* Separate frontend and backend architecture
* Real-time communication between frontend and backend

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Vite

### Backend

* Node.js
* Express.js
* REST API

### Development Tools

* npm
* Git
* GitHub
* Visual Studio Code

---

## 📁 Project Structure

```text
bank-account-transaction-manager/
│
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   └── ...
│
├── frontend/
│   ├── package.json
│   ├── src/
│   ├── public/
│   └── ...
│
└── README.md
```

> The exact files and folders may vary depending on the implementation.

---

## ⚙️ Prerequisites

Before running the project, make sure you have installed:

* **Node.js**
* **npm**
* **Git** (optional, for version control)

Check your installations:

```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation and Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

Navigate to the project:

```bash
cd bank-account-transaction-manager
```

---

## 🔧 Backend Setup

Open a terminal and run:

```bash
cd backend
npm install
npm start
```

The backend server will run at:

```text
http://localhost:5000
```

### Backend API

```text
http://localhost:5000
```

The backend provides APIs for account and transaction management.

---

## 💻 Frontend Setup

Open a **second terminal** and run:

```bash
cd frontend
npm install
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

Open the URL in your browser:

```text
http://localhost:5173
```

---

## ▶️ Running the Project

You need **two terminals** running simultaneously.

### Terminal 1 — Backend

```bash
cd backend
npm install
npm start
```

Backend:

```text
http://localhost:5000
```

### Terminal 2 — Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

## 💰 Transaction Operations

The application can support common banking operations such as:

### Deposit

Adds money to a bank account.

```text
Account Balance
      ↓
   Deposit
      ↓
Updated Balance
```

### Withdrawal

Removes money from an account after validating the available balance.

```text
Account Balance
      ↓
  Withdrawal
      ↓
Check Balance
      ↓
Updated Balance
```

### Transfer

Transfers money from one account to another.

```text
Sender Account
      ↓
Validate Balance
      ↓
Deduct Amount
      ↓
Add Amount
      ↓
Receiver Account
```

---

## 🔌 API

The backend exposes REST APIs that can be consumed by the React frontend.

Typical operations may include:

| Operation      | HTTP Method | Purpose                      |
| -------------- | ----------- | ---------------------------- |
| Create Account | POST        | Create a new bank account    |
| Get Accounts   | GET         | Retrieve account information |
| Get Account    | GET         | Retrieve a specific account  |
| Deposit        | POST        | Add money                    |
| Withdraw       | POST        | Withdraw money               |
| Transfer       | POST        | Transfer money               |
| Transactions   | GET         | View transaction history     |

> API routes depend on the implementation of the backend.

---

## 🔐 Validation

The application should validate important banking operations, including:

* Valid account details
* Positive transaction amounts
* Sufficient balance before withdrawal
* Sufficient balance before transfer
* Valid sender and receiver accounts
* Required fields
* Invalid transaction handling

---

## 🖥️ Application Workflow

```text
User
 │
 ▼
React Frontend
 │
 │ HTTP Requests
 ▼
Node.js + Express Backend
 │
 ▼
Account / Transaction Logic
 │
 ▼
Response
 │
 ▼
React Frontend
```

---

## 📚 Learning Objectives

This project helps demonstrate:

* React component development
* Vite-based frontend development
* Node.js fundamentals
* Express.js server development
* REST API creation
* HTTP methods
* Frontend-backend communication
* JSON data handling
* CRUD operations
* Transaction management
* Error handling
* Full-stack project structure

---

## 🧪 Testing

Start both servers and test the application through the browser.

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000
```

You can also test backend APIs using tools such as:

* Postman
* Thunder Client
* Browser
* curl

---

## 🛑 Troubleshooting

### Backend does not start

Make sure you are inside the backend directory:

```bash
cd backend
npm install
npm start
```

### Frontend does not start

Make sure you are inside the frontend directory:

```bash
cd frontend
npm install
npm run dev
```

### Port already in use

If port `5000` or `5173` is already being used, stop the existing process or configure another port in the project.

### Cannot connect frontend to backend

Make sure the backend is running first:

```text
http://localhost:5000
```

Then start the frontend:

```text
http://localhost:5173
```

Also verify that the frontend API URLs point to the correct backend address.

---

## 🔮 Future Enhancements

Possible improvements include:

* User authentication and login
* JWT-based authorization
* MongoDB/PostgreSQL database
* User profile management
* Monthly transaction reports
* Transaction filtering
* Search functionality
* Pagination
* PDF bank statements
* Email notifications
* Admin dashboard
* Improved security
* Responsive mobile design

---

## 📸 Screenshots

Add screenshots of the application here after completing the UI.

```text
screenshots/
├── dashboard.png
├── account.png
├── transactions.png
└── transfer.png
```

Example:

```markdown
![Dashboard](screenshots/dashboard.png)
```

---

## 🔒 Security Note

This project is intended for **educational and demonstration purposes**.

Do not use this application to process real banking information, real customer data, passwords, or financial transactions without implementing appropriate security, authentication, authorization, encryption, auditing, and regulatory controls.

---

## 👩‍💻 Author

**Nidhi M**

Computer Science Engineering — Data Science

---

## 📄 License

This project is created for educational and learning purposes.

You may modify and use the source code for personal learning and academic projects.

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

