<h1>Alkemy Challenge</h1>
<p>Pequeño proyecto hecho con express + react donde un usuario puede registrar sus gastos personales. Estilo panel de control. Desde la misma página se accede al listado de movimientos, edición, borrar, crear.</p>
<h2>Para la instalación</h2>
<h4>Rama Master</h4>
<ul>
<li>Clonar el proyecto</li>
<li>Correr el comando: "npm install" para instalar las dependencias necesarias</li>
<li>Configurar un servidor de bases de datos mysql</li>
<li>Llenar archivo .env con los datos de configuracion de la DB</li>
<li>Descargar archivo alkemy_challenge.sql con el script para la base de datos e importarlo</li>
<li>Una vez instaladas las dependencias, para correr el proyecto usamos el comando: "npm start". Este comando levanta servidor API de express y React. React corre en puerto 3001</li>
<li>ruta raiz: localhost:3001</li>
</ul>

<h4>Rama Pruebas</h4>
<p>En esta rama se prueba las funcionalidades que no se llegaron a implementar por falta de tiempo como Autenticación de usuarios, Categorías de operaciones, uso de JWT para el login, React router y mantener sesión de usuario. 
Una vez implementado se pasa a la rama master.
</p>
