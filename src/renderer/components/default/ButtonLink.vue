<template>
    <div>
      <router-link class="button-link" :to="to">{{ text }}</router-link>
    </div>
</template>

<script>
export default {
    name: 'button-link',
    props: {
      to: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      }
    }
}
</script>

<style scoped>
  .button-link {
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

  .button-link:hover{
    color: #fff;
    background: #000;
  }
</style>