<template>
  <li class="item">
    <img :src="user.picture" height="40px" width="40px" alt="image de l'utilisateur" />
    <div class="data">
      <p class="name">{{ user.firstname }} {{ user.lastname }}</p>
      <p class="gender">{{ user.gender }}</p>
    </div>
  </li>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import type {User} from "../interfaces/users.ts";

defineProps<{user: User}>();
</script>
<style scoped>
.item {
  max-width: 350px;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid black;
}

img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

p {
  margin: 3px;
}
</style>
