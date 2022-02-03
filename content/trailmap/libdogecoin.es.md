+++
title = "Project: Libdogecoin"
date = "2021-12-10"
type = "about"
[ author ]
name = "Fundación Dogecoin"
+++

<section class="presentation">
<div class="left">

<div class="title">


 ## <img width="60px" style='display: inline;' src="/marker.png"/>Proyecto: Libdogecoin 

<div class="underline"></div>
</div>

<div class="description">
 
* [Hoja de ruta de Dogecoin: Prólogo](/es/trailmap/prologue/) 
* [Proyecto: Cambio de imagen de Dogecoin.com & Dogepedia](/es/trailmap/website/)
* [**Proyecto: Libdogecoin**](/es/trailmap/libdogecoin/)
* [Proyecto: El Estándar Dogecoin](/es/trailmap/standard/)
* [Proyecto: GigaWallet](/es/trailmap/gigawallet/)
* Proyecto: Dogecoin Keyring (App / SDK)
* Proyecto: RadioDoge (Starlink + Radio nodes for remote locations)
* Propuesta: Community Staking (Proof of Stake)
* Asociación: Point of Sale (L2 app) 

</div>

</div>

<div class="right">
<img class="dogegoin-light" src="/logo-libdogecoin.jpg" alt="Dogecoin logo">
<img class="dogegoin-dark" src="/logo-libdogecoin.jpg" alt="Dogecoin logo">
</div>


</section>

<section class='board'>

## Libdogecoin, una limpia biblioteca C de bloques de construcción de Dogecoin.

Libdogecoin será una implementación completa de los Protocolos de Dogecoin, como una biblioteca C (y una serie de enlaces a lenguajes populares) que permitirá que cualquiera construya un producto compatible con Dogecoin, sin necesidad de preocuparse por los detalles más profundos de las funciones criptográficas.

Es importante tener en cuenta que libdogecoin será una biblioteca pura que no proporciona una instalación de nodo 'ejecutable'. Se pretende que el ensamblado de las piezas para crear un motor se haga en el nivel superior, a través de las bibliotecas de red del idioma anfitrión.

Durante el proceso de extracción de los fundamentos de la Dogecoin Core Wallet (la implementación de referencia) nuestro objetivo es documentar 'cómo funciona Dogecoin' como un conjunto de pruebas y documentos al que llamamos [Dogecoin Standard](/es/trailmap/standard).
Al hacer esto, podremos verificar que la implementación de Libdogecoin
de las partes internas de Dogecoin es precisa respecto a la cartera original y, por lo tanto, proporciona un mecanismo para verificar que futuras implementaciones sean compatibles con la Red Dogecoin.

## ¿Por qué?, ¿De qué le sirve esto a Dogecoin?

Se trata de la utilidad mediante la adopción, y la adopción viene a través de la integración. En este momento, la vieja cartera Dogecoin Core está llena de metáforas de escritorio que tenían sentido hace una década y estaba repleta de aplicaciones que ralentizan el desarrollo
y sería mejor dividir en utilidades.

Creemos que al tomar la funcionalidad central de Dogecoin y hacerla
disponible como una biblioteca C simple con enlaces a diferentes idiomas, multiplicamos la capacidad de la comunidad para innovar.

* ¿Quieres crear una nueva cartera Dogecoin en Python? ¿Rubí? Node.js? ¡Hazlo!
* ¿Quieres crear un nodo Dogecoin reducido para un propósito específico (como [GigaWallet](/es/trailmap/gigawallet))? ¡Claro!
* ¿Quieres crear una utilidad de shell para administrar pares de claves HD Dogecoin en Golang? ¡Vuélvete loco!

Nuestro objetivo es hacer que el ecosistema Dogecoin sea más saludable a medida que:

* Diversificamos la dependencia de Core Wallet como la definición única de Dogecoin Blockchain.
* Aumentamos las opciones para desarrollar implementaciones de carteras y nodos basadas en estándares.
* Aumentamos las opciones de integración para mejorar la adopción de Dogecoin por parte de las plataformas.
* Mejoramos el proceso de unirse a la red Dogecoin para que más personas ejecuten nodos Dogecoin.

<img class='center' src="/libdogecoin-purpose-es.png">

Estos objetivos se cumplen principalmente bibliotecando Dogecoin y se validan mediante un [Estándar Dogecoin](/es/trailmap/standard) que permitirá a la comunidad confiar en diversas implementaciones de Nodos y carteras Dogecoin.

Libdogecoin es el bloque de construcción subyacente en el plan de la Fundación para que esto suceda.

</section>
