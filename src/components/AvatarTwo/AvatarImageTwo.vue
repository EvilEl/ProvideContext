<script setup lang="ts">
import { computed } from "vue";
import { injectAvatarRootContext } from "./AvatarRootTwo";

const avatarRootContext = injectAvatarRootContext();

const size = computed(() => avatarRootContext.size);
</script>

<template>
  <div>size {{ size }}</div>
</template>
