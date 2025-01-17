<template>
  <div class="wrapper">
    <h2>Titre</h2>
    <ul class="list">
      <UserItem v-for="(user, index) in users" :key="index" :user="user" />
    </ul>
  </div>
</template>
<script lang="ts" setup>
import UserItem from "./UserItem.vue";
import type {User} from "../interfaces/users.ts";

defineProps<{users: User[]}>()

</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.list {
  list-style-type: none;
  padding: 0;
}
</style>
