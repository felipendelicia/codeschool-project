## Propiedades de cajas

### background-color

Ya habiamos mirado un poco lo que era background color. Background color es el color de fondo de determinada caja. Vamos a ver un ejemplo de como poner una caja color negro, por ejemplo:

    h1{
        background-color:#000;
    }

De esta manera, mis h1 tendran un fondo color negro.

### padding

Bueno, llego la hora de introducir el padding, una propiedad importantisima de las cajas, muy importante. ¿Qué es el padding? el padding es la distancia que hay entre los bordes de la caja y su contenido, por ejemplo:

![padding](https://user-images.githubusercontent.com/84806140/170847600-36924a8f-16df-4de8-9e9b-e8331d63c79e.png "padding")

Entonces... Tenemos cuatro paddings, el padding-top (padding de arriba), padding-bottom (padding de abajo), padding-right (padding derecho) y padding-left (padding izquierdo).

¿Como le damos padding a todos los lados sin volvernos locos? Padding es un shorthand propertie, por lo tanto, es una propiedad acortada, que podemos acortar, que podemos poner de varias maneras.

La forma mas intuitiva es la siguiente:

    h1{
        display: inline-block;
        background-color:#f00;
        padding-top: 50px;
        padding-right: 100px;
        padding-bottom: 150px;
        padding-left: 200px;
    }

Que daria algo como esto:

![padding](https://user-images.githubusercontent.com/84806140/170847743-d8fddc9f-7381-47fe-9b60-97bd64f049e1.png "padding")

Tambien podemos poner el padding de esta manera:

    h1{
        padding: 20px;
    }

De esta manera le estamos dando 20px de padding a todos los lados. 

| padding | all |
|--|--|
|property|Afecta arriba, abajo, izquierda y derecha|

Ahora, ¿Que pasa si quiero que el padding sea igual arriba y abajo e igual a la derecha e izquiera, es decir, igual en el eje x e igual en el eje y? Podemos poner el padding asi:

    h1{
        padding: 20px 30px;
    }

De esta manera, arriba y abajo le dimos 20px y a los costados 30px.

| padding | y | x |
|--|--|--|
|property|Afecta arriba y abajo|Afecta a la izquierda y la derecha|

Ahora mira, si le queres dar a todos lados de manera diferente como en el primer ejemplo, pero usando el shorthand, tenes que hacerlo con este orden, como si fuesen las agujas de un reloj:

    h1{
        padding: 10px 20px 30px 40px;
    }

De esta manera: 10px arriba; 20px derecha; 30px abajo y 40px izquierda:

| padding | top | right | bottom | left |
|--|--|--|--|--|
|property|Afecta arriba|Afecta a la derecha| Afecta abajo | Afecta a la izquierda |

### margin

Otra propiedad recontra importante. El margin es la distancia entre nuestra caja y otras cajas. Es como un margen justamente, desde la caja afectada, ilustremos:

![margin](https://user-images.githubusercontent.com/84806140/170848041-f01c09ee-9a35-4799-9363-76f7ce9838b5.png "margin")

El resto, el margin-top, margin-right, margin-bottom y margin-left son la misma historia que en el padding, al igual que padding, margin es un shorthand.

### border-radius

Border radius es una propiedad que sirve para redondear los bordes y para aplicarlo es tan simple como:

    h1{
        display: inline-block;
        background-color:#f00;
        padding: 30px;
        border-radius: 10px;
    }

Se puede manejar con porcentajes, pixeles, em, etcetera.

### border

Border es una propiedad acortada y sirve para manejar los bordes justamente de la caja. Tenemos border-width, border-color, border-style, sirven para, el ancho del borde, el color y el estilo de borde respectivamente. Se aplica de la siguiente manera:

    h1{
        display: inline-block;
        background-color:#f00;
        padding: 30px;
        border-widht: 3px;
        border-color: #000;
        border-style: solid;
    }

Ahora, ¿Como aplicamos el shorthand? bueno, asi:

    h1{
        display: inline-block;
        background-color:#f00;
        padding: 30px;
        border: 3px solid #000;
    }

| border | width | [style](https://www.w3schools.com/css/css_border.asp) | color
|--|--|--|--|
|property|Ancho del borde|Estilo del borde|Color del borde|

### box model

Todas estas propiedades: el padding, el margin, el border y bueno, el content son los cuales componen el box model, cada uno puede ser modificado con una propiedad: el padding, margin, border y line-height, respectivamente. Ademas, es una jerarquia en la que se van poniendo las cosas, se arranca del content, seguido de el padding, border y margin:

![box-model](https://user-images.githubusercontent.com/84806140/170848438-f2e32be9-35f6-4b72-82ee-1c61c5ce1945.png "box model")

### box shadow

box shadow me re gusta, nos permite darle sombra a nuestra cajita. Y se aplica de la siguiente manera mira:

    h1{
        display: inline-block;
        background-color:#f00;
        padding: 30px;
        box-shadow: 2px 4px 15px 0 #000
    }

Y vos me preguntaras... ¿Que carajo hiciste? Bueno, te explico:

| box-shadow | x | y | desenfoque | border | color |
|--|--|--|--|--|--|
|property|Desplazamiento de la sombra en el eje x|Desplazamiento de la sombra en el eje y|Desenfoque del sombreado|Cuanto borde va a tener|Color de la sombra|
