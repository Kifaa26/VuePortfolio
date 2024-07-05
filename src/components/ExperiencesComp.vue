<template>
    <div class="container">
          <div class="d-flex justify-content-center">
            <div class="col-md-6">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <h3>Hover to see my Work Experience</h3>
                  </div>
                  <div class="flip-card-back">
                  
                    <h3>Work Experience</h3>
                    <br>
                    <div class="info" v-if="experience">
                      <h5>{{experience.company}}</h5>
                      <p>{{experience.position}}</p>
                      <p>{{experience.year}}</p>
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
      name: "ExperiencesComp",
      computed: {
          experience() {
              return this.$store.state.experience
          }
      },
      mounted() {
          this.$store.dispatch('getExperience')
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
    background-color: #8c8c8c0f; 
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

  </style>