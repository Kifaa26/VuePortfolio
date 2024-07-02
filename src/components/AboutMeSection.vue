<template>
  <div v-if="aboutMe" class="about-me-section">
    <div class="about-me-content">
      <h1>{{ aboutMe.title }}</h1>
      <p>{{ aboutMe.description }}</p>
    </div>
  </div>
  <Spinner v-else/>
</template>

<script>
import Spinner from '@/components/Spinner.vue'

export default {
  name: "AboutMeSection",

  props: {
    aboutMe: {
      type: Object,
      required: true
    }
  },

  components: {
    Spinner
  }
};
</script>