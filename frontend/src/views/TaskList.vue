<script setup>
import { ref, onMounted, reactive } from 'vue'

import { Plus, X, Check, CircleCheck, CircleAlert } from 'lucide-vue-next'
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'
import { useTaskStore } from '@/stores/task'

const modalTitle = ref('')
const isModalCreateOpen = ref(false)
const isModalMarkDoneOpen = ref(false)
const isModalDeleteOpen = ref(false)
const taskStore = useTaskStore()
const task = reactive({ name: '', status: 'pending' })
const selectedTask = reactive({ name: '', status: '' })

function toggleCreateModal() {
  isModalCreateOpen.value = !isModalCreateOpen.value
  modalTitle.value = 'Create Task'
}
function toggleMarkDoneModal(task) {
  if (task) {
    selectedTask.name = task.name
    selectedTask.id = task.id
  }
  isModalMarkDoneOpen.value = !isModalMarkDoneOpen.value
}

function toggleDeleteModal(task) {
  if (task) {
    selectedTask.name = task.name
    selectedTask.id = task.id
  }
  isModalDeleteOpen.value = !isModalDeleteOpen.value
}

function createTask() {
  console.log(task)
  taskStore.addTask({
    id: Date.now(), // Unique ID
    name: task.name,
    status: task.status,
  })
  task.name = ''
  toggleCreateModal()
}

function completeTask() {
  taskStore.markAsDone(selectedTask)
  toggleMarkDoneModal()
}

function deleteTask() {
  taskStore.removeTask(selectedTask)
  toggleDeleteModal()
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
        <div class="font-bold text-xl text-end">Action</div>
      </div>
      <!-- task list -->
      <div class="grid grid-cols-2 gap-3 pb-3" v-for="item in taskStore.taskList">
        <div :class="`flex gap-4 items-center ${item.status == 'complete' && 'line-through'}`">
          <div class="font-medium text-xl">{{ item.name }}</div>
        </div>
        <div class="flex justify-end gap-2">
          <Button
            v-if="item.status != 'complete'"
            @click="toggleMarkDoneModal(item)"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center px-2"
            ><Check
          /></Button>
          <Button
            @click="toggleDeleteModal(item)"
            class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center"
            ><X
          /></Button>
        </div>
      </div>
    </div>
    <!--create modals -->
    <Modal
      @toggleModal="toggleCreateModal"
      :isModalOpen="isModalCreateOpen"
      :title="modalTitle"
      modalClass="md:w-[30%] w-[80%]"
    >
      <div class="grid grid-cols-1 gap-y-2">
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Task</label>
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-00 text-sm rounded-lg block p-2.5 w-full"
            required
            v-model="task.name"
          />
        </div>
      </div>
      <div class="pt-5">
        <div class="grid grid-cols-1 md:flex md:justify-end gap-2">
          <Button
            @click="createTask"
            class="text-white md:w-[30%] w-[100%] bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >Create</Button
          >
          <Button
            @click="toggleCreateModal"
            class="text-white md:w-[30%] w-[100%] bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >Close</Button
          >
        </div>
      </div>
    </Modal>

    <!--mark as done modals -->
    <Modal
      @toggleModal="toggleMarkDoneModal"
      :isModalOpen="isModalMarkDoneOpen"
      modalClass="md:w-[30%] w-[40%]"
    >
      <div class="justify-items-center">
        <div class="">
          <CircleCheck :size="48" />
        </div>
        <div class="font-bold py-4">"{{ selectedTask.name }}"</div>
        <div class="text-center pb-4">Mark this task as done??</div>
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-2">
          <Button
            @click="completeTask"
            class="text-white w-[100%] bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >Yes, I'm sure</Button
          >
          <Button
            @click="toggleMarkDoneModal"
            class="text-white w-[100%] bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >No, Cancel</Button
          >
        </div>
      </div>
    </Modal>
    <Modal
      @toggleModal="toggleDeleteModal"
      :isModalOpen="isModalDeleteOpen"
      modalClass="md:w-[30%] w-[60%]"
    >
      <div class="justify-items-center">
        <div>
          <CircleAlert :size="48" />
        </div>
        <div class="text-center py-4">Are you sure you want to delete this task?</div>
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-2">
          <Button
            @click="deleteTask"
            class="text-white w-[100%] bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >Yes, I'm sure</Button
          >
          <Button
            @click="toggleDeleteModal"
            class="text-white w-[100%] bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >No, Cancel</Button
          >
        </div>
      </div>
    </Modal>
  </div>
</template>
