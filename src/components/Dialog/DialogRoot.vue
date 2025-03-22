<script setup lang="ts">
import { useDialogRoot } from "./DialogRoot";
import type { DialogRootProps, DialogRootEmits } from "./DialogRoot";

const props = withDefaults(defineProps<DialogRootProps>(), {
  open: undefined,
  defaultOpen: false,
});

const emit = defineEmits<DialogRootEmits>();

const { open } = useDialogRoot(props, emit);
</script>

<template>
  <slot :open="open" />
</template>
