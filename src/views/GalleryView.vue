<template>
  <main class="main">
    <div class="gallery-wrapper"><h1>gallery</h1></div>
    <div class="image-wrapper">
      <img
        class="rats-image"
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.url"
      />
    </div>
  </main>
</template>

<script>
export default {
  name: "galleryView",

  data() {
    return {
      photos: [
        {
          id: 1,
          url: "https://media.4-paws.org/d/c/0/5/dc05b2a3e1a001ed34e00179aefc9067763a546e/VIER%20PFOTEN_2020-06-15_007-4000x2769-1920x1329.jpg",
        },
        {
          id: 2,
          url: "https://media.4-paws.org/d/c/0/5/dc05b2a3e1a001ed34e00179aefc9067763a546e/VIER%20PFOTEN_2020-06-15_007-4000x2769-1920x1329.jpg",
        },
        {
          id: 3,
          url: "https://media.4-paws.org/d/c/0/5/dc05b2a3e1a001ed34e00179aefc9067763a546e/VIER%20PFOTEN_2020-06-15_007-4000x2769-1920x1329.jpg",
        },
        {
          id: 4,
          url: "https://media.4-paws.org/d/c/0/5/dc05b2a3e1a001ed34e00179aefc9067763a546e/VIER%20PFOTEN_2020-06-15_007-4000x2769-1920x1329.jpg",
        },
        {
          id: 5,
          url: "https://media.4-paws.org/d/c/0/5/dc05b2a3e1a001ed34e00179aefc9067763a546e/VIER%20PFOTEN_2020-06-15_007-4000x2769-1920x1329.jpg",
        },
      ],
    };
  },
  // methods: {
  //   async getImages() {
  //     const res = await axios.get("server address");
  //     this.photos = res.data
  //   },
  // },
};
</script>

<style lang="sass">
@import "@/assets/sass/_gallery.scss";
</style>
