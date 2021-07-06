<template>
  <div class="gamesIndex">
    <h1>All Games</h1>
    <div v-for="game in games" v-bind:key="game.id">
      <h2>{{ game.name }}</h2>
      <img v-bind:src="game.url" v-bind:alt="game.name" />
      <p>Name: {{ game.name }}</p>
      <p>BoxArt: {{ game.box_art }}</p>
      <p>Genre: {{ game.genre }}</p>
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
