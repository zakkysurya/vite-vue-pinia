import { defineStore } from "pinia";
import { reactive, computed } from "vue";

export const useUserStore = defineStore("user", () => {
  // main data
  const users = reactive([
    {
      name: "Abdul",
      age: 24,
    },
    {
      name: "John",
      age: 30,
    },
  ]);
  // temporary data, akan digunakan sebagai pengganti v-model di dalam form
  const tempUser = reactive({
    name: "",
    age: "",
  });
  // methods
  const addUser = () => {
    // mengakses tempUser(object) dikarenakan tempUser digunakan sebagai pengganti v-model
    users.push({
      name: tempUser.name,
      age: tempUser.age,
    });
    clearTempUser();
  };
  // clear temporary data
  const clearTempUser = () => {
    tempUser.name = "";
    tempUser.age = "";
  };
  // hitung total users jika ada perubahan data menggunakan computed
  const totalUsers = computed(() => {
    return users.length;
  });

  // setting return
  return { users, addUser, tempUser, totalUsers };
});
