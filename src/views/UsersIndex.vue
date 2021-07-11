<template>
  <div class="usersIndex">
    <h1>All Users</h1>
    <div v-for="user in users" v-bind:key="user.id">
      <h2>{{ user.username }}</h2>
      <img v-bind:src="user.favorites.background_image" v-bind:alt="user.id" />
      <p>Favorites: {{ user.favorites }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      users: [],
      favorites: [],
    };
  },
  created: function () {
    this.indexUsers();
  },
  methods: {
    indexUsers: function () {
      axios.get("/users").then((response) => {
        console.log("users index", response);
        this.users = response.data;
      });
    },
  },
};
</script>
