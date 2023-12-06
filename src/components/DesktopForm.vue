<script setup>

</script>

<template>
  <div class="flex items-center justify-center bg-gray-100 p-10">
    <div class="flex rounded-lg shadow-lg overflow-hidden">
      <div
          class="bg-[#3f51b5] p-6 space-y-4"
          style="background-image: url(src/assets/images/bg-sidebar-desktop.svg); background-size: cover; background-position: center center;"
      >
        <div class="text-white">
          <div class="text-2xl font-bold">1</div>
          <div class="text-sm">STEP 1</div>
          <div class="font-semibold">YOUR INFO</div>
        </div>
        <div class="text-[#c5cae9]">
          <div class="text-2xl font-bold">2</div>
          <div class="text-sm">STEP 2</div>
          <div class="font-semibold">SELECT PLAN</div>
        </div>
        <div class="text-[#c5cae9]">
          <div class="text-2xl font-bold">3</div>
          <div class="text-sm">STEP 3</div>
          <div class="font-semibold">ADD-ONS</div>
        </div>
        <div class="text-[#c5cae9]">
          <div class="text-2xl font-bold">4</div>
          <div class="text-sm">STEP 4</div>
          <div class="font-semibold">SUMMARY</div>
        </div>
      </div>
      <div class="bg-white p-8 w-96">
        <h2 class="text-2xl font-semibold mb-4">Personal info</h2>
        <p class="text-gray-600 mb-8">Please provide your name, email address, and phone number.</p>
        <form class="space-y-6">
          <div class="flex flex-col">
            <label class="text-sm font-semibold text-gray-700" for="name">
              Name
            </label>
            <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                placeholder="Vanessa Mint"
            />
          </div>
          <div class="flex flex-col">
            <label class="text-sm font-semibold text-gray-700" for="email">
              Email Address
            </label>
            <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder="vanessamint@"
            />
          </div>
          <div class="flex flex-col">
            <label class="text-sm font-semibold text-gray-700" for="phone">
              Phone Number
            </label>
            <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="phone"
                placeholder="e.g. +1 234 567 890"
            />
            <p class="text-xs text-red-500 mt-1">This field is required</p>
          </div>
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white float-right">
            Next Step
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>