'use client';
import { postApi } from '@/commonfunction/Apicall'; // Import the postApi function
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter(); 

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [modalMessage, setModalMessage] = useState(''); // Message to show in the modal

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await postApi('https://localhost:44381/api/Account/Login', formData); // Use postApi to make the POST request
      console.log('Login successful:', response);
      // You can redirect the user or handle the response as needed
      router.push('/AddPatient'); // Redirect to the dashboard or home page upon successful login
    } catch (error: any) {
      console.error('Login failed:', error);
      setModalMessage(error.message || 'An error occurred during login.'); // Set the error message
      setIsModalOpen(true); // Open the modal to show the error message
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="flex h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
        style={{ backgroundImage: 'url("/images/LOGIN.JPG")', backgroundSize: 'cover', backgroundPosition: 'center' }} // Full-screen background image
      />
      
      {/* Left Side: About Us */}
      <div className="w-1/2 p-8 flex flex-col justify-center items-center relative z-10">
        <div className="text-center text-white">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg">
            We are a company committed to providing excellent services. Our mission is to ensure customer satisfaction and offer the best experience.
          </p>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-1/2 p-8 flex justify-center items-center relative z-10">
        <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6 flex items-center justify-center">
            <img
              src="/images/LOGIN.JPG"
              alt="CareHub Logo"
              className="w-8 h-8 mr-2"
            />
            CareHub
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600"><b>Email Address</b></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
              </div>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-700">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Don't have an account? <a href="#" onClick={() => router.push('/CreateAccount')} className="text-blue-500 hover:text-blue-700">Sign up</a></p>
          </div>
        </div>
      </div>

      {/* Modal for error messages */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
            <h3 className="text-lg font-semibold mb-4">{modalMessage}</h3>
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
