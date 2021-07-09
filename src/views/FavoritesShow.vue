<template>
  <div>
    <h1>Current Favorite</h1>
    <h2>Name: {{ favorite.name }}</h2>
    <h3>Rating: {{ favorite.rating }}</h3>
    <p>Review: {{ favorite.review }}</p>
    <p>Edit the rating and review below!</p>
    <div><img v-bind:src="favorite.background_image" alt:="" /></div>
    <button v-on:click="destroyFavorite()">Remove favorite from list</button>
    <a href="/favorites"><button>Back to favorites</button></a>
    <form v-on:submit.prevent="updateFavorite()">
      <h3>Edit Favorite</h3>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Rating:</label>
        <input type="text" v-model="editFavoriteParams.rating" />
      </div>
      <div>
        <label>Review:</label>
        <input type="text" v-model="editFavoriteParams.review" />
      </div>

      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      favorite: {},
      editFavoriteParams: {},
      errors: [],
    };
  },
  created: function () {
    this.showFavorite();
  },
  methods: {
    showFavorite: function () {
      axios.get("/favorites/" + this.$route.params.id).then((response) => {
        console.log("show favorites", response.data);
        this.favorite = response.data;
      });
    },
    updateFavorite: function () {
      axios
        .patch("/favorites/" + this.$route.params.id, this.editFavoriteParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/favorites");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyFavorite: function () {
      console.log("destroy favorite", this.favorite);
      axios.delete("/favorites/" + this.favorite.id).then((response) => {
        console.log("Destroy success", response.data);
        this.$parent.flashMessage = "Favorite has been removed.";
        this.$router.push("/favorites");
      });
    },
  },
};
</script>
