<template>
    <div class="hero max-width-blue-section grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <div class="flex flex-col items-center lg:block row-start-2 lg:row-start-1 md:px-8">
            <h1 class="text-center lg:text-left mb-14">La solution de gestion de cabinets d’avocats <br><span class="text-orange">simple, <br>ergonomique, <br>sans engagement !</span></h1>
            <NuxtLink to="/contact" class="button-orange w-max">Je souhaite une démonstration</NuxtLink>
        </div>
        <div class="container-img">
            <img class="w-full" :src="illustrationHero" alt="illustration du logiciel">
            <typewriter :replace="replace" :type-interval="20" :replace-interval="3000">
                <p class="text-replace text-center text-2xl hidden lg:block">La solution la mieux notée par vos confrères !</p>
            </typewriter>
        </div>


    </div>
</template>

<script>

import illustrationHero from "../../assets/images/hero/illustrationHero.png";
import Typewriter from "typewriter-vue";

export default {
    components: {
        Typewriter,
    },
    data: function() {
        return {
            illustrationHero,
            replace: [
                { from: "La solution la mieux notée par vos confrères", to: "Votre solution de gestion de cabinet qui vous fait gagner du temps !" },
            ],
        }
    },
};

</script>


<style scoped>

    .hero{
        padding-top: 180px;
        perspective: 1500px;
    }
    .container-img {
        perspective: 1500px;
    }
    .container-img img{
        transform: rotateY(-15deg);
    }
    @media screen and (max-width : 1024px) {
        .container-img img{
            transform: rotateY(0deg);
        }
    }
    .text-replace{
        font-family: 'Roboto-Regular', sans-serif;
    }

</style>