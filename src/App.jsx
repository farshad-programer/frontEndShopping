import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import RegisterComponent from "./features/register/register";
import LoginComponent from "./features/auth/Login";
import LogOut from "./features/auth/logout";
import AdminGet from "./features/admin/getAdmin";
import PersistLogin from "./features/auth/PersistLogin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<RegisterComponent />} />
          <Route path="login" element={<LoginComponent />} />
          <Route path="logout" element={<LogOut />} />
          <Route element={<PersistLogin />}>
            <Route path="admin" element={<AdminGet />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
