<template>
  <div class="favoritesIndex">
    <section class="page-section" v-for="favorite in favorites" v-bind:key="favorite.id">
      <div class="container">
        <div class="product-item">
          <div class="product-item-title d-flex">
            <div class="bg-faded p-5 d-flex me-auto rounded">
              <h2 class="section-heading mb-0">
                <span class="section-heading-upper">{{ favorite.name }}</span>
              </h2>
            </div>
          </div>
          <img
            class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            v-bind:src="favorite.background_image"
            alt="..."
          />
          <div class="product-item-description d-flex ms-auto">
            <div class="bg-faded p-5 rounded">
              <p class="mb-0">
                <a v-bind:href="`/favorites/${favorite.id}`" class="btn btn-primary">Show favorite</a>
              </p>
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
export default {
  data: function () {
    return {
      favorite: [],
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
