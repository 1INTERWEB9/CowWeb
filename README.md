# CowWeb
El objetivo de este proyecto es el desarrollo y gestión de una plataforma web que permita la recolección y registro de información relacionada con la producción agrícola y pecuaria. La información recolectada se almacena en una base de datos local.

Para llevar a cabo este proyecto, se utilizan tecnologías de vanguardia, incluyendo el framework NodeJS, así como CSS y HTML para el desarrollo de la interfaz de usuario. Además, la base de datos se gestiona mediante MongoDB, lo que garantiza una gestión eficiente de grandes cantidades de datos.

El objetivo principal de esta plataforma es permitir que los usuarios recolecten y almacenen información valiosa sobre la producción agrícola y pecuaria, lo que les permitirá tomar decisiones más informadas y mejorar sus operaciones.


![Icono de la aplicación](https://cdn.discordapp.com/attachments/908798431064109098/1089322084922044486/Logo.png)

> El siguiente logo no me pertenece solo lo utilice con medios educativos, dejo  [link de la respectiva creadora](https://linktr.ee/judds_bun).

![Menu Principal](https://cdn.discordapp.com/attachments/908798431064109098/1089338741484683295/image.png)
Para utilizar la plataforma, solo es necesario contar con Docker instalado en el equipo y ejecutar el archivo "IniciarAPP.bat". Posteriormente, se puede acceder a la plataforma ingresando en el navegador a la dirección [http://localhost:3000/](http://localhost:3000/).

Para poder ejecutar Docker correctamente, se requiere un ordenador con un mínimo de 4 GB de RAM. En caso de que Docker consuma demasiada RAM, se puede seguir el siguiente [tutorial](https://www.youtube.com/watch?v=qDdnSllCfO8) para solucionar el error.

## Dependencias
En esta sección, se listan las diferentes bibliotecas del framework utilizadas en la plataforma. Cada una de ellas, permite ejecutar tareas específicas para el correcto funcionamiento de la aplicación.

- [bcryptjs](https://www.npmjs.com/package/bcrypt): Esta biblioteca se utiliza para la encriptación de números aleatorios, lo que mejora la seguridad de los datos.
    
- [connect-flash](https://www.npmjs.com/package/connect-flash): Se utiliza para incluir mensajes emergentes que notifican al usuario sobre diferentes acciones, desde alertas de errores hasta confirmaciones de que la acción se ha realizado correctamente.
    
- [express](https://www.npmjs.com/package/express): Proporciona una serie de funciones y herramientas para simplificar la creación de aplicaciones web, incluyendo el manejo de rutas, la gestión de middleware, la configuración de servidores y la conexión con bases de datos, entre otros.
    
- [express-handlebars](https://www.npmjs.com/package/express-handlebars): Ofrece la posibilidad de crear plantillas reutilizables que se pueden compartir en varias páginas y rutas de la aplicación.
    
- [express-session](https://www.npmjs.com/package/express-session): Se utiliza para almacenar y administrar la información de sesión del usuario en una forma segura. Utiliza cookies para identificar la sesión del usuario y mantener los datos de sesión entre solicitudes HTTP.
    
- [method-override](https://www.npmjs.com/package/method-override): Se utiliza para enviar solicitudes HTTP PUT o DELETE al servidor.
    
- [mongoose](https://www.npmjs.com/package/mongoose): Es una biblioteca que proporciona una interfaz de modelado de objetos (ODM, por sus siglas en inglés) para MongoDB. Esto ayuda a interactuar con la base de datos MongoDB desde una aplicación Node.js de una manera más fácil y estructurada.
    
- [passport](https://www.npmjs.com/package/passport): Es un módulo de autenticación de usuario para Node.js. Simplifica la autenticación en aplicaciones web mediante el uso de diversas estrategias de autenticación, incluyendo la autenticación local por medio de un usuario y contraseña.

A continuacion tendra las versiones específicas de cada módulo, al momento de crear este proyecto.
|  Modulo |  Version|
|--|--|
| bcryptjs | 2.4.3 |
|connect-flash|0.1.1|
| express | 4.18.2 |
|express-handlebars|6.0.6|
|express-session| 1.17.3 |
|method-override|3.0.0|
|mongoose| 6.7.0 |
|passport|0.6.0|
|passport-local|1.0.0|
