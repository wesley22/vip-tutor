<script setup>
import { ref, onMounted } from 'vue'
import { RefreshCcw } from 'lucide-vue-next'

import Button from '@/components/Button.vue'
const random = ref('')

function refreshCaptcha() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  random.value = result
}
onMounted(() => {
  refreshCaptcha()
})
</script>
<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-[50%] border-8 border-[#9bd2f0] rounded-xl flex">
      <div class="w-[40%] p-8 pt-[50px] bg-[#f1f4f9]">
        <img src="../assets/image/logo.png" alt="" />
      </div>
      <div class="flex-1 p-10 bg-[#ffffff]">
        <div class="grid grid-cols-1 gap-4">
          <div class="text-2xl font-bold">Sign in to your account</div>
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900"
              >USername/Email Address/ Mobile</label
            >
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-00 text-sm rounded-lg block p-2.5 w-full"
              required
            />
          </div>
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900"
              >Password</label
            >
            <input
              type="password"
              class="bg-gray-50 border border-gray-300 text-gray-00 text-sm rounded-lg block p-2.5 w-full"
              required
            />
          </div>
          <div>
            Forgot your password? <span class="text-orange-500 font-bold">Reset Password</span>
          </div>
          <div class="flex gap-2 items-center">
            <div class="relative">
              <img src="../assets/image/captch_bg.jpeg" alt="" />
              <div
                class="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold flex items-center justify-center left-[131px]"
              >
                {{ random }}
              </div>
            </div>

            <div @click="refreshCaptcha">
              <RefreshCcw />
            </div>
          </div>
          <div>
            <label for="first_name" class="block mb-2 text-sm text-gray-900"
              >Enter the character you see above</label
            >
            <input
              type="password"
              class="bg-gray-50 border border-gray-300 text-gray-00 text-sm rounded-lg block p-2.5 w-full"
              required
            />
          </div>
          <div>
            <Button class="bg-[#152563] hover:bg-[#152563]/50 w-full rounde-full" @click="login"
              >Login</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
