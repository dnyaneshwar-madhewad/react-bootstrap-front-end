import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import WelcomeHome from "./views/WelcomeHome";
import Explore from "./views/Explore";
import Notifications from "./views/Notifications";
import Messages from "./views/Messages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/welcome-home" element={<WelcomeHome />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notification" element={<Notifications />} />
      </Routes>
    </>
  );
}
