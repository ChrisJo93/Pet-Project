## Introduction

Pet Project is a pet management app that takes stock of current pet medications, grooming appointments, veterinarian appointments, and food/treat brands.

## Registration

Registration is a 4 part process. New Users will be asked to sign up using a unique username, a password, their email, and, optionally, their phone. Users will then be asked to include information about their pets. Pet information requires a pet name, a species, and a birth date for pets in order to process. It will also ask for weight, sex, breed, an image url, and the microchip should the pet be chipped. Registration will error out if the username is taken, or if the date inputs are not in dd-mm-yyyy format.

## User Page

The user page or landing page is where the new user will find a list of their pets. The user page is where a user can add a new pet by clicking the cat-outline. Clicking this silhouette yields the pet registration form. Pets rendered on the user page are also clickable. Selecting a pet moves the user to the pet details which displays information regarding that particular pet.

## Pet Details Page

The Pet Details page includes all these registered information associated with any one pet. This includes their sex, weight, breed, etc. Below the registered information are four (4) icons indicating different pages associated with that pet. From left to right the icons represent the Food Page,

## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.

- [Initial Set](https://vimeo.com/453297271)
- [Server Walkthrough](https://vimeo.com/453297212)
- [Client Walkthrough](https://vimeo.com/453297124)

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

- src/components
  - App/App
  - Footer/Footer
  - Nav/Nav
  - AboutPage/AboutPage
  - InfoPage/InfoPage
  - UserPage/UserPage
  - LoginPage/LoginPage
  - RegisterPage/RegisterPage
  - LogOutButton/LogOutButton
  - ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
