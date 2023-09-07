import { createContext, useState } from "react";
import "./App.css";
import "./assets/css/global.css";
import ItemCard from "./components/itemCard";
import Welcome from "./components/welcome";
import MyForm from "./components/form";
import { BrowserRouter, Route, Router, Routes, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FORM, WELCOME } from "./components/routes/routes";

export const MyContext = createContext();

export default function App() {
  const [items, setItems] = useState([]);
  const contextData = "Haswini";
  const handleItem = (enteredItem) => {
    setItems([...items, enteredItem]);
    console.log(items);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path={WELCOME} element={<Welcome />} />
        <Route path={FORM} element={<MyForm />} />
      </Routes>
    </BrowserRouter>
  );
}
