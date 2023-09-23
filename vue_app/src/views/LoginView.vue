<script setup lang="ts">
import {userLoginStore} from '../stores/login';

const store = userLoginStore();
</script>

<template>
    <div class="login">
        <div class="container" v-show="!store.$state.isLoggedIn">
            <h1 class="title">Login</h1>
            <p class="description">This is a login page</p>

            <label for="username">username</label>
            <input type="username" id="username" name="username" v-model="store.username"/>
            <br>
            <br>
            <label for="password">password</label>
            <input type="password" id="password" name="password" v-model="store.password" />
            <br>
            <br>
            <button @click="store.login">Login</button>
        </div>
        <div class="container" v-show="store.$state.isLoggedIn">
            <h1 class="title">Welcome {{ store.$state.username }}</h1><button @click="store.logout">Log Out</button>
            <br>
            <br>
            <div style="background-color: white; color:black; padding: 10px; box-sizing: border-box;">
              Messages go here
            </div>
            <input type="text"><button>Send</button>

            
        </div>
        
    </div>
</template>


<style scoped>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
