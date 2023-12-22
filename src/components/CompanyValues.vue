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
                    class="hidden md:block absolute -top-20 right-0 h-60 w-32 bg-transparent bg-[radial-gradient(#262626_2px,transparent_1px)] [background-size:16px_16px]">
                </div>
                <div
                    class="hidden md:block absolute -bottom-16 left-10 h-32 w-80 bg-transparent bg-[radial-gradient(#262626_2px,transparent_1px)] [background-size:16px_16px]">
                </div>
                <p class="text-white text-4xl lg:text-6xl font-bold text-center md:text-end">Instalación y mantenimiento de
                    sistemas eléctricos</p>
                <p class="text-2xl font-semibold text-minsk-900 text-center mb-2">¡Aquí va un mensaje de bienvenida a
                    todos!
                </p>
                <p class="text-storm-gray-700 text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Animi
                    iure cum
                    minima quidem delectus rerum
                    non. Aspernatur ipsum unde sapiente esse, qui sunt debitis quam, eos maiores laudantium sit fuga!
                </p>
            </div>
        </div>
    </div>
</template>