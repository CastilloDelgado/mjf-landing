<script setup>
import { ref } from "vue"
import cocacolaLogo from "../assets/images/cocacola-logo.jpeg"
import urreaLogo from "../assets/images/urrea-logo.jpg"
import aeropuertoLogo from "../assets/images/aeropuerto-logo.jpg"
import tyaLogo from "../assets/images/tya-logo.png"
import benottoLogo from "../assets/images/benotto-logo.jpg"
import freseniusLogo from "../assets/images/fresenius-logo.png"
import cactusLogo from "../assets/images/cactus-logo.png"
import morsaLogo from "../assets/images/morsa-logo.jpg"
import CustomerBadge from "./CustomerBadge.vue"
import PrimaryButton from "./PrimaryButton.vue"


const customers = ref([
    {
        alt: "CocaCola Company",
        title: "CocaCola Company",
        url: "https://www.coca-cola.com/mx/es",
        image: cocacolaLogo
    },
    {
        alt: "Urrea Compañía",
        title: "Urrea Compañía",
        url: "https://urrea.mx/",
        image: urreaLogo
    },
    {
        alt: "Grupo Aeroportuario del Pacífico",
        title: "Grupo Aeroportuario del Pacífico",
        url: "https://www.aeropuertosgap.com.mx/es/",
        image: aeropuertoLogo
    },
    {
        alt: "Tierra y Armonía",
        title: "Tierra y Armonía",
        url: "https://www.tya.com.mx/",
        image: tyaLogo
    },
    {
        alt: "Benotto",
        title: "Benotto",
        url: "https://tienda.benotto.com/?view=Home",
        image: benottoLogo
    },
    {
        alt: "Fresenius Kabi",
        title: "Fresenius Kabi",
        url: "https://www.fresenius-kabi.com/mx/",
        image: freseniusLogo
    },
    {
        alt: "Grupo Morsa",
        title: "Grupo Morsa",
        url: "https://www.morsa.com.mx/",
        image: morsaLogo
    },
    {
        alt: "Cactus Feliz",
        title: "Cactus Feliz",
        url: "https://cactusfeliz.com/",
        image: cactusLogo
    },
])

</script>

<template>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto py-12 px-6 md:px-8">
            <div class="max-w-xl mx-auto text-center mb-8">
                <p class="text-4xl font-bold text-minsk-900 mb-6">Nuestros clientes</p>
                <p class="text-storm-gray-700  text-xl">
                    Con una destacada trayectoria en el mercado, hemos
                    adquirido una amplia experiencia brindando soluciones a
                    diversos proyectos eléctricos.
                </p>
            </div>
            <div class="flex justify-center flex-wrap gap-x-6 gap-y-2 lg:gap-x-12  lg:gap-y-6 max-w-4xl mx-auto px-6">
                <CustomerBadge v-for="customer in customers" :customer="customer" />
            </div>
            <div class="max-w-xl mx-auto text-storm-gray-700 ">
                <p class="text-xl text-center mt-12 mb-8">
                    Con una destacada trayectoria en el mercado, hemos
                    adquirido una amplia experiencia brindando soluciones a
                    diversos proyectos eléctricos.
                </p>
                <div class="w-full flex justify-center">
                    <a href="#contacto">
                        <PrimaryButton>¡Contactanos!</PrimaryButton>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>