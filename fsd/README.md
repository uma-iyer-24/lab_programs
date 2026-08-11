# Web Technology Lab

## Week 1

### 1(a) HTML Web Page

Create a web page using HTML that contains:
- A heading
- An image
- Two hyperlinks

Requirements:
- Each hyperlink should open a new page in the same web browser.
- Each new page should contain a **"Go Back"** link.
- The **"Go Back"** link should navigate back to the main page.

### 1(b) HTML Registration Form

Write an HTML program to create a registration form containing:
- User Name
- Password
- Date of Birth
- Gender
- Mail ID
- Contact Number
- Address
- Submit Button

---

## Week 2

### 2(a) CSS Position Property

Create a web page to demonstrate the **Position Property in CSS**.

### 2(b) Newspaper Style Design

Create a newspaper-style web page using **HTML and CSS**.

Requirements:
- Display a minimum of two articles.
- Arrange the articles in a newspaper-style layout.

---

## Week 3

### 3(a) JavaScript Background Color

Write a JavaScript program to change the background color of a web page when the **"Change Color"** button is clicked.

### 3(b) JavaScript Registration Validation

Write a JavaScript program to validate a registration page using **Regular Expressions**.

---

## Week 4

### 4(a) jQuery Hide and Show

Write a jQuery program to hide and show an element at a periodic interval without requiring any action from the user.

### 4(b) jQuery Star Rating System

Write a program to create and implement a **Star Rating System** using jQuery.

---

## Week 5

### 5(a) ReactJS Class and Instance

Write a program to demonstrate **Class and Instance** concepts using ReactJS.

### 5(b) ReactJS Calculator

Write a ReactJS program to create a basic calculator that performs:
- Addition
- Subtraction
- Multiplication
- Division

---

## Week 6

### 6(a) ReactJS Event Handling

Demonstrate simple **Event Handling** examples using ReactJS.

### 6(b) ReactJS Voting Application

Write a ReactJS program to create a simple **Voting Application System**.

---

## Week 7

### 7(a) Hello World Using Servlet

Create a web page to display **"Hello World"** using a Servlet.

### 7(b) Servlet-Based Web Application

Implement a web application using Servlet with the following functionality:

- Take a user's name as input.
- On submission, display a **"Hello `<name>`"** page.
- Display the start time at the top-right corner of the page.
- Provide a **Logout** button.
- On clicking the Logout button, display a logout page containing:
  - **"Thank You `<name>`"** message
  - Duration of usage

> **Hint:** Use a session to store the user's name and start time.

---

## Week 8

### 8(a) JSP Factorial Program

Write a JSP program to find the **factorial of a given number**.

### 8(b) JSP User Validation

Create a user validation web application using JSP.

Requirements:
- Allow the user to submit a login name and password.
- Check the submitted credentials against data stored in a database.
- If the credentials match, display a **successful login page**.
- Otherwise, display a **failure message** to the user.

---

## Week 9

### 9(a) Spring Web MVC

Demonstrate a simple example of the **Spring Web MVC Framework**.

### 9(b) Spring CRUD Application

Illustrate database connectivity in the **Spring Framework** by creating a simple **CRUD application**.

The application should demonstrate:
- Create
- Read
- Update
- Delete

operations using a database.

---

## Week 10

### 10(a) Hibernate Application

Create a simple **Hibernate Application** using Eclipse IDE.

### 10(b) Hibernate Query Language

Create an application to demonstrate **Hibernate Query Language (HQL)**.

---

## Week 11 & Week 12

# Case Study 1: Chat Module / Interface

Create a **Chat Module/Interface** using:

- HTML
- CSS
- JavaScript

The chat interface should primarily consist of two segments:

### Message Header

The message header should be displayed at the top of the chat box and include:

- User's name
- Avatar/Profile image
- User's last seen status

The **last seen** indicates the last time the user was active.

### Chat Box

The chat box should consist of:

#### Message Page

The message page should display:

- Incoming messages
- Outgoing messages
- Avatars of the senders
- Time at which each message was sent

#### Message Bottom

The message bottom section should contain:

- An input field where the user can type messages
- A **Send** button to send messages

---

## Week 13 & Week 14

# Case Study 2: Online Learning Platform

Create an **Online Learning Platform** using ReactJS for frontend development.

### Frontend — ReactJS

Use ReactJS to build a modular and reusable user interface.

The platform should include reusable components for:

- Course Listings
- Interactive Quizzes
- User Dashboards

### Database — MySQL

Use **MySQL** as the database system for storing:

- User Profiles
- Course Data
- Learning Progress

### Backend — Spring Framework

Use the **Spring Framework**, specifically **Spring MVC architecture**, for handling:

- Server-side logic
- User authentication
- Course enrollment management

### Overall Architecture

```text
ReactJS → Spring MVC → MySQL
