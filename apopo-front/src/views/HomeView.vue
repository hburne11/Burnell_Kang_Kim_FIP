<template>
  <main class="main">
    <section class="homeSection">
      <div data-aos="fade-left" data-aos-delay="200" class="home_img">
        <img src="@/assets/images/main_runningrat.gif" class="home_rat" />
        <img
          src="@/assets/images/main_runningrat.gif"
          class="home_rat_mobile"
        />
      </div>

      <div class="home_data">
        <div data-aos="fade-up">
          <div class="span" style="margin-bottom: 10px">
            <span>#APOPO 2020</span>
            <span>#FROMZEROTOHERO</span>
          </div>
          <h1 class="home_title_2">Charity 5K run</h1>
          <h1 class="home_title">
            Everyone<br />
            who opposes the war <br />can participate.
          </h1>
          <h1 class="home_title_mobile">
            EVERYONE WHO OPPOSES THE WAR <br />CAN PARTICIPATE.
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" class="main_btn">
          <div class="button">
            <router-link to="/CampaignView"> Learn More </router-link>
          </div>
          <div class="button-run">
            <router-link to="/MapView"> Let's Run </router-link>
          </div>
        </div>
      </div>

      <div class="social-wrapper">
        <h2 class="home_subtitle">
          Post your charity using the hashtag <br /><strong
            >#ApopoSavesLives and tag us</strong
          >
          <b>@APOPO</b>
        </h2>

        <div class="home_social">
          <a href="" class="home_social-icon">
            <img
              src="https://img.icons8.com/cute-clipart/38/000000/instagram-new.png"
            />
          </a>
          <a href="" class="home_social-icon">
            <img src="https://img.icons8.com/color-glass/38/000000/tiktok.png"
          /></a>
          <a href="" class="home_social-icon"
            ><img src="https://img.icons8.com/fluency/38/000000/snapchat.png" />
          </a>
          <a href="" class="home_social-icon"
            ><img
              src="https://img.icons8.com/color/38/000000/twitter--v1.png"
            />
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "HomeView",
};
</script>

<style lang="sass">
@import "@/assets/sass/_home.scss";
</style>
