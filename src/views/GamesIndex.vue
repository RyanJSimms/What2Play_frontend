<template>
  <div class="gamesIndex">
    <h1>All Games</h1>
    <div v-for="game in games" v-bind:key="game.id">
      <img v-bind:src="game.background_image" v-bind:alt="game.id" />
      <p>Name: {{ game.name }}</p>
      <p>Genre: {{ game.genres[0].name }}</p>
      <!-- <p>Tags: {{ game.tags }}</p> -->
      <!-- <div v-for="platform in games" v-bind:key="platform.id">
        <p>Platform: {{ game.platforms[0].name }}</p> -->
      <!-- </div> -->
      <a v-if="game.is_owner" v-bind:href="`/games/${game.id}/favorites`">Add to favorites</a>
      <a v-bind:href="`/games/${game.id}`"><button>More Info</button></a>
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
      games: [],
    };
  },
  created: function () {
    this.indexGames();
  },
  methods: {
    indexGames: function () {
      axios.get("/games").then((response) => {
        console.log("games index", response);
        this.games = response.data.results;
      });
    },
  },
};
</script>
