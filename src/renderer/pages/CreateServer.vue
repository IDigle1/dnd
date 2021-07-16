<template>
  <div class="create-server">
    <button-link text="Назад" to="/" />

    <div class="menu">
      <p>Введите IP адрес (который можно взять в программе эммуляции локальной сети через интернет, например Hamachi, или Radmin VPN) и порт (например 3000)</p>
      <input-text v-model="serverAdress" placeholder="IP:PORT" />
      <button-link 
        to="/server" 
        text="Запустить сервер" 
        inverse
        disabled
      />
    </div>
  </div>
</template>

<script>
import ButtonLink from '../components/default/ButtonLink.vue'
import InputText from '../components/default/InputText.vue'

export default {
    name: 'create-server',
    data() {
      return {
        serverAdress: '',
      }
    },
    components: {
      ButtonLink,
        InputText
    }
}
</script>

<style lang="scss" scoped>
.menu {
  margin-top: 200px;
  margin: auto;
  width: 300px;
} 
</style>