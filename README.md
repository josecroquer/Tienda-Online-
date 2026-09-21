# Evaluación Final - Tienda Online 

**Institución:** IPLACEX
**Carrera:** Analista Programador
**Estudiante:** Jose Augusto Croquer
**Despliegue Web:** https://tienda-online-croquer.netlify.app
**Repositorio:** https://github.com/josecroquer/Tienda-Online-

## Descripción del Proyecto
Aplicación web y móvil desarrollada como evaluación final del curso. Simula el frontend de una tienda online con gestión de catálogo, carrito de compras y registro de usuarios, integrando servicios en la nube para persistencia y almacenamiento.

## Tecnologías Utilizadas
* **Frontend:** React (Vite), Bootstrap, `simple-react-validator`
* **Backend as a Service (Firebase):**
  * **Auth:** Autenticación por correo y contraseña.
  * **Firestore:** Base de datos NoSQL para registrar los datos del usuario.
  * **Storage:** Almacenamiento de archivos (avatar/comprobantes).
* **Móvil:** Apache Cordova (Exportación a APK de Android).
* **Despliegue Web:** Netlify.

## Funcionalidades Principales
1. **Catálogo y Carrito (Componentes de Clase):** Renderizado dinámico de productos y gestión del estado del carrito mediante `this.setState`.
2. **Formulario de Registro (Componentes Funcionales y Hooks):** Validación de datos de entrada (correo, contraseñas, campos vacíos).
3. **Integración Cloud:** Al enviar el formulario válido, el sistema crea el usuario, sube la imagen de perfil a Storage, obtiene la URL de descarga y guarda el documento final en Firestore.

## Instalación y Uso Local
Para ejecutar este proyecto en un entorno de desarrollo local:

1. Clonar el repositorio.
2. Instalar las dependencias ejecutando:
   ```bash
   npm install
