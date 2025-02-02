import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import Loader from "@/pages/loader";

const Home = React.lazy(() => import("@/pages/Home"));
const Form = React.lazy(() => import("@/pages/Form"));
const UserPanel = React.lazy(() => import("@/panel/user-panel"));

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppLayout>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="/user" element={<UserPanel />} />
              <Route path="/loading" element={<Loader />} />
            </Routes>
          </Suspense>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
}
