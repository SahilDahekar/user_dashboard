import Close from "./Close";
import DetailsTable from "./DetailsTable";
import Modal from "./Modal";

export default function ModalDetails({user , handleCloseModal, handleReportGeneration}) {
  return (
    <Modal>
        <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Details</h2>
        <buttton className="cursor-pointer text-neutral-700 hover:text-background" onClick={handleCloseModal}>
            <Close/>
        </buttton>
        </div>
        <div className="my-4">
        <DetailsTable user={user}/>
        </div>
        <button className="px-5 py-2 rounded-lg text-sm text-foreground bg-background hover:bg-gray-800 font-semibold transition" onClick={handleReportGeneration}>Generate Report</button>
    </Modal>
  )
}
