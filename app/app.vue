<script setup lang="ts">

// The reponse type is unknown
const userResponse = await useFetch('/api/user')
</script>

<template>
  <div>{{ userResponse }}</div>
</template>
