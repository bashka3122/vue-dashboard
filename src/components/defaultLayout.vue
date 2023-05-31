<template>
    <div>
        <input type="checkbox" id="check">
        <label for="check">
            <i class="fas fa-bars" id="btn"></i>
            <i class="fas fa-times" id="cancel"></i>
        </label>

        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="images/o.png"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Navbar -->


        <div class="sidebar sidebar-sticky">
            <header>
                {{ user }}
            </header>

            <ul>
                <li><a href="#"><i class="fas fa-qrcode"></i>Dashboard</a></li>
                <li><a href="#"><i class="fas fa-link"></i>Shortcuts</a></li>
                <li>
                    <a href="#"><i class="fas fa-qrcode"></i><input id="check01" type="checkbox" name="menu" />
                        <label class="lb" for="check01">Menu</label>


                        <ul class="submenu">
                            <li>
                                <a href="#"><i class="fas fa-link"></i>Shortcuts</a>
                            </li>
                            <li><a href="#">Item 2</a></li>
                        </ul>
                    </a>
                </li>
                <li><a href="#"><i class="fas fa-stream"></i>Overview</a></li>
                <li><a href="#"><i class="fas fa-calendar-week"></i>Events</a></li>
                <li><a href="#"><i class="far fa-question-circle"></i>About</a></li>
                <li><a href="#"><i class="fas fa-sliders-h"></i>Services</a></li>
                <li><a href="#"><i class="far fa-envelope"></i>Contact</a></li>

            </ul>

        </div>
    </div>


    <main style="margin-top: 0px; margin-left: 200px;">


        <RouterView>
        </RouterView>


    </main>
</template>

<script>

import { collapsed, toggleSidebar, sidebarWidth } from '../state';
import { mapState } from '../store'
import { useStore } from "vuex";
import { computed } from "vue";
export default {
    name: 'DefaultLayout',
    components: {

    },
    data() {
        const store = useStore();
        return {
            collapsed,
            toggleSidebar,
            sidebarWidth,
            user: computed(() => store.state.user.data.email)

        }
    },
    // computed: {

    // },
    created() {

    },
    methods: {

    }
}
</script>
<style>
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

}

.sidebar header {
    font-size: 22px;
    color: white;
    line-height: 70px;
    text-align: center;
    background: #063146;
    user-select: none;
}

.navbar-brand img {
    height: 60px;
    width: 150px;
    margin-left: 20px;
}

.sidebar ul a {
    display: block;
    height: 100%;
    width: 100%;
    line-height: 65px;
    font-size: 20px;
    color: white;
    /* padding-left: 40px; */
    /* box-sizing: border-box;
    border-bottom: 1px solid black;
    border-top: 1px solid rgba(255, 255, 255, .1); */

}

ul li:hover a {
    /* padding-left: 50px; */
}

.sidebar ul a i {
    margin-right: 16px;
}

#check {
    display: none;
}

.navbar {
    margin-left: 30px;
    color: white;

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

#check:checked~main {
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

input,
ul.submenu {
    display: none;
}

/*position the label*/
.lb {}

/*show the submenu when input is checked*/
input:checked~ul.submenu {

    display: block;

}
</style>

