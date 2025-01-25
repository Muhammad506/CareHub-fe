'use client';
import { postApi } from '@/commonfunction/Apicall';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);  // To control modal visibility
  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await postApi('https://localhost:44381/api/Account/CreateAccount', formData);
      console.log('Registration successful:', response);

      // Show modal after successful registration
      setIsModalOpen(true);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);  // Close modal
    router.push('/Loginpage');  // Navigate to login page
  };

  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/LOGIN.JPG")' }}
    >
      <div className="bg-white bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600"><b>Full Name</b></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600"><b>Email Address</b></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600"><b>Password</b></label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 bg-opacity-90 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Create Account
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Already have an account? <a href="/Loginpage" className="text-blue-500 hover:text-blue-700">Login</a></p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
            <h3 className="text-lg font-semibold mb-4">Account Created Successfully!</h3>
            <button
              onClick={handleModalClose}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
