<script lang="ts">
import { createContext } from "@/shared/createContext";

interface AvatarRootContext {
  size?: string;
}

export const [injectAvatarRootContext, provideAvatarRootContext] =
  createContext<AvatarRootContext>("AvatarRoot");
</script>

<script setup lang="ts">
const props = defineProps<{
  size?: string;
}>();

provideAvatarRootContext({
  size: props.size,
});
</script>

<template>
  <div>
    <slot />
  </div>
</template>
