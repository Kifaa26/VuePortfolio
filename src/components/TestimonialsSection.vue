<template>
    <div class="container">
      <h2>Testimonials</h2>
      <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial">
        <img :src="testimonial.image" alt="Testimonial Author" class="testimonial-image">
        <blockquote class="testimonial-quote">{{ testimonial.quote }}</blockquote>
        <p class="testimonial-author">{{ testimonial.name }}</p>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: "TestimonialsSection",
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    },
    mounted() {
        this.$store.dispatch('getTestimonials')
    }
  };
  </script>

  <style scoped>
  
  </style>