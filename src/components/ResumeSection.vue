<template>
  <div>
    <h3>Resume</h3>
    <Education/>
    <Experiences/>
  </div>
</template>

<script>
import Education from './EducationComp..vue'
import Experiences from './ExperiencesComp.vue'

export default {
    name: "ResumeSection",
    components: {
        Education,
        Experiences
    }
}
</script>

<style>

</style>