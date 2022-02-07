PROYECTO FINAL- REACT

PYA- PLATA Y ACERO

*Plata y Acero es una tienda ficticia creada para la venta de joyería y bisutería.

PRE-REQUISITOS:

*Es necesario tener instalada alguna versión de Node
(https://nodejs.org/es/)

INSTALACÍON:

*Clonar el repositorio.
*Ubicarse en la raíz del proyecto y correr el siguente comando


#npm install


Una vez hecho esto, instalar


##npm i react-router-dom@5


Y, para terminar


###npm install firebase@8.0.2


Una vez que esté todo instalado, correr


npm start


Y el proyecto estará disponible en 


http://localhost:3000


COMPONENTES:

En el archivo App.js que se encuentra dentro de la carpeta src encontramos las diferentes rutas que conforman la aplicación.

#NAVEGADOR.JS
*En el navegador encontraremos el título de la aplicación y el logo de la misma. 

#Navs.JS
*Encontraremos las categorías de los productos y los mapeamos según estas. 


#ItemContainer.js
*filtra los productos según el parámetro que le hayamos pasado desde las Navs.js.

	#ItemLista
	*Mapea los productos filtrados en el ItemContainer.js.
		
		#Item.js
		*Renderiza los productos preivamente filtrados.







