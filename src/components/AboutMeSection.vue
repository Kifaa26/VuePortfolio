<template>
  <div class="container">
    <div v-if="aboutMe">
      <h3>{{ aboutMe.title }}</h3>
      <p>{{ aboutMe.description }}</p>
    </div>
    <Spinner v-else /> 
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  name: "AboutMeSection",

  computed: {
    aboutMe() {
      return this.$store.state.aboutMe
    }
  },
  mounted() {
  this.$store.dispatch('getAboutMe')
  },

  components: {
    Spinner
  }
};
</script>