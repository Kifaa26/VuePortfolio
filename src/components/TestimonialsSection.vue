<template>
  <div class="container">
    <h2>Testimonials</h2>
    <div class="row">
      <div class="col-md-6 col-lg-4" v-for="(testimonial, index) in testimonials" :key="index">
        <Card class="testimonial-card">
          <template v-slot:image>
            <img :src="testimonial.image" alt="Testimonial Author" class="card-img-top">
          </template>
          <template v-slot:quote>
            <blockquote class="card-text">{{ testimonial.quote }}</blockquote>
          </template>
          <template v-slot:author>
            <h4 class="card-author">{{ testimonial.name }}</h4>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './CardComp.vue'; 

export default {
  name: "TestimonialsSection",
  components: {
    Card
  },
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    }
  },
  mounted() {
    this.$store.dispatch('getTestimonials');
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-text {
  color: #ffff;
  text-shadow: 2px 2px 5px #000000;
}

.card-author {
  color: #ffff;
  text-shadow: 2px 2px 5px #000000;
}

.testimonial-card {
  height: 95%; 
}
</style>