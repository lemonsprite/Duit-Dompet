<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size">
        <path :d="path" :fill="fill" />
    </svg>
</template>

<script>
export default {
    props: ['fill', 'path', 'size']
}
</script>

<style>
</style>