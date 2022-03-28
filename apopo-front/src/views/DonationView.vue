<template>
  <div class="main-donation">
    <div class="donation-total">
      <div class="money-raised">
        <p>Total Money Raised</p>
        <h1>0.3K</h1>
      </div>

      <div class="participants">
        <p>Total Participants</p>
        <h1>1,256</h1>
      </div>

      <div class="my-donation">
        <p>Your Donation</p>
        <h1>${{ price }}</h1>
      </div>
    </div>

    <div class="dona-text">
      <h1>How much wanna donate?</h1>
    </div>
    <div class="price">
      <button @click="fifty" class="price-btn">$50</button>
      <button @click="hundred" class="price-btn">$100</button>
      <button @click="hundredf" class="price-btn">$150</button>

      <p>or</p>
      <form>
        <input
          type="text"
          v-model="price"
          placeholder="Your price"
          class="my-price"
        /><br />

        <button class="continue-btn" type="submit" id="enterprice">
          Continue
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "donationView",
  data() {
    return {
      price: "",
      fiftyd: "50",
      hundredd: "100",
      hundredfifty: "150",
    };
  },
  methods: {
    fifty() {
      this.price = this.fiftyd;
    },
    hundred() {
      this.price = this.hundredd;
    },
    hundredf() {
      this.price = this.hundredfifty;
    },
  },
};
</script>

<style lang="sass">
@import "@/assets/sass/_donation.scss";
</style>
