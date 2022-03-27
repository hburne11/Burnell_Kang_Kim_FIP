<template>
  <div id="container">
    <header>
      <div class="nav-wrapper">
        <nav id="nav">
          <router-link to="/">
            <img src="@/assets/images/logo.png" />
          </router-link>
          <div class="menu-wide">
            <router-link to="/"> HOME </router-link>
            <router-link to="/CampaignView"> OUR CAMPAIGN </router-link>
            <router-link to="/AboutView">ABOUT US </router-link>
            <router-link to="/GalleryView"> GALLERY </router-link>
            <button class="donationBtn">
              <router-link to="/DonationView"> DONATE</router-link>
            </button>
          </div>
          <div class="menu">
            <router-link to="/"> HOME </router-link>
            <router-link to="/CampaignView"> OUR CAMPAIGN </router-link>
            <router-link to="/AboutView">ABOUT US </router-link>
            <router-link to="/GalleryView"> GALLERY </router-link>
            <button class="hamburger-dona">
              <router-link to="/DonationView"> DONATE</router-link>
            </button>
          </div>

          <button class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
    <div id="app">
      <div class="router">
        <router-view></router-view>
        <footer v-if="$route.name !== 'HomeView'" class="footer">
          <div class="footer-width">
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
          </div>
        </footer>
      </div>
    </div>
    <!-- <footer v-if="$route.name !== 'HomeView'" class="footer">
      <div class="footer-width">
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
      </div>
    </footer> -->
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/_header.scss";
@import "@/assets/sass/_footer.scss";
</style>
