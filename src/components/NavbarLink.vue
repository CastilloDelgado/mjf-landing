<script setup>

defineProps({
    link: Object
})

</script>

<template>
    <a :href="link.href" class=" block rounded-sm px-4 py-2 text-base shadow-md" :class="{
        'bg-minsk-900 text-white font-medium': link.active,
        'bg-white text-storm-gray-900 hover:bg-minsk-900 hover:text-white': !link.active
    }" aria-current="page">
        <slot />
    </a>
</template>