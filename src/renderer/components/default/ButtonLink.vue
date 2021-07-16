<template>
    <div>
      <router-link 
        class="button-link" 
        :to="to"
        :class="{'inverse': inverse, disabled }"
        :aria-disabled="disabled"
        tag="button"
        :disabled="disabled"
      >
        {{ text }}
      </router-link>
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
      },
      inverse: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';

.button-link {
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 5px;
  width: 100%;
  text-align: center;
  display: block;
  padding: 5px 10px;
}

.button-link:not(.disabled)  {
  background: $body-color;
  color: #000;
  border: 2px solid black;
}

.button-link.disabled  {
  color: #dadada;
  border: 2px solid #949494;
  cursor: default;
}

.button-link.inverse:not(.disabled) {
  background: #000;
  color: #fff;
  border: 2px solid black;
}

.button-link.inverse.disabled {
  background: #949494;
  color: #dadada;
  border: 2px solid #949494;
}

.button-link:not(.disabled):hover{
  color: #fff;
  background: #000;
}

.button-link.inverse:not(.disabled):hover{
  color: #000;
  background: #fff;
}
</style>