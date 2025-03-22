<script setup lang="ts">
import { computed } from "vue";
import { injectAvatarRootContext } from "./AvatarRoot.vue";

const avatarRootContext = injectAvatarRootContext();

const size = computed(() => avatarRootContext.size);
</script>

<template>
  <div>size {{ size }}</div>
</template>
