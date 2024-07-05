<template>
  <div class="text-container">
    <div v-if="aboutMe">
      <h2>{{ aboutMe.title }}</h2>
      <br>
      <div class="fun-block">
        <p>{{ aboutMe.description }}</p>
        <a href="https://github.com/Kifaa26/cv.git" target="_blank" class="btn btn-primary mt-3">My Resume</a>
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
  background-color: #bc863ac8; 
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.fun-block p {
  font-size: 18px;
  line-height: 1.6;
  color: #ffffff; 
}

.btn-primary {
  background-color: #0e0d0d; 
  color: #ffffff; 
  border: none; 
}

.btn-primary:hover {
  background-color: #dfdede48; 
}

@media (max-width: 720px) {
  .text-container {
    padding: 10px;
    font-size: 18px;
  }
  
  .fun-block {
    padding: 15px;
  }
  
  .fun-block p {
    font-size: 16px;
  }
}

@media (max-width: 300px) {
  .text-container {
    padding: 5px;
    font-size: 16px;
  }
  
  .fun-block {
    padding: 10px;
  }
  
  .fun-block p {
    font-size: 14px;
  }
}

</style>