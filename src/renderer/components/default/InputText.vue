<template>
  <div class="input-text">
      <input 
        type="text" 
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />
  </div>
</template>

<script>
export default {
    name: 'input-text',
    props: {
        value: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
    },
}
</script>

<style lang="scss" scoped>
    input {
        padding: 5px;
        border: 2px solid black;
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 5px;
    }
</style>