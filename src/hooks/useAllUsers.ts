import { useCallback, useState } from "react";
import axios from "axios";

import { User } from "../types/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [users, setUsers] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(false);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() =>
        showMessage({ title: "データの取得に失敗しました", status: "error" })
      )
      .finally(() => setLoading(false));
  }, [showMessage]);
  return { getUsers, users, loading };
};
