<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div class="container">
        <a class="navbar-brand text-uppercase fw-bold d-lg-none" href="index.html">Start Bootstrap</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="/">Home</a></li>
            <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="/about">About</a></li>
            <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="/games">Games</a></li>
            <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="/signup">Signup</a></li>
            <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="/login">Login</a></li>
            <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="/logout">Logout</a></li>
            <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="/favorites">My favorites</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="footer text-faded text-center py-5">
      <div class="container"><p class="m-0 small">Copyright &copy; What2Play 2021</p></div>
    </footer>
  </div>
</template>

<style></style>
