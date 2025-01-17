import { fetchUsers } from "../api/user.ts";
import { computed, ref } from "vue";
import type {User} from "../interfaces/users.ts";

export const useUsers = () => {
  const isLoading = ref<boolean>(false);
  const allUsers = ref<User[]>([]);
  const isWomen = ref<boolean>(true);

  const getUsers = async () => {
    try {
      isLoading.value = true;
      const response = await fetchUsers();
      allUsers.value = response.data.results.map((item: any) => ({
        firstname: item.name.first,
        lastname: item.name.last,
        picture: item.picture.medium,
        gender: item.gender,
      }));
    } catch (error) {
      console.error(error);
    }
    isLoading.value = false;
  };

  const allMen = computed<User[]>(() => allUsers.value.filter((user) => user.gender === "male"));
  const allWomen = computed<User[]>(() => allUsers.value.filter((user) => user.gender === "female"));
  const switchedList = computed<User[]>(() =>
    allUsers.value.filter((user) => user.gender === `${isWomen.value ? "female" : "male"}`)
  );

  const switchUsers = () => (isWomen.value = !isWomen.value);

  return { isLoading, allUsers, allMen, allWomen, getUsers, switchedList, switchUsers };
};
