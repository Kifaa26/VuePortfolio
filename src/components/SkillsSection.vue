<template>
  <div class="container">
    <div class="row pt-5 pb-5">
      <div class="col">
        <h2 class="text-center mb-4">Skills</h2>
        <div class="row">
          <div class="col-md-6 pt-4 d-flex justify-content-center align-items-center" v-for="(skill, index) in softSkills" :key="'soft-' + index">
            <div class="card skill-card">
              <div class="card-body">
                <h5 class="card-title">{{ skill.name }}</h5>
                <br>
                <p class="card-text">Soft Skill</p>
              </div>
            </div>
          </div>

          <div class="col-md-6 pt-4 d-flex justify-content-center align-items-center" v-for="(skill, index) in technicalSkills" :key="'tech-' + index">
            <div class="card skill-card">
              <div class="card-body">
                <h5 class="card-title">{{ skill.name }}</h5>
                <br>
                <p class="card-text">Technical Skill</p>
              </div>
            </div>
          </div>
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
.skill-card {
  width: 50%;
  height: 90px; 
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 10px rgb(232, 172, 52);
  background-color: rgba(57, 47, 49, 0.764);
}

.card-body {
  padding: 10px;
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 5px #000000;
}



</style>