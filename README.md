# Proyecto_blog

## Proyecto 1: My Blog

Este proyecto es un blog que muestra publicaciones obtenidas a través de una API personalizada. Permite a los usuarios ver las publicaciones, así como también autenticarse como administradores para realizar operaciones CRUD en las publicaciones. <br>
Este proyecto está dividido en Backend (`Backend`) y Frontend (`tamagotchi_blog`).

### Objetivos:
- Aplicar conocimientos prácticos: Que los alumnos apliquen de manera práctica los conocimientos adquiridos sobre el stack de desarrollo de JavaScript, especialmente en lo que respecta a React y Vite, para la creación de aplicaciones web modernas.
- Desarrollo Frontend y Backend básico: Que los alumnos sean capaces de implementar tanto el lado cliente como el lado servidor (básico) de una aplicación web, enfocándose en la creación de un blog con funcionalidades de administración.

## Tecnologías Utilizadas

| Área        | Tecnología                                            |
|-------------|-------------------------------------------------------|
| Backend     | - Base de datos: MariaDB<br>- Lenguaje de Programación: JavaScript (Node.js)<br>- Framework/API: Express.js<br>- Herramienta de gestión de procesos: PM2 |
| Frontend    | - Framework: React.js (Vite)<br>- Lenguajes de Programación: JavaScript (ES6+)<br>- Estilos: CSS, SCSS |
| Herramientas| - Gestión de Paquetes: npm<br>- Linter: ESLint      |
| Middleware  | - cors: Versión 2.8.5 - Un middleware de Express.js para habilitar CORS (Cross-Origin Resource Sharing) con varias opciones. |

## Motivación
Se eligieron estas tecnologías por su robustez, escalabilidad y facilidad de uso. MariaDB proporciona una base de datos relacional estable y bien soportada. Node.js y Express.js son ideales para construir una API eficiente y rápida. React.js ofrece una experiencia de usuario dinámica y fluida, mientras que Vite proporciona un entorno de desarrollo rápido. El uso de ESLint ayuda a mantener un código limpio y consistente.

## Instrucciones de Ejecución Local

1. **Clonar el Repositorio:** <br>
   git clone https://github.com/nicollegordillo/Proyecto_blog.git<br>
   cd Proyecto_blog
2. **Instalar Dependencias:** <br>
   cd Backend<br>
   npm install<br>
   cd ../tamagotchi_blog<br>
   npm install<br>
3. **Configurar Base de Datos:**
- Asegúrate de tener una instancia de MariaDB en ejecución.
- Configura las tablas y el usuario detallado en `Backend/schema.sql`.
- Configura las credenciales en `Backend/src/conn.js`.

4. **Ejecutar Backend:**
- cd Backend
- npm start
5. **Ejecutar Frontend:**
- cd tamagotchi_blog
- npm run dev
6. **Acceder a la Aplicación:** <br>
Abre tu navegador y navega a ` http://localhost:5173/`.

## Enlaces

- [Blog en GitHub Pages](https://nicollegordillo.github.io/Proyecto_blog/)
- [Blog en el Server](https://tiburoncin.lat/22246/dist/index.html)
