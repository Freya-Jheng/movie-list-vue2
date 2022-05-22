<template>
  <div class="home__search-bar">
    <form
    @submit.prevent.stop="fetchKeyword" 
    class="home__search-bar__form">
      <input
        v-model="keyword"
        placeholder="ex: Star War"
        type="text"
        class="home__search-bar__form__input"
      />
      <button
      type="submit"
      class="home__search-bar__form__button">Search</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "SearchBar",
  props: {
    allMovies: {
      type: Array,
      required: true
    },
    originMovies: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      keyword: "",
      filterMovies: [],
    };
  },
  methods: {
    fetchKeyword () {
      const searchKeyWord = this.keyword.trim().toLowerCase()

      for(const movie of this.originMovies) {
        if(movie.title.toLowerCase().includes(searchKeyWord)) {
          this.filterMovies.push(movie)
        }
      }

      if (this.filterMovies.length === 0 ) {
        this.filterMovies = this.originMovies
        alert(`Cannot find ${searchKeyWord}, please try other one.`)
      } else if (!searchKeyWord.length) {
        this.filterMovies = this.originMovies
        alert('Please type a valid keyword! ')
      }

      this.$emit('after-filter-movies', {newMovies: this.filterMovies})

      this.filterMovies = []
    },
  },
};
</script>


<style scoped lang="scss">
.home__search-bar {
  width: 70%;
  margin: 15px auto 0;
  &__form {
    display: flex;
  justify-content: right;
  gap: 15px;
    &__input {
      border: 1px solid var(--border-color);
      border-radius: 4px;
      width: 15vw;
      min-width: 150px;
      height: 30px;
      max-width: 350px;
      text-align: left;
      padding-left: 10px;
      &:hover,
      &:focus {
        border: 2px solid var(--focus-color);
      }
    }
    &__button {
      border: 1px solid var(--border-color);
      border-radius: 8px;
      width: 70px;
      height: 30px;
      &:hover {
        background-color: var(--focus-color);
        border: 2px solid var(--focus-color);
        color: var(--sub-font-color);
      }
    }
  }
}
</style>