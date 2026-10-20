/*
  CONFIGURACIÓN DE SINCRONIZACIÓN
  ===============================
  Llena esto UNA vez antes de subir a GitHub. Así, cualquier celular o PC que abra
  la app desde tu enlace de GitHub Pages ya sabe a qué base de datos conectarse.

  1) FIREBASE_CONFIG: pega aquí el bloque firebaseConfig de tu proyecto Firebase.
     (La apiKey de Firebase NO es secreta; la seguridad la dan las reglas.)

  2) Cada persona entra con su cuenta de Gmail (botón "Entrar con Google" en Ajustes).
     Sus datos quedan en su cuenta: nadie más puede leerlos, salvo quien ella invite
     con un código temporal. Por eso es seguro tener este archivo en GitHub público.

  Ejemplo:
  window.FIREBASE_CONFIG = {
    apiKey: "AIza....",
    authDomain: "mi-maraton.firebaseapp.com",
    projectId: "mi-maraton",
    appId: "1:1234567890:web:abcdef123456"
  };
*/
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCH84PxgR0x3w2rkNp30HH5mUfuG2NrgHM",
  authDomain: "maraton-de-ofrenda.firebaseapp.com",
  projectId: "maraton-de-ofrenda",
  storageBucket: "maraton-de-ofrenda.firebasestorage.app",
  messagingSenderId: "435884902168",
  appId: "1:435884902168:web:61e6f2f59934af694a006d"
};


// Nombre de la base de datos Firestore (en tu proyecto se llama "default")
window.FIRESTORE_DB_ID = 'default';


/*
  3) CONTRASEÑAS
     - Para agregar, editar o borrar datos SIEMPRE se pide "tvbethel.com123"
       (se recuerda 2 horas desde el último uso en cada dispositivo).
     - Para solo VER los datos no se pide contraseña. Si algún día quieres pedirla,
       cambia esto a true y se pedirá "tvbethel" al abrir la app.
*/
window.PEDIR_CLAVE_PARA_VER = false;
