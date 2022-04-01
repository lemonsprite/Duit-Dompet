<template>
    <div class="p-5 bg-abu-tua flex items-center">
        <div class="border-r-white mr-4 pr-4 border-r-2">
            <Icon size="45" fill="white" :path="icon" />
        </div>
        <div>
            <h4 class="text-lg font-semibold text-oranye-muda">{{ title }}</h4>
            <p class="text-xl truncate">{{ uang }}</p>
        </div>
    </div>
</template>

<script>
import Icon from "@/components/icon.vue"
export default {
    components: {
        Icon,
    },
    props: ['icon', 'nominal', 'title'],

    computed: {
        uang() {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(this.nominal)
        }
    },

}
</script>

<style>
</style>