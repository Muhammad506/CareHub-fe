// "use client";

// import React, { useEffect, useState } from "react";

// type Doctor = {
//   name: string;
//   accNo: string;
//   specialty: string;
//   phone: string;
//   status: string;
// };

// type Patient = {
//   status: string;
//   name?: string;
//   accNo?: string;
//   location?: string;
//   phone?: string;
// };

// type Appointment = {
//   name: string;
//   location: string;
//   time: string;
//   appointmentType: string;
//   appointmentReason: string;
// };

// const Home: React.FC = () => {
//   const [doctors, setDoctors] = useState<Doctor[]>([]);
//   const [appointments, setAppointments] = useState<Appointment[]>([]);
//   const [patients, setPatients] = useState<Patient[]>([]);

//   useEffect(() => {
//     const storedDoctors = localStorage.getItem("doctors");
//     const storedAppointments = localStorage.getItem("users");
//     const storedPatients = localStorage.getItem("patients");

//     if (storedDoctors) setDoctors(JSON.parse(storedDoctors));
//     if (storedAppointments) setAppointments(JSON.parse(storedAppointments));
//     if (storedPatients) setPatients(JSON.parse(storedPatients));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 bg-gray-100 min-h-screen">
//       {/* Patients Section */}
//       <div className="p-4 bg-white  shadow-lg border">
//         <div className="bg-teal-400 p-4  text-white font-semibold flex justify-between items-center">
//           <h1 className="text-xl md:text-2xl">Patients List</h1>
//           <span className="bg-white text-teal-500 px-3 py-1 rounded-full text-lg font-bold">
//             {patients.length}
//           </span>
//         </div>
//         <div className="overflow-x-auto mt-4">
//           <table className="min-w-full text-center border-collapse">
//             <thead>
//               <tr className="bg-teal-500 text-white">
//                 <th className="p-2 border-r">Status</th>
//                 <th className="p-2 border-r">Name</th>
//                 <th className="p-2 border-r">Acc No</th>
//                 <th className="p-2 border-r">Location</th>
//                 <th className="p-2">Phone</th>
//               </tr>
//             </thead>
//             <tbody>
//               {patients.map((patient, index) => (
//                 <tr
//                   key={index}
//                   className={`${
//                     index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                   } border-b hover:bg-gray-100`}
//                 >
//                   <td className="p-2 border-r">{patient.status}</td>
//                   <td className="p-2 border-r">{patient.name || "-"}</td>
//                   <td className="p-2 border-r">{patient.accNo || "-"}</td>
//                   <td className="p-2 border-r">{patient.location || "-"}</td>
//                   <td className="p-2 text-teal-500 font-semibold">{patient.phone || "-"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Appointments Section */}
//       <div className="p-4 bg-white  shadow-lg border">
//         <div className="bg-teal-400 p-4  text-white font-semibold flex justify-between items-center">
//           <h1 className="text-xl md:text-2xl">Appointment List</h1>
//           <span className="bg-white text-teal-500 px-3 py-1 rounded-full text-lg font-bold">
//             {appointments.length}
//           </span>
//         </div>
//         <div className="overflow-x-auto mt-4">
//           <table className="min-w-full text-center border-collapse">
//             <thead>
//               <tr className="bg-teal-500 text-white">
//                 <th className="p-2 border-r">Name</th>
//                 <th className="p-2 border-r">Location</th>
//                 <th className="p-2 border-r">Type</th>
//                 <th className="p-2 border-r">Time</th>
//                 <th className="p-2">Reason</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments.map((appointment, index) => (
//                 <tr
//                   key={index}
//                   className={`${
//                     index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                   } border-b hover:bg-gray-100`}
//                 >
//                   <td className="p-2 border-r">{appointment.name}</td>
//                   <td className="p-2 border-r">{appointment.location}</td>
//                   <td className="p-2 border-r">{appointment.appointmentType}</td>
//                   <td className="p-2 border-r">{appointment.time}</td>
//                   <td className="p-2 text-teal-500 font-semibold">{appointment.appointmentReason}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Doctors Section */}
//       <div className="p-4 bg-white  shadow-lg border">
//         <div className="bg-teal-400 p-4  text-white font-semibold flex justify-between items-center">
//           <h1 className="text-xl md:text-2xl">Doctor List</h1>
//           <span className="bg-white text-teal-500 px-3 py-1 rounded-full text-lg font-bold">
//             {doctors.length}
//           </span>
//         </div>
//         <div className="overflow-x-auto mt-4">
//           <table className="min-w-full text-center border-collapse">
//             <thead>
//               <tr className="bg-teal-500 text-white">
//                 <th className="p-2 border-r">Name</th>
//                 <th className="p-2 border-r">Acc No</th>
//                 <th className="p-2 border-r">Specialty</th>
//                 <th className="p-2 border-r">Phone</th>
//                 <th className="p-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {doctors.map((doctor, index) => (
//                 <tr
//                   key={index}
//                   className={`${
//                     index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                   } border-b hover:bg-gray-100`}
//                 >
//                   <td className="p-2 border-r">{doctor.name}</td>
//                   <td className="p-2 border-r">{doctor.accNo}</td>
//                   <td className="p-2 border-r">{doctor.specialty}</td>
//                   <td className="p-2 border-r">{doctor.phone}</td>
//                   <td className="p-2 text-teal-500 font-semibold">{doctor.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


"use client";

import React, { useEffect, useState } from "react";

type Doctor = {
  name: string;
  accNo: string;
  specialty: string;
  phone: string;
  status: string;
};

type Patient = {
  status: string;
  name?: string;
  accNo?: string;
  location?: string;
  phone?: string;
};

type Appointment = {
  name: string;
  location: string;
  time: string;
  appointmentType: string;
  appointmentReason: string;
};

const Home: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const storedDoctors = localStorage.getItem("doctors");
    const storedAppointments = localStorage.getItem("users");
    const storedPatients = localStorage.getItem("patients");

    if (storedDoctors) setDoctors(JSON.parse(storedDoctors));
    if (storedAppointments) setAppointments(JSON.parse(storedAppointments));
    if (storedPatients) setPatients(JSON.parse(storedPatients));
  }, []);

  return (
    <div className="min-h-screen border-l border[#1A3A5A]">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#1A3A5A] via-[#21547F] to-[#1A3A5A] text-white p-6 md:p-6">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-center">Welcome to CareHub Dashboard</h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-6 lg:p-8">
        {/* Patients Section */}
        <div className=" border-2 border-[#1A3A5A]  bg-gray-50  shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-[#1A3A5A] via-[#21547F] to-[#1A3A5A] p-4  text-white font-semibold flex justify-between items-center">
            <h1 className="text-xl md:text-2xl">Patients List</h1>
            <span className=" bg-gray-50 text-[#1A3A5A] px-3 py-1 rounded-full text-lg font-bold">
              {patients.length}
            </span>
          </div>
          <div className="overflow-x-auto  m-2">
            <table className="min-w-full text-center border ">
              <thead>
                <tr className="bg-gradient-to-r from-[#1A3A5A] via-[#21547F] to-[#1A3A5A] text-white">
                  <th className="p-3 border-r">Status</th>
                  <th className="p-3 border-r">Name</th>
                  <th className="p-3 border-r">Acc No</th>
                  <th className="p-3 border-r">Location</th>
                  <th className="p-3">Phone</th>
                </tr>
              </thead>
              <tbody>
                {patients.length > 0 ? (
                  patients.map((patient, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-gray-100 transition-colors duration-200`}
                    >
                      <td className="p-3 text-nowrap border-r">{patient.status}</td>
                      <td className="p-3 text-nowrap border-r">{patient.name || "-"}</td>
                      <td className="p-3 text-nowrap border-r">{patient.accNo || "-"}</td>
                      <td className="p-3 text-nowrap border-r">{patient.location || "-"}</td>
                      <td className="p-3 text-nowrap text-[#1A3A5A] font-semibold">{patient.phone || "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-4 text-gray-900 font-semibold text-center">
                      No patients found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="border-2 border-[#1A3A5A] bg-white  shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-[#1A3A5A] via-[#21547F] to-[#1A3A5A] p-4  text-white font-semibold flex justify-between items-center">
            <h1 className="text-xl md:text-2xl">Appointment List</h1>
            <span className="bg-white text-[#1A3A5A] px-3 py-1 rounded-full text-lg font-bold">
              {appointments.length}
            </span>
          </div>
          <div className="overflow-x-auto m-2">
            <table className="min-w-full text-center border">
              <thead>
                <tr className="bg-gradient-to-r from-[#1A3A5A] via-[#21547F] to-[#1A3A5A] text-white">
                  <th className="p-3 border-r">Name</th>
                  <th className="p-3 border-r">Location</th>
                  <th className="p-3 border-r">Type</th>
                  <th className="p-3 border-r">Time</th>
                  <th className="p-3">Reason</th>
                </tr>
              </thead>
              <tbody>
                {appointments.length > 0 ? (
                  appointments.map((appointment, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-gray-100 transition-colors duration-200`}
                    >
                      <td className="p-3 text-nowrap border-r">{appointment.name}</td>
                      <td className="p-3 border-r text-nowrap">{appointment.location}</td>
                      <td className="p-3 border-r text-nowrap">{appointment.appointmentType}</td>
                      <td className="p-3 border-r text-nowrap">{appointment.time}</td>
                      <td className="p-3 text-nowrap text-[#1A3A5A] font-semibold">{appointment.appointmentReason}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-4 text-gray-900 font-semibold text-center">
                      No appointments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Doctors Section */}
        <div className="border-2 border-[#1A3A5A] bg-white  shadow-lg hover:shadow-xl transition-shadow duration-300 lg:col-span-2">
          <div className="bg-gradient-to-r from-[#1A3A5A] via-[#21547F] to-[#1A3A5A] p-4  text-white font-semibold flex justify-between items-center">
            <h1 className="text-xl md:text-2xl">Doctor List</h1>
            <span className="bg-white text-[#1A3A5A] px-3 py-1 rounded-full text-lg font-bold">
              {doctors.length}
            </span>
          </div>
          <div className="overflow-x-auto m-2">
            <table className="min-w-full text-center border ">
              <thead>
                <tr className="bg-gradient-to-r from-[#1A3A5A] via-[#21547F] to-[#1A3A5A] text-white">
                  <th className="p-3 border-r  ">Name</th>
                  <th className="p-3 border-r">Acc No</th>
                  <th className="p-3 border-r">Specialty</th>
                  <th className="p-3 border-r">Phone</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="">
                {doctors.length > 0 ? (
                  doctors.map((doctor, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-gray-100 transition-colors duration-200 `}
                    >
                      <td className="p-3 border-r">{doctor.name}</td>
                      <td className="p-3 border-r">{doctor.accNo}</td>
                      <td className="p-3 border-r">{doctor.specialty}</td>
                      <td className="p-3 border-r">{doctor.phone}</td>
                      <td className="p-3 text-[#1A3A5A] font-semibold">{doctor.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-4 text-gray-900 font-semibold text-center">
                      No doctors found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;