import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Chart from './component/Chart';
import ErrorPage from './component/ErrorPage';
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
