<template>
  <div class="container">
      <section id="home" class="d-flex justify-content-center">
        <HomeSection/>
      </section>
      <section id="aboutMe">
        <AboutMeSection/>
      </section>
      <section id="resume">
        <ResumeSection/>
      </section>
      <section id="skills">
        <SkillsSection/>
      </section>
      <section id="projects">
        <ProjectsSection/>
      </section>
      <section id="testimonials">
        <TestimonialsSection/>
      </section>
  </div>
</template>

<script>
import HomeSection from '@/components/HomeSection.vue'
import AboutMeSection from '@/components/AboutMeSection.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'

export default {
  components: {
    HomeSection,
    AboutMeSection,
    ResumeSection,
    SkillsSection,
    ProjectsSection,
    TestimonialsSection
  }
}
</script>

<style>
</style>