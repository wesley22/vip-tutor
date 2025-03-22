<template>
  <Transition>
    <div
      v-if="props.isModalOpen"
      :class="`overflow-y-hidden px-4 left-0 top-0 w-screen h-screen flex justify-center items-center ${props.isModalOpen ? 'fixed  bg-black/50  ' : 'opacity-100 hidden transition-opacity duration-500'}`"
    >
      <div :class="`bg-white rounded shadow-md p-3 ${props.modalClass}`">
        <div class="flex items-end justify-between">
          <div class="text-lg">{{ title || '' }}</div>
          <X class="text-red-500 cursor-pointer" @click.stop="$emit('toggleModal')" />
          <!-- <Button class="bg-red-300" @click.stop="$emit('toggleModal')">close</Button> -->
        </div>
        <div class="p-6">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { X } from 'lucide-vue-next'

import Button from '@/components/Button.vue'
const props = defineProps({
  isModalOpen: Boolean,
  title: String,
  modalClass: String, // Add this prop to accept custom styles
})
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
