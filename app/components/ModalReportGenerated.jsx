import Close from "./Close";
import Modal from "./Modal";

export default function ModalReportGenerated({ handleCloseModal }) {
    return (
      <Modal>
        <div className="flex justify-between mb-4">
            <h2 className="text-lg font-semibold">Report Generated Successfully</h2>
            <buttton className="cursor-pointer text-neutral-700 hover:text-background" onClick={handleCloseModal}>
                <Close/>
            </buttton>
        </div>
        <p>Your report has been generated successfully.</p>
      </Modal>
    );
  }