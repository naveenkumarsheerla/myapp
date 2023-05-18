
import {  RouterProvider,  createBrowserRouter, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import { DisplayData } from './commponent/Displaydata';
import {  useState } from "react";
import { CardInfo } from "./commponent/Card";
import { Store } from "./commponent/Store";
import { MainPage } from "./commponent/MainPage";



function App() {
  const [data, setData] = useState(Store)

  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainPage items={data}/>
    },
    {
       path:'/:name',
       element:<DisplayData items={data} />,
    },
    {
      path:'/:name/:id',
      element:<CardInfo data={data} />
    }
  ])

  return (
  //  <Routes>
  //   <Route path="/" element={<DisplayData items={data} /> } />
  //   <Route path="/:id" element={<CardInfo data={data} />} />
  //  </Routes>

  <RouterProvider router={router}/>

  );
}

export default App;
