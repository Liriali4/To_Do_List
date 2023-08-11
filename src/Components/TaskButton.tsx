import { Box, Button } from "@chakra-ui/react";
import React from "react";

type TaskButtonProps = {
  label: string;
  onClick?: (e:any) => void;
};

export default function TaskButton({ label, onClick }: TaskButtonProps): JSX.Element {
  return (
    <Box>
      <Button onClick={onClick}>{label}</Button>
    </Box>
  );
}
