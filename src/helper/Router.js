import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/Admin/dashboard";
import Orders from "../pages/Admin/orders";

import ForgotPass from "../pages/Public/ForgotPass";
import Home from "../pages/Public/Home";
import History from "../pages/Public/History";
import HistoryDetails from "../pages/Public/HistoryDetails";
import NotFound from "../pages/404";
import Payment from "../pages/Public/Payment";
import Product from "../pages/Public/Product";
import ProductDetails from "../pages/Public/ProductDetails";
import Profile from "../pages/Public/Profile";

import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

import PrivateElement from "../components/PrivateElement";
import PrivateElementAfterLogin from "../components/PrivateElementAfterLogin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signin"
          element={
            <PrivateElementAfterLogin>
              <SignIn />
            </PrivateElementAfterLogin>
          }
        />
        <Route
          path="/signup"
          element={
            <PrivateElementAfterLogin>
              <SignUp />
            </PrivateElementAfterLogin>
          }
        />
        <Route path="/products" element={<Product />} />
        <Route path="/products?" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route
          path="/profile"
          element={
            <PrivateElement>
              <Profile />
            </PrivateElement>
          }
        />
        <Route path="/forgot" element={<ForgotPass />} />
        <Route
          path="/yourcart"
          element={
            <PrivateElement>
              <Payment />
            </PrivateElement>
          }
        />
        <Route
          path="/history"
          element={
            <PrivateElement>
              <History />
            </PrivateElement>
          }
        />
        <Route
          path="/history/:id"
          element={
            <PrivateElement>
              <HistoryDetails />
            </PrivateElement>
          }
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
