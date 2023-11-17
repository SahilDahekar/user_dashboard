// Importing necessary components
import Close from "./Close";
import Modal from "./Modal";

// ModalReportGenerated component for displaying a success message after report generation
export default function ModalReportGenerated({ handleCloseModal }) {
    return (
      // Render the Modal component
      <Modal>
        <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Report Generated Successfully</h2>
            {/* Close button to handle modal closure */}
            <buttton className="cursor-pointer text-neutral-700 hover:text-background" onClick={handleCloseModal}>
                <Close/>
            </buttton>
        </div>
        {/* Success message indicating report generation */}
        <p>Your report has been generated successfully.</p>
      </Modal>
    );
  }