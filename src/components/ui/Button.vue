<template>
  <button
    :class="['btn', `btn-${variant}`, { 'btn-full': fullWidth }]"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "outline", "ghost"].includes(value),
  },
  type: {
    type: String,
    default: "button",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.btn {
  padding: 0.875rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 105, 180, 0.4);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-outline {
  background: transparent;
  border-color: var(--primary);
  color: var(--primary);
}

.btn-outline:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
}

.btn-ghost {
  background: transparent;
  color: var(--primary);
}

.btn-ghost:hover {
  background: var(--bg-secondary);
}

.btn-full {
  width: 100%;
}

@media (max-width: 640px) {
  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }
}
</style>
