<script setup>
import WelcomeMessage from "./WelcomeMessage.vue"
import Customers from "./Customers.vue"
import CompanyValues from "./CompanyValues.vue";
import InstagramPostsCarousel from "./InstagramPostsCarousel.vue";
import ContactForm from "./ContactForm.vue";
</script>

<template>
    <WelcomeMessage />

    <!-- Customers -->

    <Customers />

    <!-- Company Values -->
    <CompanyValues />

    <!-- Instagram Posts Carousel -->
    <InstagramPostsCarousel class="block md:hidden min-h-[160vh]" :slides-per-view="1" />
    <InstagramPostsCarousel class="hidden md:block lg:hidden min-h-[140vh]" :slides-per-view="2" />
    <InstagramPostsCarousel class="hidden lg:block" :slides-per-view="3" />


    <!-- Contact Form -->
    <ContactForm />
</template>