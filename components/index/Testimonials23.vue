<template>
    <div class="max-width-blue-section relative" id="clients">
        <h2 class="mb-20">Témoignages</h2>

        <!-- Slider Container  -->
        <v-carousel class="overflow-visible">
            <v-carousel-item v-for="(item,i) in items" :key="i" class="overflow-visible">
                <div class="card-testimonial">
                    <img class="quote" :src="quoteLogo" alt="checkIcon">
                    <img class="logo-client" :src="item.logo" alt="logo des clients">
                    <div class="pl-2 border-l-2 border-blue">
                        <p>{{ item.decription }}</p>
                    </div>
                    <p class="client-sign"><span class='text-bolder'>{{ item.client }}</span><br>{{ item.cabinet }}</p>
                </div>
            </v-carousel-item>
        </v-carousel>
        <!-- <v-carousel hide-delimiters class="flex justify-center items-center">
            
        </v-carousel> -->

    </div>
</template>

<script>
import quoteLogo from "../../assets/images/logos/quoteLogo.svg";
import arrowRight from "../../assets/images/logos/arrowRightIcon.svg";
import arrowLeft from "../../assets/images/logos/arrowLeftIcon.svg";
import clientLogo1 from "../../assets/images/testimonials/librato.png";
import clientLogo2 from "../../assets/images/testimonials/kiejman.png";
import clientLogo3 from "../../assets/images/testimonials/richelieu.png";
import clientLogo4 from "../../assets/images/testimonials/sekriValentinZerrouk.png";
import clientLogo5 from "../../assets/images/testimonials/mggVoltaire.png";
import clientLogo6 from "../../assets/images/testimonials/adHoc.png";
import clientLogo7 from "../../assets/images/testimonials/advanceAvocats.png";

export default {
    data: function () {
        return {
            // Images
            arrowLeft,
            arrowRight,
            quoteLogo,
            clientLogo1,
            clientLogo2,
            clientLogo3,
            clientLogo4,
            clientLogo5,
            clientLogo6,
            clientLogo7,

            items: [
                {
                    logo: clientLogo1,
                    decription: "Un logiciel de gestion est indispensable à tout avocat, autant choisir le meilleur !",
                    client: "Mme Christophe Thevenet, Avocat.",
                    cabinet: "Librato Avocats",
                },
                {
                    logo: clientLogo1,
                    decription: "Un logiciel de gestion est indispensable à tout avocat, autant choisir le meilleur !",
                    client: "Mme Christophe Thevenet, Avocat.",
                    cabinet: "Librato Avocats",
                },
                {
                    logo: clientLogo1,
                    decription: "Un logiciel de gestion est indispensable à tout avocat, autant choisir le meilleur !",
                    client: "Mme Christophe Thevenet, Avocat.",
                    cabinet: "Librato Avocats",
                },
                {
                    logo: clientLogo1,
                    decription: "Un logiciel de gestion est indispensable à tout avocat, autant choisir le meilleur !",
                    client: "Mme Christophe Thevenet, Avocat.",
                    cabinet: "Librato Avocats",
                },
            ],
        }
    },
    methods: {},
};

</script>

<style scoped>
    .card-testimonial{
        flex-shrink: 0;
        width: 38vw;
        max-width: 700px;
        position: relative;
        padding: 50px;
        border-radius: var(--radius-current);
        background-color: var(--color-white);
        box-shadow: var(--shadow-current);
    }
    @media screen and (max-width : 1200px){
        .card-testimonial{
            width: 70%;
            padding: 30px;
        }
    }
    @media screen and (max-width : 700px){
        .card-testimonial{
            width: 90%;
            padding: 30px;
        }
    }
    .card-testimonial .logo-client{
        margin-left: 20px;
        margin-bottom: 40px;
        height: 50px;
        border-radius: var(--radius-current);
    }
    .card-testimonial .client-sign{
        margin-top: 50px;
        float: right;
    }
    .card-testimonial .quote{
        position: absolute;
        top: -30px;
        right: 10%;
    }
</style>