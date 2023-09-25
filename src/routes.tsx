import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contacts from "./components/Contacts/Contacts";
import AboutUs from "./components/aboutUs/aboutUs";
import WorkingHours from "./components/workingHours/workingHours";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "aboutus", element: <AboutUs /> },
      { path: "contacts", element: <Contacts /> },
      { path: "workinghours", element: <WorkingHours /> },
    ],
  },
]);
