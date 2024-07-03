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
    
  </div>
</template>

<script>
import HomeSection from '@/components/HomeSection.vue'
import AboutMeSection from '@/components/AboutMeSection.vue'
import ResumeSection from '@/components/ResumeSection.vue'

export default {
  components: {
    HomeSection,
    AboutMeSection,
    ResumeSection
  }
}
</script>

<style>
</style>