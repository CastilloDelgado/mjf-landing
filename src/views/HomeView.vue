<script setup>
import WelcomeMessage from "../components/WelcomeMessage.vue"
import Customers from "../components/Customers.vue"
import CompanyValues from "../components/CompanyValues.vue";
import InstagramPostsCarousel from "../components/InstagramPostsCarousel.vue";
import ContactForm from "../components/ContactForm.vue";
import AppLayout from "../components/AppLayout.vue";
</script>

<template>
    <AppLayout>
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
    </AppLayout>
</template>