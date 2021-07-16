<template>
  <div id="wrapper">
    <div class="main-menu">
      <h1 class="main-title">Dungeon & Dragons</h1>

      <button-link text="Создать сервер" to="/create-server" />
      <button-link text="Создать персонажа" to="/create-person" />
    </div>
  </div>
</template>

<script>
  import ButtonLink from '@/components/default/ButtonLink.vue'

  export default {
    name: 'start-menu',
    components: {ButtonLink},
    methods: {
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  #wrapper {
    display: flex;
    justify-content: center;
    align-items: baseline;
    box-sizing: border-box;
    height: calc(100vh - 20px);
  }

  .main-menu {
    width: 300px;
  }

  .main-title {
    font-size: 50px;
    text-align: center;
  }

  .menu-button {
    outline: none;
    text-transform: uppercase;
    text-decoration: none;
    margin-bottom: 5px;
    color: #000;
    width: 100%;
    text-align: center;
    display: block;
    border: 1px solid black;
    padding: 5px 10px;
  }

  .menu-button:hover{
    color: #fff;
    background: #000;
  }

</style>
