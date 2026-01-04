import React, { useState } from 'react';

interface RegistrationProps {
  onShowLogin?: () => void;
}

export const Registration: React.FC<RegistrationProps> = ({ onShowLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    termsAccepted: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onShowLogin) {
      onShowLogin();
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Ovo je samo vizuelni prikaz. Registration forma nije funkcionalna jer je fokus projekta na drugim funkcionalnostima.');
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
            <p className='text-indigo-200 mt-4 text-lg'>Pridružite se našoj zajednici i počnite da delite svoje trenutke.</p>
          </div>
          
          <div className='mt-8'>
            <div className='flex items-center mb-6'>
              <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4'>
                <i className='fas fa-user-plus text-lg'></i>
              </div>
              <div>
                <h3 className='font-bold text-lg'>Lako se registrujte</h3>
                <p className='text-indigo-200'>Brzo napravite nalog sa nekoliko koraka</p>
              </div>
            </div>
            
            <div className='flex items-center mb-6'>
              <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4'>
                <i className='fas fa-shield-alt text-lg'></i>
              </div>
              <div>
                <h3 className='font-bold text-lg'>Bezbednost</h3>
                <p className='text-indigo-200'>Vaši podaci su zaštićeni i sigurni</p>
              </div>
            </div>
            
            <div className='flex items-center'>
              <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4'>
                <i className='fas fa-rocket text-lg'></i>
              </div>
              <div>
                <h3 className='font-bold text-lg'>Odmah počnite</h3>
                <p className='text-indigo-200'>Pridružite se zajednici za manje od 2 minuta</p>
              </div>
            </div>
          </div>
          
          <div className='mt-12 text-center'>
            <p className='text-indigo-200'>
              Već imate nalog?{' '}
              <button 
                onClick={handleLoginClick}
                className='text-yellow-300 font-semibold hover:underline focus:outline-none'
              >
                Prijavite se
              </button>
            </p>
          </div>
        </div>
        
        {/* Right side - Registration form */}
        <div className='md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center'>
          <div className='text-center mb-6'>
            <h2 className='text-3xl font-bold text-gray-800'>Registrujte se</h2>
            <p className='text-gray-600 mt-2'>Popunite podatke za kreiranje naloga</p>
          </div>
          
          {/* Info message */}
          <div className='mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
            <p className='text-blue-700 text-sm flex items-start'>
              <i className='fas fa-info-circle mr-2 mt-0.5'></i>
              <span>Ovo je samo vizuelni prikaz. Fokus projekta je na drugim funkcionalnostima, pa registration forma nije funkcionalna.</span>
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div>
                <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-2'>
                  Ime
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <i className='fas fa-user text-gray-400'></i>
                  </div>
                  <input
                    type='text'
                    id='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300'
                    placeholder='Vaše ime'
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-2'>
                  Prezime
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <i className='fas fa-user text-gray-400'></i>
                  </div>
                  <input
                    type='text'
                    id='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300'
                    placeholder='Vaše prezime'
                  />
                </div>
              </div>
            </div>
            
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
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300'
                  placeholder='vasemail@example.com'
                />
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
                  value={formData.password}
                  onChange={handleChange}
                  className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300'
                  placeholder='Unesite lozinku'
                />
                <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
                  <button 
                    type='button' 
                    className='text-gray-400 hover:text-gray-600 focus:outline-none'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700 mb-2'>
                Potvrdite lozinku
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <i className='fas fa-lock text-gray-400'></i>
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300'
                  placeholder='Ponovite lozinku'
                />
                <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
                  <button 
                    type='button' 
                    className='text-gray-400 hover:text-gray-600 focus:outline-none'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>
            </div>
            
            <div className='flex items-start'>
              <div className='flex items-center h-5'>
                <input
                  id='termsAccepted'
                  type='checkbox'
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                />
              </div>
              <div className='ml-3 text-sm'>
                <label htmlFor='termsAccepted' className='text-gray-700'>
                  Slažem se sa{' '}
                  <a href='#' className='text-indigo-600 hover:text-indigo-500 font-medium'>
                    Uslovima korišćenja
                  </a>{' '}
                  i{' '}
                  <a href='#' className='text-indigo-600 hover:text-indigo-500 font-medium'>
                    Politikom privatnosti
                  </a>
                </label>
              </div>
            </div>
            
            <div className='pt-4'>
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 shadow-md hover:shadow-lg'
              >
                Kreiraj nalog
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Footer note */}
      <div className='absolute bottom-4 text-center text-gray-600 text-sm'>
        <p>© 2023 PlusConnect. Sva prava zadržana.</p>
      </div>
    </div>
  );
};