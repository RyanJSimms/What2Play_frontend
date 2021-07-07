<template>
  <div class="signup">
    <img v-if="status" v-bind:src="`https://http.cat/${status}`" alt="" />
    <form v-on:submit.prevent="submit()">
      <h1>Create a list of your favorites!</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Game ID:</label>
        <input type="text" v-model="newFavoriteParams.game_id" />
      </div>
      <div>
        <label>Rating:</label>
        <input type="text" v-model="newFavoriteParams.rating" />
      </div>
      <div>
        <label>Review:</label>
        <input type="text" v-model="newFavoriteParams.review" />
      </div>
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newFavoriteParams: {},
      errors: [],
      status: null,
    };
  },
  methods: {
    submit: function () {
      console.log("THESE ARE MY PARAMS", this.newFavoriteParams);
      axios
        .post("/favorites", this.newFavoriteParams)
        .then((response) => {
          console.log(response.data);
          this.$parent.flashMessage = "Favorites list was created!";
          this.$router.push("/games");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    },
  },
};
</script>
