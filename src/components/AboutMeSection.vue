<template>
  <div class="text-container">
    <div v-if="aboutMe">
      <h2>{{ aboutMe.title }}</h2>
      <br>
      <div class="fun-block">
      <p>{{ aboutMe.description }}</p>
    </div>
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

<style scoped>
.text-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #ffffff; 
  text-shadow: 2px 2px 5px #000000;
  font-size: 20px;
}

.fun-block {
  background-color: #bc863a4f; 
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.fun-block p {
  font-size: 18px;
  line-height: 1.6;
  color: #ffffff; 
}

</style>