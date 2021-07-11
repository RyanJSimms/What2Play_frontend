<template>
  <div>
    <img v-bind:src="game.background_image" v-bind:alt="game.id" />
    <h2>{{ game.name }}</h2>
    <h3>Release date: {{ game.released }}</h3>
    <h3>Critic Rating: {{ game.rating }}</h3>
    <h3>ESRB Rating: {{ game.esrb_rating.name }}</h3>
    <h3>Platforms: {{ platformsList(game.platforms) }}</h3>
    <h3>Description: {{ game.description_raw }}</h3>
    <div>
      <img v-bind:src="game.box_art" alt="" />
    </div>
    <a href="/games"><button>Back to all games</button></a>
    <button v-on:click="addToFavorites()">Add to favorites</button>
    <!-- <router-link class="special" v-bind:to="`/game/${game.id}/favorites`">Add to Favorites</router-link> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      game: {
        esrb_rating: {},
        platforms: {},
      },
    };
  },
  created: function () {
    this.showGame();
  },
  methods: {
    showGame: function () {
      axios.get("/games/" + this.$route.params.id).then((response) => {
        console.log("show games", response.data);
        this.game = response.data;
      });
    },
    destroyGame: function () {
      console.log("destroy game", this.game);
      axios.delete("/games/" + this.game.id).then((response) => {
        console.log("Destroy success", response.data);
        this.$router.push("/games");
      });
    },
    addToFavorites: function () {
      var params = {
        game_id: this.game.id,
        name: this.game.name,
        background_image: this.game.background_image,
        rating: this.game.rating,
      };
      axios.post("/favorites", params).then((response) => {
        console.log("added to favorites", response.data);
        this.$router.push("/favorites");
      });
    },
    platformsList: function (platforms) {
      if (platforms && platforms.map) {
        console.log(platforms);
        return platforms.map((platform) => platform.platform.name).join(", ");
      }
    },
  },
};
</script>
