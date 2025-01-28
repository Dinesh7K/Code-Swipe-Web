# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Create React using VITE (VITE+REACT)
Install tailwind-3.14.7 and init it,
Install DesiUi

Add NavBar
Use react Router

Routing is more important

Component level design

Body
    NavBar
    Route=/ =>Feed
    Route=/login =>Login
    Route=/connection =>Connection
    Route=/profile =>Profile
Login
    ----After API call
onclick=setPassword(e.targetvalue)
CORS error--An api call from x domain and y domain
          --Cross Origin Resource Sharing
Browser restricts but postman doesnt
Even port matters

Why cookies not set in if a request comes from one domain to another one because, in unsecure http it wont,
so we need to whitelist the domain

when we use cors,() we have send options and config
credentials

withCredentials--if it isnt used in axios it wont send the cookie to other api calls
inorder to check cook
    state for react
    "" intialize empty


Redux toolkit
Provider---Slices--Stores

Store-Reducer

Slices-Reducers

