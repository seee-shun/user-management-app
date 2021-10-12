import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="blue.600"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled || disabled}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
