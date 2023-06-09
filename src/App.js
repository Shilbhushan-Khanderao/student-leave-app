import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Admin/Dashboard";
import ImportData from "./components/Admin/ImportData";
import ViewAllStudents from "./components/Admin/ViewAllStudents";
import Login from "./components/Login";
import Input from "./components/Student/Input";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/ImportData" element={<ImportData />} />
        <Route path="/ViewAllStudents" element={<ViewAllStudents />} />
        <Route path="/Input" element={<Input />} />
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
