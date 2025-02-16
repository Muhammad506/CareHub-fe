// 'use client';
// import { postApi } from '@/commonfunction/Apicall';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function CreateAccount() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);  // To control modal visibility
//   const router = useRouter();

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     try {
//       const response = await postApi('https://localhost:44381/api/Account/CreateAccount', formData);
//       console.log('Registration successful:', response);

//       // Show modal after successful registration
//       setIsModalOpen(true);
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);  // Close modal
//     router.push('/Loginpage');  // Navigate to login page
//   };

//   return (
//     <div
//       className="h-screen flex justify-center items-center bg-cover bg-center"
//       style={{ backgroundImage: 'url("/images/LOGIN.JPG")' }}
//     >
//       <div className="bg-white bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-sm">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Create Account</h2>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-600"><b>Full Name</b></label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-600"><b>Email Address</b></label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-600"><b>Password</b></label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 bg-opacity-90 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
//           >
//             Create Account
//           </button>
//         </form>

//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-600">Already have an account? <a href="/Loginpage" className="text-blue-500 hover:text-blue-700">Login</a></p>
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
//             <h3 className="text-lg font-semibold mb-4">Account Created Successfully!</h3>
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
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    setIsModalOpen(false); // Close modal
    router.push('/loginpage'); // Navigate to login page
  };

  return (
    <div
      className="min-h-screen lg:h-screen flex justify-center lg:justify-start items-center bg-cover bg-center p-4  md:p-20 xl:p-40 relative"
      style={{ backgroundImage: 'url("/Bg.webp")' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

      <div className="bg-white bg-opacity-90 px-8 py-4 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:shadow-3xl relative z-10">
        {/* Logo */}
        <div className="flex justify-center ">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <p className='text-xl font-medium flex justify-center items-center text-center mb-4 '>Create Your CareHub Account</p>

        {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Create Account</h2> */}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#21547F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21547F] focus:border-transparent transition duration-200"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#21547F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21547F] focus:border-transparent transition duration-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#21547F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21547F] focus:border-transparent transition duration-200"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#1A3A5A] via-[#21547F] to-[#1A3A5A] text-white py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-[#21547F] hover:via-[#1A3A5A] hover:to-[#21547F] transition-all duration-500 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#21547F] focus:ring-opacity-50"
          >
            Create Account
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/loginpage" className="text-[#21547F] hover:text-blue-800 transition duration-200 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-11/12 max-w-md text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Account Created Successfully!</h3>
            <button
              onClick={handleModalClose}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 transform hover:scale-105"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}