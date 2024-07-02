<template>
  <div class="about-me-section">
    <div class="about-me-content">
      <h1>{{ aboutMe.title }}</h1>
      <p>{{ aboutMe.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMeSection",

  props: {
    aboutMe: {
      type: Object,
      required: true
    }
  }
};
</script>