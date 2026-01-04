import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Ovdje bi bila logika za logout
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">PlusConnect Dashboard</h1>
            <p className="text-gray-600">Dobrodošli nazad!</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Odjavi se
          </button>
        </div>

        {/* Dashboard content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-users text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Prijatelji</h3>
            </div>
            <p className="text-gray-600">Imate 156 prijatelja na platformi</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
              Pregledaj prijatelje →
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-share-alt text-green-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Objave</h3>
            </div>
            <p className="text-gray-600">Objavili ste 47 puta ovog meseca</p>
            <button className="mt-4 text-green-600 hover:text-green-800 font-medium">
              Kreiraj novu objavu →
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr=4">
                <i className="fas fa-bell text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Obaveštenja</h3>
            </div>
            <p className="text-gray-600">Imate 12 novih obaveštenja</p>
            <button className="mt-4 text-purple-600 hover:text-purple-800 font-medium">
              Pročitaj obaveštenja →
            </button>
          </div>
        </div>

        {/* Recent activity */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Nedavne aktivnosti</h2>
          <div className="space-y-4">
            <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-user-plus text-blue-600"></i>
              </div>
              <div>
                <p className="font-medium">Marko Marković vas je dodao za prijatelja</p>
                <p className="text-sm text-gray-500">Pre 2 sata</p>
              </div>
            </div>
            <div className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-heart text-green-600"></i>
              </div>
              <div>
                <p className="font-medium">Ana Anić lajkovala je vašu objavu</p>
                <p className="text-sm text-gray-500">Pre 5 sati</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};