import { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <ToastContainer />
      <AppRoutes />
    </>
  );
}

export default App;
