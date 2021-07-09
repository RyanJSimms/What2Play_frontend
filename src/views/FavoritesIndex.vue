<template>
  <div class="favoritesIndex">
    <h1>My favorites</h1>
    <div v-for="favorite in favorites" v-bind:key="favorite.id">
      <img v-bind:src="favorite.background_image" v-bind:alt="favorite.game_id" />
      <p>Game: {{ favorite.name }}</p>
      <h3>
        <a v-bind:href="`/favorites/${favorite.id}`"><button>Show favorite</button></a>
      </h3>
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
      game: [],
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
