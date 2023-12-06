<script setup>

</script>

<template>
  <div class="z-10 flex flex-col">
    <div class="mx-auto mt-10 h-auto w-11/12 flex-col justify-center rounded-xl p-6 align-middle shadow-lg step-1 bg-neutral-white">
      <h1 class="my-2 text-2xl text-primary-marine-blue">Personal Info</h1>
      <p class="my-2 text-neutral-cool-gray">Please provide your name, email address, and phone number.</p>
      <div class="my-2">
        <p class="text-sm text-primary-marine-blue">Name</p>
        <input v-model="name" class="mx-auto w-full rounded border px-4 py-2" type="text" placeholder="e.g. Stephen King">
      </div>
      <div class="my-2">
        <p class="text-sm text-primary-marine-blue">Email Address</p>
        <input v-model="email" class="mx-auto w-full rounded border px-4 py-2" type="text" placeholder="e.g. stephenking@lorem.com">
      </div>
      <div class="my-2">
        <p class="text-sm text-primary-marine-blue">Phone Number</p>
        <input v-model="phone" class="mx-auto w-full rounded border px-4 py-2" type="text" placeholder="e.g. +1 234 567 890">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>