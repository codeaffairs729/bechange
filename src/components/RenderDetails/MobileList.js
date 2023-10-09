import { useState } from "react";
import { useSelector } from "react-redux";

import { Box, CircularProgress } from "@mui/material";

import Modal from "../Modal";
import TariffDetails from "./TariffDetails";
import MobileAccordionDetails from "../MobileAccordion";

export default function MobileList() {
  const [openModal, setOpenModal] = useState(false);

  const { loading } = useSelector((state) => state.telecom);

  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal}>
        <TariffDetails />
      </Modal>{" "}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <MobileAccordionDetails />
      )}
    </>
  );
}
