<template>
  <div class="home">
    <Navbar />
    <SearchBar 
    :all-movies="allMovies"
    :origin-movies="originMovies"
   
    @after-filter-movies="afterFilterMovies"
    />
    <div class="home__movies">
      <router-view :all-movies="allMovies"/>
    </div>
    <Pagination
    :total-movies="pages"
    :origin-movies="originMovies"
    @afetr-render-by-page="afetrRenderByPage"
     />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Pagination from '@/components/Pagination.vue'
import SearchBar from '@/components/SearchBar.vue'
import axios from 'axios'

export default ({
  name: 'home',
  data(){
    return {
      allMovies: [],
      originMovies: [],
      pages: 0,
      moviePerPage: 12,
    }
  },
  components: {
    Navbar,
    Pagination,
    SearchBar,
  },
  created () {
    this.fetchMovies()
  },
  methods: {
    fetchMovies(){
      axios.get('https://movie-list.alphacamp.io/api/v1/movies')
      .then((response) => {
        this.allMovies = response.data.results.slice(1, 13)
        this.originMovies = response.data.results
        this.pages = Math.ceil(this.originMovies.length/this.moviePerPage)
      })
      .catch((error) => {
        alert('Cannot get movies from api !')
        console.log(error)
      })
    },
    afterFilterMovies(payload) {
      const {newMovies} = payload
      this.allMovies = newMovies
    },
    afetrRenderByPage(payload) {
      this.allMovies = payload
    }
  }
})
</script>

<style scoped lang="scss">
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: black;
  margin-top: 60px;
  width: 100%;
  height: 100vh;
  cursor: default;
}
</style>
