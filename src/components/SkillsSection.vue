<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div>
          <h2>Technical Skills</h2>
          <transition-group name="slide">
            <div v-for="(skill, index) in technicalSkills" :key="index" class="skill-item">
              <i class="fas fa-code skill-icon"></i>
              <span>{{ skill.name }}</span>
            </div>
          </transition-group>
        </div>
      </div>

      <div class="col-md-6">
        <div>
          <h2>Soft Skills</h2>
          <transition-group name="slide">
            <div v-for="(skill, index) in softSkills" :key="index" class="skill-item">
              <i class="fas fa-handshake skill-icon"></i>
              <span>{{ skill.name }}</span>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsSection",
  computed: {
    softSkills() {
      return this.$store.state.softSkills;
    },
    technicalSkills() {
      return this.$store.state.technicalSkills;
    },
  },
  mounted() {
    this.$store.dispatch("getSoftSkills");
    this.$store.dispatch("getTechnicalSkills");
  },
};
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

@keyframes slide-in {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>