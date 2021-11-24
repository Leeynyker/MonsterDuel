<template>
  <!-- <hello-world /> -->
  <div class="">
    <div class="main__home">
      <div  class="post elevation-5" v-for="(carta, index) in data_page[page]" :key="index">
        <v-img
          :src="`${carta.card_images[0].image_url}`"
          aspect-ratio="0.7"
          contain
        ><div class="fill-height repeating-gradient"></div></v-img>
        <p>
          {{carta.name}}
        </p>
      </div>
    </div>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="page_length"
        :total-visible="7"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      page: 1,
      page_length: 0,
      data_page: [],
    };
  },
  components: {},
  methods: {
    getCartas() {
      this.axios({
        method: "get",
        url: `https://db.ygoprodeck.com/api/v7/cardinfo.php`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          const LONGITUD_PEDAZOS = 48;
          for (
            let i = 0;
            i < response.data.data.length;
            i += LONGITUD_PEDAZOS
          ) {
            let pedazo = response.data.data.slice(i, i + LONGITUD_PEDAZOS);
            this.data_page.push(pedazo);
          }
          this.page_length = this.data_page.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getCartas();
  },
};
</script>
<style scoped>
.main__home {
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
}
.post {
  background-color: var(--primary);
  width: 100%;
  /* max-width: 400px; */
  object-fit: cover;
  border-radius: 10px;
  min-height: 20px;
  position: static;
  border: red solid 4px;
  /* box-shadow: 5px 4px 5px 0px rgba(0, 0, 0, 0.37); */
  filter: grayscale(60%);
  -webkit-filter: grayscale(60%);
  -moz-filter: grayscale(60%);
}
</style>
