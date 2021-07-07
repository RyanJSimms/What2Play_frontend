<template>
  <div class="home">
    <div class="container">
      <div class="intro">
        <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="assets/img/intro.jpg" alt="..." />
        <div class="intro-text left-0 text-center bg-faded p-5 rounded">
          <h2 class="section-heading mb-4">
            <span class="section-heading-upper">Looking for adventure?</span>
            <span class="section-heading-lower">Look no more!</span>
          </h2>
          <p class="mb-3">
            Welcome to What2Play! Have you ever been in the position of not knowing what game to move onto next? That
            feeling of emptiness after finishing a great game and not knowing where to go next has plagued all gamers.
            We are here to help! Take a look around and find the next journey to embark on!
          </p>
          <div class="intro-button mx-auto">
            <a class="btn btn-primary btn-xl" href="/games">Check out our games!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to What2Play! Having trouble deciding on your next adventure? Take a look around!",
    };
  },
  created: function () {},
  methods: {},
};
</script>
