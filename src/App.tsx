import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/ui/Header";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import { useEffect, useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoutes from "./routes/PublicRoute";
import Register from "./pages/Register";

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    function checkLogin() {
      const user = localStorage.getItem("user");
      if (user) {
        setAuthenticated(true);
      }
    }
    checkLogin();
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-[85vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/auth/login"
            element={<PublicRoutes isAuthenticated={isAuthenticated} />}
          >
            <Route
              index
              element={<Login onAuthenticate={setAuthenticated} />}
            />
          </Route>
          <Route
            path="/auth/register"
            element={<PublicRoutes isAuthenticated={isAuthenticated} />}
          >
            <Route
              index
              element={<Register onAuthenticate={setAuthenticated} />}
            />
          </Route>

          <Route
            path="/todo/all-todos"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route index element={<Todos />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}
