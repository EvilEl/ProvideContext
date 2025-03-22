<script setup lang="ts">
import { computed } from "vue";
import { injectDialogRootContext } from "./DialogRoot";

const dialogRootContext = injectDialogRootContext();

const open = computed(() => dialogRootContext.open.value);
</script>

<template>
  <div
    v-if="open"
    class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut"
  >
    <slot></slot>
  </div>
</template>
