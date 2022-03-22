<template>
  <main class="main-about">
    <div class="about">
      <h1>ABOUT US</h1>
      <div class="about-menu">
        <div class="container">
          <ul class="tab-container">
            <li
              class="tab-container-item"
              :class="article === 0 ? 'active' : ''"
              @click="setArticle(0)"
            >
              <a class="tab-container-item--title" href="#">What we do</a>
            </li>
            <li
              class="tab-container-item"
              :class="article === 1 ? 'active' : ''"
              @click="setArticle(1)"
            >
              <a class="tab-container-item--title" href="#">Who we are</a>
            </li>
            <li
              class="tab-container-item"
              :class="article === 2 ? 'active' : ''"
              @click="setArticle(2)"
            >
              <a class="tab-container-item--title" href="#">Our mission</a>
            </li>
          </ul>
          <section class="content-container">
            <article
              v-if="article === 0"
              class="content-container-content target"
            >
              <div id="conBox">
                <div class="tab-image">
                  <img src="@/assets/images/APOPO_Desktop MA 2.jpg" alt="" />
                </div>
                <div class="tabText">
                  <h5>WE TRAIN ANIMALS TO SAVE LIVES</h5>
                  <p>
                    APOPO addresses global issues through research, development
                    and deployment of scent detection technology at its training
                    and research center in Tanzania and seven other countries
                  </p>
                </div>
              </div>

              <div id="conBox" style="flex-direction: row-reverse">
                <div class="tab-image">
                  <img
                    src="@/assets/images/APOPO_Desktop SAVE LIVES.jpg"
                    alt=""
                  />
                </div>
                <div class="tabText">
                  <h5>FINDING LANDMINES</h5>
                  <p>
                    59 countries and states suffer from the blight of hidden
                    landmines. APOPO's landmine detection rats and technical
                    survey dogs ignore scrap metal and only detect explosive
                    scent, making them much faster at finding landmines than
                    metal detectors.
                  </p>
                </div>
              </div>

              <div id="conBox">
                <div class="tab-image">
                  <img src="@/assets/images/APOPO_Desktop TB 3.jpg" alt="" />
                </div>
                <div class="tabText">
                  <h5>DETECTING TUBERCULOSIS</h5>
                  <p>
                    Detecting tuberculosis remains one of the biggest challenges
                    facing medical professionals. APOPO’s TB detection rats can
                    check 100 samples for tuberculosis in 20 minutes; the same
                    task would take a lab technician up to 4 days. Suspect
                    samples are re-checked using LED fluorescence microscopy.
                  </p>
                </div>
              </div>
            </article>
            <article v-if="article === 1" class="content-container-content">
              <h1>Tab2</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facere, culpa!
              </p>
            </article>
            <article v-if="article === 2" class="content-container-content">
              <h1>Tab3</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facere, culpa!
              </p>
            </article>
          </section>

          <div class="gallery-button">
            <router-link to="/GalleryView"> View Gallery </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "aboutView",
  data() {
    return { article: 0 };
  },
  methods: {
    setArticle(article) {
      this.article = article;
    },
  },
};
</script>

<style lang="sass">
@import "@/assets/sass/_about.scss";
</style>
