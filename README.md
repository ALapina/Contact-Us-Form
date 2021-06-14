# Contact Us Form

## 🔗 Live Link / Demo Link:

- https://alapina.github.io/Contact-Us-Form/

## 🛠 Technologies Used:

- [SCSS](https://www.npmjs.com/package/sass-node)
- TypeSript
- React
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup) for form validation
- [React-Select](https://react-select.com/home)
- [REST API](https://restcountries.eu/) with list of countries and flags
- [Create React app](https://create-react-app.dev)
- [GitHub action](https://github.com/JamesIves/github-pages-deploy-action) for automatically build and deploy project to GitHub pages.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\

## Project Styling

I was choosing between Styled-components and SCSS for this project and decided to go with SCSS approach based on these reasons:

1. The final styles file have smaller size
2. The biggest benefit of having styles scoped for each component with Styled-components seemed like too much for a contact form page
3. Styles-components require more setup steps and adds additional wrapper around each React component

## Create React App

For development and final build I chose to use CreateReactApp based on these points:

1. I could concentrate on the logic, rather than on configuring my own Webpack build
2. CreateReactApp already use webpack, Babel, ESLint, and others under the hood.
3. And it's already includes a lot of optimizations that I would otherwise had to investigate and add myself

Also I'm using [GitHub action](https://github.com/JamesIves/github-pages-deploy-action) for easy no sweat automatically build and deploy project to GitHub pages

## React Hook Form

One of the core pieces of this project is handling the form. I already used [Formik](https://formik.org/) in the past project, but after analyzing the size of the library, decided to go with the next popular choice - [React Hook Form](https://react-hook-form.com/). Strong sides of this library:

1. Small size of the library
2. Does not depend on other libraries except React
3. Plays nice with Yup validation schema
4. Strong accessibility support
5. Easy to follow documentation that allowed me to use the library quite fast without prior experience with it

## Country Input with React Select

The contact form have a requirement that country input needs to show country flag for better user experience. I think that was one of the most challenging parts of the project:

- It is hard to style the browser native select input
- Native select option can only contain text

I investigated a few popular NPM packages for this feature:

1. [react-country-region-selector](https://www.npmjs.com/package/react-country-region-selector) - good lightweight selector with counties, but there is no flag information in the options
2. [react-flags-select](https://www.npmjs.com/package/react-flags-select) - Ready to use country select component, but the size of the library is huge ~1.8mb

The other option that I considered and with which I went in the end - is to fetch country list with flags from the open [REST API](https://restcountries.eu/) and use [React-Select](https://react-select.com/home) to display this information. The advantages of this approach:

1. Smaller build size compared to previously checked libraries
2. Fetching the country list is async and user is not blocked to start filling the form
3. React-select comes with autocomplete, which allows user to search the country rather than selecting it by scrolling
