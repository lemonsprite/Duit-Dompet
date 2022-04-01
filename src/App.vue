<template>
  <div class="wrapper antialiased">
    <div id="navigation">
      <div class="fixed md:left-0 md:top-0  bottom-0 md:h-full md:w-16 h-16 w-full shadow-lg bg-abu-tua truncate z-10 text-white rounded-t-3xl md:rounded-none">
        <div class="logo p-5 h-16 cursor-pointer hidden md:block">
          <router-link :to="{ name: 'home' }">
            <img src="@/assets/logo-light.png" class="block h-full w-full cursor-pointer" />
          </router-link>
        </div>
        <div id="menu">
          <ul class="flex md:flex-col justify-around h-full">
            <router-link :to="{ name: 'home' }">
              <MenuItem fill="white" size="28" path="M12 2.0996094L1 12L4 12L4 21L11 21L11 15L13 15L13 21L20 21L20 12L23 12L12 2.0996094 z M 12 4.7910156L18 10.191406L18 11L18 19L15 19L15 13L9 13L9 19L6 19L6 10.191406L12 4.7910156 z" />
            </router-link>
            <MenuItem fill="white" size="28" path="M7 2L2 7L6 7L6 13L8 13L8 7L12 7L7 2 z M 16 3L16 5L18 5L18 3L16 3 z M 16 7L16 9L18 9L18 7L16 7 z M 16 11L16 17L12 17L17 22L22 17L18 17L18 11L16 11 z M 6 15L6 17L8 17L8 15L6 15 z M 6 19L6 21L8 21L8 19L6 19 z" />
            <MenuItem fill="white" size="28" path="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z M 11 7L11 9L13 9L13 7L11 7 z M 11 11L11 17L13 17L13 11L11 11 z" />
          </ul>
        </div>
      </div>
      
    </div>
    <div id="konten" class="md:ml-16 ml-0 mb-16">
      <div id="navbar" class="h-16 bg-abu-tua shadow-lg px-8 flex items-center text-white justify-between">
        <router-link :to="{ name: 'home' }">
          <h1 id="brand" class="capitalize italic text-2xl tracking-widest font-semibold">DUIT DOMPET</h1>
        </router-link>
        <div id="metadata" class="flex">
          <div class="text-right flex flex-col mr-5">
            <span>Takeo Mitsutaka</span>
            <span class="text-xs text-gray-400">Admin</span>
          </div>
          <div class="relative w-10 h-10 truncate rounded-full">
            <img src="@/assets/img/profil.png" alt="profil" />
          </div>
        </div>
      </div>
      <div id="main-konten" class="w-full">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import MenuItem from "@/components/menuItem.vue"
export default {
  components: {
    MenuItem
  }

}
</script>
<style>
#menu {
  height: calc(100% - 5rem);
}

</style>
