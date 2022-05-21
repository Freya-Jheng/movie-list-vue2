<template>
  <div class="home__navbar">
    <ul class="home__navbar__items">
      <li class="home__navbar__items__item">
        <router-link to="/movies/all"> Home </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.home__navbar {
  width: 70%;
  font-size: 25px;
  text-align: left;
  border-bottom: 2px solid var(--border-color);
  margin: 0 auto;
  &__items {
    padding-bottom: 15px;
    &__item {
      cursor: pointer;
      a {
        &:focus, &:hover {
          color: var(--focus-color);
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>
