<template>
  <div id="container">
    <div id="app">
      <header>
        <nav id="nav">
          <router-link to="/">
            <img src="@/assets/images/logo.png" />
          </router-link>

          <div class="menu">
            <router-link to="/" class="is-active"> HOME </router-link>
            <router-link to="/CampaignView"> OUR CAMPAIGN </router-link>
            <router-link to="/AboutView">ABOUT US </router-link>
            <router-link to="/ContactView"> CONTACT US </router-link>
            <button class="donationBtn">DONATE</button>
          </div>
          <button class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
      <div class="router">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/_header.scss";
</style>
