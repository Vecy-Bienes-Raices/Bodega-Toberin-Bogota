/**
 * 🌍 CONFIGURACIÓN UNIVERSAL VECY - BODEGA EN EL TOBERÍN, BOGOTÁ
 */

const propertyConfig = {
  // 1. SEO y Metadatos
  seo: {
    title: "Venta Bodega Comercial e Industrial en El Toberín Bogotá - 640m²",
    description: "Venta Bodega El Toberín Bogotá - $3.250 Millones - 640m² Construidos - Lote 420m² - 6 Baños - Trifásica 20 KW - Garaje doble altura para tractomula - Estrato Comercial.",
    keywords: "Venta Bodega El Toberín, Bodega en Venta Bogotá, Bodega Industrial Usaquén, Inmuebles Comerciales Bogotá, Vecy Bienes Raíces, Bodega Trifásica Bogotá",
    propertyId: "ID-BOG-TOB01",
    ogUrl: "https://bodega-toberin-bogota.netlify.app/",
    ogImage: "https://raw.githubusercontent.com/Vecy-Bienes-Raices/Bodega-Toberin-Bogota/main/assets/57.jpg",
    author: "Vecy Bienes Raíces", 
    copyright: "2026"
  },
  
  // 2. Encabezado Principal
  infoPrincipal: {
    headerBadge: "🏬 ¡Excelente Oportunidad Comercial e Industrial! 🏭",
    tituloHtml: "Bodega en Venta - El Toberín, Bogotá",
    precioVenta: "$3.250.000.000",
    valorAdmin: "N/A",
    labelExtra: "💵 Administración"
  },

  // 3. Rejilla de Detalles Principales (Especificaciones Clave)
  detalles: [
    { label: "Área Const.", value: "640 m²", icon: "📐" },
    { label: "Área Lote", value: "420 m²", icon: "📏" },
    { label: "Año", value: "1988", icon: "🏗️" },
    { label: "Estrato", value: "Comercial", icon: "✨" },
    { label: "Baños", value: "6", icon: "🚽" },
    { label: "Garajes", value: "Doble Altura (Tractomula)", icon: "🚛" },
    { label: "Energía", value: "Trifásica 20 KW", icon: "🔌" },
    { label: "Barrio", value: "El Toberín", icon: "📍" },
    { label: "Negocio", value: "Venta", icon: "💼" }
  ],

  // 4. Características Internas
  caracteristicasInternas: [
    { name: "Alarma de seguridad", emoji: "🔔" },
    { name: "Baños por género", emoji: "🚻" },
    { name: "Duchas empleados", emoji: "🚿" },
    { name: "Cuarto de basuras", emoji: "🗑️" },
    { name: "Depósitos / Almacenamiento", emoji: "📦" },
    { name: "Garaje doble altura para tractomula", emoji: "🚛" },
    { name: "Lockers", emoji: "🔒" },
    { name: "Oficinas administrativas", emoji: "🏢" },
    { name: "Servicios públicos completos", emoji: "⚡" },
    { name: "Trampas de agua", emoji: "💧" },
    { name: "Energía trifásica 20 KW", emoji: "🔌" },
    { name: "Vestier por género", emoji: "🚻" }
  ],
  destacadoInterno: "Bodega estratégica de 640 m² construidos sobre lote de 420 m², equipada con energía trifásica de 20 KW, acceso y garaje de doble altura para tractomulas, oficinas administrativas, depósitos, duchas y vestieres por género, e instalaciones de seguridad.",

  // 5. Características Externas (Entorno y Amenidades)
  caracteristicasExternas: [
    { name: "Acceso pavimentado", emoji: "🛣️" },
    { name: "Centros Comerciales cercanos", emoji: "🏬" },
    { name: "Zona urbana consolidada", emoji: "🏙️" },
    { name: "Circuito Cerrado de TV (CCTV)", emoji: "🎥" },
    { name: "Colegios / Universidades", emoji: "🎓" },
    { name: "Gimnasios cerca", emoji: "🏋️" },
    { name: "Oficina de negocios", emoji: "🏢" },
    { name: "Parques cercanos", emoji: "🌳" },
    { name: "Transporte público cercano (Carrera 19)", emoji: "🚎" },
    { name: "Zona altamente comercial e industrial", emoji: "🏡" }
  ],
  destacadoUbicacion: "Ubicada en el consolidado sector industrial y comercial de El Toberín (Usaquén, Bogotá), sobre la Carrera 19 con Calle 168. Excelente conectividad con vías principales y fácil acceso a transporte público.",

  // 6. Mapa de Ubicación
  mapa: {
    urlEmbed: "https://www.google.com/maps?q=Carrera+19+con+Calle+168,+Toberin,+Bogota,+Colombia&output=embed",
    titulo: "Ubicación estratégica en El Toberín (Cr 19 con 168), Bogotá"
  },

  // 7. Descripción Final y Presentación
  descripcionFinal: {
    titulo: "🏭 Excelente Inversión en Bodega Comercial e Industrial",
    texto: `
    <div class="roi-item">
        <p>🏭 <strong>Gran oportunidad en El Toberín:</strong> Esta amplia bodega ubicada en el corazón industrial de Toberín, Usaquén (Bogotá), es ideal para operaciones comerciales, logísticas e industriales.</p>
        <p>Cuenta con <strong>640 m² de área construida en un lote de 420 m²</strong>, 6 baños, oficinas administrativas, área de vestieres y duchas para empleados, depósitos, cuarto de basuras y garaje de doble altura apto para maniobra de tractomula. Además, cuenta con <strong>energía trifásica de 20 KW</strong> y sistema de alarma.</p>
        <p>Su ubicación estratégica sobre la Carrera 19 con Calle 168 garantiza una excelente accesibilidad para transporte pesado y conectividad directa con vías principales, transporte público, centros comerciales y zonas de servicios.</p>
        <div style="margin-top: 30px; text-align: center;">
            <a href="ficha-tecnica.html" class="btn-analisis">
               📋 VER MÁS DETALLES
            </a>
        </div>
    </div>`
  },

  // 8. Multimedia (Fotos y Video)
  multimedia: {
    videoUrl: "assets/recorrido.mp4", 
    videoThumbnail: "", 
    imagesCount: 59, 
    imagePrefix: "assets/",
    imageExtension: ".jpg",
    imagesList: [
      "assets/1.jpg", "assets/2.jpg", "assets/5.jpg", "assets/6.jpg", "assets/7.jpg", "assets/8.jpg", "assets/9.jpg", "assets/10.jpg",
      "assets/11.jpg", "assets/12.jpg", "assets/13.jpg", "assets/14.jpg", "assets/15.jpg", "assets/16.jpg", "assets/17.jpg", "assets/18.jpg", "assets/19.jpg", "assets/20.jpg",
      "assets/21.jpg", "assets/22.jpg", "assets/24.jpg", "assets/25.jpg", "assets/26.jpg", "assets/27.jpg", "assets/28.jpg", "assets/30.jpg",
      "assets/31.jpg", "assets/32.jpg", "assets/33.jpg", "assets/34.jpg", "assets/35.jpg", "assets/36.jpg", "assets/37.jpg", "assets/38.jpg", "assets/40.jpg",
      "assets/41.jpg", "assets/42.jpg", "assets/43.jpg", "assets/44.jpg", "assets/45.jpg", "assets/46.jpg", "assets/47.jpg", "assets/48.jpg", "assets/50.jpg",
      "assets/51.jpg", "assets/52.jpg", "assets/55.jpg", "assets/56.jpg", "assets/57.jpg", "assets/58.jpg", "assets/59.jpg",
      "assets/61.jpg", "assets/62.jpg", "assets/63.jpg", "assets/64.jpg", "assets/65.jpg", "assets/67.jpg", "assets/68.jpg", "assets/69.jpg"
    ]
  },

  // 9. Texto para Compartir en WhatsApp
  share: {
    whatsappText: `🏭 *VENTA BODEGA COMERCIAL E INDUSTRIAL - EL TOBERÍN, BOGOTÁ*

📍 Ubicación: El Toberín, Usaquén (Cr 19 con 168)
💲 Precio de Venta: $3.250.000.000
📐 Área Construida: 640 m²
📏 Área Lote: 420 m²
🚽 Baños: 6
🚛 Garaje: Doble Altura para Tractomula
🔌 Energía: Trifásica 20 KW
🏢 Estrato: Comercial
🏗️ Año: 1988

✅ *Características Destacadas:*
⚡ Trifásica 20 KW, Garaje doble altura para tractomula.
🏢 Oficinas, Depósitos, Alarma, Duchas y Vestier por género.
🚎 Excelente ubicación en zona comercial e industrial sobre la Cr 19.

*🔗 Ver Ficha Completa:*
https://bodega-toberin-bogota.netlify.app/`
  }
};

