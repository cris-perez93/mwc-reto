
# NUWE-MWC-HACKATHON

Cristian Pérez(Frontend). 

> **Descripción del Proyecto** 

En esta ocasión se nos pide desarrollar una plataforma que permita rellenar tus campos personales y profesionales y generar una vista que te ayude a posicionarte entre empresas y otras profesionales del sector.

**Objetivos** 

✅ Task 1 → Formulario que permita introducir los siguientes datos: correo electrónico, nombre completo, breve descripción, país y ciudad de residencia.

✅ Task 2 → Generar un avatar de la persona de forma aleatoria (puede ser utilizando una API, colores, etc)

✅ Task 3 → Formulario que permita introducir datos profesionales: años de experiencia, sector (Front, Back, Mobile o Data), skills: (se pueden añadir de forma libre)

✅ Task 4 → Las skills salen en formato tag en alguna parte del perfil

✅ Task 5 → Una vista que permita ver todo el perfil de user con los datos anteriores



## Tecnologias
👌  Nexjs<br>
🧾  PropTypes<br>
📕  Styled-Components<br>
📎   ContextAPI


## API/

Consumo de API () 📃 
(https://countriesnow.space/api/v0.1/countries/flag/images)<br>
(https://randomuser.me/api/).



## Estructura de carpetas
He seguido una estructura atomizada a fin de conseguir una arquitectura
con componentes pequeños, utilizando un patron de diseño separando la logica del componente visual.
Utilizando props pasamos informacion a traves de estos  y los  documentamos con PropTypes.<br>
Dumb Components and Smart Components.<br> 
(https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43)


## Installation

```bash
npm install # Instalación de todas las dependencias del proyecto
npm run dev #  Ejecuta el proyecto en modo desarrollo
npm run start # Ejecuta el proyecto en modo producción
# or
yarn dev
...
```


## Deploy en Vercel
https://mwc-reto.vercel.app/
