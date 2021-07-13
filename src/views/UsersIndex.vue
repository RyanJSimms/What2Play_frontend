<template>
  <div class="usersIndex">
    <h1>All Users</h1>

    <div v-for="user in users" v-bind:key="user.id">
      <h2>{{ user.username }}</h2>
      <div class="row">
        <div class="col-3" v-for="favorite in user.favorites" v-bind:key="favorite.id">
          {{ favorite.name }}
          <p>Rating: {{ favorite.rating }}</p>
          <p>Review: {{ favorite.review }}</p>
          <button v-on:click="addToFavorites(favorite)">Add to your favorites!</button>
          <img v-bind:src="favorite.background_image" alt="" />
        </div>
      </div>
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
      game: [],
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

    addToFavorites: function (game) {
      var params = {
        game_id: game.game_id,
        name: game.name,
        background_image: game.background_image,
        rating: game.rating,
        review: game.review,
      };
      axios.post("/favorites", params).then((response) => {
        console.log("added to favorites", response.data);
        this.$router.push("/favorites");
      });
    },
  },
};
</script>
