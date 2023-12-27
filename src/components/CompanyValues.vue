<script setup>
import gallery1 from "../assets/images/1.jpg"
import gallery2 from "../assets/images/2.jpg"
import gallery3 from "../assets/images/3.jpg"
import gallery4 from "../assets/images/4.jpg"
import gallery5 from "../assets/images/5.jpg"
import gallery6 from "../assets/images/6.jpg"
</script>

<template>
    <div
        class="w-full md:py-12 py-0 bg-storm-gray-100  md:bg-gradient-to-r md:from-storm-gray-100  md:from-50% md:via-50% md:via-hillary-500 md:to-100% md:to-hillary-500 ">
        <div class="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl ">
            <div class="p-6 ">
                <div class="grid grid-cols-2 gap-3 ">
                    <div class="">
                        <img class="mb-3 rounded-md w-full object-cover aspect-video " :src="gallery1" />
                        <img class="mb-3 rounded-md w-full object-cover aspect-square ..." :src="gallery2" />
                        <img class="mb-3 rounded-md w-full object-cover aspect-video" :src="gallery5" />
                    </div>
                    <div class="pt-12">
                        <img class="mb-3 rounded-md w-full object-cover aspect-video ..." :src="gallery3" />
                        <img class="mb-3 rounded-md w-full object-cover aspect-square top-10" :src="gallery4" />
                        <img class="mb-3 rounded-md w-full object-cover aspect-video ..." :src="gallery6" />
                    </div>
                </div>
            </div>

            <div
                class="relative grid place-content-center justify-center bg-hillary-500 px-12 py-24 md:px-16 md:pt-4 md:pb-16 ">

                <div
                    class="hidden md:block absolute -top-40 right-0 h-60 w-32 bg-transparent bg-[radial-gradient(#262626_2px,transparent_1px)] [background-size:16px_16px]">
                </div>
                <div
                    class="hidden md:block absolute -bottom-16 left-10 h-32 w-80 bg-transparent bg-[radial-gradient(#262626_2px,transparent_1px)] [background-size:16px_16px]">
                </div>
                <p class="mb-6 text-white capitalize text-4xl lg:text-6xl font-bold text-center md:text-end">
                    Filosofía Empresarial
                </p>
                <div class="mb-10">
                    <p class="text-2xl font-semibold text-minsk-800 mb-2 text-left">Misión</p>
                    <p class="text-storm-gray-100 text-justify">
                        Nuestra misión es satisfacer las
                        necesidades de nuestros clientes
                        ofreciendo soluciones innovadoras y
                        sostenibles a largo plazo.
                        Nos comprometemos a brindar
                        servicios de alta calidad, superando
                        sus expectativas y generando un
                        impacto positivo en sus operaciones.
                    </p>
                </div>
                <div class="left">
                    <p class="text-2xl font-semibold text-minsk-800  mb-2 text-right">Visión</p>
                    <p class="text-storm-gray-100 text-justify">
                        Nuestra visión es consolidarnos
                        como una empresa líder en el
                        sector, destacando por nuestra
                        organización, experiencia y
                        profesionalismo.
                        Aspiramos a ser altamente
                        valorados por nuestros clientes,
                        logrando su plena satisfacción y
                        siendo seleccionados para
                        proyectos de gran magnitud y
                        complejidad técnica.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>