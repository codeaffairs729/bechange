import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "80vh",
  overflowY: "scroll",
  width: "80vw",
  bgcolor: "background.paper",
  border: "2px solid #2c9b42",
  borderRadius: "30px",
  boxShadow: 24,
  px: 6,
  py: 3
};

export default function BasicModal({ open, setOpen, children }) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
