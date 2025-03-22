<script setup lang="ts">
import AvatarRoot from "./components/Avatar/AvatarRoot.vue";
import AvatarImage from "./components/Avatar/AvatarImage.vue";
import AvatarRootTwo from "./components/AvatarTwo/AvatarRootTwo.vue";
import AvatarImageTwo from "./components/AvatarTwo/AvatarImageTwo.vue";
import DialogRoot from "./components/Dialog/DialogRoot.vue";
import DialogTeleport from "./components/Dialog/DialogTeleport.vue";
import DialogOverlay from "./components/Dialog/DIalogOverlay.vue";
import { ref } from "vue";

const isSidebarOpen = ref(false);
</script>

<template>
  <AvatarRoot size="100px">
    <AvatarImage />
  </AvatarRoot>

  <AvatarRootTwo size="100px">
    <AvatarImageTwo />
  </AvatarRootTwo>

  <button @click="isSidebarOpen = !isSidebarOpen">Open</button>

  <DialogRoot v-model:open="isSidebarOpen">
    <DialogTeleport>
      <DialogOverlay>
        <button
          class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          @click="isSidebarOpen = false"
        >
          Close Modal
        </button>
      </DialogOverlay>
    </DialogTeleport>
  </DialogRoot>
</template>
