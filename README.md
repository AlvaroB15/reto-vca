# Manual para el uso del endpoint en Word

https://docs.google.com/document/d/1XGBuCfXN2q7A6bUiWXISZsNeNaNdmv0ZoLUohpjwJx8/edit?usp=sharing

# Manual para el uso del endpoint en README

Entre al directorio raíz del proyecto, abra la terminal y ejecute, para poder instalar las dependencias

```npm install```

Endpoint:
http://localhost:4500/option/choose

Request Method: 	GET

Body de prueba
```json
{
   "data":[
      {
         "name":"Opcion 1",
         "percentage":30
      },
      {
         "name":"Opcion 1",
         "percentage":15
      },
      {
         "name":"Opcion 3",
         "percentage":10
      },
      {
         "name":"Opcion 4",
         "percentage":5
      },
      {
         "name":"Opcion 5",
         "percentage":20
      }
   ]
}
```

## Importando un json para Postman

También adjunto un folder de postman, solo para importar el folder, entrar al único request y darle Send.

Link  

https://drive.google.com/file/d/1swo6r42dCbYHR5dM6Q6I9H8kripQEs0Q/view?usp=sharing

## Si se desea construir la imagen (docker)

Entre al directorio raíz del proyecto, abra la terminal y ejecute

```docker build -t reto-vca . ```

Luego para ejecutar en el momento sin forma iterativa y exponer un puerto que tengo libre, en este caso es el 4500

```docker run -p 4500:4500 reto-vca```

O hacerlo de forma iterativa y asignando un nombre en especifico.

```docker run -d -p 4500:4500 --name reto-vca-container reto-vca```


# api-practice
Ejercicio práctico

- Teniendo en cuenta un conjunto de opciones ingresadas, donde cada opción cuenta con un nombre y un porcentaje, escoger y devolver una opción al azar considerando el porcentaje acompañante de cada opción como la probabilidad para que esta sea escogida.

- En el caso de que se ingresen multiples opciones con un mismo nombre, los porcentajes de las opciones repetidas se deben acumular y tratar como una sola.

- Se debe permitir como maximo el ingreso de X opciones diferentes. Este limite debe ser definido en alguna parte del proyecto.

- Los porcentajes de cada opción no deben ser menores a 0%.

- La suma de todos los porcentajes no debe ser mayor a 100%. En el caso de que esta suma sea menor a 100%, se debe añadir una opción "Indeterminado" de manera interna que tome el porcentaje restante para llegar a 100%.

- Este servicio debe estar protegido por algun tipo de autenticación. (Bearer Token, Basic, ApiKey, etc)

- En el caso de que se incumplan algunas de las reglas colocadas anteriormente, el servicio debe devolver un código de error 500 detallando la regla que no fue cumplida.

Se debe preparar ademas pequeño documento donde se indiquen las instrucciones para probar el servicio construido.
