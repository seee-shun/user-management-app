import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  id: number;
  img: string;
  nickName: string;
  userName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { id, img, nickName, userName, onClick } = props;
  return (
    <Box
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={img}
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {nickName}
        </Text>
        <Text fontSize="sm" color="gray">
          {userName}
        </Text>
      </Stack>
    </Box>
  );
});
