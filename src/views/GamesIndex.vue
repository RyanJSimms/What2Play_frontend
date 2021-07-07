<template>
  <div class="gamesIndex">
    <h1>All Games</h1>
    <div v-for="game in games" v-bind:key="game.id">
      <img v-bind:src="game.box_art" v-bind:alt="game.id" />
      <p>Name: {{ game.name }}</p>
    </div>
    <div v-for="genre in game_genre.genres" v-bind:key="genre.id">
      <p>Genre: {{ genre.name }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      games: [],
      genres: [],
      game_genre: [],
    };
  },
  created: function () {
    this.indexGames();
  },
  methods: {
    indexGames: function () {
      axios.get("/games").then((response) => {
        console.log("games index", response);
        this.games = response.data;
      });
    },
  },
};
</script>
