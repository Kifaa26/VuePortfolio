import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://kifaa26.github.io/Info/data/'
export default createStore({
  state: {
    home: null,
    aboutMe: null,
    education: null,
    experience: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
    setHome(state, value) {
      state.home = value
    },
    setAboutMe(state, value) {
      state.aboutMe = value
    },
    setEducation(state, value) {
      state.education = value
    },
    setExperience(state, value) {
      state.experience = value
    },
    setSkills(state, value) {
      state.skills = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    },
    setProjects(state, value) {
      state.projects = value
    }
  },
  actions: {
    async getHome(context) {
      try {
      let {home} = (await axios.get(portfolioURL)).data
      context.commit("setHome", home)
      console.log(home);
    } catch (e) {
      Swal.fire ({
        title: "Error",
        text: "Failed to fetch data",
        icon: "error",
        timer: 2000
      })
    }
    },
    async getAboutMe(context) {
      try {
      let {aboutMe} = (await axios.get(portfolioURL)).data
      context.commit("setAboutMe", aboutMe)
    } catch (e) {
      Swal.fire ({
        title: "Error",
        text: "Failed to fetch data",
        icon: "error",
        timer: 2000
      })
    }
    },
    async getEducation(context) {
      try {
      let {education} = (await axios.get(portfolioURL)).data
      context.commit("setEducation", education)
      console.log(education);
    } catch (e) {
      Swal.fire ({
        title: "Error",
        text: "Failed to fetch data",
        icon: "error",
        timer: 2000
      })
    }
    },
    async getExperience(context) {
      try {
      let {experience} = (await axios.get(portfolioURL)).data
      context.commit("setExperience", experience)
      console.log(experience);
    } catch (e) {
      Swal.fire ({
        title: "Error",
        text: "Failed to fetch data",
        icon: "error",
        timer: 2000
      })
    }
    },
    async getSkills(context) {
      try {
      let {skills} = (await axios.get(portfolioURL)).data
      context.commit("setSkills", skills)
    } catch (e) {
      Swal.fire ({
        title: "Error",
        text: "Failed to fetch data",
        icon: "error",
        timer: 2000
      })
    }
    },
    async getProjects(context) {
      try {
      let {Projects} = (await axios.get(portfolioURL)).data
      context.commit("setprojects ", Projects)
    } catch (e) {
      Swal.fire ({
        title: "Error",
        text: "Failed to fetch data",
        icon: "error",
        timer: 2000
      })
    }
    },
    async getTestimonials(context) {
      try {
      let {testimonials} = (await axios.get(portfolioURL)).data
      context.commit("setTestimonials", testimonials)
    } catch (e) {
      Swal.fire ({
        title: "Error",
        text: "Failed to fetch data",
        icon: "error",
        timer: 2000
      })
    }
    },
   },
  modules: {
  }
})