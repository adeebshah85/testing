<template>
  <div id="app">
    <div id="nav">
 <router-link to="/">Home <i class="far fa-user"></i></router-link>
      <router-link to="/menu"
        >Menu <i class="fas fa-briefcase"></i
      ></router-link>
      <router-link to="/settings"
        >Settings <i class="far fa-file"></i
      ></router-link>
      <router-link to="/calendar"
        >Calendar <i class="far fa-address-card"></i
      ></router-link>
      <router-link to="/signout"
        >Signout <i class="far fa-address-card"></i
      ></router-link>
    </div>
    <router-view />
  </div>
</template>
<style scoped>
#nav {
  display: flex;
}
#nav a {
  font-weight: bold;
  color: #c7b135;
  padding: 0 10px;
  text-decoration: none;
  font-weight: bold;
}
#nav a.vue-school-active-class {
  color: #d34d75;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  background: #d96aa7;
  min-height: 100vh;
  font-family: Montserrat, sans-serif;
}

nav a {
  font-size: 40px;
  color: #fff;
  text-decoration: none;
  padding: 20px;
  text-align: center;
}

nav {
  position: fixed;
  left: 0;
  z-index: 50;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100vh;
  background: var(--secondary-color);
}

section {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 0;
  opacity: 0;
  transition: all ease-in 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}

section h1 {
  color: #fff;
  font-size: 50px;
  text-transform: uppercase;
  opacity: 0;
}

/* Styles applied on trigger */
section:target {
  opacity: 1;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

section:target h1 {
  opacity: 0;
  animation: 2s fadeIn forwards 0.5s;
}

#first {
  background: var(--primary-color);
}
#second {
  background: var(--complimentary-color);
}

#third {
  background: var(--contrast-color);
}

#fourth {
  background: var(--light-color);
}

@keyframes fadeIn {
  100% {
    opacity: 1;
  }
}
</style>