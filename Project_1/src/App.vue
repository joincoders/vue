<template>
  <h1>{{ project }}</h1>
  <div v-if="showModal">
    <Modal theme="sale" @closeform="toggleModal" >
        <h1>Sign up for get giveaway</h1>
        <p>Welcome to join with joincoder</p>

        <template v-slot:links>
            <a href="#">Sign up now </a>
            <a href="#">More info</a>
        </template>
        
    </Modal>
  </div>

  <button @click="toggleModal">Open Modal</button>
</template>

<script>

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components:{
    Modal
  },
  data() {
    return {
      project:'My first project',
      header: 'Sign up to give away',
      text: 'Welcom to joincoder',
      showModal:false
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.project);
      this.$refs.project.classList.add('active')
      this.$refs.project.focus()
    },
    toggleModal(){
      this.showModal =!this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
