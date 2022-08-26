<template>
  <div class="max-width-white-section max-width-clients-section">
    <div class="max-width-white-section-content">
      <h2 class="text-orange">Ils nous font confiance</h2>

      <div class="wrapperContainerTop">
        <div class="imagesContainer w-full flex items-center justify-between">
          <img :src="azarmi" alt="Logo Arasmis" class="image h-28" />
          <img :src="baro" alt="Logo Baro" class="image h-28" />
          <img :src="betto" alt="Logo Betto" class="image h-28" />
          <img :src="valther" alt="Logo Valther" class="image h-28" />
          <img :src="vinci" alt="Logo Vinci" class="image h-28" />
          <img :src="vatier" alt="Logo Vatier" class="image h-28" />
          <img :src="bonifassi" alt="Logo Bonifassi" class="image h-28" />
          <img :src="lamartine" alt="Logo Lamartine" class="image h-28" />
          <img :src="flichy" alt="Logo Flichy" class="image h-28" />
          <img :src="lombard" alt="Logo Lombard" class="image h-28" />
          <img :src="navacelle" alt="Logo Navacelle" class="image h-28" />
          <img :src="ollyns" alt="Logo Ollyns" class="image h-24" />
        </div>

        <div class="imagesContainer w-full flex items-center justify-between">
          <img :src="ollyns" alt="Logo Ollyns" class="image h-24" />
          <img :src="navacelle" alt="Logo Navacelle" class="image h-28" />
          <img :src="lombard" alt="Logo Lombard" class="image h-28" />
          <img :src="flichy" alt="Logo Flichy" class="image h-28" />
          <img :src="bonifassi" alt="Logo Bonifassi" class="image h-28" />
          <img :src="vatier" alt="Logo Vatier" class="image h-28" />
          <img :src="vinci" alt="Logo Vinci" class="image h-28" />
          <img :src="valther" alt="Logo Valther" class="image h-28" />
          <img :src="lamartine" alt="Logo Lamartine" class="image h-28" />
          <img :src="betto" alt="Logo Betto" class="image h-28" />
          <img :src="baro" alt="Logo Baro" class="image h-28" />
          <img :src="azarmi" alt="Logo Arasmis" class="image h-28" />
        </div>
      </div>

      <div class="wrapperContainerBottom">
        <div
          class="imagesContainerBottom w-full flex items-center justify-between"
        >
          <img :src="lombard" alt="Logo Lombard" class="imageBottom h-28" />
          <img :src="navacelle" alt="Logo Navacelle" class="imageBottom h-28" />
          <img :src="ollyns" alt="Logo Ollyns" class="imageBottom h-24" />
          <img :src="azarmi" alt="Logo Arasmis" class="imageBottom h-28" />
          <img :src="baro" alt="Logo Baro" class="imageBottom h-28" />
          <img :src="betto" alt="Logo Betto" class="imageBottom h-28" />
          <img :src="valther" alt="Logo Valther" class="imageBottom h-28" />
          <img :src="vinci" alt="Logo Vinci" class="imageBottom h-28" />
          <img :src="vatier" alt="Logo Vatier" class="imageBottom h-28" />
          <img :src="bonifassi" alt="Logo Bonifassi" class="imageBottom h-28" />
          <img :src="lamartine" alt="Logo Lamartine" class="imageBottom h-28" />
          <img :src="flichy" alt="Logo Flichy" class="imageBottom h-28" />
        </div>

        <div
          class="imagesContainerBottom w-full flex items-center justify-between"
        >
          <img :src="lombard" alt="Logo Lombard" class="imageBottom h-28" />
          <img :src="navacelle" alt="Logo Navacelle" class="imageBottom h-28" />
          <img :src="flichy" alt="Logo Flichy" class="imageBottom h-28" />
          <img :src="lamartine" alt="Logo Lamartine" class="imageBottom h-28" />
          <img :src="betto" alt="Logo Betto" class="imageBottom h-28" />
          <img :src="valther" alt="Logo Valther" class="imageBottom h-28" />
          <img :src="vinci" alt="Logo Vinci" class="imageBottom h-28" />
          <img :src="vatier" alt="Logo Vatier" class="imageBottom h-28" />
          <img :src="bonifassi" alt="Logo Bonifassi" class="imageBottom h-28" />
          <img :src="baro" alt="Logo Baro" class="imageBottom h-28" />
          <img :src="azarmi" alt="Logo Arasmis" class="imageBottom h-28" />
          <!-- <img :src="ollyns" alt="Logo Ollyns" class="imageBottom h-24" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import azarmi from "../../assets/images/clients/azarmiLogo.webp";
import baro from "../../assets/images/clients/baroLogo.webp";
import betto from "../../assets/images/clients/bettoLogo.webp";
import bonifassi from "../../assets/images/clients/bonifassiLogo.webp";
import flichy from "../../assets/images/clients/flichyLogo.webp";
import bonilfassi from "../../assets/images/clients/bonifassiLogo.webp";
import lamartine from "../../assets/images/clients/laMartineLogo.webp";
import lombard from "../../assets/images/clients/lombardLogo.webp";
import navacelle from "../../assets/images/clients/navacelleLogo.webp";
import ollyns from "../../assets/images/clients/ollynsLogo.webp";
import valther from "../../assets/images/clients/valtherLogo.webp";
import vatier from "../../assets/images/clients/vatierLogo.webp";
import vinci from "../../assets/images/clients/vinciLogo.webp";

export default {
  data: function () {
    return {
      azarmi,
      baro,
      betto,
      bonifassi,
      flichy,
      bonilfassi,
      lamartine,
      lombard,
      navacelle,
      ollyns,
      valther,
      vatier,
      vinci,
    };
  },
};
</script>

<style scoped>
.wrapperContainerTop {
  padding-top: 40px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  overflow: hidden;
}
.wrapperContainerTop .imagesContainer {
  white-space: nowrap;
  animation: slideLeft 60s infinite linear;
}

.wrapperContainerBottom {
  padding-top: 150px;
  margin-bottom: 65px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  overflow: hidden;
}

.wrapperContainerBottom .imagesContainerBottom {
  white-space: nowrap;
  animation: slideLeft 60s infinite linear reverse;
}

@keyframes slideLeft {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-200%, 0, 0);
  }
}

@media screen and (max-width: 600px) {
  .wrapperContainerBottom .imagesContainerBottom {
    animation: slideLeft 40s infinite linear reverse;
  }
  .wrapperContainerTop .imagesContainer {
    animation: slideLeft 40s infinite linear;
  }
}

@media screen and (max-width: 450px) {

  @keyframes slideLeft {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-400%, 0, 0);
  }
}

  .wrapperContainerBottom {
    padding-top: 80px;
    margin-bottom: 0;
  }
  .wrapperContainerBottom .imagesContainerBottom {
    animation: slideLeft 20s infinite linear reverse;
  }
  .wrapperContainerTop .imagesContainer {
    animation: slideLeft 20s infinite linear;
  }
}

</style>
