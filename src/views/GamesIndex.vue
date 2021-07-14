<template>
  <div class="gamesIndex">
    <h1>All Games</h1>

    <div>
      Search games or genres:
      <input type="text" v-model="searchFilter" />
    </div>
    <section class="page-section" v-for="game in filterBy(games, searchFilter, 'name', 'genres')" v-bind:key="game.id">
      <div class="container">
        <div class="product-item">
          <div class="product-item-title d-flex">
            <div class="bg-faded p-5 d-flex me-auto rounded">
              <h2 class="section-heading mb-0">
                <span class="section-heading-upper">Genre: {{ game.genres[0].name }}</span>
                <span class="section-heading-lower">{{ game.name }}</span>
              </h2>
            </div>
          </div>
          <img
            class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            v-bind:src="game.background_image"
            alt="..."
          />
          <div class="product-item-description d-flex ms-auto">
            <div class="bg-faded p-5 rounded">
              <p class="mb-0">
                {{ game.description_raw }}
              </p>
              <a v-if="game.is_owner" v-bind:href="`/games/${game.id}/favorites`">Add to favorites</a>
              <a v-bind:href="`/games/${game.id}`" class="btn btn-primary">More Info</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      games: [],
      searchFilter: "",
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
