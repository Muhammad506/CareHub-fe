'use client';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const App: React.FC = () => {
  const [isCalendarCollapsed, setIsCalendarCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<{ name: string; location: string; time: string; appointmentType: string; appointmentReason: string; notes: string; date: string }[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [filteredUsers, setFilteredUsers] = useState(users);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  // Save data to localStorage whenever users state changes
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Filter users by selected date
  useEffect(() => {
    if (selectedDate) {
      const formattedDate = selectedDate.toDateString();
      const filtered = users.filter((user) => new Date(user.date).toDateString() === formattedDate);
      setFilteredUsers(filtered);
    }
  }, [selectedDate, users]);

  const handleAddUser = (name: string, location: string, time: string, appointmentType: string, appointmentReason: string, notes: string, date: string) => {
    setUsers((prevUsers) => [...prevUsers, { name, location, time, appointmentType, appointmentReason, notes, date }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center mb-4">
        <div className='flex gap-2'>
        {/* <h1 className="text-xl font-bold">Appointments</h1> */}
        <button
          className="text-sm font-semibold bg-white text-blue-600 border-2 border-blue-600 rounded-lg px-2 py-1 "
        //   onClick={() => setIsModalOpen(true)}
        >
          Appointments
        </button>
        <button
          className="text-sm font-semibold bg-green-900 text-white border-2  rounded-lg px-2 py-1"
        //   onClick={() => setIsModalOpen(true)}
        >
          Day
        </button>
        <button
          className="text-sm font-semibold bg-white text-orange-600  border-2 border-orange-600 rounded-lg px-2 py-1 "
        //   onClick={() => setIsModalOpen(true)}
        >
          Week
        </button>
        <button
          className="text-sm font-semibold bg-white text-yellow-600 border-2 border-yellow-600 rounded-lg px-2 py-1 "
        //   onClick={() => setIsModalOpen(true)}
        >
         Month
        </button>
        </div>
        <button
          className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Add New
        </button>
      </header>

      <div className="flex">
        {/* Calendar Section */}
        <div
          className={`transition-all duration-300 ${isCalendarCollapsed ? 'w-12' : 'w-1/4'} bg-white shadow-md relative`}
        >
          {/* Toggle Button */}
          <button
            className="absolute top-4 -right-6 bg-gray-300 text-sm rounded px-2 py-1 z-10"
            onClick={() => setIsCalendarCollapsed(!isCalendarCollapsed)}
          >
            {isCalendarCollapsed ? '+' : '-'}
          </button>

          {/* Calendar Content */}
          {!isCalendarCollapsed && (
            <div className="p-4">
              <Calendar
                value={selectedDate}
                onChange={(date) => setSelectedDate(date as Date)}
                className="mb-4"
              />
             <div>
  <h3 className="font-semibold bg-blue-200 text-sm p-2 text-blue-500 mb-2">Select Follow Up Text</h3>
  
  {/* Select Follow Up Text */}
  {/* <div className="mb-4">
    <label className="block mb-1 font-medium">Select Follow Up Text</label>
    <select
      className="w-full p-2 border rounded bg-blue-200"
      onChange={(e) => {
        // Handle follow up text selection
        console.log(e.target.value);
      }}
    >
      <option value="text1">Follow Up Text 1</option>
      <option value="text2">Follow Up Text 2</option>
      <option value="text3">Follow Up Text 3</option>
    </select>
  </div> */}

  {/* Select Day (default to today) */}
  <div className="mb-4">
    {/* <label className="block mb-1 font-medium">Select Day</label> */}
    <select
      className="w-full p-2 border rounded"
      defaultValue={new Date().toLocaleDateString()} // Set default to today's date
      onChange={(e) => {
        // Handle day selection
        console.log(e.target.value);
      }}
    >
      <option value={new Date().toLocaleDateString()}>Today</option>
      <option value="2025-01-27">2025-01-27</option>
      <option value="2025-01-28">2025-01-28</option>
      {/* Add more days as needed */}
    </select>
  </div>

  {/* Select Location */}
  <div className="mb-4">
    <label className="block mb-1 bg-blue-200 text-sm p-2 text-blue-500 font-medium">Select Location</label>
    <select
      className="w-full p-2 border rounded "
      onChange={(e) => {
        // Handle location selection
        console.log(e.target.value);
      }}
    >
      <option value="location1">Location 1</option>
      <option value="location2">Location 2</option>
      <option value="location3">Location 3</option>
      {/* Add more locations as needed */}
    </select>
  </div>

  {/* Provider Checkboxes */}
  <div className="mb-4">
    <label className="block mb-1 bg-blue-200 text-sm p-2 text-blue-500 font-medium">Select Provider</label>
    <div className="flex flex-col">
      <label>
        <input
          type="checkbox"
          value="provider1"
          onChange={(e) => {
            // Handle provider selection
            console.log(e.target.value);
          }}
        />
        Provider 1
      </label>
      <label>
        <input
          type="checkbox"
          value="provider2"
          onChange={(e) => {
            // Handle provider selection
            console.log(e.target.value);
          }}
        />
        Provider 2
      </label>
      <label>
        <input
          type="checkbox"
          value="provider3"
          onChange={(e) => {
            // Handle provider selection
            console.log(e.target.value);
          }}
        />
        Provider 3
      </label>
      <label>
        <input
          type="checkbox"
          value="provider4"
          onChange={(e) => {
            // Handle provider selection
            console.log(e.target.value);
          }}
        />
        Provider 4
      </label>
      <label>
        <input
          type="checkbox"
          value="provider5"
          onChange={(e) => {
            // Handle provider selection
            console.log(e.target.value);
          }}
        />
        Provider 5
      </label>
    </div>
  </div>

  {/* Select Appointment Reason 1 */}
  <div className="mb-4">
    <label className="block mb-1 bg-blue-200 text-sm p-2 text-blue-500 font-medium">Select Appointment Reason</label>
    <select
      className="w-full p-2 border rounded"
      value="all"
      onChange={(e) => {
        // Handle reason 1 selection
        console.log(e.target.value);
      }}
    >
      <option value="all">All</option>
      <option value="reason1">Reason 1</option>
      <option value="reason2">Reason 2</option>
      <option value="reason3">Reason 3</option>
      {/* Add more options as needed */}
    </select>
  </div>

  {/* Select Appointment Reason 2 */}
  <div className="mb-4">
    <label className="block mb-1 bg-blue-200 text-sm p-2 text-blue-500 font-medium">Select Appointment Status</label>
    <select
      className="w-full p-2 border rounded"
      value="all"
      onChange={(e) => {
        // Handle reason 2 selection
        console.log(e.target.value);
      }}
    >
      <option value="all">All</option>
      <option value="reason1">Reason 1</option>
      <option value="reason2">Reason 2</option>
      <option value="reason3">Reason 3</option>
      {/* Add more options as needed */}
    </select>
  </div>
</div>

            </div>
          )}
        </div>

        <div className="flex-1 bg-white shadow-md p-4">
  <h2 className="text-lg font-semibold mb-4 ml-4">Scheduled Appointments</h2>
  <div>
    {filteredUsers.length === 0 ? (
      <p className="text-gray-500">No appointments available.</p>
    ) : (
      filteredUsers.map((user, index) => (
        <div
          key={index}
          className="p-2 mb-2 bg-yellow-100 rounded shadow-sm group relative" // Add 'group' here
        >
          <strong className="text-lg">{user.name}</strong>
          {/* <div className="text-sm text-gray-600">{user.data}</div> */}
          <div className="text-xs text-gray-400">{user.date}</div>

          {/* Hover Effect - User Data Dropdown */}
          <div className="absolute top-0 left-20 w-fit hidden group-hover:block p-4 bg-white shadow-lg rounded-md text-sm z-10"> {/* Adjust width here */}
            <pre className="text-gray-600">{JSON.stringify(user, null, 2)}</pre>
          </div>
        </div>
      ))
    )}
  </div>
</div>

      </div>

      {/* Modal */}
      {isModalOpen && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
       <div className="bg-white p-6 rounded shadow-lg w-120"> {/* Increase width here */}
         <h2 className="text-lg font-bold mb-4">Add Appointment</h2>
         <ModalForm onClose={() => setIsModalOpen(false)} onSave={handleAddUser} />
       </div>
     </div>
     
      )}
    </div>
  );
};

interface ModalFormProps {
  onClose: () => void;
  onSave: (
    name: string,
    location: string,
    time: string,
    appointmentType: string,
    appointmentReason: string,
    notes: string,
    date: string
  ) => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [appointmentReason, setAppointmentReason] = useState('');
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (name && location && time && appointmentType && appointmentReason && notes && date) {
      onSave(name, location, time, appointmentType, appointmentReason, notes, date);
      onClose();
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Location</label>
          <select
            className="w-full p-2 border rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            <option value="Location 1">Location 1</option>
            <option value="Location 2">Location 2</option>
            <option value="Location 3">Location 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Time</label>
          <input
            type="time"
            className="w-full p-2 border rounded"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Appointment Type</label>
          <select
            className="w-full p-2 border rounded"
            value={appointmentType}
            onChange={(e) => setAppointmentType(e.target.value)}
          >
            <option value="">Select Appointment Type</option>
            <option value="Consultation">Consultation</option>
            <option value="Follow-up">Follow-up</option>
            <option value="Routine Checkup">Routine Checkup</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Appointment Reason</label>
          <select
            className="w-full p-2 border rounded"
            value={appointmentReason}
            onChange={(e) => setAppointmentReason(e.target.value)}
          >
            <option value="">Select Appointment Reason</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Medical Issue">Medical Issue</option>
            <option value="Follow-up Check">Follow-up Check</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="col-span-2 mb-4">
          <label className="block mb-2 font-medium">Notes</label>
          <textarea
            className="w-full p-2 border rounded"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default App;
