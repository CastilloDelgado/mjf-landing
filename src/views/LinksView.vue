<script setup>
import { ref } from 'vue';
import logo from "../assets/images/logo-text-transparent.png"

const links = ref([
    {
        id: 1,
        image: "",
        title: "Sitio Oficial",
        externalLink: "https://mjf-se.com",
        icon: 'fa-globe-americas'

    },
    {
        id: 2,
        image: "",
        title: "Envianos un correo",
        externalLink: "https://google.com",
        icon: 'fa-mail-bulk',
    },
    {
        id: 3,
        image: "",
        title: "Contactanos por Whatsapp",
        externalLink: "https://google.com",
        icon: 'fa-whatsapp',
    },
    {
        id: 4,
        image: "",
        title: "Descarga nuestro Portafolio",
        externalLink: "https://google.com",
        icon: 'fa-folder',
    },
    {
        id: 5,
        image: "",
        title: "Instagram",
        externalLink: "https://google.com",
        icon: 'fa-instagram',
    },
])

</script>

<template>
    <div class="w-screen h-screen module grid place-content-center pt-12 ">
        <div class="module-inside">
            <div class="flex justify-center">
                <a target="_blank" href="https://mjf-se.com" class="border-2 border-minsk-800 mb-6 bg-white/90 rounded-full w-40 h-40  grid place-content-center hover:scale-105 hover:bg-white transition">
                    <img :src="logo" alt="" class="w-36">
                </a>
            </div>
                
            <div class="p-2 pb-12 space-y-3 no-scrollbar overflow-y-auto w-[80vw] lg:w-[25vw]">
                <div 
                v-for="link in links"
                :key="link.id"
                class="group drop-shadow-lg border-2 border-minsk-800 cursor-pointer select-none text-lg w-full bg-minsk-50 px-3 py-2 rounded hover:scale-105 transition hover:bg-minsk-800 hover:text-white"
                >
                    <a                    
                    :href="link.externalLink"
                    target="_blank"
                    class="flex gap-1"
                    >
                    <v-icon v-if="link.icon" :name="link.icon" scale="1.5" class="text-minsk-800 group-hover:text-white"  />
                    <p>{{ link.title }}</p>
                </a>
            </div>
        </div>
    </div> 
</div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
          display: none;
      }
/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.background {
    filter: brightness(0.90);
}

.module {
  position: relative;
}
.module::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: url('../assets/images/1.jpg');
  background-size: cover;
  filter: brightness(0.6);
}
.module-inside {
  /* This will make it stack on top of the ::before */
  position: relative;
}

</style>