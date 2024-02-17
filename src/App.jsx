import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/router';
import './App.css'
import BasicTable from './trash/BasicTable/BasicTable';
import CircularChart from './components/ui/CircularChart';
import CustomerReview from './trash/CustomerReview/CustomerReview';
import LineChart from './components/ui/LineChart';
import MainDash from './trash/MainDash/MainDash';
import SemicircleChart from './components/ui/SemicircleChart';
import SemicircleGauge from './components/ui/SemicircleGauge';
import TopTable from './components/ui/ShipTable';
import { useState } from 'react';
import Monitor from './components/layout/monitor/Monitor';
import VerticalTab from './components/layout/vertical_tab/VerticalTab';




const router = createBrowserRouter(routes);

const App = () => {
  

  return (

    <RouterProvider router={router} />

  )
};

export default App;