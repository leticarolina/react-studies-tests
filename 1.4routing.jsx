//------------ 70. ROUTING
//routing enables navigation between different parts of your React application without the need for a full page reload.
//However routing without a library like using switch cases to change between pages components WILL cause the full rerender.
//React Router is a widely-used routing library for React applications, providing a declarative way to handle client-side routing. It enables developers to define routes, handle URL changes, and render different components based on the current route.

//Yes, using the <Page/> component in Next.js removes the explicit need for routing in React applications to a large extent.
//BUT
//scenarios where knowledge of React Router might still be beneficial:
// 1. Working on Non-Next.js Projects
// 2.Understanding Routing Concepts: Even if you primarily use Next.js, learning about routing concepts in React can deepen your understanding
// 3. Custom Routing Logic: Next.js provides automatic routing based on the file structure in the pages directory. While this works well for many cases, there might be scenarios where you need more fine-grained control over routing or need to implement custom routing logic.

//-------------------------- 71.REACT ROUTER BASICS --------------------//
//Installing the library react router
//npm i react-router-dom

//good practice create a file just for the router (router.jsx)
//1. import the 'createBrowserRouter' + all components page file
//2. create a export variable to store the 'createBrowserRouter()'
export let routes;
//3. inside the 'createBrowserRouter()' function create an array of objects "array of routes"
//4.each object has key "path" > this will be the url "/about", 'element' this will be the component itself <About /> >
routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
]);
//4. inside the actual root react file need to import the 'routes' variable
