<template>
  <main class="main">
    <section class="campaign">
      <div class="textCon">
        <h6>#APOPO 2020 <br />#FROMZEROTOHERO</h6>
        <h1>Join our <br />Charity 5k run!</h1>
        <p>
          Join our campaign to sponsor people suffering from the aftermath of
          the war and hero rats helping them.
        </p>
      </div>
      <div class="startBtn">
        <button class="button">Get Started</button>
      </div>
      <div class="imageOne">
        <div class="mapImage">Image1</div>
        <p>
          When you run the app, the driving route appears in real-time and your
          location is tracked by the hero rat.
        </p>
      </div>
      <div class="imageTwo">
        <div class="mapImage">Image1</div>
        <p>
          You can also donate directly and check total donations and
          participants.
        </p>
        <p>
          All fundraising will be used as a resource to maintain peace and
          integration around the world, and will also be used to help restore
          the current invasion of Ukraine &#127482;&#127462;.
        </p>
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
