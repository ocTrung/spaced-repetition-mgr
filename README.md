# Spaced Repetition Manager

## Purpose
- Provides a way to manage and schedule review sessions for whatever you are learning. Helpful for situations where you are trying to learn multiple things at once.

![ezcv logo](https://raw.githubusercontent.com/ocTrung/spaced-repetition-mgr/main/public/screenshots/srm-login.png)
![ezcv logo](https://raw.githubusercontent.com/ocTrung/spaced-repetition-mgr/main/public/screenshots/srm-home.png)

## Technologies Overview
Next.js, React Hooks, Prisma ORM, PostgreSQL, NextAuth.js, ReactQuery

## Details
- Next.js allowed me to keep my frontend and backend code in one project
- PostgreSQL database to store users and their learning items  
- Prisma ORM to model data and query the PostgreSQL database
- Serverless functions for REST API endpoints
- NextAuth.js 
  - Authentication and authorization
  - Using this library with Next.js allowed me to validate a user's session inside "getServerSideProps" before sending the page to the user
- ReactQuery to cache server side data, increase performance on page loads, and reduce unecessary server requests