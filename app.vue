<script setup lang="ts">
const { getUser } = useServerFunctions()

const userResponse = await getUser()
</script>

<template>
  <div>{{ userResponse }}</div>
</template>
