/*
  CONFIGURACIÓN DE SINCRONIZACIÓN
  ===============================
  Llena esto UNA vez antes de subir a GitHub. Así, cualquier celular o PC que abra
  la app desde tu enlace de GitHub Pages ya sabe a qué base de datos conectarse.

  1) FIREBASE_CONFIG: pega aquí el bloque firebaseConfig de tu proyecto Firebase.
     (La apiKey de Firebase NO es secreta; la seguridad la dan las reglas.)

  2) SYNC_CLAVE (opcional): si escribes aquí la clave del equipo, los dispositivos se
     conectan SOLOS al abrir la app, sin escribir nada.
     ⚠ Si tu repositorio de GitHub es PÚBLICO, cualquiera que vea este archivo podría
       ver y editar tu lista. En ese caso déjalo vacío ('') y escribe la clave dentro
       de la app (Ajustes) en cada dispositivo, o envía la invitación por WhatsApp.

  Ejemplo:
  window.FIREBASE_CONFIG = {
    apiKey: "AIza....",
    authDomain: "mi-maraton.firebaseapp.com",
    projectId: "mi-maraton",
    appId: "1:1234567890:web:abcdef123456"
  };
  window.SYNC_CLAVE = '';
*/
window.FIREBASE_CONFIG = null;
window.SYNC_CLAVE = '';

/*
  3) CONTRASEÑAS
     - Para agregar, editar o borrar datos SIEMPRE se pide "tvbethel.com123"
       (se recuerda 2 horas desde el último uso en cada dispositivo).
     - Para solo VER los datos no se pide contraseña. Si algún día quieres pedirla,
       cambia esto a true y se pedirá "tvbethel" al abrir la app.
*/
window.PEDIR_CLAVE_PARA_VER = false;
