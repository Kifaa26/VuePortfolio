<template>
  <div class="wrapper">
    <NavBar />
    <main class="container-fluid">
      <section class="row" id="home">
        <HomeSection/>
      </section>
      <section class="row" id="about"></section>
      <section class="row" id="resume"></section>
      <section class="row" id="projects"></section>
      <section class="row" id="testimonials"></section>
      <section class="row" id="reachMe"></section>
    </main>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import HomeSection from '@/components/HomeSection.vue'
export default {
  computed: {
    about () {
      return this.$store.state.aboutMe
    }
  },
  components: {
    NavBar,
    Footer,
    HomeSection
  },
  mounted() {
    this.$store.dispatch('getAboutMe')
  }
}
</script>

<style src="./assets/css/style.css">
</style>