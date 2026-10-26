# Hospital OP Management System

A web-based Hospital Outpatient (OP) Management System designed to simplify patient registration, doctor management, appointment scheduling, and patient record management.

## 🚀 Project Overview

The Hospital OP Management System provides a centralized platform for managing outpatient operations in a hospital. It includes a React-based user interface, a Spring Boot backend REST API, and a MySQL database for storing and managing hospital data.

## ✨ Features

- **Patient Management**

  - Register new patients.
  - Generate OP numbers for patient records.
  - View and search patient details.
  - Update patient information and delete records.

- **Doctor Management**

  - Add, view, edit, and delete doctor records.
  - Manage doctor specialization, department, and qualifications.
  - Store doctor contact details, floor, and room number.
  - Track doctor availability status.

- **Appointment Management**

  - Assign doctors to patients.
  - Schedule appointment dates and times.
  - Manage appointment status.
  - Update floor and room details.

- **Dashboard**

  - Navigate between patient, doctor, and appointment management sections.
  - Access hospital management features through a centralized interface.

## 🛠️ Technologies Used

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Axios
- React Router
- React Icons

### Backend

- Java 21
- Spring Boot 3.5.16
- Spring Web
- Spring Data JPA
- Hibernate
- Maven

### Database

- MySQL

### Development Tools

- Visual Studio Code
- IntelliJ IDEA (optional)
- Git
- GitHub

## 📁 Project Structure

```text
hospitalop/
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
│
├── .gitignore
└── README.md
```

*Note: The folder structure above is illustrative. Adjust it to match your actual project files.*

## ⚙️ Prerequisites

Install the following software before running the project:

- Java Development Kit (JDK) 21
- Node.js and npm
- MySQL Server
- Maven, or the Maven Wrapper included in the project
- Git (optional, for version control)

## 🗄️ Database Configuration

1. Start your MySQL server.
2. Create a database for the project.

```sql
CREATE DATABASE hospitalop;
```

3. Open `backend/src/main/resources/application.properties`.
4. Configure the database connection using your own MySQL username and password.

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/hospitalop
spring.datasource.username=YOUR_MYSQL_USERNAME
spring.datasource.password=YOUR_MYSQL_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

server.port=8080
```

Replace the placeholder credentials with your local configuration. Do not upload actual database passwords or other secrets to GitHub.

## ▶️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/JayanthanJK/hospital-op-management-system.git
cd hospital-op-management-system
```

Replace `YOUR_USERNAME` with your GitHub username.

### 2. Run the Spring Boot Backend

Open a terminal and navigate to the backend directory:

```bash
cd backend
mvn spring-boot:run
```

The backend API will run at:

`http://localhost:8080`

### 3. Run the React Frontend

Open a **second terminal** from the project root:

```bash
cd frontend
npm install
npm run dev
```

Open the frontend URL displayed in the terminal. With the default Vite configuration, it is usually:

`http://localhost:5173`

Keep both terminals running while using the application.

## 🔗 API Endpoints

Base URL: `http://localhost:8080`

### Patient APIs

| Method | Endpoint                             | Description                |
| ------ | ------------------------------------ | -------------------------- |
| POST   | `/api/patients`                      | Register a patient         |
| GET    | `/api/patients`                      | Retrieve all patients      |
| GET    | `/api/patients/{id}`                 | Retrieve a patient by ID   |
| GET    | `/api/patients/search?keyword=value` | Search patients            |
| PUT    | `/api/patients/{id}/appointment`     | Update appointment details |
| DELETE | `/api/patients/{id}`                 | Delete a patient           |

### Doctor APIs

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| POST   | `/api/doctors`      | Add a doctor            |
| GET    | `/api/doctors`      | Retrieve all doctors    |
| GET    | `/api/doctors/{id}` | Retrieve a doctor by ID |
| PUT    | `/api/doctors/{id}` | Update doctor details   |
| DELETE | `/api/doctors/{id}` | Delete a doctor         |

*These endpoints reflect the current project design described in this README. Confirm them against your implemented controllers.*

## 🔐 Security and Privacy

- Keep database credentials and API secrets private.
- Do not commit real patient information or medical records to a public repository.
- Use test data during development.
- Configure authentication and role-based access control before using the system with real patient data.
- Configure production database access and HTTPS before deployment.

## 🔮 Future Enhancements

- Patient appointment confirmation notifications through email or SMS.
- Role-based access for administrators, doctors, and reception staff.
- Appointment history and reporting.
- Improved dashboard analytics.
- Deployment to a cloud server.

## 👨‍💻 Author

**Your Name**

GitHub: [https://github.com/JayanthanJK](https://github.com/JayanthanJK)

##
