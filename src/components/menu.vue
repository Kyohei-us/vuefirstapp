<template>
  <div>
    <nav class="menunavbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">{{ itemName }}</a>
        </li>
        <li>
          <a href="/">3 item</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    itemName: String,
  },
};
</script>

<style scoped>
.menunavbar {
  border: solid black;
  padding: 10px;
  height: 50px;
}

.menunavbar > ul > li {
  padding: 20px;
  /* float: left;*/
  display: inline;
}
</style>
