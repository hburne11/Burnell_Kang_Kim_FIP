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
                  <img src="@/assets/images/APOPO_Desktop-MA-2.png" alt="" />
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
                    src="@/assets/images/APOPO_Desktop-SAVE-LIVES.png"
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
                  <img src="@/assets/images/APOPO_Desktop-TB-3.png" alt="" />
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
              <div id="conBox">
                <div class="tab-image">
                  <img src="@/assets/images/image_3.jpeg" alt="" />
                </div>
                <div class="tabText">
                  <h5>
                    APOPO provides a low-tech, cost-efficient solution to
                    pressing humanitarian challenges
                  </h5>
                  <p>
                    APOPO's innovative scent detection technology has a massive
                    potential to relieve human suffering and promote development
                    when deployed in the fight against tuberculosis and
                    landmines, as well as other applications under development.
                  </p>
                </div>
              </div>

              <div id="conBox" style="flex-direction: row-reverse">
                <div class="tab-image">
                  <img src="@/assets/images/image_4.jpeg" alt="" />
                </div>
                <div class="tabText">
                  <h5>DETECTING LANDMINES</h5>
                  <p>
                    APOPO became an independent mine action operator in
                    Mozambique in 2007. We have since worked across the globe
                    and currently carry out mine action operations in three
                    countries
                  </p>
                </div>
              </div>

              <div id="conBox" class="tab-2">
                <div class="tab-image">
                  <img src="@/assets/images/image_2.png" alt="" />
                </div>
                <div class="tabText">
                  <h5 style="margin-bottom: 0">DETECTING TUBERCULOSIS</h5>
                  <p>
                    APOPO’s tuberculosis detection HeroRATs begin learning to
                    detect target scents at our training and research center in
                    Morogoro, Tanzania, before being deployed at our
                    TB-detection facilities.
                  </p>
                </div>
              </div>
            </article>
            <article v-if="article === 2" class="content-container-content">
              <div id="conBox">
                <div class="tab-image">
                  <img src="@/assets/images/image_5.jpeg" alt="" />
                </div>
                <div class="tabText">
                  <p>
                    When integrated into conventional methods, APOPO's detection
                    animals speed up landmine and tuberculosis detection. They
                    also demonstrate potential to help fight other global
                    issues.
                  </p>
                </div>
              </div>

              <div
                id="conBox"
                class="tab-3"
                style="flex-direction: row-reverse"
              >
                <div class="tab-image">
                  <img src="@/assets/images/image_6.jpeg" alt="" />
                </div>
                <div class="tabText tab-3">
                  <div class="tab3-padding">
                    <h5>OUR MISSION</h5>
                    <h6>QUALITY</h6>
                    <p>
                      Demonstrating and promoting high standards in research,
                      design, training and implementation of scent detection
                      animals’ technology.
                    </p>
                    <h6>INNOVATION</h6>
                    <p>
                      Pioneering creative research and innovative solutions
                      within a participatory learning culture.
                    </p>
                    <h6>SOCIAL TRANSFORMATION</h6>
                    <p>
                      Developing skills, creating jobs, improving socio-economic
                      and environmental conditions, releasing land for
                      development, and combating public health issues.
                    </p>
                    <h6>DIVERSITY</h6>
                    <p>
                      Embracing diversity in all facets of the organization with
                      respect to age, gender, religion, sexual orientation,
                      physical abilities, nationality or ethnicity.
                    </p>
                    <h6>SOLIDARITY</h6>
                    <p>
                      APOPO commits itself to the common good and shares
                      responsibility toward the protection of the people,
                      communities and the planet.
                    </p>
                  </div>
                </div>
              </div>

              <div id="conBox">
                <div class="tab-image">
                  <img src="@/assets/images/image_7.png" alt="" />
                </div>
                <div class="tabText tab-last">
                  <h5>STRATEGIC GOALS</h5>
                  <p>
                    APOPO saves lives through the deployment of scent detection
                    animals:
                  </p>
                  <p>
                    Deploying cost-efficient mine action solutions in affected
                    countries
                  </p>
                  <p>
                    Accelerate tuberculosis control in high burden countries
                  </p>
                  <p>
                    Research and develop innovative applications for scent
                    detection animals
                  </p>
                </div>
              </div>
            </article>
          </section>
          <div class="gallery-button">
            <div class="button">
              <router-link to="/GalleryView"> View Gallery </router-link>
            </div>
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
