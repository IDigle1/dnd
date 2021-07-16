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

<style lang="scss" scoped>
#wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  .main-menu {
    width: 300px;
    box-sizing: border-box;
  }
}
</style>
