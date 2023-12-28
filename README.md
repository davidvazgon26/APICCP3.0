# APICCP3.0

Se utiliza la dependencia de xlsx en npm ( SheetJS 0 js-xlsx)

[Enlace a la pagina de xlsx o SheetJS](https://www.npmjs.com/package/xlsx)

Aunque el estandar y buenas practicas indica que debemos nombrar a nuestras variables y funciones en ingles,
fue mi decicion hacerlo en espanol.

Tambien incluyo el acceso a los catalogos de CCP 3.0 del SAT

[Enlace Catalogos: ](http://omawww.sat.gob.mx/tramitesyservicios/Paginas/complemento_carta_porte.htm)

Se utiliza express para habilitar nuestro servicio de exposicion de API

npm i express

Se utiliza Swagger como documentador de la API

npm install swagger-ui-express swagger-jsdoc

los catalogos se obtienen de archivo xls extraido directamente del SAT

(**Se omite deliberadamente el uso de acentos**).
