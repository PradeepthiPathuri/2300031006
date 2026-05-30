# Responsive Notification Dashboard

A responsive React-based Notification Dashboard built for evaluation purposes.
This project demonstrates component-based architecture, filtering, searching, pagination, responsive UI, and logging middleware integration.

---

## Features

* Responsive Dashboard UI
* Admin Panel to Add Notifications
* Search Notifications
* Filter Notifications
* Pagination
* Mark Notifications as Read
* Mark All Notifications as Read
* Unread Notification Count
* Priority-based Sorting
* Logging Middleware Integration
* Component-Based React Structure

---

## Tech Stack

* React.js
* Vite
* JavaScript
* CSS (Inline Styling)
* Fetch API

---

## Project Structure

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── NotificationCard.jsx
│   ├── NotificationList.jsx
│   ├── FilterBar.jsx
│   ├── Pagination.jsx
│   └── Footer.jsx
│
├── middleware/
│   └── logger.js
│
├── pages/
│   └── Notifications.jsx
│
├── App.jsx
└── main.jsx
```

---

## Functionalities Implemented

### Admin Panel

* Add new notifications dynamically
* Select notification type
* Auto timestamp generation

### Notification Features

* Read/Unread state
* Unread count in navbar
* Mark all notifications as read
* Priority sorting:

  * Placement
  * Event
  * Result

### Search & Filter

* Search notifications by message
* Filter notifications by category

### Pagination

* Previous / Next page navigation

### Logging Middleware

User actions are logged using middleware integration:

* Notification added
* Filter changed
* Notification opened
* Mark all read

---

## Responsive Design

The application is responsive across:

* Desktop
* Tablet
* Mobile Devices

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/2300031006.git
```

### Install Dependencies

```bash
npm install
```

### Run Project

```bash
npm run dev
```

---

## Screenshots Included

* Desktop UI
* Filter Functionality
* Notifications Dashboard


---


