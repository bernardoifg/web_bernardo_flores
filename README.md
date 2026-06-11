# Bernardo Flores – Sitio Web Personal

Portfolio personal de Bernardo Flores. Head of Art & UX/UI Designer con más de 12 años de experiencia.

## 📁 Estructura del Proyecto

```
web Bernardo flores/
├── index.html          → Página "Sobre Mí" (con hero image)
├── trabajo.html        → Portfolio de proyectos (Fullcarga, YA Payments, Samsung)
├── experiencia.html    → Trayectoria profesional y skills
├── estudios.html       → Formación académica
├── contacto.html       → Información de contacto y formulario
└── assets/
    ├── css/
    │   └── style.css   → Estilos del sitio
    └── images/         → Todas las imágenes descargadas de Weebly
```

---

## 🚀 Cómo Crear el Repositorio en GitHub

### Opción A – Desde la terminal

```bash
# 1. Ve a la carpeta del proyecto
cd "/Users/bherflow/.gemini/antigravity/scratch/web Bernardo flores"

# 2. Inicializa Git
git init

# 3. Agrega todos los archivos
git add .

# 4. Primer commit
git commit -m "feat: Initial commit - Bernardo Flores personal website"

# 5. Ve a https://github.com/new y crea un repositorio nuevo:
#    - Nombre sugerido: bernardo-flores-web
#    - Descripción: Sitio web personal de Bernardo Flores – Head of Art & UX/UI Designer
#    - Visibilidad: Public (para conectar con Vercel gratis)
#    - NO inicialices con README (ya tienes uno)

# 6. Conecta y sube el repositorio (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/bernardo-flores-web.git
git branch -M main
git push -u origin main
```

### Opción B – Desde la interfaz web de GitHub

1. Ve a [https://github.com/new](https://github.com/new)
2. Nombre del repo: `bernardo-flores-web`
3. Descripción: *Sitio web personal de Bernardo Flores*
4. Visibilidad: **Public**
5. Click **Create repository**
6. Luego sigue los comandos de la terminal de arriba

---

## ⚡ Cómo Crear el Proyecto en Vercel

### Paso 1 – Conectar GitHub con Vercel
1. Ve a [https://vercel.com](https://vercel.com)
2. Haz login con tu cuenta de GitHub
3. Click en **"Add New..."** → **"Project"**

### Paso 2 – Importar el repositorio
1. Busca y selecciona `bernardo-flores-web`
2. Click **"Import"**

### Paso 3 – Configuración del proyecto
Vercel detectará automáticamente que es un sitio estático. Configura:

| Campo | Valor |
|-------|-------|
| **Project Name** | `bernardo-flores` (o el nombre que quieras) |
| **Framework Preset** | Other (Static HTML) |
| **Root Directory** | `.` (dejar en blanco) |
| **Build Command** | *(dejar vacío)* |
| **Output Directory** | `.` (punto) |

### Paso 4 – Deploy
Click **"Deploy"** y en ~30 segundos tu sitio estará en línea en:

```
https://bernardo-flores.vercel.app
```

*(o el nombre que hayas elegido)*

---

## 🔄 Actualizar el sitio

Cada vez que hagas cambios, solo ejecuta:

```bash
git add .
git commit -m "update: descripción del cambio"
git push
```

¡Vercel detectará el push y redesplegará automáticamente! ✨

---

## 📧 Formulario de Contacto

El formulario de contacto actualmente muestra un alert al enviarse. Para recibir correos reales, integra **Formspree**:

1. Ve a [https://formspree.io](https://formspree.io) y crea una cuenta gratuita
2. Crea un formulario y obtén tu endpoint (ej: `https://formspree.io/f/xyzabc`)
3. En `contacto.html`, cambia la etiqueta `<form>`:

```html
<!-- Reemplaza el form id="contact-form" con: -->
<form action="https://formspree.io/f/TU_ENDPOINT" method="POST">
```

4. Elimina el script del event listener al final de la página

---

## 🌐 Links del sitio original

- Español: https://bernardoifges.weebly.com/
- Inglés: http://bernardoifg.weebly.com

---

*Sitio web creado a partir del contenido de Weebly y reconstruido como HTML/CSS estático para despliegue en Vercel.*
