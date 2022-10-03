import React from "react";
import { Route, Routes } from "react-router-dom";
import Onbording from "../Pages/Onbording";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Privateroute from "../utils/PrivateRoute";
import { Shared } from "../Components/Log_Route/Shared.jsx";
import Projects from "../Components/Projects/Projects";
import DashboardHome from "../Components/Home/Home";
import Home from "../Pages/Home/Home";
import UserProfileEdit from "../Pages/ProfileEdit";
import HoursPage from "../Components/Calender/HoursPage";
import Pricing from "../Pages/Pricing/Pricing";
import DemoPage from "../Pages/DemoPageFolder/DemoPage";
import Clients from "../Components/Clients/Clients";
import Team from "../Components/Team/Team";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onbording />} />
        <Route
          path="/dashboard"
          element={
            <Privateroute>
              <Shared />
            </Privateroute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="/dashboard/time" element={<HoursPage />} />
          <Route path="/dashboard/project" element={<Projects />} />
          <Route path="/dashboard/client" element={<Clients/>} />
          <Route path="/dashboard/team" element={ <Team/>} />
          <Route path="/dashboard/report" element={<h1>report</h1>} />
          <Route path="/dashboard/setting" element={<h1>setting</h1>} />
          <Route path="/dashboard/profile" element={<UserProfileEdit />} />
          <Route path="/dashboard/signout" element={<h1>signout</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
