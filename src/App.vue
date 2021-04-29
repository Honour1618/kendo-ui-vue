<template>
  <div id="app">
    <div class="btn">
      <router-link to="/">Customizing the Filter Component</router-link>
      <router-link to="/edit">in-edit</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  width: 40%;
  margin: 20px auto;
  margin-bottom: 20px;
  display: flex;
}
a {
  flex: 1;
}
</style>
