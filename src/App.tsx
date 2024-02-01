import { Routes, Route } from "react-router-dom";
import AddTodo from "./pages/AddTodo";
import Home from "./pages/Home";
import Header from "./components/ui/Header";
import Login from "./pages/Login";
import { auth } from "./db/firebase";

export default function App() {
  console.log(auth);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/add-todo" element={<AddTodo />} />
        <Route path="/auth/login" element={<Login />} />
        {/* <Route path="/todo/add-todo" element={<AddTodo />} > */}
      </Routes>
    </>
  );
}
