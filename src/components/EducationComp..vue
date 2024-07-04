<template>
  <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h3>Education</h3>
                </div>
                <div class="flip-card-back">
                
                  <h3>Education</h3>

                  <div class="info" v-for="i in education" :key="i.school">
                    <h5>{{i.school}}</h5>
                    <p>{{i.degree}}</p>
                    <p>{{i.year}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EducationComp",
    computed: {
        education() {
            return this.$store.state.education
        }
    },
    mounted() {
        this.$store.dispatch('getEducation')
    }
}
</script>

<style scoped>

/* Flip card container */
.flip-card {
  perspective: 1000px; /* Add perspective for the 3D effect */
  margin-bottom: 20px; /* Adjust spacing between flip cards */
  height: 300px;
}

/* Inner container for the flip card */
.flip-card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

/* Front side of the flip card */
.flip-card-front,
.flip-card-back {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

/* Style for the front side */
.flip-card-front {
  position: absolute;
  background-color: #ebbb4b9f; /* Front side background color */
  padding: 30px; /* Padding for front side content */
}

/* Style for the back side */
.flip-card-back {
  transform: rotateY(180deg);
  position: absolute;
  background-color: #8c8c8c0f; /* Back side background color */
  padding: 30px; /* Padding for back side content */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for back side */
}

/* On hover, flip the card */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Heading style */
.flip-card h3 {
  margin-bottom: 10px; /* Adjust spacing between heading and content */
  color: #ffffff; /* Heading color */
}

/* Content style */
.flip-card p {
  color: #fdfdfd; /* Text color */
}

</style>