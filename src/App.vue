<script setup lang="ts">
import AvatarRoot from "./components/Avatar/AvatarRoot.vue";
import AvatarImage from "./components/Avatar/AvatarImage.vue";
import AvatarRootTwo from "./components/AvatarTwo/AvatarRootTwo.vue";
import AvatarImageTwo from "./components/AvatarTwo/AvatarImageTwo.vue";
</script>

<template>
  <AvatarRoot size="100px">
    <AvatarImage />
  </AvatarRoot>

  <AvatarRootTwo size="100px">
    <AvatarImageTwo />
  </AvatarRootTwo>
</template>
