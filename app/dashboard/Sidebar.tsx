// "use client";

// import { useState } from "react";
// import { User, House, Stethoscope, Menu, Calendar, LogOut } from "lucide-react"; // Importing new icons
// import Link from "next/link"; // Use Next.js Link component

// const Sidebar: React.FC = () => {
//     const [isMinimized, setIsMinimized] = useState(false);

//     const toggleSidebar = () => {
//         setIsMinimized(!isMinimized);
//     };

//     return (
//         <div
//             className={`h-full  left-0 top-0 ${isMinimized ? "w-20" : "w-64"
//                 } transition-all duration-300 flex flex-col  text-black  z-50`}
//         >
//             {/* Toggle Button */}
//             <button
//                 className="p-4 hover:bg-teal-500 focus:outline-none flex items-center justify-start transition-all duration-300"
//                 onClick={toggleSidebar}
//             >
//                 <Menu className="text-2xl" />
//             </button>

//             {/* Sidebar Content */}
//             <nav className="flex-1 overflow-y-auto mt-4">
//                 <ul className="space-y-3">
//                     <li className="group flex flex-col items-center justify-center gap-2">
//                         <Link
//                             href="/dashboard/home"
//                             className="flex items-center gap-4 p-4 w-full text-left hover:bg-teal-500 rounded-md transition-all duration-200"
//                         >
//                             <House className="text-2xl" />
//                             {!isMinimized && <span className="text-lg font-medium">Home</span>}
//                         </Link>
//                     </li>
//                     {/* Patient Link */}
//                     <li className="group flex flex-col items-center justify-center gap-2">
//                         <Link
//                             href="/dashboard/patient"
//                             className="flex items-center gap-4 p-4 w-full text-left hover:bg-teal-500 rounded-md transition-all duration-200"
//                         >
//                             <User className="text-2xl" />
//                             {!isMinimized && <span className="text-lg font-medium">Patient</span>}
//                         </Link>
//                     </li>

//                     {/* Doctor Link */}
//                     <li className="group flex flex-col items-center justify-center gap-2">
//                         <Link
//                             href="/dashboard/doctor"
//                             className="flex items-center gap-4 p-4 w-full text-left hover:bg-teal-500 rounded-md transition-all duration-200"
//                         >
//                             <Stethoscope className="text-2xl" />
//                             {!isMinimized && <span className="text-lg font-medium">Doctor</span>}
//                         </Link>
//                     </li>

//                     {/* Appointment Link */}
//                     <li className="group flex flex-col items-center justify-center gap-2">
//                         <Link
//                             href="/dashboard/appointment"
//                             className="flex items-center gap-4 p-4 w-full text-left hover:bg-teal-500 rounded-md transition-all duration-200"
//                         >
//                             <Calendar className="text-2xl" /> {/* Calendar icon for Appointment */}
//                             {!isMinimized && <span className="text-lg font-medium">Appointment</span>}
//                         </Link>
//                     </li>

//                     {/* Logout Link */}
//                     <li className="group flex flex-col items-center justify-center gap-2">
//                         <Link
//                             href="/loginpage"
//                             className="flex items-center gap-4 p-4 w-full text-left hover:bg-teal-500 rounded-md transition-all duration-200"
//                         >
//                             <LogOut className="text-2xl" /> {/* LogOut icon for Logout */}
//                             {!isMinimized && <span className="text-lg font-medium">Logout</span>}
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     );
// };

// export default Sidebar;

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { User, House, Stethoscope, Menu, Calendar, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Sidebar: React.FC = () => {
    const [isMinimized, setIsMinimized] = useState(false);
    const pathname = usePathname();

    const toggleSidebar = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className={`h-full left-0 top-0 ${isMinimized ? "w-20" : "w-64"} text-black   transition-all duration-300 flex flex-col z-50`}>
            {/* Sidebar Header */}
            <div className="flex items-center justify-between  bg-gradient-to-r from-[#1A3A5A] via-[#21547F] to-[#1A3A5A] p-4 py-8 border-b border-gray-700">
                <button onClick={toggleSidebar} className="text-white hover:text-[#1A3A5A] transition-all duration-300">
                    <Menu className="text-2xl" />
                </button>
            </div>

            {/* Show Logo Below Menu When Expanded */}
            {!isMinimized && (
                <div className="flex justify-center p-2">
                    <Image src="/logo.png" alt="Logo" width={120} height={40} className="transition-all duration-300" />
                </div>
            )}

            {/* Sidebar Navigation */}
            <nav className="flex-1 overflow-y-auto mt-2">
                <ul className="space-y-3">
                    {[
                        { href: "/dashboard/home", label: "Home", icon: <House className="text-2xl" /> },
                        { href: "/dashboard/patient", label: "Patient", icon: <User className="text-2xl" /> },
                        { href: "/dashboard/doctor", label: "Doctor", icon: <Stethoscope className="text-2xl" /> },
                        { href: "/dashboard/appointment", label: "Appointment", icon: <Calendar className="text-2xl" /> },
                        { href: "/loginpage", label: "Logout", icon: <LogOut className="text-2xl" />, specialClass: "hover:bg-red-500" },
                    ].map(({ href, label, icon, specialClass = "hover:bg-gray-300" }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`flex items-center gap-4 p-4 w-full text- transition-all duration-200 ${pathname === href ? "bg-gray-200 text-[#1A3A5A]" : "hover:bg-gray-200"} ${specialClass}`}
                            >
                                {icon}
                                {!isMinimized && <span className="text-lg font-medium">{label}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
