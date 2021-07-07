<template>
  <div class="favoritesIndex">
    <h1>My favorites</h1>
    <div v-for="favorite in favorites" v-bind:key="favorite.id">
      <img v-bind:src="favorite.box_art" v-bind:alt="favorite.id" />
      <p>Game ID: {{ favorite.game_id }}</p>
      <p>Rating: {{ favorite.rating }}</p>
      <p>Review: {{ favorite.review }}</p>
    </div>
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      favorites: [],
    };
  },
  created: function () {
    this.indexFavorites();
  },
  methods: {
    indexFavorites: function () {
      axios.get("/favorites").then((response) => {
        console.log("favorites index", response);
        this.favorites = response.data;
      });
    },
  },
};
</script>
