<template>
  <div>
    <school></school>
    <student></student>
  </div>
</template>

<script>
import school from "./components/School";
import student from "./components/Student";
export default {
  name: "App",
  components: { school, student },
};
</script>

<style>
</style>