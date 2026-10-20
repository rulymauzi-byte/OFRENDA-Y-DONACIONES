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

## 3) Cuentas de Google, sincronización e invitaciones

Cada persona entra con su **Gmail** (Ajustes → **Entrar con Google**). Su lista queda guardada en su cuenta y se sincroniza en todos los dispositivos donde entre con el mismo Gmail. **Nadie puede leer la lista de otro**: lo garantizan las reglas de Firestore, no solo la app.

### Preparar Firebase (una sola vez)
1. **Authentication → Método de acceso → Agregar proveedor nuevo → Google** → Habilitar → elige tu correo de asistencia → Guardar.
2. **Authentication → Configuración → Dominios autorizados → Agregar dominio** → `rulymauzi-byte.github.io`.
3. **Firestore Database → Reglas** → pega todo `firestore.rules` → **Publicar**.

### Invitar a alguien (acceso temporal)
1. Ajustes → **Invitar a alguien a tu lista** → elige cuánto dura (2 horas, 1 día, 7 días o 30 días) → **Crear código**.
2. Envía la invitación por WhatsApp. La otra persona abre el enlace y entra con **su** Gmail; queda unida a tu lista hasta que venza.
3. También puede escribir el código en Ajustes → **Unirme a la lista de otra persona**.
4. En Ajustes ves quién tiene acceso y puedes **Quitar** a alguien o **Borrar código** cuando quieras.

Al vencer o al quitarle el acceso, su app vuelve sola a su propia lista.

## Actualizar la app

Cuando cambies cualquier archivo, aumenta la versión en `sw.js` (por ejemplo `colab-v4.0.1`) y súbelo a GitHub. Los dispositivos instalados mostrarán **"Hay una nueva versión → Actualizar"**.
