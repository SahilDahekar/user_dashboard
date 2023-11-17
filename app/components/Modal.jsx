// Modal component for displaying content in a modal overlay. This is modal template component for other modal components
export default function Modal({children}) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75 z-50 backdrop-blur-sm transition">
        <div className="flex justify-center items-center h-screen w-screen">
        <div className="bg-white rounded-lg shadow py-6 px-6">
          {/* Render the content passed as children */}
          {children}
        </div>
        </div>
    </div>
  )
}
