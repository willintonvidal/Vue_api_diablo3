<template>
  <div class="home">
    <HomeTitle/>

    <MainForm/>

  </div>
</template>

<script>
// @ is an alias to /src
import HomeTitle from './HomeTitle'
import MainForm from './HomeForm'
export default {
  name: 'Home',
  components: {
    HomeTitle,
    MainForm
  }
}
</script>
