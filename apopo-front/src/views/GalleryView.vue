<template>
  <main class="main-gallery">
    <div class="gallery">
      <h1>GALLERY</h1>
      <div class="image-wrapper">
        <GalleryImg
          v-for="photo in photos"
          :key="photo.id"
          :imgsrc="photo.gallery_img"
        ></GalleryImg>
      </div>
    </div>
  </main>
</template>

<script>
import GalleryImg from "@/components/GalleryImg.vue";
export default {
  name: "galleryView",

  created() {
    fetch("/gallery-api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.photos = data[0];
      })
      .catch((err) => console.error(err));
  },

  data() {
    return {
      photos: [],
    };
  },

  // methods: {
  //   async getImages() {
  //     const res = await axios.get("server address");
  //     this.photos = res.data
  //   },
  // },

  components: {
    GalleryImg,
  },
};
</script>

<style lang="sass">
@import "@/assets/sass/_gallery.scss";
</style>
