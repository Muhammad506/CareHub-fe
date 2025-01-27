"use client";

import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/outline";
import { TiEdit } from "react-icons/ti";


type Patient = {
    name: string;
    accNo: string;
    dob: string;
    provider: string;
    location: string;
    email: string;
    phone: string;
    address: string;
    status: string;
};

const Patient: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [newPatient, setNewPatient] = useState<Partial<Patient>>({});
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [editPatientIndex, setEditPatientIndex] = useState<number | null>(null);

    useEffect(() => {
        const storedPatients = localStorage.getItem("patients");
        if (storedPatients) {
            setPatients(JSON.parse(storedPatients));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("patients", JSON.stringify(patients));
    }, [patients]);

    const handleAddPatient = () => {
        if (!newPatient.name || !newPatient.accNo) {
            alert("Name and Account Number are required!");
            return;
        }

        setPatients((prev) => [
            ...prev,
            {
                ...newPatient,
                status: newPatient.status || "ACTIVE",
            } as Patient,
        ]);
        setNewPatient({});
        setIsSidebarOpen(false);
    };

    const handleEditPatient = (index: number) => {
        setEditPatientIndex(index);
        setNewPatient(patients[index]);
        setIsSidebarOpen(true);
    };

    const handleUpdatePatient = () => {
        if (editPatientIndex === null) return;

        const updatedPatients = [...patients];
        updatedPatients[editPatientIndex] = {
            ...newPatient,
            status: newPatient.status || "ACTIVE",
        };

        setPatients(updatedPatients);
        setNewPatient({});
        setIsSidebarOpen(false);
        setEditPatientIndex(null);
    };

    const handleDeletePatient = (index: number) => {
        const updatedPatients = patients.filter((_, i) => i !== index);
        setPatients(updatedPatients);
    };

    return (
        <div className="p-6 bg-gray-100 mx-auto min-h-screen">
            {/* Top Section with Separate Background */}
            <div className="bg-teal-400 p-4 rounded-sm mb-6 shadow-md">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl xl:text-3xl font-semibold text-white">Patient Management</h1>

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

                        {/* Add Patient Button */}
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="bg-gradient-to-r from-teal-400 to-teal-500 text-white py-1 px-4 rounded-sm border-white border shadow-md hover:shadow-lg hover:from-teal-500 hover:to-teal-600 transition-all duration-300"
                        >
                            + Add Patient
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
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{editPatientIndex !== null ? "Edit Patient" : "Add New Patient"}</h2>
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
                            value={newPatient.name || ""}
                            onChange={(e) =>
                                setNewPatient({ ...newPatient, name: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Account Number"
                            value={newPatient.accNo || ""}
                            onChange={(e) =>
                                setNewPatient({ ...newPatient, accNo: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                        <input
                            type="date"
                            value={newPatient.dob || ""}
                            onChange={(e) =>
                                setNewPatient({ ...newPatient, dob: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Provider"
                            value={newPatient.provider || ""}
                            onChange={(e) =>
                                setNewPatient({ ...newPatient, provider: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={newPatient.location || ""}
                            onChange={(e) =>
                                setNewPatient({ ...newPatient, location: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={newPatient.email || ""}
                            onChange={(e) =>
                                setNewPatient({ ...newPatient, email: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={newPatient.phone || ""}
                            onChange={(e) =>
                                setNewPatient({ ...newPatient, phone: e.target.value })
                            }
                            className="p-2 border rounded-sm focus:outline-none text-sm"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            value={newPatient.address || ""}
                            onChange={(e) =>
                                setNewPatient({ ...newPatient, address: e.target.value })
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
                            onClick={editPatientIndex !== null ? handleUpdatePatient : handleAddPatient}
                            className="bg-teal-400 text-white py-2 px-4 rounded-sm hover:bg-teal-500 transition-all duration-500 text-sm"
                        >
                            {editPatientIndex !== null ? "Update" : "Save"}
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
                            <th className="p-2 text-center border-r">Provider</th>
                            <th className="p-2 text-center border-r">Location</th>
                            <th className="p-2 text-center border-r">Email</th>
                            <th className="p-2 text-center border-r">Phone</th>
                            <th className="p-2 text-center border-r">Address</th>
                            <th className="p-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    } border-b hover:bg-gray-100 transition-all`}
                            >
                                <td className="p-2 border-r">{patient.name}</td>
                                <td className="p-2 border-r">{patient.accNo}</td>
                                <td className="p-2 border-r">{patient.dob}</td>
                                <td className="p-2 border-r">{patient.provider}</td>
                                <td className="p-2 border-r">{patient.location}</td>
                                <td className="p-2 border-r">{patient.email}</td>
                                <td className="p-2 border-r">{patient.phone}</td>
                                <td className="p-2 border-r">{patient.address}</td>
                                <td className="p-2">
                                    <button
                                        onClick={() => handleEditPatient(index)}
                                        className="p-2 text-teal-500 hover:text-teal-700"
                                    >
                                        <TiEdit className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDeletePatient(index)}
                                        className="p-2 text-red-500 hover:text-red-700 ml-2"
                                    >
                                        <TrashIcon className="w-5 h-5" />
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

export default Patient;
