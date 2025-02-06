# **Student Management System**

## **Overview**

This is a Student Management System built using **React** for the frontend and **Spring Boot** for the backend with a **MySQL** database. It allows users to manage student records efficiently, providing a simple interface to create, read, update, and delete student information.

---

## **Tech Stack**

- **Frontend:** React, Tailwind CSS
- **Backend:** Spring Boot, MySQL, Spring Data JPA
- **Database:** MySQL
- **API Communication:** RESTful APIs

---

## **Frontend Setup**

1. Clone the repository:
    ```bash
    git clone https://github.com/sankethanse/Student_Manage.git
    cd ./frontend
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```
    The app will be available at `http://localhost:5174`.

---

## **Backend Setup**

### **1. Set Up MySQL Database**

1. Create a database in MySQL:
    ```sql
    CREATE DATABASE student_db;
    ```

2. Update your `application.properties` with your MySQL credentials:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/student_db
    spring.datasource.username=root
    spring.datasource.password= "Put your password"
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver


    spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true

    ```

### **2. Run the Spring Boot Application**

1. Build the application (if using Maven):
    ```bash
    mvn clean install
    ```

2. Run the Spring Boot application:
    ```bash
    mvn spring-boot:run
    ```

   The backend will be available at `http://localhost:8080`.

---

## **API Endpoints**

### **1. Get All Students**

- **URL:** `/api/students`
- **Method:** GET
- **Description:** Fetches a list of all students.

**Example Response:**
```json
[
    {
        "id": 1,
        "name": "Alice Johnson",
        "age": 16,
        "className": "10th",
        "phoneNumber": "9876543210"
    },
    {
        "id": 2,
        "name": "Bob Smith",
        "age": 15,
        "className": "9th",
        "phoneNumber": "8765432109"
    }
]
```

---

### **2. Get Student by ID**

- **URL:** `/api/students/{id}`
- **Method:** GET
- **Description:** Fetches a student by their ID.

**Example Response:**
```json
{
    "id": 1,
    "name": "Alice Johnson",
    "age": 16,
    "className": "10th",
    "phoneNumber": "9876543210"
}
```

---

### **3. Create New Student**

- **URL:** `/api/students`
- **Method:** POST
- **Description:** Creates a new student record.

**Request Body:**
```json
{
    "name": "John Doe",
    "age": 14,
    "className": "8th",
    "phoneNumber": "1234567890"
}
```

**Example Response:**
```json
{
    "id": 3,
    "name": "John Doe",
    "age": 14,
    "className": "8th",
    "phoneNumber": "1234567890"
}
```

---

### **4. Update Student**

- **URL:** `/api/students/{id}`
- **Method:** PUT
- **Description:** Updates an existing student's details.

**Request Body:**
```json
{
    "name": "John Doe Updated",
    "age": 15,
    "className": "9th",
    "phoneNumber": "0987654321"
}
```

**Example Response:**
```json
{
    "id": 3,
    "name": "John Doe Updated",
    "age": 15,
    "className": "9th",
    "phoneNumber": "0987654321"
}
```

---

### **5. Delete Student**

- **URL:** `/api/students/{id}`
- **Method:** DELETE
- **Description:** Deletes a student by ID.

**Example Response:**
```json
{
    "message": "Student deleted successfully"
}
```

---

## **Contributing**

If you'd like to contribute to this project, please fork the repository and create a pull request with your proposed changes.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Final Notes**

- Ensure you have **Java 11** or higher for running the Spring Boot application.
- Make sure your MySQL server is running and that the credentials in `application.properties` are correct.
