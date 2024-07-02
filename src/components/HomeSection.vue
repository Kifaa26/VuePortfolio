<template>
    <div class="home-section">
      <div class="home-content">
        <template v-if="home">
          <h1>Aakifah Palekar</h1>
          <h1>{{ home.title }}</h1>
          <h2>{{ home.subtitle }}</h2>
          <p>{{ home.description }}</p>
          <img :src="home.image" alt="Profile Image">
        </template>
        <Spinner v-else/>
      </div>
    </div>
  </template>  

<script>
import Spinner from '@/components/Spinner.vue'
export default {
  name: "HomeSection",

  props: {
    home: {
      type: Object,
      required: true 
    },

  components: {
    Spinner
  }
  }
};
</script>

