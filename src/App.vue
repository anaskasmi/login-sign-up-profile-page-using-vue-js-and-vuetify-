<template>
  <div id="app" class="card-overlay">
    <v-app>
      <div :class="{
        'sm-main-style': $vuetify.breakpoint.smAndDown,
        'md-main-style': $vuetify.breakpoint.mdAndUp,
      }">
        <!-- <router-link to="/SingUp">Sing Up</router-link> |
        <router-link to="/signIn">Sign In</router-link> |
        <router-link to="/profile">profile</router-link> |
        <router-link to="/stats">Stats</router-link> -->
        <router-view />
        <footer class="footer">
          <a href="https://www.linkedin.com/in/anaskasmi/" target="_blank"
            >Anas@KASMI.DEV</a
          >
        </footer>
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
  background: url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1414&q=80")
    no-repeat center center fixed;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
.sm-main-style {
  margin: auto;
  width: 95%;
}
.md-main-style {
  margin: auto;
  width: 70%;
}

.footer {
  padding: 30px 0px;
}
.footer a {
  text-decoration: none;
  color: white !important;
  font-size: 1.1rem;
  font-family: cursive;
  font-weight: 600;
}
</style>
