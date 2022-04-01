<template>
    <li class="flex justify-center px-12 h-16 items-center md:px-4 md:py-12 hover:bg-gray md:hover:border-r-4 md:border-r-amber-800">
        <Icon :fill="fill" :path="path" :size="size" />
    </li>
</template>

<script>
import Icon from "@/components/icon.vue"
export default {
    props: ['fill', 'path', 'size'],
    components: {
        Icon
    }

}
</script>

<style>
</style>