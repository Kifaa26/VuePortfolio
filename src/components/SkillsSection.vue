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
        skills() {
            return this.$store.state.skills
        }
    },
    mounted() {
        this.$store.dispatch('getSkills')
    }
  };
  </script>
  
  <style scoped>
 
  </style>