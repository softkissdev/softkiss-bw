<template>
  <a
    :href="`https://${url}`"
    target="_blank"
    class="product-card"
    :style="{ '--card-color': color }"
  >
    <div class="product-header">
      <div class="product-icon">{{ icon }}</div>
      <div class="product-badge">
        <span>Ver sitio →</span>
      </div>
    </div>

    <div class="product-content">
      <h3 class="product-name">{{ name }}</h3>
      <p class="product-url">{{ url }}</p>
      <p class="product-description">{{ description }}</p>
    </div>

    <div class="product-footer">
      <span class="learn-more">Explorar →</span>
    </div>
  </a>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "🚀",
  },
  color: {
    type: String,
    default: "#FFB6D9",
  },
});
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border-radius: 20px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  border: 2px solid var(--border-color);
  position: relative;
  overflow: hidden;
}

.product-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--card-color);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.product-card:hover::before {
  transform: scaleX(1);
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(255, 105, 180, 0.2);
  border-color: var(--card-color);
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.product-icon {
  font-size: 3.5rem;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.1));
}

.product-badge {
  background: var(--bg-main);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary);
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.3s ease;
}

.product-card:hover .product-badge {
  opacity: 1;
  transform: translateX(0);
}

.product-content {
  flex: 1;
}

.product-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.product-url {
  font-size: 0.95rem;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 1rem;
}

.product-description {
  color: var(--text-light);
  line-height: 1.7;
  font-size: 1rem;
}

.product-footer {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.learn-more {
  color: var(--primary);
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.product-card:hover .learn-more {
  transform: translateX(5px);
}
</style>
