<script setup>

defineProps({
    type: {
        type: String,
        default: "submit"
    }
})
</script>
<template>
    <button :type="type"
        class="bg-minsk-800 text-white shadow-md hover:scale-110 transition text-lg px-12 py-2 rounded-lg font-semibold">
        <slot></slot>
    </button>
</template>