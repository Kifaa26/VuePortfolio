<template>
  <div class="container">
    <video autoplay muted loop class="background-video">
      <source src="https://videos.pexels.com/video-files/10746717/10746717-hd_1920_1080_25fps.mp4" type="video/mp4">
    </video>
    <div class="home-content">
      <template v-if="home">
        <div class="container">
          <div class="row">
            <div class="col">
              <img :src="home.image" alt="Profile Image" class="profile-image">

            </div>
            <div class="col">
              <div class="text-container">
                <h1 >Aakifah Palekar</h1>
                <h2 >{{ home.title }}</h2>
                <h3>{{ home.subtitle }}</h3>
              </div>

            </div>
          </div>
        </div>
      </template>
      <Spinner v-else />
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  name: "HomeSection",

  computed: {
    home() {
      return this.$store.state.home
    }
  },
   mounted() {
    this.$store.dispatch('getHome')
  },

  components: {
    Spinner
  }
};
</script>


