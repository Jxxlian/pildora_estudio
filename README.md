# Pildora Etudio
## Proyecto de e-commerce

Para poder inicializar este proyecto deberas clonarlo, ejecutar 'npm start' en la consola y se visualizará en el http://localhost:3000

### Explicación de mi lógica
- En el archivo API.js se encuentran los métodos que utilizo para hacer solicitudes a la BD. Casi toda la lógica ligada a Firestore usada en este proyecto intenté unificarla en este archivo.
- Dentro de la carpeta 'Hook' se encuentran los diferentes customesHooks que creé según encontré conveniente para simplificar el código o delegar tareas.


### Rutas

- El index de la aplicación muestra el componente <ItemListContainer> donde se visualiza la totalidad de los productos en stock
- La ruta '/category/:category' nos muestra también el componente <ItemListContainer> pero con los productos filtrados según la opción que hayas clickeado en la NavBar
- La ruta '/contacto' aún no está desarrollada pero la intención es ahí crear un formulario para que lxs usuarios puedan comunicarse con la marca
- La ruta '/detail/:productID' muestra el componente <ItemDetailContainer> se accede al seleccionar uno de los productos y muestra mas detalles del mismo

![Funcionamiento de la web](./public/images/screenrecording.gif  "Funcionamiento de la web")


