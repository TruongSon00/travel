import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import CheckoutFake from "./pages/CheckoutFake";
import HomePage from "./pages/HomePage";
import TourDetailPage from "./pages/TourDetailPage";
import TourPage from "./pages/TourPage";
import HistoryPage from "./pages/HistoryPage";
import NaturePage from "./pages/NaturePage";
import FoodPage from "./pages/FoodPage";
import CompanyPage from "./pages/CompanyPage";
import TransactionPage from "./pages/TransactionPage";

function Home() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tours" element={<TourPage />} />
      <Route path="/tour-detail" element={<TourDetailPage />} />
      <Route path="/check-out" element={<Checkout />} />
      <Route path="/check-out-1" element={<CheckoutFake />} />

      <Route path="/history" element={<HistoryPage />} />
      <Route path="/nature" element={<NaturePage />} />
      <Route path="/food" element={<FoodPage />} />
      <Route path="/company-introduction" element={<CompanyPage />} />
      <Route path="/transaction-history" element={<TransactionPage />} />
    </Routes>
  );
}

export default Home;
