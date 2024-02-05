import { Routes, Route } from "react-router-dom";
import AddTodo from "./pages/AddTodo";
import Home from "./pages/Home";
import Header from "./components/ui/Header";
import Login from "./pages/Login";
import AllTodos from "./pages/AllTodos";
import { useEffect, useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoutes from "./routes/PublicRoute";

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
      <main className="flex flex-col min-h-[85vh] items-center space-y-6 justify-center">
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
            path="/todo/add-todo"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route element={<AddTodo />} index />
          </Route>
          <Route
            path="/todo/all-todos"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route index element={<AllTodos />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}
