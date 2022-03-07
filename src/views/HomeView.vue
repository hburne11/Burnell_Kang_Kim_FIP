<template>
  <main class="main">
    <section class="homeSection">
      <div class="home_img">
        <img src="@/assets/images/main_image.png" class="home_rat" />
        <img
          src="@/assets/images/main_image_logo.png"
          class="home_rat_mobile"
        />
      </div>

      <div class="home_data">
        <h6><b>#APOPOSAVESLIVES #SUPPORTAPOPO</b></h6>
        <h1 class="home_title_2">CHARITY 5K run</h1>
        <h1 class="home_title">
          Everyone<br />
          who opposes the war <br />can participate.
        </h1>
        <h1 class="home_title_mobile">
          EVERYONE <br />WHO OPPOSES THE WAR<br />
          CAN PARTICIPATE.<br />
        </h1>
        <div class="main_btn">
          <router-link to="/CampaignView" class="button"> Join </router-link>
          <router-link to="/CampaignView" class="button_outline">
            View all
          </router-link>
        </div>
      </div>
      <!-- 
      <div class="cameraFunc ball">
        <img src="@/assets/images/camera.png" />
      </div> -->
      <!-- <h2 class="camera_text_mobile">
        Click the camera button,<br />
        your HeroRat will find the landmine <br />
        from your garden!
      </h2> -->
      <h2 class="home_subtitle">
        Post your charity using the hashtag <br /><b>#ApopoSavesLives</b> and
        tag us
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
          ><img src="https://img.icons8.com/color/38/000000/twitter--v1.png" />
        </a>
      </div>
      <!-- <div class="main_btn">
        <router-link to="/CampaignView" class="donaBtn"> Donate </router-link>
      </div> -->

      <router-link to="/DonationView">
        <div class="donation_link">
          <p>
            Support our hero animals and<br />
            people suffering from the war.
          </p>
        </div></router-link
      >
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
