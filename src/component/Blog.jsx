import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-5xl p-3 font-[Lato] font-bold text-slate-700 text-center'>BLOG</h1>
          <p className='text-2xl p-2 font-[Lato] font-medium text-slate-600 text-center'>Here is some blog for recent populer question. Enjoy your self. Happy learing.</p>
          <hr className='w-[50%] m-auto mb-3'></hr>

          <div className='sm:m-24 m-[3rem]'>
            <h1 className='text-3xl font-bold font-serif text-center text-slate-700'>* ReactJS | Router</h1>
            <p className='text-slate-700 font-serif'>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

            React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.

            <h1 className='text-xl font-bold font-serif  text-slate-700'>Need of React Router</h1>
            React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
            
            <h1 className='text-xl font-bold font-serif  text-slate-700'>React Router Installation</h1>
            React contains three different packages for routing. These are:
            <ul>
              <li>1. react-router: It provides the core routing components and functions for the React Router  applications.  
              </li>
              <li>2. react-router-native: It is used for mobile applications.</li>
              <li>3. react-router-dom: It is used for web applications design.</li>
            </ul>
            <span className='border-l-blue-800 p-2 absolute border-2'>$ npm install react-router-dom --save   </span>
            </p>
          </div>

          <div className='sm:m-24 m-[3rem]'>
            <h1 className='text-3xl font-bold font-serif text-center text-slate-700'>* React Context API: What is it and How it works?</h1>
            <p className='text-slate-700 font-serif'>
            <h1 className='text-xl font-bold font-serif  text-slate-700'>What is Context API?</h1>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

            Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component:

            <h1 className='text-xl font-bold font-serif  text-slate-700'>React context API: How it works?</h1>
            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
            
            </p>
          </div>

          <div className='sm:m-24 m-[3rem]'>
            <h1 className='text-3xl font-bold font-serif text-center text-slate-700'>* useRef</h1>
            <p className='text-slate-700 font-serif'>
            useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
            Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

            You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with {/*<div ref={myRef}/>*/} , React will set its .current property to the corresponding DOM node whenever that node changes.

            However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

            This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a {/*{current: ...}*/} object yourself is that useRef will give you the same ref object on every render.

          Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.


            
            </p>
          </div>
        </div>
    );
};

export default Blog;