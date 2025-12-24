import React from 'react';

export const Login = () => {
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
            <p className='text-indigo-200'>Nemate nalog? <span className='text-yellow-300 font-semibold cursor-pointer hover:underline'>Registrujte se</span></p>
          </div>
        </div>
        
        {/* Right side - Login form */}
        <div className='md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center'>
          <div className='text-center mb-10'>
            <h2 className='text-3xl font-bold text-gray-800'>Prijavite se</h2>
            <p className='text-gray-600 mt-2'>Unesite svoje podatke za prijavu</p>
          </div>
          
          <form className='space-y-6'>
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
                  type='password'
                  id='password'
                  className='w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300'
                  placeholder='Unesite vašu lozinku'
                />
                <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
                  <button type='button' className='text-gray-400 hover:text-gray-600 focus:outline-none'>
                    <i className='fas fa-eye'></i>
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
                className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 shadow-md hover:shadow-lg'
              >
                Prijavi se
              </button>
            </div>
            
            <div className='relative my-6'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-4 bg-white text-gray-500'>Ili nastavite sa</span>
              </div>
            </div>
            
            <div className='grid grid-cols-2 gap-4'>
              <button
                type='button'
                className='flex items-center justify-center py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition duration-300'
              >
                <i className='fab fa-google text-red-500 mr-2'></i>
                <span className='text-gray-700 font-medium'>Google</span>
              </button>
              <button
                type='button'
                className='flex items-center justify-center py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition duration-300'
              >
                <i className='fab fa-facebook text-blue-600 mr-2'></i>
                <span className='text-gray-700 font-medium'>Facebook</span>
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