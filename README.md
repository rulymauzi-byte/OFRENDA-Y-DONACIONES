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

## 3) Activar la sincronización (una sola vez, unos 5 minutos)

Los datos viajan **por internet** (Firebase de Google, gratis). El otro dispositivo puede estar en otra casa, ciudad o país: **no hace falta estar cerca ni escanear nada**.

1. Entra a <https://console.firebase.google.com> → **Agregar proyecto** (puedes desactivar Analytics).
2. **Authentication → Comenzar → Método de acceso → Anónimo → Habilitar.**
3. **Firestore Database → Crear base de datos** (ubicación cercana, p. ej. `us-central`). En la pestaña **Reglas** pega el contenido de `firestore.rules` y **Publica**.
4. **Configuración del proyecto ⚙ → Tus apps → Web `</>`** → registra la app → copia el bloque `firebaseConfig`.
5. Pégalo en **`config.js`** (en `window.FIREBASE_CONFIG = {...}`) **antes de subir a GitHub**. Así todos los dispositivos ya lo traen.
6. En la app: **Ajustes → Paso 2 → escribe una clave del equipo** (o toca *Generar*) → **Conectar**.
7. En cualquier otro celular o PC, esté donde esté:
   - abre tu enlace de GitHub Pages → **Ajustes** → escribe **la misma clave** → **Conectar**, o
   - toca **📤 Enviar invitación** en el primer dispositivo y mándala por WhatsApp: al abrir el enlace se conecta solo.

En segundos aparece toda la lista, y desde ahí cada registro nuevo, cambio o borrado llega a todos. El indicador de arriba dice **● Sincronizado** cuando todo está al día. Si un dispositivo ya tenía datos, se **unen** con los del equipo; no se pierde nada.

> **iPhone:** la app instalada tiene memoria separada de Safari. Instálala primero y escribe la clave dentro de la app instalada.

### Conexión automática sin escribir nada (opcional)
Si en `config.js` pones `window.SYNC_CLAVE = 'tu-clave';`, todos los dispositivos se conectan solos al abrir la app.
⚠ Úsalo solo si el repositorio es **privado**; en uno público cualquiera podría leer la clave y entrar a tu lista.

### Seguridad
- La `apiKey` de Firebase **no es secreta**; lo que protege los datos son las reglas y la **clave del equipo**.
- Comparte la clave solo con tu equipo. Para una lista nueva separada, usa otra clave.

### Sobre las contraseñas
Protegen la app contra cambios por error o de personas sin permiso, pero como todo el código está en GitHub, alguien con conocimientos técnicos podría saltarlas. Para cambiarlas, pídele a Claude que genere las nuevas huellas (`EDIT_HASH` / `VIEW_HASH` en `index.html`).

## Actualizar la app

Cuando cambies cualquier archivo, aumenta la versión en `sw.js` (por ejemplo `colab-v4.0.1`) y súbelo a GitHub. Los dispositivos instalados mostrarán **"Hay una nueva versión → Actualizar"**.
