// Importing necessary components
import Close from "./Close";
import Modal from "./Modal";

// ModalLoginSuccess component for displaying a success message after account creation
export default function ModalLoginSuccess({handleCloseLoginSuccessModal}) {
  return (
    // Render the Modal component
    <Modal>
        <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Account Created</h2>
        {/* Close button to handle modal closure */}
        <buttton className="cursor-pointer text-neutral-700 hover:text-background" onClick={handleCloseLoginSuccessModal}>
            <Close/>
        </buttton>
        </div>
        {/* Success message indicating account creation and login */}
        <p>Your account has been created successfully. You are now logged in.</p>
    </Modal>
  )
}