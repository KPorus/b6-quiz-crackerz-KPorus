import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Chart from './component/Chart';
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
    {path:"/",element:<Home></Home>,children:[
      {path:"/react",element:<Question></Question>}
    ]},
    {path:"/Chart",element:<Chart></Chart>}
    ]}
  ])
  return (
    <div>
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
