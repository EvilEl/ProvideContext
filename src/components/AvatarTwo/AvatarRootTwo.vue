<script setup lang="ts">
import { useAvatarRoot } from "./AvatarRootTwo";

const props = defineProps<{
  size?: string;
}>();

useAvatarRoot(props);
</script>

<template>
  <div>
    <slot />
  </div>
</template>
