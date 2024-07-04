<template>
    <div class="container">
      <h2>Projects</h2>
      <div v-for="(project, index) in projects" :key="index" class="project-item">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <img :src= project.image alt="Project Screenshot" class="project-image">
        <div class="project-links">
          <a :href=project.vercel target="_blank" class="project-link">Vercel</a>
          <a :href=project.github target="_blank" class="project-link">GitHub</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: "ProjectsSection",
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch('getProjects')
    }
  };
  </script>

  <style scoped>
  
  </style>