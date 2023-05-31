<template>
  <div>
    <input type="checkbox" id="check">
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>

    <div class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" style="margin-left: 100px;">

      <div class=" container">

        <!-- account toggle -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#account"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa fa-shopping-cart fa-1x" aria-hidden="true"></i>
          <span class="badge badge-light">88</span>
        </button>

        <div class="collapse navbar-collapse" id="links">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Dishes
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Chicken</a>
                <a class="dropdown-item" href="#">Mutton/Lamb/Beef 2</a>
                <a class="dropdown-item" href="#">Deserts</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Recipies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Us</a>
            </li>

          </ul>
        </div>
        <div class="collapse navbar-collapse" id="account">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="#">Shopping Cart
                <i class="fa fa-shopping-cart fa-1x" aria-hidden="true"></i>
              </a></li>
            <li class="nav-item"><a class="nav-link" href="#">Log in</a></li>
          </ul>
        </div>
      </div>
    </div>


    <div class="sidebar sidebar-sticky">
      <header>TIMS moe</header>

      <ul>
        <li><a href="#"><i class="fas fa-qrcode"></i>Dashboard</a></li>
        <li><a href="#"><i class="fas fa-link"></i>Shortcuts</a></li>
        <li><a href="#"><i class="fas fa-stream"></i>Overview</a></li>
        <li><a href="#"><i class="fas fa-calendar-week"></i>Events</a></li>
        <li><a href="#"><i class="far fa-question-circle"></i>About</a></li>
        <li><a href="#"><i class="fas fa-sliders-h"></i>Services</a></li>
        <li><a href="#"><i class="far fa-envelope"></i>Contact</a></li>
      </ul>

    </div>
  </div>


  <main style="margin-top: 0px;">


    <div class="container pt-5 mt-20">



      <RouterView>
      </RouterView>
    </div>

  </main>
</template>

<script>

import { collapsed, toggleSidebar, sidebarWidth } from '../state';

export default {
  name: 'DefaultLayout',
  components: {

  },
  data() {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth


    }
  },
  computed: {

  },
  created() {

  },
  methods: {

  }
}
</script>
<style>
body {
  background-color: hsl(218, 41%, 15%);
  background-image: radial-gradient(650px circle at 0% 0%,
      hsl(218, 41%, 35%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%),
    radial-gradient(1250px circle at 100% 100%,
      hsl(218, 41%, 45%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%);
  height: 100vh;
  padding-left: 70px;
  overflow-x: hidden;
  color: #fff;
}

@media (max-width: 991.98px) {
  body {
    height: 100%;
  }
}

.bg-theme {
  background-color: hsl(218, 41%, 25%);
}

.bg-glass {
  background: hsla(0, 0%, 100%, 0.15);
  backdrop-filter: blur(30px);
}

.text-muted {
  color: hsl(0, 0%, 80%) !important;
}

.text-success {
  color: hsl(144, 100%, 40.9%) !important;
}

.text-danger {
  color: hsl(350, 94.3%, 68.4%) !important;
}

.border-bottom {
  border-bottom: 1px solid hsl(0, 0%, 50%) !important;
}

.sidebar .active {
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
  position: absolute;
  top: 0;
  height: calc(100vh - 18px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: radial-gradient(650px circle at 0% 0%,
      hsl(218, 41%, 35%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%),
    radial-gradient(1250px circle at 100% 100%,
      hsl(218, 41%, 45%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%);
  height: 100vh;
  /* Scrollable contents if viewport is shorter than content. */
}

@media (max-width: 991.98px) {
  .sidebar {
    width: 100%;
  }
}

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500');

* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}



.sidebar {
  position: fixed;
  left: -250px;
  width: 250px;
  height: 100%;
  background: #042331;
  transition: all .5s ease;
}

.sidebar header {
  font-size: 22px;
  color: white;
  line-height: 70px;
  text-align: center;
  background: #063146;
  user-select: none;
}

.sidebar ul a {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 40px;
  box-sizing: border-box;
  /* border-bottom: 1px solid black;
    border-top: 1px solid rgba(255, 255, 255, .1); */
  transition: .4s;
}

ul li:hover a {
  padding-left: 50px;
}

.sidebar ul a i {
  margin-right: 16px;
}

#check {
  display: none;
}

.navbar {
  margin-top: 20px;
}

label #btn,
label #cancel {
  position: absolute;
  /* background: #042331; */
  margin-bottom: 100px;
  border-radius: 3px;
  cursor: pointer;
}

label #btn {
  left: 40px;
  top: 25px;
  font-size: 35px;
  color: white;
  padding: 6px 12px;
  transition: all .5s;
}

label #cancel {
  z-index: 1111;
  left: -195px;
  top: 17px;
  font-size: 30px;
  color: #0a5275;
  padding: 4px 9px;
  transition: all .5s ease;
}

#check:checked~.sidebar {
  left: 0;
}

#check:checked~.navbar {
  left: 180px;
}

#check:checked~label #btn {
  left: 250px;
  opacity: 0;
  pointer-events: none;
}

#check:checked~label #cancel {
  left: 195px;
  top: 30px;
}

#check:checked~section {
  margin-left: 250px;
}

section {
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
  height: 100vh;
  transition: all .5s;
}
</style>

