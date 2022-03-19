<template>
  <div id="container">
    <div id="app">
      <header>
        <nav id="nav">
          <router-link to="/">
            <img src="@/assets/images/logo.png" />
          </router-link>
          <div class="menu-wide">
            <router-link to="/" class="is-active"> HOME </router-link>
            <router-link to="/CampaignView"> OUR CAMPAIGN </router-link>
            <router-link to="/AboutView">ABOUT US </router-link>
            <router-link to="/ContactView"> CONTACT US </router-link>
            <button class="donationBtn">DONATE</button>
          </div>
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
        <footer v-if="$route.name !== 'HomeView'" class="footer">
          <div class="footer-warraper">
            <h3>Get in touch</h3>
            <p>
              To find out more about any of our activities, please email
              herorats@apopo.org
            </p>
            <h3>Sign up to our newsletter</h3>
          </div>
          <div class="newsBtn">
            <router-link to="/"> Sign up </router-link>
          </div>
          <p class="copy">© Apopo. All rights reserved.</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/_header.scss";
@import "@/assets/sass/_footer.scss";
</style>
