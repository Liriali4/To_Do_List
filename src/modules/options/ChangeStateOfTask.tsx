import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function ChangeStateOfTask(): JSX.Element{
    return(
        <Box>
            <Text>Alterado</Text>
        </Box>
    )
}

/* 
// Options/ConfirmationDialog.js
import React from "react";
import { Modal, Button } from "your-ui-library";

export default function ConfirmationDialog({ message, onConfirm }) {
  return (
    <Modal>
      <p>{message}</p>
      <Button onClick={onConfirm}>Confirm</Button>
    </Modal>
  );
}

*/