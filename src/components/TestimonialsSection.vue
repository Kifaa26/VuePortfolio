<template>
  <div class="container">
    <h2 class="pt-5 pb-5">Testimonials</h2>
    <div class="row">
      <div class="testimonials" v-for="(testimonial, index) in testimonials" :key="index">
        <Card class="testimonial-card">
          <template v-slot:image>
            <img :src="testimonial.image" alt="Testimonial Author" class="card-img-top">
          </template>
          <template v-slot:quote>
            <blockquote class="card-text">{{ testimonial.quote }}</blockquote>
          </template>
          <template v-slot:author>
            <h4 class="card-author custom-center">{{ testimonial.name }}</h4>
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
  justify-content: center
}

.testimonials {
  width: 30%;
}

.card-text {
  color: #ffff;
  text-shadow: 2px 2px 5px #000000;
}

.card-author {
  color: #ffff;
  text-shadow: 2px 2px 5px #000000;
  display: flex;
  justify-content: center;
  margin: 0;
}

.testimonial-card {
  width: 100%;
  height: 95%;
}

@media (max-width: 1200px) {
  .testimonials {
    width: 40%;
  }
}

@media (max-width: 992px) {
  .testimonials {
    width: 50%; 
  }
}

@media (max-width: 720px) {
  .testimonials {
    width: 100%; 
  }
}
</style>