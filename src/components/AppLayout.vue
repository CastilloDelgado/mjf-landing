<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import whastappLogo from "../assets/images/whatsapp-logo.png"
</script>

<template>
    <div>
        <Navbar />
        <div class="bg-blue-100">
            <main class="min-h-screen">
                <slot />
            </main>
        </div>
        <Footer />

        <div class="fixed bottom-12 right-12 ">
            <div class="flex justify-center">
                <img class="w-16 h-16 transition hover:scale-110 rounded-full object-fill border-4 border-white bg-white"
                    :src="whastappLogo" />
            </div>
        </div>
    </div>
</template>