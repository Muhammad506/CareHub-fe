"use client";

import { useState } from "react";
import { User, Stethoscope, Menu, Calendar, LogOut } from "lucide-react"; // Importing new icons
import Link from "next/link"; // Use Next.js Link component

const Sidebar: React.FC = () => {
    const [isMinimized, setIsMinimized] = useState(false);

    const toggleSidebar = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div
            className={`h-screen  left-0 top-0 ${isMinimized ? "w-20" : "w-64"
                } transition-all duration-300 flex flex-col bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow-lg z-50`}
        >
            {/* Toggle Button */}
            <button
                className="p-4 hover:bg-teal-500 focus:outline-none flex items-center justify-start transition-all duration-300"
                onClick={toggleSidebar}
            >
                <Menu className="text-2xl" />
            </button>

            {/* Sidebar Content */}
            <nav className="flex-1 overflow-y-auto mt-4">
                <ul className="space-y-3">
                    {/* Patient Link */}
                    <li className="group flex flex-col items-center justify-center gap-2">
                        <Link
                            href="/dashboard/patient"
                            className="flex items-center gap-4 p-4 w-full text-left hover:bg-teal-500 rounded-md transition-all duration-200"
                        >
                            <User className="text-2xl" />
                            {!isMinimized && <span className="text-lg font-medium">Patient</span>}
                        </Link>
                    </li>

                    {/* Doctor Link */}
                    <li className="group flex flex-col items-center justify-center gap-2">
                        <Link
                            href="/dashboard/doctor"
                            className="flex items-center gap-4 p-4 w-full text-left hover:bg-teal-500 rounded-md transition-all duration-200"
                        >
                            <Stethoscope className="text-2xl" />
                            {!isMinimized && <span className="text-lg font-medium">Doctor</span>}
                        </Link>
                    </li>

                    {/* Appointment Link */}
                    <li className="group flex flex-col items-center justify-center gap-2">
                        <Link
                            href="/dashboard/appointment"
                            className="flex items-center gap-4 p-4 w-full text-left hover:bg-teal-500 rounded-md transition-all duration-200"
                        >
                            <Calendar className="text-2xl" /> {/* Calendar icon for Appointment */}
                            {!isMinimized && <span className="text-lg font-medium">Appointment</span>}
                        </Link>
                    </li>

                    {/* Logout Link */}
                    <li className="group flex flex-col items-center justify-center gap-2">
                        <Link
                            href="/loginpage"
                            className="flex items-center gap-4 p-4 w-full text-left hover:bg-teal-500 rounded-md transition-all duration-200"
                        >
                            <LogOut className="text-2xl" /> {/* LogOut icon for Logout */}
                            {!isMinimized && <span className="text-lg font-medium">Logout</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
