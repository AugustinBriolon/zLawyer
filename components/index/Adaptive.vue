<template>
    <div class="max-width-white-section">
        <div class="max-width-white-section-content text-center flex flex-col items-center container-adaptative">
            <h2 class="anim-adaptative text-orange">zLawyer s’adapte à votre organisation</h2>
            <p class="anim-adaptative my-2 w-3/4 xl:w-1/2">Que votre cabinet soit équipé d’un <span class="text-bolder">Nas</span>, d’un serveur ou encore d’un <span class="text-bolder">Cloud</span>, zLawyer <span class="text-bolder">s'adapte</span> parfaitement à <span class="text-bolder">votre organisation</span>. zLawyer est <span class="text-bolder">100% compatible</span> avec les technologies actuelles de stockage.</p>

            <div class="mt-4 flex flex-wrap items-center justify-center">
              <img :src="googleDrive" alt="GoogleDrive Logo" class="anim-adaptative mx-2 h-20">
              <img :src="oneDrive" alt="OneDrive Logo" class="anim-adaptative mx-2 h-20">
              <img :src="synology" alt="Synology Logo" class="anim-adaptative mx-2 h-20">
              <img :src="dropbox" alt="Dropbox Logo" class="anim-adaptative mx-2 h-20">
              <img :src="tresorit" alt="tresorit Logo" class="anim-adaptative mx-2 h-20">
              <img :src="pcloud" alt="logo-pcloud Logo" class="anim-adaptative mx-2 h-20">
            </div>
        </div>
    </div>
</template>

<script>
import googleDrive from "../../assets/images/adaptative/googleDriveLogo.png"
import oneDrive from "../../assets/images/adaptative/oneDriveLogo.png"
import synology from "../../assets/images/adaptative/synologyLogo.svg"
import dropbox from "../../assets/images/adaptative/dropboxLogo.png"
import tresorit from "../../assets/images/adaptative/tresoritLogo.png"
import pcloud from "../../assets/images/adaptative/pcloudLogo.svg"

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    data: function () {
        return {
            dropbox,
            googleDrive,
            synology,
            tresorit,
            pcloud,
            oneDrive
        }
    },
    mounted() {
        let animAdaptative = gsap.utils.toArray('.anim-adaptative')
        animAdaptative.forEach((item, index) => {
        gsap.timeline({
            scrollTrigger: {
            trigger: ".container-adaptative",
            start:"top 50%",
            toggleActions:"restart none none reverse",
            end: "bottom 50%",
            },
        })
        .to(item, {
            opacity: 1,
            y: 0,
            duration: .5,
        }).delay(index * .1)
        })
    }
}
</script>

<style scoped>
    .anim-adaptative{
        opacity: 0;
        transform: translateY(-50px);
    }
</style>

