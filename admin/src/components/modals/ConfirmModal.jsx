import Button from "../ui/Button.jsx";
import Modal from "../ui/Modal.jsx";

export default function ConfirmModal({ open, title, message, onCancel, onConfirm, danger = false }) {
  return (
    <Modal open={open} onClose={onCancel} title={title} width="max-w-md">
      <p className="text-sm leading-6 text-white/66">{message}</p>
      <div className="mt-5 flex justify-end gap-2">
        <Button onClick={onCancel}>Cancel</Button>
        <Button variant={danger ? "danger" : "primary"} onClick={onConfirm}>Confirm</Button>
      </div>
    </Modal>
  );
}
