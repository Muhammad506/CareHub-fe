// 'use client';
// import { postApi } from '@/commonfunction/Apicall'; // Import the postApi function
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function Login() {
//   const router = useRouter(); 

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     remember: false,
//   });

//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
//   const [modalMessage, setModalMessage] = useState(''); // Message to show in the modal

//   const handleChange = (e: any) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     try {
//       const response = await postApi('https://localhost:44381/api/Account/Login', formData); // Use postApi to make the POST request
//       console.log('Login successful:', response);
//       // You can redirect the user or handle the response as needed
//       router.push('/AddPatient'); // Redirect to the dashboard or home page upon successful login
//     } catch (error: any) {
//       console.error('Login failed:', error);
//       setModalMessage(error.message || 'An error occurred during login.'); // Set the error message
//       setIsModalOpen(true); // Open the modal to show the error message
//     }
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false); // Close the modal
//   };

//   return (
//     <div className="flex h-screen relative">
//       {/* Background Image */}
//       <div 
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
//         style={{ backgroundImage: 'url("/images/LOGIN.JPG")', backgroundSize: 'cover', backgroundPosition: 'center' }} // Full-screen background image
//       />

//       {/* Left Side: About Us */}
//       <div className="w-1/2 p-8 flex flex-col justify-center items-center relative z-10">
//         <div className="text-center text-white">
//           <h2 className="text-3xl font-semibold mb-4">About Us</h2>
//           <p className="text-lg">
//             We are a company committed to providing excellent services. Our mission is to ensure customer satisfaction and offer the best experience.
//           </p>
//         </div>
//       </div>

//       {/* Right Side: Login Form */}
//       <div className="w-1/2 p-8 flex justify-center items-center relative z-10">
//         <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg w-full max-w-sm">
//           <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6 flex items-center justify-center">
//             <img
//               src="/images/LOGIN.JPG"
//               alt="CareHub Logo"
//               className="w-8 h-8 mr-2"
//             />
//             CareHub
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-600"><b>Email Address</b></label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-600"><b>Password</b></label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="remember"
//                   name="remember"
//                   checked={formData.remember}
//                   onChange={handleChange}
//                   className="mr-2"
//                 />
//                 <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
//               </div>
//               <a href="#" className="text-sm text-gray-600 hover:text-blue-700">Forgot Password?</a>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
//             >
//               Login
//             </button>
//           </form>

//           <div className="mt-4 text-center">
//             <p className="text-sm text-gray-600">Don't have an account? <a href="#" onClick={() => router.push('/CreateAccount')} className="text-blue-500 hover:text-blue-700">Sign up</a></p>
//           </div>
//         </div>
//       </div>

//       {/* Modal for error messages */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
//             <h3 className="text-lg font-semibold mb-4">{modalMessage}</h3>
//             <button
//               onClick={handleModalClose}
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }







// 'use client';

// import { postApi } from '@/commonfunction/Apicall';
// import { useRouter } from 'next/navigation';
// import { useState, useEffect } from 'react';

// export default function Login() {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     remember: false,
//   });

//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
//   const [modalMessage, setModalMessage] = useState(''); // Message to show in the modal

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const response = await postApi('https://localhost:44381/api/Account/Login', formData);
//       console.log('Login successful:', response);
//       router.push('/AddPatient');
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Login failed:', error);
//         setModalMessage(error.message || 'An error occurred during login.');
//       } else {
//         setModalMessage('An unexpected error occurred.');
//       }
//       setIsModalOpen(true);
//     }
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false); // Close the modal
//   };

//   // Slider logic
//   const slides = [
//     {
//       title: 'Welcome to CareHub',
//       content: 'Providing the best healthcare services tailored for your needs.',
//     },
//     {
//       title: 'Our Mission',
//       content: 'Ensuring quality, accessibility, and trust in every interaction.',
//     },
//     {
//       title: 'Join Us Today',
//       content: 'Be a part of a growing community focused on care and excellence.',
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds

//     const handleArrowKey = (e: KeyboardEvent) => {
//       if (e.key === 'ArrowLeft') {
//         setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length); // Go to previous slide
//       } else if (e.key === 'ArrowRight') {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Go to next slide
//       }
//     };

//     window.addEventListener('keydown', handleArrowKey);

//     return () => {
//       clearInterval(interval);
//       window.removeEventListener('keydown', handleArrowKey);
//     };
//   }, []);

//   const handleSlideChange = (direction: string) => {
//     if (direction === 'prev') {
//       setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
//     } else if (direction === 'next') {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row h-screen relative">
//       {/* Background Image */}
//       <div 
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
//         style={{ backgroundImage: 'url("/images/LOGIN.JPG")', backgroundSize: 'cover', backgroundPosition: 'center' }}
//       />
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

//       {/* Left Side: About Us Slider */}
//       <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center items-center relative z-10">
//         <div className="w-full max-w-lg">
//           <div className="overflow-hidden rounded-lg shadow-lg relative">
//             {/* Slider Content */}
//             <div
//               className="slider flex transition-transform duration-700 ease-in-out"
//               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//               {slides.map((slide, index) => (
//                 <div
//                   key={index}
//                   className={`min-w-full p-6 flex flex-col items-center transition-all duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
//                   style={{
//                     color: 'white',
//                   }}
//                 >
//                   <h2 className="text-3xl font-semibold mb-4">{slide.title}</h2>
//                   <p className="text-lg">{slide.content}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Arrow Buttons */}
//             <button
//               onClick={() => handleSlideChange('prev')}
//               className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 text-white text-4xl focus:outline-none"
//             >
//               <span>&#x2039;</span> {/* Left arrow symbol */}
//             </button>
//             <button
//               onClick={() => handleSlideChange('next')}
//               className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 text-white text-4xl focus:outline-none"
//             >
//               <span>&#x203A;</span> {/* Right arrow symbol */}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Right Side: Login Form */}
//       <div className="w-full lg:w-1/2 p-8 flex justify-center items-center relative z-10">
//         <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg w-full max-w-sm">
//           <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6 flex items-center justify-center">
//             <img
//               src="/images/LOGIN.JPG"
//               alt="CareHub Logo"
//               className="w-8 h-8 mr-2"
//             />
//             CareHub
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700"><b>Email Address</b></label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700"><b>Password</b></label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="remember"
//                   name="remember"
//                   checked={formData.remember}
//                   onChange={handleChange}
//                   className="mr-2"
//                 />
//                 <label htmlFor="remember" className="text-sm text-gray-800">Remember me</label>
//               </div>
//               <a href="#" className="text-sm text-gray-800 hover:text-blue-700">Forgot Password?</a>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
//             >
//               Login
//             </button>
//           </form>

//           <div className="mt-4 text-center">
//             <p className="text-sm text-gray-800">Don't have an account? <a href="/CreateAccount" className="text-blue-500 hover:text-blue-700">Sign up</a></p>
//           </div>
//         </div>
//       </div>

//       {/* Modal for error messages */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
//             <h3 className="text-lg font-semibold mb-4">{modalMessage}</h3>
//             <button
//               onClick={handleModalClose}
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





'use client';

import { postApi } from '@/commonfunction/Apicall';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [modalMessage, setModalMessage] = useState(''); // Message to show in the modal

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await postApi(
        'https://localhost:44381/api/Account/Login',
        formData
      );
      console.log('Login successful:', response);
      router.push('/dashboard');
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message || 'An error occurred during login.'
          : 'An unexpected error occurred.';
      console.error('Login failed:', errorMessage);
      setModalMessage(errorMessage);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  // Slider logic
  const slides = [
    {
      title: 'Welcome to CareHub',
      content: 'Providing the best healthcare services tailored for your needs.',
    },
    {
      title: 'Our Mission',
      content: 'Ensuring quality, accessibility, and trust in every interaction.',
    },
    {
      title: 'Join Us Today',
      content: 'Be a part of a growing community focused on care and excellence.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    const handleArrowKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }
    };

    window.addEventListener('keydown', handleArrowKey);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleArrowKey);
    };
  }, [slides.length]);

  const handleSlideChange = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    } else if (direction === 'next') {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen relative">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
        style={{
          backgroundImage: 'url("/images/LOGIN.JPG")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

      {/* Left Side: About Us Slider */}
      <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center items-center relative z-10">
        <div className="w-full max-w-lg">
          <div className="overflow-hidden rounded-lg shadow-lg relative bg-opacity-70">
            {/* Slider Content */}
            <div
              className="slider flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`min-w-full p-6 flex flex-col items-center transition-all duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{
                    color: 'white',
                  }}
                >
                  <h2 className="text-3xl font-semibold mb-4">{slide.title}</h2>
                  <p className="text-lg">{slide.content}</p>
                </div>
              ))}
            </div>

            {/* Arrow Buttons */}
            <button
              onClick={() => handleSlideChange('prev')}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl focus:outline-none"
            >
              &#x2039;
            </button>
            <button
              onClick={() => handleSlideChange('next')}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl focus:outline-none"
            >
              &#x203A;
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 p-8 flex justify-center items-center relative z-10">
        <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6 flex items-center justify-center">
            <Image
              src="/images/LOGIN.JPG"
              alt="CareHub Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            CareHub
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
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
                <label htmlFor="remember" className="text-sm text-gray-800">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-gray-800 hover:text-blue-700">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-800">
              Don’t have an account?{' '}
              <Link href="/create-account" className="text-blue-500 hover:text-blue-700">
                Sign up
              </Link>
            </p>
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
