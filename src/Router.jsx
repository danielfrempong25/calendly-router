import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Enterprise from "./Pages/Enterprise";
import Homepage from "./Pages/Homepage";
import Individuals from "./Pages/Individuals";
import Teams from "./Pages/Teams";
import Rootlayout from "./Layout/Rootlayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Homepage />} />
      <Route path="individuals" element={<Individuals />} />
      <Route path="teams" element={<Teams />} />
      <Route path="enterprise" element={<Enterprise />} />
    </Route>
  )
);
