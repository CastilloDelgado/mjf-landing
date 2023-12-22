<script setup>

defineProps({
    customer: {
        type: Object,
        required: true
    }
})

</script>


<template>
    <a :href="customer.url" target="_blank">
        <img :alt="customer.alg" :title="customer.title"
            class="w-24 md:w-32 h-24 md:h-32 object-cover border-2 border-gray-300 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
            :src="customer.image" />
    </a>
</template>