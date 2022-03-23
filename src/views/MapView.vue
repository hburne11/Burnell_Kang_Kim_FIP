<template>
  <div class="main">
    <div class="mapView">
      <h1>Map Runner</h1>
      <div class="map-wrapper">
        <div class="mapUI">
          <div class="track">
            <h1><i class="bi bi-geo-alt-fill"></i> Track Hayden's Progress!</h1>
          </div>
          <div class="close">
            <h1><i class="bi bi-x-circle-fill"></i></h1>
          </div>
        </div>
      </div>
      <div class="data-wrapper">
        <div class="money">
          <h1>$290</h1>
          <p>Money Raised</p>
        </div>
        <div class="mapInfo">
          <div class="duration col">
            <h1>18:14</h1>
            <p>Duration</p>
          </div>
          <div class="distance col">
            <h1>2.5km</h1>
            <p>Distance</p>
          </div>
          <div class="speed col">
            <h1>3km/h</h1>
            <p>Speed</p>
          </div>
        </div>
      </div>
      <div class="map-btn-set">
        <div class="button-map"><button>Track People</button></div>
        <div class="button-map"><button>Share</button></div>
      </div>
      <div class="map-btn-wide">
        <router-link to="/DonationView"> Donate</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mapView",
};
</script>

<style lang="sass">
@import "@/assets/sass/_map.scss";
</style>
