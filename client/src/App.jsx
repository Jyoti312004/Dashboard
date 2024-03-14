import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import StudentTable from "./components/StudentTable";
import FinalList from "./components/FinalList";
import Dashboard from "./Dashboard";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/student" element={<StudentTable />} /> */}
                <Route path="/finalList/:mentorId" element={<FinalList />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
    }

export default App;
