import { memo, useCallback, useEffect, VFC } from "react";
import { Center, SimpleGrid, Spinner, useDisclosure } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/userCard";
import { UserDetailModal } from "../organisms/user/userDetailModal";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onOpen, onSelectUser]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <SimpleGrid
          minChildWidth="200px"
          spacingX="40px"
          spacingY="40px"
          p={{ base: 4, md: 10 }}
        >
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              img="https://source.unsplash.com/random"
              userName={user.name}
              nickName={user.username}
              onClick={onClickUser}
            />
          ))}
        </SimpleGrid>
      )}
      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        isAdmin={loginUser?.isAdmin}
        onClose={onClose}
      />
    </>
  );
});
