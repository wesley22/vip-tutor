<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header v-if="$route.name !== 'Login'"></Header>
    <div class="flex flex-1">
      <div
        :class="`flex-1 p-6 py-8 ${$route.name === 'Login' && 'bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%'}  `"
      >
        <RouterView />
      </div>
    </div>
  </div>
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
</template>
