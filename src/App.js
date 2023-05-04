import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Admin/Dashboard";
import ImportData from "./components/Admin/ImportData";
import ViewAllStudents from "./components/Admin/ViewAllStudents";
import Login from "./components/Login";
import Input from "./components/Student/Input";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/ImportData" element={<ImportData />} />
        <Route path="/ViewAllStudents" element={<ViewAllStudents />} />
        <Route path="/Input" element={<Input />} />
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      {/* <Input /> */}
      {/* <Login/> */}
      {/* <ImportData /> */}
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
