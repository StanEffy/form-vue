<template id='clients-group'>
  
    <li class="checkbox-list__item" >
      <input :type="data.type" :class="data.class" :id="data.id" :name="data.name" :required="data.required">
      <label :for='data.id' >{{data.text}}</label>
    </li>
  
</template>

<script>


export default {
  template: '#clients-group',
  props: ['data'],
  
  
}
</script>

<style>

</style>