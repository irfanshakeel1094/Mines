import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { ProductDetection } from "./components/ProductDetection";
import { Weighbridge } from "./components/Weighbridge";
import { Inventory } from "./components/Inventory";
import { Reports } from "./components/Reports";
import { VehicleEntry } from "./components/VehicleEntry";
import { Customers } from "./components/Customers";
import { Employees } from "./components/Employees";
import { Billing } from "./components/Billing";
import { SystemArchitecture } from "./components/SystemArchitecture";
import { Login } from "./components/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/dashboard",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "vehicle-entry", Component: VehicleEntry },
      { path: "detection", Component: ProductDetection },
      { path: "weighbridge", Component: Weighbridge },
      { path: "inventory", Component: Inventory },
      { path: "customers", Component: Customers },
      { path: "employees", Component: Employees },
      { path: "billing", Component: Billing },
      { path: "reports", Component: Reports },
      { path: "system", Component: SystemArchitecture },
    ],
  },
]);
