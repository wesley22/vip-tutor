<script setup>
import { ref, onMounted } from 'vue'

import { Plus, X, Check, CircleCheck, CircleAlert } from 'lucide-vue-next'
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'
import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore()

const modalTitle = ref('')
const isModalCreateOpen = ref(false)
const isModalMarkDoneOpen = ref(false)
const isModalDeleteOpen = ref(false)

function toggleCreateModal() {
  isModalCreateOpen.value = !isModalCreateOpen.value
  modalTitle.value = 'Create Task'
}
function toggleMarkDoneModal() {
  isModalMarkDoneOpen.value = !isModalMarkDoneOpen.value
}

function toggleDeleteModal() {
  isModalDeleteOpen.value = !isModalDeleteOpen.value
}
onMounted(() => {
  taskStore.fetchTaskList()
})
</script>
<template>
  <div class="flex items-center justify-center">
    <div class="w-[30%]">
      <div class="flex justify-between">
        <div class="text-xl font-bold">Task</div>
        <div class="bg-green-400 hover:bg-green-300 rounded-lg p-1">
          <Plus @click="toggleCreateModal" class="text-white" />
        </div>
      </div>
      <div class="my-4 border-b-2 border-black w-[100%]"></div>
      <!-- task header -->
      <div class="grid grid-cols-2 gap-3 pb-4">
        <div class="flex gap-4">
          <div class="font-bold text-xl">Task name</div>
        </div>
        <div class="font-bold text-xl text-end">Status</div>
      </div>
      <!-- task list -->
      <div class="grid grid-cols-2 gap-3 pb-3" v-for="item in taskStore.completedTaskList">
        <div class="flex gap-4 items-center">
          <div class="font-medium text-xl">{{ item.name }}</div>
        </div>
        <div class="flex justify-end gap-2">
          <div class="font-medium text-green-300">COMPLETED</div>
        </div>
      </div>
    </div>
  </div>
</template>
