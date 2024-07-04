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
                <br>
                <h3 class="type">{{ home.title }}</h3>
                <br>
                <h3 class="write">Web Developer</h3>
                <br>
                <a href="https://www.linkedin.com/in/aakifah-palekar-8a003728b/" class="btn btn-primary me-2"
                      target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    <a href="https://github.com/Kifaa26" class="btn btn-dark me-2" target="_blank"><i
                        class="fab fa-github"></i> GitHub</a>
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

<style scoped>
.home-section {
  position: fixed;
  height: 100vh;
  overflow: hidden;
}

.background-video {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 50%;
  min-height: 50%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: -1;
  overflow: hidden;
}

.home-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #ffffff; 
  text-shadow: 2px 2px 5px #000000;
}

.text-container {
  text-align: center;
  /* max-width: 600px;
  background-color: rgba(0, 0, 0, 0.5); 
  border-radius: 8px; */
  padding: 20px;
  font-family: 'Averia Serif Libre', sans-serif;
}

.profile-image {
  width: 400px; 
  border-bottom-left-radius: 40%;
  border-top-right-radius: 40%;
  margin-top: -100px;
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.type {
  overflow: hidden;
  border-right: .15em solid rgb(255, 255, 255);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
  font-size: 3.5rem; 
}
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 255, 255); }
}
.type  {
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation:
    typing 4.5s steps(40, end),
    blink-caret .75s infinite;
  font-size: 1.5rem; 
}
.write {
  overflow: hidden;
  border-right: .15em solid rgb(255, 255, 255);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s infinite;
  font-size: 3.5rem; 
}
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 255, 255); }
}
.write  {
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation:
    typing 4.5s steps(40, end),
    blink-caret .75s step-end infinite;
  font-size: 1.5rem; 
}




</style>


