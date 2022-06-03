## Unidades de medida

Antes de ponernos a ver propiedades de texto, vamos a ver unidades de medida, seguro ya estas hasta el cuello de solo conocer la propiedad color, pero bueno, primero, antes de conocer propiedades que nos van a venir re bien y van a ser divertidas, tenemos que saber como medir, ¿Solo vamos a usar pixeles? obvio que no, por eso vamos a ver esto, presta atencion.

Para el transcurso de este "capitulo" vamos a usar el siguiente codigo:

    <body>
        <h1>Aprendiendo CSS</h1>
    </body>

### Unidades fijas

Dentro de lo que vienen siendo las unidades, tenemos dos ramas, las unidades fijas y las relativas. En este caso, las unidades fijas son aquellas que no dependen de nada y no varian, son por ejemplo: los centimetros, puntos, pulgadas, pixeles, milimetros, etcetera. Ahora vamos a probar, podemos con estas unidades cambiar el tamaño de la fuente del titulo que mostre mas arriba, ¿Como? asi:

    h1{
      font-size: 50px;
    }

En este caso, cambie el tamaño de fuente a 50 pixeles, pero podria haber usado "cm" por ejemplo.

Ahora bien, ¿Cúal es el problema de las medidas fijas? El problema es que si bien pueden servir para determinadas cosas, supongamos que tenemos cierta aplicación con medidas fijas, ¿se adaptará a dispositivos moviles? NO! Este es el problema de las medidas fijas, cosa que no pasa con medidas relativas.

### Unidades Relativas

Las principales medidas relativas son em, rem, vw, vh, %. Suponete que yo al titulo le doy un font size de 5em, ¿que carajo es un em?¿a cuanto equivale? te comento, por defecto, un em son 16 pixeles, por lo tanto, lo que haces cuando le das 5em es darle 16px * 5 = 80px en este caso. ¿Como hago yo para cambiar el valor por defecto del em? Bueno, el valor del em se hereda, por tanto, usando el codigo anterior:

    body{
      font-size:20px;
    }
    
De esta manera, un em valdrá ahora por defecto 20 pixeles.

REM tiene la diferencia de que tiene como referencial al root y tambien se usa bastante, parecido a em.

Ahora vamos con unas de las que mas me gustan, en este caso el viewport width (vw) y el viewport height (vh). Estas medidas wtf son buenisimas, 100vw son igual a todo el ancho de la pantalla y 100vh son igual a todo el alto de la pantalla, asi de simple. Por ejemplo: Les menti, vamos a cambiar el codigo, imaginen esto:

    <body>
        <div> holis </div>
    </body>

Es simplemente una caja dentro del body. Pero ahora vamos a darle un color de fondo (background-color) y un ancho (width) para que veamos el poder del viewport:

    div {
      background-color:#000;
      width:50vw;
    }

![vw](https://user-images.githubusercontent.com/84806140/170531241-bee46791-0ec3-4c63-bbf3-f07cd103d463.png "vw")

Como pueden ver tiene un ancho de la mitad de la pantalla (contiene margin y padding, eso luego nos vamos a encargar de definirlo). De la misma manera puede trabajarse con el vh.

Y finalmente, cuando hablamos de porcentaje, hacemos alucion al contenedor de nuestro elemento, es decir, por ejemplo, si te digo que le des un width (ancho) de 50% a un elemento, este va a adoptar un ancho del 50% de su contenedor. Asi de simple.