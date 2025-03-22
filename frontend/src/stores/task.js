import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import taskJson from '@/data/task.json'

export const useTaskStore = defineStore('task', () => {
  const taskList = ref([])

  const completedTaskList = computed(() =>
    taskList.value.filter((task) => task.status === 'complete'),
  )

  function fetchTaskList() {
    taskList.value = JSON.parse(localStorage.getItem('tasks'))
  }
  function addTask(task) {
    if (this.taskList) {
      this.taskList.push(task)
    } else {
      this.taskList = [task]
    }
    console.log(taskList.value)
    localStorage.setItem('tasks', JSON.stringify(taskList.value))
  }

  function markAsDone(task) {
    console.log(task)
    const taskIndex = taskList.value.findIndex((item) => item.id === task.id)
    if (taskIndex > -1) {
      taskList.value[taskIndex].status = 'complete'
      localStorage.setItem('tasks', JSON.stringify(taskList.value))
    }
  }
  function removeTask(task) {
    console.log(task)

    const taskIndex = taskList.value.findIndex((item) => item.id === task.id)
    console.log(taskIndex)
    if (taskIndex > -1) {
      taskList.value.splice(taskIndex, 1)
      localStorage.setItem('tasks', JSON.stringify(taskList.value))
    }
  }

  return { fetchTaskList, taskList, addTask, markAsDone, removeTask, completedTaskList }
})
