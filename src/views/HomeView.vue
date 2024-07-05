<template>
  <div class="container">
      <section id="home" >
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
      <section id="contactMe">
        <ContactSection/>
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
import ContactSection from '@/components/ContactSection.vue'

export default {
  components: {
    HomeSection,
    AboutMeSection,
    ResumeSection,
    SkillsSection,
    ProjectsSection,
    TestimonialsSection,
    ContactSection
  }
}
</script>

<style>
</style>