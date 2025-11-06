import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Interactive Components Challenge
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Build any of the animated components listed in the README
        </p>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Your Components
          </h2>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-gray-600">
              Import and showcase your components here. Check the{' '}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                src/components/examples
              </code>{' '}
              folder for a reference implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
