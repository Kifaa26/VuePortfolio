<template>
  <div class="wrapper">
    <NavBar />
    <main class="container-fluid">
      <section class="row" id="home">
        <HomeSection :home="home"/>
      </section>
      <section class="row" id="about">
        <AboutMeSection :aboutMe="aboutMe" />
      </section>
      <!-- Other sections -->
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import HomeSection from '@/components/HomeSection.vue'
import AboutMeSection from '@/components/AboutSection.vue'

export default {
  computed: {
    home() {
      return this.$store.state.home;
    },
    aboutMe() {
      return this.$store.state.aboutMe;
    }
  },
  components: {
    NavBar,
    Footer,
    HomeSection,
    AboutMeSection
  },
  async mounted() {
    await this.$store.dispatch('getHome');
    await this.$store.dispatch('getAboutMe');
  }
};
</script>

<style src="./assets/css/style.css">
</style> 