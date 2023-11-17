import Close from "./Close";
import Modal from "./Modal";

export default function ModalLoginSuccess({handleCloseLoginSuccessModal}) {
  return (
    <Modal>
        <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Account Created</h2>
        <buttton className="cursor-pointer text-neutral-700 hover:text-background" onClick={handleCloseLoginSuccessModal}>
            <Close/>
        </buttton>
        </div>
        <p>Your account has been created successfully. You are now logged in.</p>
    </Modal>
  )
}