import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contacts from "./pages/Contacts/Contacts";
import AboutUs from "./pages/aboutUs/aboutUs";
import WorkingHours from "./pages/workingHours/workingHours";

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
