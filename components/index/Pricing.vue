<template>
  <div class="max-width-blue-section flex flex-col items-center">
    <h2 class="mb-10 text-center">Commencez dès Aujourd'hui</h2>

    <div
      class="anim-from-top card-pricing w-full sm:w-max p-8 lg:p-20 flex flex-col items-center bg-white rounded-radius-current"
    >
      <div class="flex flex-col items-center sm:flex-row sm:justify-around">
        <div class="mb-8 sm:mb-0 sm:mr-8">
          <p class="pricingText text-6xl text-center">
            45€ <br />
            <span class="text-2xl block">/mois</span>
            <span class="text-2xl block">/utilisateur</span>
          </p>
        </div>

        <div class="sm:ml-8">
          <div class="flex items-center w-full">
            <nuxt-img
              loading="lazy"
              src="/images/logos/checkIcon.svg"
              alt="icone de validation"
              class="h-4"
            />
            <p class="ml-4 w-full text-clip">Facturation</p>
          </div>

          <div class="flex items-center w-full">
            <nuxt-img
              loading="lazy"
              src="/images/logos/checkIcon.svg"
              alt="icone de validation"
              class="h-4"
            />
            <p class="ml-4 sm:w-full w-40 text-clip">Gestion documentaire</p>
          </div>

          <div class="flex items-center w-full">
            <nuxt-img
              loading="lazy"
              src="/images/logos/checkIcon.svg"
              alt="icone de validation"
              class="h-4"
            />
            <p class="ml-4 w-full text-clip">Accès à vos dossiers</p>
          </div>

          <div class="flex items-center w-full">
            <nuxt-img
              loading="lazy"
              src="/images/logos/checkIcon.svg"
              alt="icone de validation"
              class="h-4"
            />
            <p class="ml-4 w-full text-clip">Sans engagements</p>
          </div>
        </div>
      </div>

      <NuxtLink to="/contact" class="button-orange mt-12 text-center w-full"
        >Je souhaite une démonstration</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-pricing {
  box-shadow: var(--shadow-current);
}

.pricingText {
  color: var(--color-orange);
  font-family: 'Roboto-regular', sans-serif;
  font-weight: 600;
}
</style>
