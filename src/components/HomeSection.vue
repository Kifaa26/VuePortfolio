<template>
  <div class="container">
    <video autoplay muted loop class="background-video">
      <source
        src="https://videos.pexels.com/video-files/10746717/10746717-hd_1920_1080_25fps.mp4"
        type="video/mp4"
      />
    </video>
    <div class="home-content">
      <template v-if="home">
        <div class="container">
          <div class="row">
            <div class="col">
              <img
                :src="home.image"
                alt="Profile Image"
                class="profile-image"
              />
            </div>
            <div class="col">
              <div class="text-container">
                <h1>Aakifah Palekar</h1>
                <br />
                <h3 class="type">{{ home.title }}</h3>
                <br />
                <h3 class="write">Web Developer</h3>
                <br />
                <a
                  href="https://www.linkedin.com/in/aakifah-palekar-8a003728b/"
                  class="btn btn-primary me-2"
                  target="_blank"
                  ><i class="fab fa-linkedin"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                    /></svg
                ></a>
                <a
                  href="https://github.com/Kifaa26"
                  class="btn btn-dark me-2"
                  target="_blank"
                  ><i class="fab fa-github"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                    /></svg
                ></a>
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
import Spinner from "@/components/Spinner.vue";

export default {
  computed: {
    home() {
      return this.$store.state.home;
    },
  },
  mounted() {
    this.$store.dispatch("getHome");
  },

  components: {
    Spinner,
  },
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
  font-family: "Averia Serif Libre", sans-serif;
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
  border-right: 0.15em solid rgb(255, 255, 255);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  font-size: 3.5rem;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgba(255, 255, 255, 0);
  }
}
.type {
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 4.5s steps(40, end), blink-caret 0.75s infinite;
  font-size: 1.5rem;
}
.write {
  overflow: hidden;
  border-right: 0.15em solid rgb(255, 255, 255);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s infinite;
  font-size: 3.5rem;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgba(255, 255, 255, 0);
  }
}
.write {
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 4.5s steps(40, end), blink-caret 0.75s step-end infinite;
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .profile-image {
    width: 300px;
    margin-top: -80px;
  }
  
  .type {
    font-size: 2rem;
  }
  
  .write {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .profile-image {
    width: 250px;
    margin-top: -70px;
  }
  
  .text-container {
    padding: 15px;
  }
  
  .type {
    font-size: 1.5rem;
  }
  
  .write {
    font-size: 1.5rem;
  }
}

@media (max-width: 320px) {
  .profile-image {
    width: 200px;
    margin-top: -50px;
  }
  
  .text-container {
    padding: 10px;
  }
  
  .type,
  .write {
    font-size: 1rem;
  }
}
</style>
