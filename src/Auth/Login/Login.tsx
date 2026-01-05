import React, { useState } from 'react';
import { loginUser } from '../../lib/api';
import { loginSchema} from '../../lib/validationSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface LoginProps {
  onShowRegister?: () => void;
}
type LoginFormData = {
  email: string;
  password: string;
};

export const Login: React.FC<LoginProps> = ({ onShowRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

   const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });


  
  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onShowRegister) {
      onShowRegister();
    }
  };

  // 👇 PROMENI OVO
// const handleSubmit = async (e: React.FormEvent) => { ... }

// 👇 NA OVO
const onSubmit = async (data: LoginFormData) => {
  console.log("📝 Podaci iz forme (prošli validaciju):", data);
  
  // 1. Uključi loading
  setIsLoading(true);
  
  try {
    // 2. Pozovi našu API funkciju
    console.log("🔗 Šaljem na API:", data);
    const result = await loginUser(data.email, data.password);
    
    // 3. Proveri rezultat
    if (result.success) {
      console.log("🎉 USPEH!");
      
      if (result.data?.token) {
        localStorage.setItem('authToken', result.data.token);
        console.log("💾 Token sačuvan");
      }
      
      alert("Login uspešan!");
      reset(); // 👈 Resetuje formu na praznu
      
    } else {
      console.log("😞 Neuspeh:", result.error);
      alert(`Greška: ${result.error}`);
    }
    
  } catch (error) {
    console.error("💥 Greška u try-catch:", error);
    alert("Došlo je do neočekivane greške");
    
  } finally {
    // 4. Isključi loading
    setIsLoading(false);
  }
};

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
      <div className='flex flex-col md:flex-row w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl'>
        
        {/* Left side - Welcome section */}
        <div className='md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 md:p-12 flex flex-col justify-center text-white'>
          <div className='mb-8'>
            <h1 className='text-3xl md:text-4xl font-bold mb-2'>Welcome to</h1>
            <div className='flex items-baseline'>
              <span className='text-5xl md:text-6xl font-extrabold text-yellow-300'>Plus</span>
              <span className='text-5xl md:text-6xl font-extrabold ml-2'>Connect</span>
            </div>
            <p className='text-indigo-200 mt-4 text-lg'>Povežite se sa prijateljima, delite trenutke i istražujte svet.</p>
          </div>
          
          <div className='mt-8'>
            <div className='flex items-center mb-6'>
              <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4'>
                <i className='fas fa-users text-lg'></i>
              </div>
              <div>
                <h3 className='font-bold text-lg'>Povežite se</h3>
                <p className='text-indigo-200'>Pronađite prijatelje i kolege</p>
              </div>
            </div>
            
            <div className='flex items-center mb-6'>
              <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4'>
                <i className='fas fa-share-alt text-lg'></i>
              </div>
              <div>
                <h3 className='font-bold text-lg'>Delite</h3>
                <p className='text-indigo-200'>Delite svoje trenutke sa svetom</p>
              </div>
            </div>
            
            <div className='flex items-center'>
              <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4'>
                <i className='fas fa-globe-americas text-lg'></i>
              </div>
              <div>
                <h3 className='font-bold text-lg'>Istražujte</h3>
                <p className='text-indigo-200'>Otkrijte zanimljiv sadržaj</p>
              </div>
            </div>
          </div>
          
          <div className='mt-12 text-center'>
            <p className='text-indigo-200'>
              Nemate nalog?{' '}
              <button 
                onClick={handleRegisterClick}
                className='text-yellow-300 font-semibold hover:underline focus:outline-none'
              >
                Registrujte se
              </button>
            </p>
          </div>
        </div>
        
        {/* Right side - Login form */}
        <div className='md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center'>
          <div className='text-center mb-10'>
            <h2 className='text-3xl font-bold text-gray-800'>Prijavite se</h2>
            <p className='text-gray-600 mt-2'>Unesite svoje podatke za prijavu</p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                Email adresa
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <i className='fas fa-envelope text-gray-400'></i>
                </div>
                  <input
                    type='email'
                    id='email'
                    {...register('email')}  
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition duration-300 ${
                      errors.email 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-indigo-500'
                    }`}
                    placeholder='vasemail@example.com'
                    disabled={isLoading}
                  />
{errors.email && (
  <p className='mt-1 text-sm text-red-600'>{errors.email.message}</p>
)}
              </div>
            </div>
            
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>
                Lozinka
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <i className='fas fa-lock text-gray-400'></i>
                </div>
                 <input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    {...register('password')}  // 👈 ZAMENI onChange={handleChange}
                    className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition duration-300 ${
                      errors.password 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-indigo-500'
                    }`}
                    placeholder='Unesite vašu lozinku'
                    disabled={isLoading}
                  />
{errors.password && (
  <p className='mt-1 text-sm text-red-600'>{errors.password.message}</p>
)}
                <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
                  <button 
                    type='button' 
                    className='text-gray-400 hover:text-gray-600 focus:outline-none'
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>
            </div>
            
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  type='checkbox'
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                />
                <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-700'>
                  Zapamti me
                </label>
              </div>
              <div className='text-sm'>
                <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Zaboravili ste lozinku?
                </a>
              </div>
            </div>
            
            <div>
              <button
                type='submit'
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 shadow-md ${
                  isLoading 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Prijavljivanje...
                  </span>
                ) : (
                  'Prijavi se'
                )}
              </button>
            </div>
          </form>
          
          <div className='mt-8 text-center text-sm text-gray-600'>
            <p>Prijavom se slažete sa našim <a href='#' className='text-indigo-600 hover:text-indigo-500 font-medium'>Uslovima korišćenja</a> i <a href='#' className='text-indigo-600 hover:text-indigo-500 font-medium'>Politikom privatnosti</a>.</p>
          </div>
        </div>
      </div>
      
      {/* Footer note */}
      <div className='absolute bottom-4 text-center text-gray-600 text-sm'>
        <p>© 2023 PlusConnect. Sva prava zadržana.</p>
      </div>
    </div>
  );
};