<template>
  <div>
    <div>
      <section class="page-section about-heading">
        <div class="container">
          <img
            class="img-fluid rounded about-heading-img mb-3 mb-lg-0"
            v-bind:src="favorite.background_image"
            alt="..."
          />
          <div class="about-heading-content">
            <div class="row">
              <div class="col-xl-9 col-lg-10 mx-auto">
                <div class="bg-faded rounded p-5">
                  <h2 class="section-heading mb-4">
                    <span class="section-heading-upper">{{ favorite.name }}</span>
                    <span class="section-heading-upper">User Rating: {{ favorite.rating }}</span>
                    <span class="section-heading-upper">User Review: {{ favorite.review }}</span>
                  </h2>
                  <p></p>
                  <p class="mb-0"></p>
                  <a href="/users" class="btn btn-primary">See what other users are playing!</a>
                  <button v-on:click="destroyFavorite()" class="btn btn-primary">Remove favorite from list</button>
                  <a href="/favorites" class="btn btn-primary">Back to favorites</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

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
