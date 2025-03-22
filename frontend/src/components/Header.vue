<script setup>
import { RouterLink, RouterView } from 'vue-router'

//   import { Menu } from 'lucide-vue-next'
//   import { useUserStore } from '@/stores/user'
//   import { RouterLink } from 'vue-router'

//   const users = useUserStore()

//   function logout() {
//     users.logout()
//     window.location.href = '/login'
//   }
</script>

<template>
  <header class="bg-gray-800 text-white p-4 flex justify-between items-center">
    <!-- <Menu @click="$emit('toggleSideNav')" class="cursor-pointer" /> -->

    <div class="flex gap-4">
      <RouterLink to="/" class="hover:font-bold bg-blue-500 px-4 py-2 rounded">
        All Task</RouterLink
      >
      <RouterLink
        to="/completed"
        class="hover:font-bold hover:text-green-300 bg-green-500 px-4 py-2 rounded"
        >Completed Task</RouterLink
      >
    </div>
    <!-- <div>
        <button @click="logout" class="bg-blue-500 px-4 py-2 rounded">Logout</button>
      </div> -->
  </header>
</template>
