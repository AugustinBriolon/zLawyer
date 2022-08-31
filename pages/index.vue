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

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
    Footer
  },
  mounted() {
    let animFromTop = gsap.utils.toArray('.anim-from-top')
    animFromTop.forEach((item, index) => {

    let tl = gsap.timeline({
      scrollTrigger: {
      trigger: item,
      start:"top 50%",
      toggleActions:"play none none reverse",
      end: "bottom top",
      }
    });
    tl.from(item, {
      opacity: 0,
      y: -50,
      duration: .5,
      });
    });
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