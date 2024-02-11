<template>
    <transition name="fade" tag="div" class="wrapper" mode="out-in">
      <div class="wrapper" id="app">
        <LandingPage />
        <Description />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </transition>
  </template>
  
  <script>
  import LandingPage from "./LandingPage.vue";
  import Description from "./Description.vue";
  import Experience from "./Experience.vue";
  import Skills from "./Skills.vue";
  import Projects from "./Projects.vue";
  import Footer from "./Footer.vue";
  
  export default {
    name: "App",
    components: {
      LandingPage,
      Description,
      Experience,
      Skills,
      Projects,
      Footer,
    },
    data: () => ({
    }),
    methods: {
    },
    created() {
    },
  };
  </script>
  
  <style scoped lang="scss">
    @import '../../../public/css/constants.scss';
  
  #app {
    font-family: Montserrat-Regular, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  
  .wrapper {
    height: 100%;
  }
  </style>
  