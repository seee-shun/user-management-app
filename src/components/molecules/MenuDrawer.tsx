import { memo, VFC } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  toHome: () => void;
  toUserManagement: () => void;
  toSetting: () => void;
};
export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen, toHome, toUserManagement, toSetting } = props;
  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          <Button w="100%" _focus={{ boxShadow: "none" }} onClick={toHome}>
            TOP
          </Button>
          <Button
            w="100%"
            _focus={{ boxShadow: "none" }}
            onClick={toUserManagement}
          >
            ユーザー一覧
          </Button>
          <Button w="100%" _focus={{ boxShadow: "none" }} onClick={toSetting}>
            設定
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
