PROYECTO FINAL- REACT

PYA- PLATA Y ACERO

*Plata y Acero es una tienda ficticia creada para la venta de joyer�a y bisuter�a.

PRE-REQUISITOS:

*Es necesario tener instalada alguna versi�n de Node
(https://nodejs.org/es/)

INSTALAC�ON:

*Clonar el repositorio.
*Ubicarse en la ra�z del proyecto y correr el siguente comando


#npm install


Una vez hecho esto, instalar


##npm i react-router-dom@5


Y, para terminar


###npm install firebase@8.0.2


Una vez que est� todo instalado, correr


npm start


Y el proyecto estar� disponible en 


http://localhost:3000


COMPONENTES:

En el archivo App.js que se encuentra dentro de la carpeta src encontramos las diferentes rutas que conforman la aplicaci�n.

#NAVEGADOR.JS
*En el navegador encontraremos el t�tulo de la aplicaci�n y el logo de la misma. 

#Navs.JS
*Encontraremos las categor�as de los productos y los mapeamos seg�n estas. 


#ItemContainer.js
*filtra los productos seg�n el par�metro que le hayamos pasado desde las Navs.js.

	#ItemLista
	*Mapea los productos filtrados en el ItemContainer.js.
		
		#Item.js
		*Renderiza los productos preivamente filtrados.







