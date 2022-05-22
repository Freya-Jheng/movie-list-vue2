<template>
  <div class="home__pagination">
    <nav aria-label="home__pagination__nav Page navigation example">
      <ul class="home__pagination__nav__pages pagination">
        <li
        @click.prevent.stop="sliceMoviesInPage"
        v-for="page in this.totalMovies"
        :key="page"
        class="home__pagination__nav__pages__page page-item">
          <a class="page-link" :data-page="page" href="#">{{page}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.home__pagination {
  width: 100%;
  margin: 35px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  &__nav {
    &__pages {
      margin-bottom: 35px;
      width: 130%;
      display: flex;
      justify-content: space-around;
      &__page {
        a {
          color: var(--main-font-color);
          &:hover {
            background-color: var(--focus-color);
            color: var(--sub-font-color);
          }
        }
      }
    }
  }
}
</style>


<script>
export default {
  name: 'pagination',
  props: {
    totalMovies : {
      type: Number,
      required: true,
    },
    originMovies : {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      moviesInPage: [],
    }
  },
  methods: {
    sliceMoviesInPage (e) {
      let moviePerPage = 12
      const pageId = e.target.dataset.page
      const startIndex = (pageId - 1) * moviePerPage
      this.moviesInPage = this.originMovies.slice(startIndex, startIndex+12)
      this.$emit('afetr-render-by-page', this.moviesInPage)
    }
  }
}
</script>
