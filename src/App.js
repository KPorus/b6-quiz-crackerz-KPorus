import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './component/Blog';
import ChartHome from './component/ChartHome';

import ErrorPage from './component/ErrorPage';
import Home from './component/Home';
import Question from './component/Question';
import Main from './layout/Main';

function App() {
  let route = createBrowserRouter([
    {path:"/",
    element:<Main></Main>,
    errorElement: <ErrorPage />,
    loader:async () =>
    {
      return fetch('https://openapi.programming-hero.com/api/quiz')
    },

    children:
    [
    {path:"/",element:<Home></Home>},
    {path:"/Chart",element:<ChartHome></ChartHome>},
    {path:"/Blog",element:<Blog></Blog>},
    {
      path:'/:name/:id',element:<Question></Question>,loader:async({params})=>
      {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      }
    }
    ]},
    
  ])
  return (
    <div>
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
