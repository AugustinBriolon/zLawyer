<template>
  <div>
    <Header class="fixed" />
    <Hero />
    <Reviews />
    <Advantages />
    <Adaptive />
    <Features />
    <Infos />
    <Testimonials />
    <Clients />
    <Pricing />
    <Footer />
    <cookie-law>
      <div slot-scope="props" class="cookies-container">
        <p>Nous utilisons les <nuxt-link class="text-link" to="/politique-de-cookies">cookies</nuxt-link> pour vous garantir la meilleure expérience.</p>
        <div>
          <button class="button-orange" @click="props.accept"><span>Accepter</span></button>
          <button class="button-orange" @click="props.close"><span>Ignorer</span></button>
        </div>
      </div>
    </cookie-law>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Hero from "../components/index/Hero.vue";
import Reviews from "../components/index/Reviews.vue";
import Advantages from "../components/index/Advantages.vue";
import Adaptive from "../components/index/Adaptive.vue";
import Features from "../components/index/Features.vue";
import Clients from "../components/index/Clients.vue";
import Testimonials from "../components/index/Testimonials.vue";
import Infos from "../components/index/Infos.vue";
import Pricing from "../components/index/Pricing.vue";
import Footer from "../components/Footer.vue";
import CookieLaw from 'vue-cookie-law';

export default {
  components: {
    Header,
    Hero,
    Reviews,
    Advantages,
    Adaptive,
    Features,
    Clients,
    Testimonials,
    Infos,
    Pricing,
    Footer,
    CookieLaw
  },
};
</script>

<style scoped>
.cookies-container{
  padding: 50px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cookies-container .button-orange{
  margin: 5px;
  width: 140px;
}

</style>