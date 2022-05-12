<template>
  <nav>
    <router-link to="/">Home</router-link> -
    <router-link :to="{ name: 'tentang' }">Tentang</router-link> -
    <router-link :to="{ name: 'privasi' }">Kebijakan Privasi</router-link>
  </nav>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  background: #eee;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: blue;
}
</style>
