<template>
  <div class="main">
    <div data-aos="fade-up" class="newsletterView">
      <h1>Get the lastest news <br />from APOPO!</h1>
      <h2>
        We will push weekly newsletter through email to get in touch with you.
      </h2>

      <section class="newsletterForm">
        <h2 class="hidden">Newsletter form</h2>
        <label for="membername">Your Name</label> <br />
        <input
          style="margin-bottom: 13px"
          v-model="membername"
          type="text"
          placeholder="Your name"
          required
          id="membername"
        /><br />

        <label for="memberemail">Your Email</label><br />
        <input
          v-model="memberemail"
          type="text"
          placeholder="Your email"
          required
          id="memberemail"
        />

        <br />
        <button type="submit" @click="modal = true" id="subscribeSubmit">
          Submit
        </button>

        <!-- <p v-if="submitMessage" id="submitMessage">
          Thank you for subscription! Redirecting...
        </p> -->

        <div class="thanku-md" v-if="modal == true">
          <button class="close-btn" @click="modal = false">
            <img
              src="https://img.icons8.com/ios-glyphs/20/bfa65a/macos-close.png"
            />
          </button>
          <div class="thanku-wrapper">
            <h2>Thank you for subscribing!</h2>
            <p>Please check your inbox</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "newsletterView",

  data() {
    return {
      membername: "",
      memberemail: "",
      modal: false,
    };
  },

  methods: {
    submit() {
      let formData = {
        membername: this.membername,
        memberemail: this.memberemail,
      };

      if (!this.membername) {
        alert("Please type your name");
        this.$refs.membername.focus();
        return;
      }

      fetch("newsletter", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.table(data);
          this.submitMessage = true;
          this.goToHome(2500, this);
        })
        .catch((err) => console.error(err));
    },

    goToHome(time, vm) {
      setTimeout(function () {
        vm.$router.push({ name: "HomeView" });
      }, time);
    },
  },
};
</script>

<style lang="sass">
@import "@/assets/sass/_newsletter.scss";
</style>
