// Importing necessary components
import Close from "./Close";
import DetailsTable from "./DetailsTable";
import Modal from "./Modal";

// ModalDetails component for displaying user details in a modal
export default function ModalDetails({user , handleCloseModal, handleReportGeneration}) {
  return (
    // Render the Modal component by passing required html to display
    <Modal>
        <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Details</h2>
        {/* Close button to handle modal closure */}
        <buttton className="cursor-pointer text-neutral-700 hover:text-background" onClick={handleCloseModal}>
            <Close/>
        </buttton>
        </div>
        <div className="my-4">
        <DetailsTable user={user}/>
        </div>
        {/* Button to generate a report */}
        <button className="px-5 py-2 rounded-lg text-sm text-foreground bg-background hover:bg-opacity-90 font-semibold transition" onClick={handleReportGeneration}>Generate Report</button>
    </Modal>
  )
}
