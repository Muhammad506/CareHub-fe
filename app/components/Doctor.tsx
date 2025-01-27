"use client";

import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

type Doctor = {
    name: string;
    accNo: string;
    dob: string;
    specialty: string;
    location: string;
    email: string;
    phone: string;
    address: string;
    status: string;
};

const Doctor: React.FC = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [newDoctor, setNewDoctor] = useState<Partial<Doctor>>({});
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);  // New state for updating
    const [currentDoctorIndex, setCurrentDoctorIndex] = useState<number | null>(null);  // Track the current doctor being updated

    useEffect(() => {
        const storedDoctors = localStorage.getItem("doctors");
        if (storedDoctors) {
            setDoctors(JSON.parse(storedDoctors));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("doctors", JSON.stringify(doctors));
    }, [doctors]);

    const handleAddDoctor = () => {
        if (!newDoctor.name || !newDoctor.accNo) {
            alert("Name and Account Number are required!");
            return;
        }

        setDoctors((prev) => [
            ...prev,
            {
                ...newDoctor,
                status: newDoctor.status || "ACTIVE",
            } as Doctor,
        ]);
        setNewDoctor({});
        setIsSidebarOpen(false);
    };

    const handleUpdateDoctor = () => {
        if (currentDoctorIndex === null) return;

        setDoctors((prev) => {
            const updatedDoctors = [...prev];
            updatedDoctors[currentDoctorIndex] = { ...newDoctor, status: newDoctor.status || "ACTIVE" } as Doctor;
            return updatedDoctors;
        });
        setNewDoctor({});
        setIsSidebarOpen(false);
        setIsUpdating(false);
        setCurrentDoctorIndex(null);
    };

    const handleEditDoctor = (index: number) => {
        setIsSidebarOpen(true);
        setIsUpdating(true);
        setCurrentDoctorIndex(index);
        setNewDoctor(doctors[index]);
    };

    const handleDeleteDoctor = (index: number) => {
        const updatedDoctors = doctors.filter((_, i) => i !== index);
        setDoctors(updatedDoctors);
    };

    return (
        <div className="p-6 bg-gray-100 mx-auto min-h-screen">
            {/* Top Section with Separate Background */}
            <div className="bg-teal-400 p-4 rounded-sm mb-6 shadow-md">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl xl:text-3xl font-semibold text-white">Doctor Management</h1>

                    <div className="flex gap-4">
                        {/* Search Bar with Icon */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by Name or Account Number"
                                className="p-2 w-full border rounded-sm focus:outline-none text-sm pl-10"
                            />
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-400" />
                        </div>

                        {/* Add Doctor Button */}
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="bg-gradient-to-r from-teal-400 to-teal-500 text-white py-1 px-4 rounded-sm border-white border shadow-md hover:shadow-lg hover:from-teal-500 hover:to-teal-600 transition-all duration-300"
                        >
                            + Add Doctor
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } w-full max-w-xs z-50`}
            >
                <div className="p-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{isUpdating ? "Update Doctor" : "Add New Doctor"}</h2>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    >
                        ✕
                    </button>
                    <div className="grid grid-cols-1 gap-3">
                        <input
                            type="text"
                            placeholder="Name"
                            value={newDoctor.name || ""}
                            onChange={(e) =>
                                setNewDoctor({ ...newDoctor, name: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Account Number"
                            value={newDoctor.accNo || ""}
                            onChange={(e) =>
                                setNewDoctor({ ...newDoctor, accNo: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                        <input
                            type="date"
                            value={newDoctor.dob || ""}
                            onChange={(e) =>
                                setNewDoctor({ ...newDoctor, dob: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Specialty"
                            value={newDoctor.specialty || ""}
                            onChange={(e) =>
                                setNewDoctor({ ...newDoctor, specialty: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={newDoctor.location || ""}
                            onChange={(e) =>
                                setNewDoctor({ ...newDoctor, location: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={newDoctor.email || ""}
                            onChange={(e) =>
                                setNewDoctor({ ...newDoctor, email: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={newDoctor.phone || ""}
                            onChange={(e) =>
                                setNewDoctor({ ...newDoctor, phone: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            value={newDoctor.address || ""}
                            onChange={(e) =>
                                setNewDoctor({ ...newDoctor, address: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                    </div>
                    <div className="mt-4 flex justify-end space-x-4">
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="bg-gray-200 text-gray-800 py-2 px-4 rounded-sm hover:bg-gray-300 transition-all duration-500 text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={isUpdating ? handleUpdateDoctor : handleAddDoctor}
                            className="bg-teal-400 text-white py-2 px-4 rounded-sm hover:bg-teal-500 transition-all duration-500 text-sm"
                        >
                            {isUpdating ? "Update" : "Save"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mt-6">
                <table className="min-w-full bg-white text-center shadow-lg rounded-lg border-collapse">
                    <thead>
                        <tr className="bg-gradient-to-r from-teal-400 to-teal-500 text-white">
                            <th className="p-2 text-center border-r">Name</th>
                            <th className="p-2 text-center border-r">Acc No</th>
                            <th className="p-2 text-center border-r">DOB</th>
                            <th className="p-2 text-center border-r">Specialty</th>
                            <th className="p-2 text-center border-r">Location</th>
                            <th className="p-2 text-center border-r">Email</th>
                            <th className="p-2 text-center border-r">Phone</th>
                            <th className="p-2 text-center border-r">Address</th>
                            <th className="p-2 text-center border-r">Status</th>
                            <th className="p-2 text-center">Action</th> {/* Action column */}
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    } border-b hover:bg-gray-100 transition-all`}
                            >
                                <td className="p-2 border-r">{doctor.name}</td>
                                <td className="p-2 border-r">{doctor.accNo}</td>
                                <td className="p-2 border-r">{doctor.dob}</td>
                                <td className="p-2 border-r">{doctor.specialty}</td>
                                <td className="p-2 border-r">{doctor.location}</td>
                                <td className="p-2 border-r">{doctor.email}</td>
                                <td className="p-2 border-r">{doctor.phone}</td>
                                <td className="p-2 border-r">{doctor.address}</td>
                                <td className="p-2 text-teal-500 border-r text-sm font-semibold">{doctor.status}</td>
                                <td className="p-2">
                                    <button
                                        onClick={() => handleEditDoctor(index)}
                                        className="text-teal-500 hover:text-teal-600"
                                    >
                                        <HiOutlinePencilAlt />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteDoctor(index)}
                                        className="ml-2 text-red-500 hover:text-red-600"
                                    >
                                        <HiOutlineTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Doctor;
