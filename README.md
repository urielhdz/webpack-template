# WebPack Template

## What

This is a personal template with WebPack and ServiceWorker's configured. WebPack is configured to pre process SASS.

## Why

The purpose of this template is to serve as a starting point for projects that use WebPack, SASS and ServiceWorkers for offline access.

One of the main benefits of this configuration is that production URL's are relative instead of absolute, which is helpful for projects that belong to a subfolder in the production server, for example when being uploaded to Github Pages.  

In the other hand, the development configuration does use absolute URL's, this responds to the flexibility of the server in development, you can basically use any one line http server from this list: https://gist.github.com/willurd/5720255

I personally use npm-static (https://www.npmjs.com/package/node-static), with no caching for development:

```js
static -H '{"Cache-Control": "no-cache, must-revalidate"}'
```

## Contribute

If you want to change o modify the WebPack configuration, feel free to send a pull request for the project, I'll be happy to integrate your changes.


====== SPANISH =====

## De qué se trata esto

Este es un template personal con WebPack y ServiceWorker's pre configurados. WebPack está configurado para pre procesar SASS y convertirlo en CSS.

## Por qué usarlo

El objetivo de este template es que sirve como punto de inicio para projectos que usen WebPack, SASS y ServiceWorker's para acceso sin internet.

Uno de los beneficios de la confituración de este template es que las URL's de los assets son relativas en lugar de absolutas, esto puede ser útil para projectos que pertenecen a una subcarpeta en producción, como es el caso de las páginas que subimos a Github Pages.

Por otro lado, la configuración en desarrollo sí usa URL's absolutas, esto es porque es más fácil usar un servidor para la carpeta de este proyecto, tal como alguno de los descritos en esta página: https://gist.github.com/willurd/5720255

Yo personalmente, utilizo npm-static(https://www.npmjs.com/package/node-static) con el cache de archivos desactivado para desarrollo:

```js
static -H '{"Cache-Control": "no-cache, must-revalidate"}'
```

## Contribuciones

Si quieres modificar la configuración de WebPack o agregar algún otro plugin, siéntete libre de mandar un pull request, con gusto lo integraré con el proyecto para que todos lo utilicemos.
