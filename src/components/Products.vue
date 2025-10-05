<template>
  <section id="productos" class="products">
    <div class="container">
      <SectionTitle
        title="Nuestros Productos"
        subtitle="Soluciones innovadoras para impulsar tu negocio"
      />

      <div class="products-section">
        <h3 class="section-subtitle">Suite Empresarial</h3>
        <div class="products-grid">
          <ProductCard
            name="Terbiz"
            url="terbiz.app"
            description="ERP / Núcleo empresarial. Plataforma integral para gestionar todos los procesos de tu empresa."
            icon="📊"
            color="#FFB6D9"
          />

          <ProductCard
            name="Upmet"
            url="upmet.app"
            description="Objetivos y ejecución. Define, trackea y alcanza tus metas con metodologías ágiles."
            icon="🎯"
            color="#E6B8E6"
          />

          <ProductCard
            name="Jurdex"
            url="jurdex.app"
            description="Jurídico y normativo. Sistema especializado para la gestión legal y cumplimiento normativo."
            icon="⚖️"
            color="#DDA0DD"
          />

          <ProductCard
            name="Relnet"
            url="relnet.app"
            description="CRM y relaciones. Gestiona tus relaciones con clientes y maximiza tu red de contactos."
            icon="🤝"
            color="#FFB8DC"
          />

          <ProductCard
            name="Sellit"
            url="sellit.app"
            description="E-commerce y ventas en línea. Plataforma completa para vender tus productos online."
            icon="🛒"
            color="#F3C4E6"
          />
        </div>
      </div>

      <div class="products-section tools-section">
        <h3 class="section-subtitle">SK Tools Suite</h3>
        <p class="tools-description">Herramientas especializadas disponibles en <a href="https://sktools.app" target="_blank" class="tools-link">sktools.app</a></p>
        <div class="tools-grid">
          <div class="tool-card">
            <span class="tool-icon">📄</span>
            <h4>SK Doc</h4>
            <p>Motor documental</p>
          </div>
          <div class="tool-card">
            <span class="tool-icon">🖼️</span>
            <h4>SK Pic</h4>
            <p>Motor de imágenes</p>
          </div>
          <div class="tool-card">
            <span class="tool-icon">🎬</span>
            <h4>SK Vid</h4>
            <p>Motor de video</p>
          </div>
          <div class="tool-card">
            <span class="tool-icon">🎵</span>
            <h4>SK Aud</h4>
            <p>Motor de audio</p>
          </div>
          <div class="tool-card">
            <span class="tool-icon">📱</span>
            <h4>SK QR</h4>
            <p>Motor de códigos QR</p>
          </div>
        </div>
      </div>

      <div class="custom-solutions">
        <Card class="custom-card">
          <template #icon>🛠️</template>
          <template #title>Soluciones a Medida</template>
          <template #content>
            ¿Necesitas algo específico? Desarrollamos software personalizado que
            se adapta perfectamente a las necesidades únicas de tu negocio.
          </template>
          <template #footer>
            <Button variant="outline" @click="scrollToContact">
              Solicitar Consulta
            </Button>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "./ui/SectionTitle.vue";
import ProductCard from "./ui/ProductCard.vue";
import Card from "./ui/Card.vue";
import Button from "./ui/Button.vue";

const scrollToContact = () => {
  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.products {
  padding: 6rem 0;
}

.products-section {
  margin-top: 4rem;
}

.products-section:first-of-type {
  margin-top: 3rem;
}

.section-subtitle {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  text-align: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.tools-section {
  margin-top: 5rem;
  padding-top: 4rem;
  border-top: 2px solid var(--border-color);
}

.tools-description {
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.tools-link {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.tools-link:hover {
  color: var(--secondary);
  text-decoration: underline;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.tool-card {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.tool-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  box-shadow: 0 10px 30px rgba(255, 105, 180, 0.15);
}

.tool-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.75rem;
}

.tool-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.tool-card p {
  font-size: 0.9rem;
  color: var(--text-light);
  margin: 0;
}

.custom-solutions {
  margin-top: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.custom-card {
  background: linear-gradient(
    135deg,
    var(--primary-light) 0%,
    var(--accent) 100%
  );
  color: white;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-subtitle {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>
