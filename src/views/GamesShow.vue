<template>
  <div>
    <h2>{{ game.name }}</h2>
    <div>
      <img v-bind:src="game.box_art" alt="" />
    </div>
    <a v-if="game.is_owner" v-bind:href="`/games/${game.id}/favorites`">Add to favorites!</a>
    <a href="/games"><button>Back to all games</button></a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      game: {},
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
  },
};
</script>
