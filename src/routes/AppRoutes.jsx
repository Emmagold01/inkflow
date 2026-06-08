import { Route, Routes, Navigate } from "react-router-dom";
import Waitlist from "../home/Waitlist";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/" element={<Navigate to="/waitlist" replace />} />
    </Routes>
  );
}
