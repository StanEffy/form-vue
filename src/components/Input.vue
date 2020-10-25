<template id='input-template'>
  <div class="form-input-cover">
    <input :type="data.type" :class="data.class" :id="data.id" :name="data.name" :required="data.required" @input="$v.id.$touch" >
    <label :for='data.id' >{{data.text}}</label>
  </div>
</template>

<script>
export default {
  template: '#input-template',
  props: ['data'],
 
  
}
</script>

<style>

</style>