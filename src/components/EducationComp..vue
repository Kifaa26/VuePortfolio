<template>
  <div class="container">
        <div class="d-flex justify-content-center">
          <div class="col-md-6">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h3>Hover to see my Education</h3>
                </div>
                <div class="flip-card-back">

                  <h3>Education</h3>
                  <br>
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


.flip-card {
  perspective: 1000px; 
  margin-bottom: 20px; 
  height: 300px;
}


.flip-card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 10px;
}


.flip-card-front,
.flip-card-back {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  margin: 0 auto;
  border-radius: 10px;
}


.flip-card-front {
  position: absolute;
  background-color: #bc863af3; 
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.flip-card-back {
  transform: rotateY(180deg);
  position: absolute;
  background-color: #ceac3bdc; 
  padding: 30px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}


.flip-card h3 {
  margin-bottom: 10px; 
  color: #ffffff; 
  text-shadow: 2px 2px 5px #000000;
}


.flip-card p {
  color: #fdfdfd; 
  text-shadow: 2px 2px 5px #000000;
}

@media (max-width: 1000px) {
  .col-md-6 {
    width: 60%; 
  }
}

@media (max-width: 720px) {
  .col-md-6 {
    width: 100%; 
  }
}

</style>