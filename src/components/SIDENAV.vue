<template>
    <div class="l-navbar" id="nav-bar" :style="{ width: sidebarWidth }">
        <nav class="nav">

            <div> <a href="#" class="nav_logo">
                    <i class="fas fa-angry"></i> <span class="nav_logo-name">Example</span> </a>
                <div class="nav_list"> <a href="#" class="nav_link active">
                        <i class="fab fa-angellist"></i>

                        <span class="nav_name">Dashboard</span> </a>
                    <a href="#" class="nav_link"> <i class="fas fa-anchor"></i> <span class="nav_name">Stats</span> </a>

                    <a class="nav_link nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false"> <i class="fas fa-award"></i> <span
                            class="nav_name">Dropdown</span> </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <a href="#" class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span>
            </a>

        </nav>

    </div>
</template>