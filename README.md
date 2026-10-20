# Ofrenda y Donaciones

App web instalable (PWA) para registrar colaboraciones del maratón. Funciona en **celular y PC**, **sin internet**, y puede **sincronizar** los datos entre varios dispositivos en segundos.

## Qué hace

- **Inicio** estilo app: cabecera con tu logo, accesos rápidos, resumen de hoy/mes/año, gráfica de recaudación por mes o por año y el top 5.
- **Contraseña para ingresar datos** (`tvbethel.com123`): ver la lista, resúmenes y reportes es libre; agregar, editar, marcar pagado o borrar pide la contraseña. Se recuerda 2 horas desde el último uso en cada dispositivo. (Opcional: en `config.js` puedes activar `PEDIR_CLAVE_PARA_VER` para pedir `tvbethel` también para ver.)

- **Registrar** rápido: autocompletado de nombres, botones de cantidad (Q10, Q20, Q50…), fecha automática o fija (◀ ▶) para cargar varios del mismo día, y marca de *pagado (rojo)*.
- **Lista** compacta con fechas abreviadas (`Lun 19 Oct 26`), agrupada por día, con filtros por nombre, periodo, día de la semana y estado.
- **Resumen**: mayor y menor colaborador, aporte más alto, promedio, totales por persona, día, mes y año.
- **Reporte en imagen (PNG)** del día, mes, año o un intervalo de fechas: totales, gráfica, top 10 y detalle. Se descarga o se comparte directo a WhatsApp.
- **Copias de seguridad**: guardar o cargar `.json` y exportar a Excel (`.csv`).
- **Sincronización** en tiempo real por internet con Firebase (gratis), desde cualquier lugar, usando una clave del equipo. Si no hay señal, guarda en el dispositivo y envía los cambios al volver la conexión.
- Abre sin problema los datos de la versión anterior (`COLAB_RECORDS_V3`).

## Archivos

| Archivo | Para qué |
|---|---|
| `index.html` | La app completa |
| `manifest.webmanifest` | Nombre e íconos al instalar |
| `sw.js` | Funcionamiento sin internet. **Sube `VERSION`** cada vez que cambies archivos |
| `config.js` | (Opcional) tu `firebaseConfig` para todos los dispositivos |
| `firestore.rules` | Reglas de seguridad para pegar en Firebase |
| `icons/` | Íconos de la app y tu logo (`logo.png`, también sale en los reportes) |
| `.nojekyll` | Para que GitHub Pages sirva todos los archivos tal cual |

## 1) Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `colaboraciones`).
2. Sube **todo el contenido** de esta carpeta (incluida la carpeta `icons` y el archivo `.nojekyll`).
3. En el repositorio entra a **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`** y guarda.
4. En 1 o 2 minutos queda en `https://TU-USUARIO.github.io/colaboraciones/`.

> La app debe abrirse desde esa dirección (https) para poder instalarse y trabajar sin internet. Si solo abres `index.html` como archivo en la PC, funciona pero no se instala ni sincroniza bien.

## 2) Instalar

- **Android (Chrome):** botón **📲 Instalar** de la app, o menú ⋮ → *Instalar aplicación*.
- **iPhone (Safari):** Compartir ⬆ → *Agregar a pantalla de inicio*.
- **PC (Chrome/Edge):** ícono de instalar en la barra de direcciones.

## 3) Sincronización (ya configurada para el proyecto `maraton-de-ofrenda`)

`config.js` ya trae la configuración de Firebase, la clave del equipo y el usuario editor. Solo falta dejar listo Firebase **una vez**:

1. **Authentication → Método de acceso:** activa **Anónimo** y también **Correo electrónico/contraseña** (solo el primer interruptor).
2. **Authentication → Usuarios → Agregar usuario:**
   - Correo: `editor@ofrenda-tvbethel.com`
   - Contraseña: `tvbethel.com123` (la misma contraseña de edición de la app)
3. **Firestore Database → Reglas:** pega el contenido de `firestore.rules` y toca **Publicar**. (Es *Firestore Database*, no *Realtime Database*.)

Listo. Cada dispositivo que abra la app desde GitHub Pages se conecta solo y ve la lista. Cuando alguien escribe la contraseña de edición, ese dispositivo entra como editor y sus registros se suben a la nube y llegan a todos en segundos.

### Seguridad con repositorio público
- Cualquiera que abra la app puede **ver** la lista (así lo pediste: ver no lleva contraseña).
- Solo quien sepa la **contraseña de edición** puede agregar, cambiar o borrar. Esto lo protege Firebase con el usuario editor, no solo la app, así que aunque alguien copie el código de GitHub no puede modificar los datos.
- La contraseña no está escrita en ningún archivo del repositorio.
- Si cambias la contraseña de edición, cámbiala también en Firebase → Authentication → Usuarios.

## Actualizar la app

Cuando cambies cualquier archivo, aumenta la versión en `sw.js` (por ejemplo `colab-v4.0.1`) y súbelo a GitHub. Los dispositivos instalados mostrarán **"Hay una nueva versión → Actualizar"**.
