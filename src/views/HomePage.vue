<template>
  <main>
    <h1>Liste de users</h1>
    <div class="filters">
      <MonBouton text="Cliquez" />
    </div>
    <div v-if="!isLoading" class="lists">
      <ListUser :users="allUsers" />
      <ListUser :users="allMen" />
      <ListUser :users="allWomen" />
    </div>
  </main>
</template>
<script setup lang="ts">
import ListUser from "../components/ListUser.vue";
import MonBouton from "../components/MonBouton.vue";
import {onMounted} from "vue";
import { useUsers } from "../composables/users";

const { isLoading, allUsers, allMen, allWomen, getUsers } = useUsers()
onMounted(() => {
  getUsers();
});
</script>
<style scoped>
main {
  background-color: blanchedalmond;
  padding: 20px;
}
.filters {
  justify-content: center;
  display: flex;
  gap: 10px;
}
.lists {
  display: flex;
  justify-content: space-between;
}
</style>
