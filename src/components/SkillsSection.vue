<template>
    <div class="container">
      <div>
        <h2>Technical Skills</h2>
        <ul>
          <li v-for="(skill, index) in technicalSkills" :key="index">
            {{ skill.name }}
          </li>
        </ul>
      </div>
  
      <div>
        <h2>Soft Skills</h2>
        <ul>
          <li v-for="(skill, index) in softSkills" :key="index">
            {{ skill.name }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>

  
  export default {
    name: "SkillsSection",
    computed: {
        softSkills() {
            return this.$store.state.softSkills
        },
        technicalSkills() {
            return this.$store.state.technicalSkills
        }
    },
    mounted() {
        this.$store.dispatch('getSoftSkills'),
        this.$store.dispatch('getTechnicalSkills')
    }
  };
  </script>
  
  <style scoped>
 
  </style>