<template>
  <section id="contacto" class="contact">
    <div class="container">
      <SectionTitle
        title="Contáctanos"
        subtitle="¿Tienes un proyecto en mente? Hablemos"
      />

      <div class="contact-content">
        <div class="contact-info">
          <h3>Comencemos a trabajar juntos</h3>
          <p>
            Estamos aquí para escuchar tus ideas y ayudarte a transformarlas en
            realidad. Ya sea que necesites un producto existente o una solución
            personalizada, nuestro equipo está listo para ayudarte.
          </p>

          <div class="info-items">
            <div class="info-item">
              <div class="info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:contact@softkiss.dev">contact@softkiss.dev</a>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">💬</div>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/softkissdev" target="_blank"
                  >github.com/softkissdev</a
                >
              </div>
            </div>
          </div>
        </div>

        <Card class="contact-form-card">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                placeholder="Tu nombre"
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                placeholder="tu@email.com"
              />
            </div>

            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                placeholder="Cuéntanos sobre tu proyecto..."
              ></textarea>
            </div>

            <Button type="submit" variant="primary" full-width>
              Enviar Mensaje
            </Button>
          </form>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import SectionTitle from "./ui/SectionTitle.vue";
import Card from "./ui/Card.vue";
import Button from "./ui/Button.vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  // Aquí puedes implementar la lógica de envío del formulario
  alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
  form.name = "";
  form.email = "";
  form.message = "";
};
</script>

<style scoped>
.contact {
  padding: 6rem 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--bg-secondary) 100%
  );
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
  align-items: start;
}

.contact-info h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.contact-info > p {
  color: var(--text-light);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.info-icon {
  font-size: 2rem;
  background: var(--bg-card);
  padding: 0.75rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.1);
}

.info-item h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: var(--text-dark);
}

.info-item a {
  color: var(--primary);
  font-weight: 500;
}

.contact-form-card {
  background: var(--bg-card);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  padding: 0.875rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 10px;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--bg-main);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: white;
  box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
