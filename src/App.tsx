import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-blue-400">Pulse</span>
          <span className="text-purple-400">Connect</span>
        </h1>
        <p className="text-2xl text-gray-300 mb-8">
          Tailwind CSS is <span className="text-green-400 font-bold">WORKING</span>!
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-900 rounded-lg max-w-md mx-auto">
            <p className="text-lg">
              Server: <span className="text-blue-300">localhost:5173</span>
            </p>
            <p className="text-lg">
              Status: <span className="text-green-400">✓ Running</span>
            </p>
          </div>
          
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 
                           rounded-full text-xl font-bold hover:scale-105 transition-transform">
            Start Building
          </button>
        </div>
      </div>
    </div>
  )
}

export default App