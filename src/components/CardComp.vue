<template>
  <div class="card">
    <slot name="image"></slot>
    <div class="card-body">
      <slot name="quote"></slot>
      <slot name="author"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComp',
};
</script>

<style scoped>
.card {
  border: 1px solid #cccccc6e;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.87);
  margin-bottom: 10px;
  background-color: #bc863ac8;
}

.card-body {
  padding: 20px;
}

.card-author {
  text-align: inherit;
}

@media (max-width: 768px) {
  .card-body {
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .card-body {
    padding: 10px;
  }
}

@media (max-width: 320px) {
  .card-body {
    padding: 8px;
  }
}
</style>