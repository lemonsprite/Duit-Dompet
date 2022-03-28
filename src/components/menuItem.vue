<template>
    <li class="flex justify-center px-4 py-12 hover:bg-gray hover:border-r-4 border-r-amber-800">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size">
            <path :d="path" :fill="fill" />
        </svg>
    </li>
</template>

<script>
export default {
    props: ['fill', 'path', 'size']

}
</script>

<style>
</style>