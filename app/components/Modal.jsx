export default function Modal({children}) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 z-50 backdrop-blur-sm transition">
        <div className="flex justify-center items-center h-screen w-screen">
        <div className="bg-white rounded-lg shadow py-6 px-6">
          {children}
        </div>
        </div>
    </div>
  )
}
