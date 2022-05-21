<template>
  <div class="home__movies__boxes">
    <div class="home__movies__boxes__wrapper">
      <div
        v-for="movie in allMovies"
        :key="movie.id"
        class="home__movies__boxes__wrapper__box"
      >
        <img
          :src="poster + movie.image"
          class="home__movies__boxes__wrapper__box__img"
          alt="Movie Poster"
        />
        <div class="home__movies__boxes__wrapper__box__body">
          <h5 class="home__movies__boxes__wrapper__box__body__title">
            {{ movie.title }}
          </h5>
        </div>
        <div class="home__movies__boxes__wrapper__box__footer">
          <button
            class="home__movies__boxes__wrapper__box__footer__more btn-movie"
            data-toggle="modal"
            :data-id="movie.id"
            data-target="#movie-modal"
            @click="getMovie"
          >
            More
          </button>
          <!-- Modal Start-->
          <div
            class="modal fade"
            id="movie-modal"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="movie-modal-title">
                    {{ modalData.title }}
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-sm-7" id="movie-modal-image">
                      <img
                        :src="modalData.image"
                        alt="movie-poster"
                        class="img-fluid modal-poster"
                      />
                    </div>
                    <div class="col-sm-5 inform-wrapper">
                      <p
                      class="movie-modal-date" 
                      id="movie-modal-date"
                      >
                        <em
                          >release date:
                          <h5>{{ modalData.releasedDate }}</h5></em
                        >
                      </p>
                      <p
                      class="movie-modal-description" 
                      id="movie-modal-description">
                        {{ modalData.description }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal End-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { posterHelper, showHelper } from "@/utils/helper";
import axios from "axios";

export default {
  name: "MovieBox",
  props: {
    allMovies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      poster: posterHelper,
      modalData: {
        title: "",
        description: "",
        image: "",
        releasedDate: "",
      },
    };
  },
  methods: {
    getMovie(e) {
      const id = e.target.dataset.id;
      axios
        .get(showHelper + id)
        .then((res) => {
          const { title, description, release_date, image } = res.data.results;
          this.modalData = {
            title,
            description,
            releasedDate: release_date,
            image: this.poster + image,
          };
        })
        .catch((err) => {
          console.log(err);
          alert("Cannot get individual movie from api!!");
        });
    },
  },
};
</script>
]

<style scoped lang="scss">
.home__movies__boxes {
  width: 100%;
  margin-top: 50px;
  img {
    object-fit: cover;
  }
  &__wrapper {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 15px;
    justify-items: center;
    &__box {
      outline: 1px solid var(--border-color);
      width: 260px;
      height: 450px;
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
      &__img {
        width: 100%;
        height: 80%;
      }
      &__body {
        &__title {
          font-size: 20px;
          text-align: center;
        }
      }
      &__footer {
        margin-top: 10px;
        &__more {
          all: unset;
          border: 1px solid var(--border-color);
          border-radius: 5px;
          width: 70px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          &:hover {
            background-color: var(--button-hover-color);
            color: var(--sub-font-color);
            border: 2px solid var(--button-hover-color);
          }
        }
      }
    }
  }
}

// Modal Setting
.modal {
  .modal-content {
    width: 600px;
    .modal-header {
      .modal-title {
        font-size: 25px;
        font-weight: 500;
      }
    }
    .modal-body {
      display: inline-block;
      text-align: justify;
      .inform-wrapper {
        display: flex;
        flex-flow: column nowrap;
        gap: 15px;
        .movie-modal-date {
          padding-bottom: 15px;
          border-bottom: 1px solid var(--border-color);
        }
      }
    }
  }
}
</style>
