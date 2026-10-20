/*
  CONFIGURACIÓN DE SINCRONIZACIÓN
  ===============================
  Llena esto UNA vez antes de subir a GitHub. Así, cualquier celular o PC que abra
  la app desde tu enlace de GitHub Pages ya sabe a qué base de datos conectarse.

  1) FIREBASE_CONFIG: pega aquí el bloque firebaseConfig de tu proyecto Firebase.
     (La apiKey de Firebase NO es secreta; la seguridad la dan las reglas.)

  2) SYNC_CLAVE: la clave del equipo. Con ella los dispositivos se conectan SOLOS.
     Es seguro tenerla en un repositorio PÚBLICO: cualquiera podría VER la lista,
     pero solo quien sepa la contraseña de edición puede agregar, cambiar o borrar
     (lo protege Firebase con el usuario EDITOR_EMAIL de abajo).

  3) EDITOR_EMAIL: el usuario que creaste en Firebase → Authentication → Usuarios,
     con la contraseña de edición (tvbethel.com123). La contraseña NO va aquí.

  Ejemplo:
  window.FIREBASE_CONFIG = {
    apiKey: "AIza....",
    authDomain: "mi-maraton.firebaseapp.com",
    projectId: "mi-maraton",
    appId: "1:1234567890:web:abcdef123456"
  };
  window.SYNC_CLAVE = '';
*/
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCH84PxgR0x3w2rkNp30HH5mUfuG2NrgHM",
  authDomain: "maraton-de-ofrenda.firebaseapp.com",
  projectId: "maraton-de-ofrenda",
  storageBucket: "maraton-de-ofrenda.firebasestorage.app",
  messagingSenderId: "435884902168",
  appId: "1:435884902168:web:61e6f2f59934af694a006d"
};

// Clave del equipo: con esto todos los dispositivos se conectan solos.
window.SYNC_CLAVE = 'roca-colabora-4303';

// Nombre de la base de datos Firestore (en tu proyecto se llama "default")
window.FIRESTORE_DB_ID = 'default';

// Usuario editor (debe existir en Firebase → Authentication → Usuarios)
window.EDITOR_EMAIL = 'editor@ofrenda-tvbethel.com';

/*
  4) CONTRASEÑAS
     - Para agregar, editar o borrar datos SIEMPRE se pide "tvbethel.com123"
       (se recuerda 2 horas desde el último uso en cada dispositivo).
     - Para solo VER los datos no se pide contraseña. Si algún día quieres pedirla,
       cambia esto a true y se pedirá "tvbethel" al abrir la app.
*/
window.PEDIR_CLAVE_PARA_VER = false;
