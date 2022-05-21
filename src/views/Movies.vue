<template>
  <div class="home__movies">
    <MovieBox :all-movies="allMovies"/>
  </div>
</template>

<script>
import MovieBox from '@/components/MovieBox.vue'

export default {
  name: 'Movies',
  props: {
    allMovies: {
      type: Array,
      required: true
    }
  },
  components: {
    MovieBox,
  }
}
</script>
