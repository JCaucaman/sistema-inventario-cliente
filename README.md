# SistemaInventarioCliente

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Notas

### Estructura de archivos

```
└── 📁sistema-inventario-cliente (Nuestro Proyecto)
    └── 📁.angular (Carpeta de Caché de Angular)
    └── .editorconfig (Archivo de estilo de programacion)
    └── .hintrc (Archivo de configuracion)
    └── 📁.vscode (Carpeta configuracion de VSCode) 
        └── extensions.json
        └── launch.json
        └── settings.json
        └── tasks.json
    └── angular.json (Archivos configuracion de Angular) 
    └── package-lock.json (Archivo de dependencias)
    └── package.json (Archivo de dependencias)
    └── README.md
    └── 📁src (Carpeta de scripts)
        └── 📁app (Componente Principal)
            └── app.component.css
            └── app.component.html
            └── app.component.spec.ts
            └── app.component.ts
            └── app.module.ts
            └── 📁components (Componente hijos)
                └── 📁Caja
                    └── 📁cajas
                        └── cajas.component.css
                        └── cajas.component.html
                        └── cajas.component.spec.ts
                        └── cajas.component.ts
                └── 📁Cliente (Componentes de Clientes)
                    └── 📁clientes
                        └── clientes.component.css
                        └── clientes.component.html
                        └── clientes.component.spec.ts
                        └── clientes.component.ts
                    └── 📁clientes-content
                        └── clientes-content.component.css
                        └── clientes-content.component.html
                        └── clientes-content.component.spec.ts
                        └── clientes-content.component.ts
                    └── 📁clientes-menu
                        └── clientes-menu.component.css
                        └── clientes-menu.component.html
                        └── clientes-menu.component.spec.ts
                        └── clientes-menu.component.ts
                    └── 📁clientes-modal
                        └── clientes-modal.component.css
                        └── clientes-modal.component.html
                        └── clientes-modal.component.spec.ts
                        └── clientes-modal.component.ts
                    └── 📁pedidos-materiales-modal
                        └── pedidos-materiales-modal.component.css
                        └── pedidos-materiales-modal.component.html
                        └── pedidos-materiales-modal.component.spec.ts
                        └── pedidos-materiales-modal.component.ts
                    └── 📁pedidos-modal
                        └── pedidos-modal.component.css
                        └── pedidos-modal.component.html
                        └── pedidos-modal.component.spec.ts
                        └── pedidos-modal.component.ts
                    └── 📁prueba-calce-modal
                        └── prueba-calce-modal.component.css
                        └── prueba-calce-modal.component.html
                        └── prueba-calce-modal.component.spec.ts
                        └── prueba-calce-modal.component.ts
                └── 📁Compras (Componentes de Lista de Compras)
                    └── 📁lista-de-compras
                        └── lista-de-compras.component.css
                        └── lista-de-compras.component.html
                        └── lista-de-compras.component.spec.ts
                        └── lista-de-compras.component.ts
                └── 📁Inventario-All (Componentes de Inventario)
                    └── 📁etiquetas
                        └── etiquetas.component.css
                        └── etiquetas.component.html
                        └── etiquetas.component.spec.ts
                        └── etiquetas.component.ts
                    └── 📁inventario
                        └── inventario.component.css
                        └── inventario.component.html
                        └── inventario.component.spec.ts
                        └── inventario.component.ts
                    └── 📁inventario-etiqueta-modal
                        └── inventario-etiqueta-modal.component.css
                        └── inventario-etiqueta-modal.component.html
                        └── inventario-etiqueta-modal.component.spec.ts
                        └── inventario-etiqueta-modal.component.ts
                    └── 📁inventario-material-modal
                        └── inventario-material-modal.component.css
                        └── inventario-material-modal.component.html
                        └── inventario-material-modal.component.spec.ts
                        └── inventario-material-modal.component.ts
                    └── 📁inventario-menu
                        └── inventario-menu.component.css
                        └── inventario-menu.component.html
                        └── inventario-menu.component.spec.ts
                        └── inventario-menu.component.ts
                    └── 📁materiales
                        └── materiales.component.css
                        └── materiales.component.html
                        └── materiales.component.spec.ts
                        └── materiales.component.ts
                    └── 📁modal-agregar-etiqueta
                        └── modal-agregar-etiqueta.component.css
                        └── modal-agregar-etiqueta.component.html
                        └── modal-agregar-etiqueta.component.spec.ts
                        └── modal-agregar-etiqueta.component.ts
                └── 📁Otros (Componentes Otros)
                    └── 📁condiciones-de-usos
                        └── condiciones-de-usos.component.css
                        └── condiciones-de-usos.component.html
                        └── condiciones-de-usos.component.spec.ts
                        └── condiciones-de-usos.component.ts
                    └── 📁header
                        └── header.component.css
                        └── header.component.html
                        └── header.component.spec.ts
                        └── header.component.ts
                    └── 📁inicio
                        └── inicio.component.css
                        └── inicio.component.html
                        └── inicio.component.spec.ts
                        └── inicio.component.ts
                    └── 📁login
                        └── login.component.css
                        └── login.component.html
                        └── login.component.spec.ts
                        └── login.component.ts
                    └── 📁menu
                        └── menu.component.css
                        └── menu.component.html
                        └── menu.component.spec.ts
                        └── menu.component.ts
                    └── 📁paguina-no-encontrada
                        └── paguina-no-encontrada.component.css
                        └── paguina-no-encontrada.component.html
                        └── paguina-no-encontrada.component.spec.ts
                        └── paguina-no-encontrada.component.ts
                └── 📁Productos (Componentes de Productos Admin)
                    └── 📁productos
                        └── productos.component.css
                        └── productos.component.html
                        └── productos.component.spec.ts
                        └── productos.component.ts
                    └── 📁ventas-admin
                        └── ventas-admin.component.css
                        └── ventas-admin.component.html
                        └── ventas-admin.component.spec.ts
                        └── ventas-admin.component.ts
                    └── 📁ventas-menu
                        └── ventas-menu.component.css
                        └── ventas-menu.component.html
                        └── ventas-menu.component.spec.ts
                        └── ventas-menu.component.ts
                    └── 📁ventas-productos-modal
                        └── ventas-productos-modal.component.css
                        └── ventas-productos-modal.component.html
                        └── ventas-productos-modal.component.spec.ts
                        └── ventas-productos-modal.component.ts
                └── 📁usuario (Componentes de Ventas Usuario)
                    └── 📁ventas-carro
                        └── ventas-carro.component.css
                        └── ventas-carro.component.html
                        └── ventas-carro.component.spec.ts
                        └── ventas-carro.component.ts
                    └── 📁ventas-detalle
                        └── ventas-detalle.component.css
                        └── ventas-detalle.component.html
                        └── ventas-detalle.component.spec.ts
                        └── ventas-detalle.component.ts
                    └── 📁ventas-header
                        └── ventas-header.component.css
                        └── ventas-header.component.html
                        └── ventas-header.component.spec.ts
                        └── ventas-header.component.ts
                    └── 📁ventas-home
                        └── ventas-home.component.css
                        └── ventas-home.component.html
                        └── ventas-home.component.spec.ts
                        └── ventas-home.component.ts
                    └── 📁ventas-inicio
                        └── ventas-inicio.component.css
                        └── ventas-inicio.component.html
                        └── ventas-inicio.component.spec.ts
                        └── ventas-inicio.component.ts
                    └── 📁ventas-login
                        └── ventas-login.component.css
                        └── ventas-login.component.html
                        └── ventas-login.component.spec.ts
                        └── ventas-login.component.ts
            └── 📁guard (Carpeta de los Guards)
                └── autentificacion.guard.spec.ts
                └── autentificacion.guard.ts
            └── 📁services (Carpeta de los Servicios)
                └── 📁cajas (Servicios de Cajas)
                └── 📁clientes (Servicios de Clientes)
                    └── clientes-compartir.service.spec.ts
                    └── clientes-compartir.service.ts
                    └── clientes.service.spec.ts
                    └── clientes.service.ts
                    └── pedidos-compartir.service.spec.ts
                    └── pedidos-compartir.service.ts
                    └── pedidos.service.spec.ts
                    └── pedidos.service.ts
                └── 📁compras (Servicios de Ventas Admin)
                └── 📁inventario (Servicios de Inventario)
                    └── compartir-inventario-modificar.service.spec.ts
                    └── compartir-inventario-modificar.service.ts
                    └── compartir.service.spec.ts
                    └── compartir.service.ts
                    └── etiqueta-compartir.service.spec.ts
                    └── etiqueta-compartir.service.ts
                    └── etiqueta-modificar.service.spec.ts
                    └── etiqueta-modificar.service.ts
                    └── etiqueta.service.spec.ts
                    └── etiqueta.service.ts
                    └── material.service.spec.ts
                    └── material.service.ts
                    └── modal-agregar-etiqueta.service.spec.ts
                    └── modal-agregar-etiqueta.service.ts
                └── 📁otros (Otros Servicios)
                    └── header-menu.service.spec.ts
                    └── header-menu.service.ts
                └── 📁seguridad (Servicios de seguridad)
                    └── autentificacion.service.spec.ts
                    └── autentificacion.service.ts
                    └── interceptor-token.service.spec.ts
                    └── interceptor-token.service.ts
                └── 📁ventas-administrador (Servicios de Productos)
                    └── producto-admin.service.spec.ts
                    └── producto-admin.service.ts
                    └── producto-compartir.service.spec.ts
                    └── producto-compartir.service.ts
                    └── producto-modificar.service.spec.ts
                    └── producto-modificar.service.ts
                └── 📁ventas-usuario (Servicios de Ventas Usuario)
                    └── producto-usuario-compartir.service.spec.ts
                    └── producto-usuario-compartir.service.ts
                    └── producto-usuario.service.spec.ts
                    └── producto-usuario.service.ts
        └── 📁assets (Carpetas de imagenes)
            └── 📁img
                └── cart-line-icon.png
                └── favicon.png
                └── fondo-unicornio.png
                └── logo-slow.webp
                └── name-low.webp
                └── no_foto.webp
        └── favicon.ico (icono)
        └── index.html (html principal)
        └── main.ts (Archivo Typescript principal)
        └── styles.css (Archivo de estilos principales)
    └── tsconfig.app.json (Archivo Angular configuracion)
    └── tsconfig.json (Archivo Angular configuracion)
    └── tsconfig.spec.json (Archivo Angular configuracion)
```