import  { useState } from 'react';
import NavBar from './NavBar';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({});
  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) errors.password = 'Password is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center h-[90vh]">
        <div className="w-[600px] p-5 border border-green-600 rounded-xl shadow-xl">
          <h1 className="text-2xl font-semibold text-center text-black">Register</h1>
          <form className="flex flex-col gap-3 mt-3" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName" className='font-semibold text-blue-500'>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="p-2 border border-gray-300"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lastName"className='font-semibold text-blue-500'>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="p-2 border border-gray-300"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email"className='font-semibold text-blue-500'>Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="p-2 border border-gray-300"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className='font-semibold text-blue-500'>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="p-2 border border-gray-300"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <button className="bg-green-700 text-white p-2 rounded-lg mt-2">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;