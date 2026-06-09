# 🐶 Adopta — Mascotas en Adopción
App de **adopción de mascotas** en **Ionic + Angular standalone**. 
Los estudiantes completaron el andamiaje implementando el servicio, componente de tarjeta, y las tres páginas.
## ✨ Funcionalidades implementadas
### Servicio `perros.service.ts`
- `todas()` — retorna todos los perros
- `obtener(id)` — busca un perro por ID
- `agregar(perro)` — agrega un nuevo perro
### Componente `tarjeta-perro`
- Muestra foto, nombre, raza, edad
- Badge de estado: "Adoptado" (verde) / "Disponible" (rojo)
- Chips: sexo (♂/♀), tamaño, estado de vacunación
### Galería (`/`)
- Grid responsive de mascotas
- **Filtro por estado**: Todos / Disponibles / Adoptados
- Contador con badges en cada segmento
- FAB para agregar nueva mascota
### Detalle (`/detalle/:id`)
- Información completa del perro seleccionado
- Imagen grande, todos los datos, descripción
- Botón volver
### Nuevo (`/nuevo`)
- Formulario reactivo para agregar mascotas
- Validación de campos requeridos
- Navegación automática a galería al guardar
## 🛠️ Tech Stack
- Ionic 8 + Angular 20 (standalone)
- TypeScript 5.9
- Capacitor 8
- SCSS
## ▶️ Ejecutar
```bash
npm install
npm start
Proyecto Ionic Angular standalone · IIP323W — Tecnologías y Aplicaciones Web y Móviles · UDD.