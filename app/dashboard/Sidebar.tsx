"use client";

import { useState } from "react";
import { User, Stethoscope, Link, Menu } from "lucide-react";
// import Patient from "./Patient"; // Import your Patient component
// import Doctor from "./Doctor"; // Import your Doctor component
// import Links from "./Links"; // Import your Links component

const Sidebar: React.FC = () => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [activeSection, setActiveSection] = useState("Dashboard"); // State to track active section

    const toggleSidebar = () => {
        setIsMinimized(!isMinimized);
    };

    const renderContent = () => {
        switch (activeSection) {
            case "Patient":
                // return <Patient />;
            case "Doctor":
                // return <Doctor />;
            case "Links":
                // return <Links />;
            default:
                return (
                    <div>
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <p className="mt-4 text-gray-600">
                            Welcome to your dashboard. Please select an option from the sidebar.
                        </p>
                    </div>
                );
        }
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`h-screen ${isMinimized ? "w-16" : "w-64"
                    } transition-all duration-300 flex flex-col bg-[#12A5A1] text-white`}
            >
                {/* Toggle Button */}
                <button
                    className="p-4 hover:bg-[#0E8785] focus:outline-none flex items-center justify-start"
                    onClick={toggleSidebar}
                >
                    <Menu className="text-xl" />
                </button>

                {/* Sidebar Content */}
                <nav className="flex-1">
                    <ul className="space-y-4 mt-6">
                        <li className="group">
                            <button
                                onClick={() => setActiveSection("Patient")}
                                className="flex items-center gap-4 p-4 w-full text-left hover:bg-[#0E8785] rounded-md transition"
                            >
                                <User className="text-xl" />
                                {!isMinimized && <span>Patient</span>}
                            </button>
                        </li>
                        <li className="group">
                            <button
                                onClick={() => setActiveSection("Doctor")}
                                className="flex items-center gap-4 p-4 w-full text-left hover:bg-[#0E8785] rounded-md transition"
                            >
                                <Stethoscope className="text-xl" />
                                {!isMinimized && <span>Doctor</span>}
                            </button>
                        </li>
                        <li className="group">
                            <button
                                onClick={() => setActiveSection("Links")}
                                className="flex items-center gap-4 p-4 w-full text-left hover:bg-[#0E8785] rounded-md transition"
                            >
                                <Link className="text-xl" />
                                {!isMinimized && <span>Links</span>}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100">{renderContent()}</div>
        </div>
    );
};

export default Sidebar;
