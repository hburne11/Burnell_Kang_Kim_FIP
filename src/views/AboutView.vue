<template>
  <main class="main">
    <div class="about">
      <h1>ABOUT US</h1>
      <div class="about-menu">
        <div class="container">
          <ul class="tab-container">
            <li class="tab-container-item active" data-tab="tab1">
              <a class="tab-container-item--title" href="#">What we do</a>
            </li>
            <li class="tab-container-item" data-tab="tab2">
              <a class="tab-container-item--title" href="#">Who we are</a>
            </li>
            <li class="tab-container-item" data-tab="tab3">
              <a class="tab-container-item--title" href="#">Our mission</a>
            </li>
          </ul>
          <section class="content-container">
            <article id="tab1" class="content-container-content target">
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
                  <h5>WE TRAIN ANIMALS TO SAVE LIVES</h5>
                  <p>
                    APOPO addresses global issues through research, development
                    and deployment of scent detection technology at its training
                    and research center in Tanzania and seven other countries
                  </p>
                </div>
              </div>

              <div id="conBox">
                <div class="tab-image">
                  <img src="@/assets/images/APOPO_Desktop TB 3.jpg" alt="" />
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
            </article>
            <article id="tab2" class="content-container-content">
              <h1>Tab2</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facere, culpa!
              </p>
            </article>
            <article id="tab3" class="content-container-content">
              <h1>Tab3</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facere, culpa!
              </p>
            </article>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "aboutView",
};
</script>

<style lang="sass">
@import "@/assets/sass/_about.scss";
</style>
