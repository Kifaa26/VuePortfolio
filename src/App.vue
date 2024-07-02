<template>
  <div class="wrapper">
    <NavBar/>
    <main>
      <section id="home" class="d-flex justify-content-center">
        <HomeSection :home="home"/>
      </section>
      <section id="about pt-5">
        <div class="container pt-5">
          <AboutMeSection :aboutMe="aboutMe" />
        </div>
      </section>
      <!-- Other sections -->
    </main>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import HomeSection from '@/components/HomeSection.vue'
import AboutMeSection from '@/components/AboutMeSection.vue'

export default {
  computed: {
    home() {
      return this.$store.state.home
    },
    aboutMe() {
      return this.$store.state.aboutMe
    }
  },
  components: {
    NavBar,
    Footer,
    HomeSection,
    AboutMeSection
  },
  async mounted() {
    await this.$store.dispatch('getHome')
    await this.$store.dispatch('getAboutMe')
  }, catch (error) {
      console.error('Error fetching data:', error)
    }
}
</script>

<style src="./assets/css/style.css">
</style> 