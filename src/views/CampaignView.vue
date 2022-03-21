<template>
  <main class="main">
    <div class="video-wrapper">
      <div class="video">
        <video
          src="@/assets/images/campaignVideo.mp4/"
          width="400"
          playsinline
          autoplay
          muted
          loop
          class="fullscreen"
        ></video>
      </div>
    </div>
    <section class="campaign">
      <div class="textCon">
        <div class="span">
          <span>#APOPO 2020</span>
          <span>#FROMZEROTOHERO</span>
        </div>
        <h1>Join our Charity 5k run!</h1>
        <p>
          Join our campaign to sponsor people suffering from the aftermath of
          the war and hero rats helping them.
        </p>
      </div>
      <div class="button" style="width: 150px">
        <router-link to="/CampaignView"> Join us </router-link>
      </div>

      <div class="map-warraper">
        <div class="imageOne">
          <div class="mapImage">Image1</div>
          <p>
            When you run the app, the driving route appears in real-time and
            your location is tracked by the hero rat.
          </p>
        </div>
        <div class="imageOne">
          <div class="mapImage">Image2</div>
          <p>
            You can also donate directly and check total donations and
            participants.
          </p>
        </div>
        <div class="message">
          <div class="minirat">
            <img src="@/assets/images/mini_rat.png/" alt="mini_rat" />
          </div>
          <h5>
            All fundraising will be used as a resource to maintain peace and
            integration around the world, and will also be used to help restore
            the current invasion of Ukraine &#127482;&#127462;.
          </h5>
        </div>
      </div>
      <div class="btn-wide">
        <router-link to="/RunningView" class="button-wide">
          Get started
        </router-link>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "campaignView",
};
</script>
<style lang="sass">
@import "@/assets/sass/_campaign.scss";
</style>
