<template>
  <div class="usersIndex">
    <h1>All Users</h1>

    <div class="favoritesIndex">
      <section class="page-section" v-for="user in users" v-bind:key="user.id">
        <section class="page-section" v-for="favorite in user.favorites" v-bind:key="favorite.id">
          <div class="container">
            <div class="product-item">
              <div class="product-item-title d-flex">
                <div class="bg-faded p-5 d-flex me-auto rounded">
                  <h2 class="section-heading mb-0">
                    <span class="section-heading-upper">User: {{ user.username }}</span>
                    <span class="section-heading-upper">Rating: {{ favorite.rating }}</span>
                    <span class="section-heading-upper">Review: {{ favorite.review }}</span>
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
                    <button v-on:click="addToFavorites(favorite)" class="btn btn-primary">Add to favorites</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>

    <div v-for="user in users" v-bind:key="user.id">
      <h2>{{ user.username }}</h2>
      <div class="row">
        <div class="col-3" v-for="favorite in user.favorites" v-bind:key="favorite.id">
          {{ favorite.name }}
          <p>Rating: {{ favorite.rating }}</p>
          <p>Review: {{ favorite.review }}</p>
          <button v-on:click="addToFavorites(favorite)">Add to your favorites!</button>
          <img v-bind:src="favorite.background_image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      users: [],
      favorites: [],
      game: [],
    };
  },
  created: function () {
    this.indexUsers();
  },
  methods: {
    indexUsers: function () {
      axios.get("/users").then((response) => {
        console.log("users index", response);
        this.users = response.data;
      });
    },

    addToFavorites: function (game) {
      var params = {
        game_id: game.game_id,
        name: game.name,
        background_image: game.background_image,
        rating: game.rating,
        review: game.review,
      };
      axios.post("/favorites", params).then((response) => {
        console.log("added to favorites", response.data);
        this.$router.push("/favorites");
      });
    },
  },
};
</script>
