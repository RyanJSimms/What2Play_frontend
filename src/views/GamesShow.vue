<template>
  <div>
    <section class="page-section about-heading">
      <div class="container">
        <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" v-bind:src="game.background_image" alt="..." />
        <div class="about-heading-content">
          <div class="row">
            <div class="col-xl-9 col-lg-10 mx-auto">
              <div class="bg-faded rounded p-5">
                <h2 class="section-heading mb-4">
                  <span class="section-heading-upper">{{ game.name }}</span>
                  <span class="section-heading-upper">Release date: {{ game.released }}</span>
                  <span class="section-heading-upper">Critic Rating: {{ game.rating }}</span>
                  <span class="section-heading-upper">ESRB Rating: {{ game.esrb_rating.name }}</span>
                  <span class="section-heading-upper">Platforms: {{ platformsList(game.platforms) }}</span>
                </h2>
                <p>
                  {{ game.description_raw }}
                </p>
                <p class="mb-0"></p>
                <a href="/games" class="btn btn-primary">Back to all games</a>
                <button v-on:click="addToFavorites()" class="btn btn-primary">Add to favorites</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
