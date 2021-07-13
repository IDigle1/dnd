<template>
  <div id="wrapper">
    <div class="main-menu">
      <router-link class="menu-button" to="/create-serve">Создать сервер</router-link>
      <router-link class="menu-button" to="/create-person">Создать персонажа</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'start-menu',
    components: {},
    methods: {
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  #wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .main-menu {
    width: 300px;
  }

</style>
