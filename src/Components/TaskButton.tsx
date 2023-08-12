import { Box, Button } from "@chakra-ui/react";
import React from "react";

type TaskButtonProps = {
  label: string;
  onClick?: (e: any) => void;
};

export default function TaskButton({ label, onClick }: TaskButtonProps): JSX.Element {
  return (
    <Button
      p={'10px'}
      h={'50px'}
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      as='button'
      color='white'
      fontWeight='bold'
      borderRadius='5px'
      _hover={{
        bgGradient: 'linear(to-l, #FF0080, #7928CA)',
      }}
      onClick={onClick}>{label}</Button>
  );
}
