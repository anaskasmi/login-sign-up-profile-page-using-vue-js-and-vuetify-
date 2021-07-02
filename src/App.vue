<template>
  <div id="app">
    <v-app style="z-index: 2">
      <img
        class="card-overlay"
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
      />
      <div id="nav">
        <!-- <router-link to="/SingUp">Sing Up</router-link> |
        <router-link to="/signIn">Sign In</router-link> |
        <router-link to="/profile">profile</router-link> |
        <router-link to="/stats">Stats</router-link> -->
        <router-view />
      </div>
    </v-app>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.demo-bg {
  opacity: 0.2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
}
.card-overlay {
  opacity: 0.5;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  background: rgba(0, 0, 0, 0.5);
}
</style>
