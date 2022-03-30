<template>
  <main class="main-campaign">
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
      <div data-aos="fade-up" class="textCon">
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
      <div class="button campaign-btn">
        <router-link to="/MapView"> Join us </router-link>
      </div>

      <div class="map-warraper">
        <div class="imageOne">
          <div class="mapImage"></div>
          <div data-aos="fade-down" data-aos-once="false" class="mapText">
            <p>
              When you run the app,
              <br />

              the driving route appears in real-time and your location is
              tracked by the hero rat.
            </p>
          </div>
        </div>
        <div class="imageOne" style="margin-top: 40px">
          <div class="mapImage-2"></div>
          <div data-aos="fade-down" data-aos-once="false" class="mapText">
            <p>
              You can also donate directly <br />and check total donations and
              participants.
            </p>
          </div>
        </div>
        <div class="message">
          <div class="message-wrapper">
            <!-- <div class="minirat">
              <img src="@/assets/images/mini_rat.png/" alt="mini_rat" />
            </div> -->
            <h5>
              All fundraising will be used as a resource to maintain peace and
              integration around the world, and will also be used to help
              restore the current invasion of Ukraine &#127482;&#127462;.
            </h5>
          </div>
        </div>
      </div>
      <div class="btn-wide">
        <router-link to="/MapView" class="button-wide">
          Get started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
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
