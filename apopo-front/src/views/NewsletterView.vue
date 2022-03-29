<template>
  <div class="main">
    <div class="newsletterView">
      <h1>Get the lastest news from APOPO!</h1>
      <h2>We will push weekly newsletter through email to get in touch with you.</h2>
      
        <section class="newsletterForm">
            <h2 class="hidden">Newsletter form</h2>
            <label for="membername">Your Name:</label>
            <input v-model="membername" type="text" placeholder="Your name" required id="membername">

            <label for="memberemail">Your Email:</label>
            <input v-model="memberemail" type="text" placeholder="Your email" required id="memberemail">

            <br>
            <button type="submit" @click="submit" id="subscribeSubmit">
                Submit
            </button>

            <br>
            <p v-if="submitMessage" id="submitMessage">Thank you for subscription! Redirecting...</p>
        </section>

    </div>
  </div>
</template>
<script>
export default {
  name: "newsletterView",

  data() {
      return {
          membername: '',
          memberemail: '',
          submitMessage: false
      }
  },

  methods: {
      submit() {
        let formData = { membername: this.membername, memberemail: this.memberemail};

        fetch('newsletter', {
            method: 'POST',
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.table(data);
            this.submitMessage = true;
            this.goToHome(2500, this);
        })
      .catch(err => console.error(err));
      },

      goToHome(time, vm) {
          setTimeout(function() {
                vm.$router.push({ name: 'HomeView'});
            }, time);
      }
  }

};
</script>

<style lang="sass">
@import "@/assets/sass/_newsletter.scss";
</style>
