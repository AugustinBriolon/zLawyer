<template>
  <div class="max-width-white-section">
    <div
      class="max-width-white-section-content flex flex-col items-center container-infos"
    >
      <h2 class="anim-infos text-orange text-center">
        Une réponse simple à vos questions
      </h2>

      <div class="lg:w-5/6 grid grid-rows-2 md:grid-cols-2 gap-4 items-center">
        <!-- Card Infos -->
        <div class="anim-infos sm:w-5/6 flex flex-col justify-start">
          <div class="flex items-start justify-start max-h-14">
            <nuxt-img
              loading="lazy"
              src="/images/logos/infoIcon.svg"
              alt="iconInfo"
            />
            <h3 class="ml-4">Y a t-il un engagement ?</h3>
          </div>

          <p class="mt-5">
            L’offre zLawyer est
            <span class="text-bolder">sans engagement</span>. Vous pouvez
            stopper votre abonnement à tout moment mais nous serions attristés
            de vous voir partir.
          </p>
        </div>

        <!-- Card Infos -->
        <div class="anim-infos sm:w-5/6 mt-4 flex flex-col justify-start">
          <div class="flex items-start justify-start max-h-14">
            <nuxt-img
              loading="lazy"
              src="/images/logos/infoIcon.svg"
              alt="iconInfo"
            />
            <h3 class="ml-4">Comment j’importe mes données ?</h3>
          </div>

          <p class="mt-5">
            Que vos données proviennent d’un autre éditeur ou directement depuis
            Excel,
            <span class="text-bolder"
              >nous vous offrons l’import de vos données</span
            >. C’est quand même plus facile quand on ne recommence pas à zéro.
          </p>
        </div>

        <!-- Card Infos -->
        <div class="anim-infos sm:w-5/6 mt-4 flex flex-col justify-start">
          <div class="flex items-start justify-start max-h-14">
            <nuxt-img
              loading="lazy"
              src="/images/logos/infoIcon.svg"
              alt="iconInfo"
            />
            <h3 class="ml-4">Puis-je adapter mon abonnement ?</h3>
          </div>

          <p class="mt-5">
            Oui sans problème. Si un collaborateur quitte le cabinet et qu’il
            n’est pas remplacé, vous pourrez
            <span class="text-bolder">adapter votre abonnement</span> en
            conséquence.
          </p>
        </div>

        <!-- Card Infos -->
        <div class="anim-infos sm:w-5/6 mt-4 flex flex-col justify-start">
          <div class="flex items-start justify-start max-h-14">
            <nuxt-img
              loading="lazy"
              src="/images/logos/infoIcon.svg"
              alt="iconInfo"
            />
            <h3 class="ml-4">Y a t-il des frais cachés ?</h3>
          </div>

          <p class="mt-5">
            Une fois abonné, vous bénéficiez d’un accès au support utilisateur
            et aux mises à jour
            <span class="text-bolder">sans frais complémentaires</span>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    let animInfos = gsap.utils.toArray('.anim-infos');
    animInfos.forEach((item, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.container-infos',
            start: 'top 50%',
            toggleActions: 'restart none none reverse',
            end: 'bottom 50%',
          },
        })
        .to(item, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        })
        .delay(index * 0.1);
    });
  },
};
</script>

<style scoped>
.anim-infos {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
