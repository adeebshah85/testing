<template>
  <div>
    <div class="wrapper">
      <div class="top_navbar">
        <div class="hamburger">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
        </div>
        <div class="top_menu">
          <div class="logo">
            Brand
          </div>
          <header>
              <input type="text" placeholder="search..">
            <ul>
              <li>
                <a href="#">
                  <i class="fas fa-bell"></i>
                </a>
              </li>
            </ul>
            <div class="dropdown dot">
              <button class="dropbtn dot">En</button>
              <div class="dropdown-content">
                <a href="#">Us</a>
                <a href="#">Uk</a>
              </div>
            </div>
            <div class="profile-name">
              <h3>John Doe</h3>
              <p>John Doe</p>
            </div>
            <img
              src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg"
              alt="Quincy Larson's profile picture"
              class="profile-thumbnail"
            />
          </header>
        </div>
      </div>

      <div class="sidebar">
        <ul>
          <li>
            <router-link to="/">Home <i class="far fa-user"></i></router-link>
          </li>
          <li>
            <router-link to="/menu"
              >Menu <i class="fas fa-briefcase"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/settings"
              >Settings <i class="far fa-file"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/calendar"
              >Calendar <i class="far fa-address-card"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/signout"
              >Signout <i class="far fa-address-card"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap");

* {
  margin: 0;
  padding: 10;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  background: #e1ecf2;
}

.wrapper {
  margin: 10px;
}

.wrapper .top_navbar {
  width: calc(100% - 20px);
  height: 60px;
  display: flex;
  position: fixed;
  top: 10px;
}

.wrapper .top_navbar .hamburger {
  width: 80px;
  height: 100%;
  background: black;
  padding: 15px 17px;
  border-top-left-radius: 20px;
  cursor: pointer;
}

.wrapper .top_navbar .hamburger div {
  width: 35px;
  height: 4px;
  background: #92a6e2;
  margin: 5px 0;
  border-radius: 5px;
}

.wrapper .top_navbar .top_menu {
  width: calc(100% - 70px);
  height: 100%;
  background: #fff;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.wrapper .top_navbar .top_menu .logo {
  color: #2e4ead;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
}

.wrapper .top_navbar .top_menu ul {
  display: flex;
}

.wrapper .top_navbar .top_menu ul li a {
  display: block;
  margin: 0 10px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border: 1px solid #2e4ead;
  border-radius: 50%;
  color: #2e4ead;
}

.wrapper .top_navbar .top_menu ul li a:hover {
  background: #4360b5;
  color: #fff;
}

.wrapper .top_navbar .top_menu ul li a:hover i {
  color: #fff;
}

.wrapper .sidebar {
  position: fixed;
  top: 100px;
  left: 10px;
  background: black;
  width: 200px;
  height: calc(100% - 80px);
  border-bottom-left-radius: 20px;
  transition: all 0.3s ease;
}

.wrapper .sidebar ul li a {
  display: block;
  padding: 20px;
  color: #fff;
  position: relative;
  margin-bottom: 1px;
  color: #92a6e2;
  white-space: nowrap;
}

.wrapper .sidebar ul li a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: #92a6e2;
  display: none;
}

.wrapper .sidebar ul li a span.icon {
  margin-right: 10px;
  display: inline-block;
}

.wrapper .sidebar ul li a span.title {
  display: inline-block;
}

.wrapper .sidebar ul li a:hover,
.wrapper .sidebar ul li a.active {
  background: #4360b5;
  color: #fff;
}

.wrapper .sidebar ul li a:hover:before,
.wrapper .sidebar ul li a.active:before {
  display: block;
}

.wrapper .main_container {
  width: (100% - 200px);
  margin-top: 70px;
  margin-left: 200px;
  padding: 15px;
  transition: all 0.3s ease;
}

.wrapper .main_container .item {
  background: #fff;
  margin-bottom: 10px;
  padding: 15px;
  font-size: 14px;
  line-height: 22px;
}

.wrapper.collapse .sidebar {
  width: 70px;
}

.wrapper.collapse .sidebar ul li a {
  text-align: center;
}

.wrapper.collapse .sidebar ul li a span.icon {
  margin: 0;
}

.wrapper.collapse .sidebar ul li a span.title {
  display: none;
}

.wrapper.collapse .main_container {
  width: (100% - 70px);
  margin-left: 70px;
}
header {
  display: flex;
}
header .profile-thumbnail {
  width: 50px;
  height: 50px;
  border-radius: 4px;
}
.dropbtn {
  background-color: #7c807c;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #656865;
}
.dot{
    border-radius: 2%;
}
</style>
