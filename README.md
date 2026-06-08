# Full-Stack Todo Application with MySQL

A full-stack, lightweight Todo application built using a Node.js/Express REST API backend, a persistent MySQL database layer, and a clean HTML/CSS/JavaScript grid frontend interface.

## 🚀 Features
* **Full CRUD Functionality:** Seamlessly load and save items directly to a database.
* **Persistent Storage:** Keeps your todo courses and dates safe even after restarting your machine.
* **Environment Security:** Secure database credentials using hidden `.env` files to prevent exposure on GitHub.
* **Responsive Layout:** Grid-aligned responsive frontend design.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3 (CSS Grid), JavaScript (Fetch API)
* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **Dependencies:** `mysql2`, `cors`, `dotenv`, `nodemon`

## ⚙️ How to Run Locally

### 1. Database Setup
Run the following script in your MySQL workbench to create your table layout:
```sql
CREATE DATABASE todo;
USE todo;

CREATE TABLE todoItems (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    ItemDescription VARCHAR(255) NOT NULL,
    complted INT DEFAULT 0,
    dueDate DATE NULL
);
**2. Backend Environment Setup**
Create a .env file inside the p1/backend folder and populate your credentials:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=todo
PORT=3000

**3. Start the Server**
Navigate to your backend directory and run your server:
cd p1/backend
npm install
node server.js

**4. Launch Frontend**
Simply double-click and open p1/frontend/todos.html in any web browser!

Once you save this file, add, commit, and push it like normal:
```bash
git add README.md
git commit -m "Docs: add clean portfolio README guide"
git push origin main
