<template>
  <div id="app">

    <v-app>

      <v-app-bar color="light-white lighten-5" app>
        <v-icon>arrow_back</v-icon>
        <!--
        <v-img
          class="mx-2"
          src="https://i.imgur.com/qgGY4tB.png"
          max-height="40"
          max-width="40"
          contain
        ></v-img>-->
        
        <v-toolbar-title class="ml-2">
          <span>VueNoteApp</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
 
      <v-content class="text-center ma-6">
        <img alt="Vue logo" src="./assets/logo.png">
        
      </v-content>

    </v-app>
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
     
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
