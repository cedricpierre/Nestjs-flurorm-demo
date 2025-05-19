<template>
  <header>
    <nav class="flex flex-row justify-center items-center gap-4">
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  <div class="container mx-auto">
    <RouterView />
  </div>
</template>