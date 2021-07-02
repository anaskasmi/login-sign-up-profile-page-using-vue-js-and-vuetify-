<template>
    <v-container
      id="container"
      :class="rightPanelActive ? 'container right-panel-active' : 'container'"
    >
      <div class="form-container sign-up-container">
        <v-form action="#" class="px-8 ">
          <h1 class="py-12">Create Account</h1>
          <v-text-field placeholder="Username" filled></v-text-field>
          <v-text-field placeholder="Password" filled></v-text-field>
          <v-btn color="info" block dark tile class="pa-6" elevation="0"
            >Sign Up</v-btn
          >
        </v-form>
      </div>
      <div class="form-container sign-in-container ">
        <v-form action="#" class="px-8">
          <h1 class="py-12">Sign in</h1>
          <v-text-field placeholder="Username" filled></v-text-field>
          <v-text-field placeholder="Password" filled></v-text-field>
          <v-btn color="info" block dark tile class="pa-6" elevation="0"
            >Sign In</v-btn
          >
          <v-row class="justify-center">
            <span class="py-10 text-secondary">Forgot your password?</span>
          </v-row>
        </v-form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p class="py-8">
              If you already have an account please Sign In from here !
            </p>

            <v-btn
              color="info"
              dark
              rounded
              class="pa-6"
              elevation="0"
              @click="rightPanelActive = false"
            >
              Sign In
            </v-btn>
          </div>
          <div class="overlay-panel overlay-right">
            <h1 class="my-6">Welcome !</h1>
            <div>You don't have an account ?</div>
            <div>Please Sign Up from here</div>
            <v-btn
              color="info"
              dark
              rounded
              class="pa-6 my-10"
              elevation="0"
              @click="rightPanelActive = true"
            >
              Sign Up
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>  
</template>

<script>
export default {
  data() {
    return {
      rightPanelActive: true,
    };
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");


form {
  background-color: #ffffff;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #4bafe9, #417dff);
  background: linear-gradient(to right, #4bafe9, #89c7fa);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

</style>