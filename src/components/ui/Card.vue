<template>
  <div class="card">
    <div v-if="$slots.icon" class="card-icon">
      <slot name="icon"></slot>
    </div>

    <div class="card-content">
      <h3 v-if="$slots.title" class="card-title">
        <slot name="title"></slot>
      </h3>

      <div v-if="$slots.content" class="card-text">
        <slot name="content"></slot>
      </div>

      <slot></slot>
    </div>

    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(255, 105, 180, 0.1);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(255, 105, 180, 0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
  font-weight: 600;
}

.card-text {
  color: var(--text-light);
  line-height: 1.7;
  font-size: 1rem;
}

.card-footer {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}
</style>
