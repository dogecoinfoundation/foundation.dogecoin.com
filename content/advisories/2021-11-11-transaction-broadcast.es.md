
+++
title = "Comunicado: respuesta a transacciones que se reintentan automáticamente"
date = "2021-11-11"
[ author ]
  name = "Fundación Dogecoin"
+++

Nota: una versión anterior de este comunicado usaba "nosotros" para referirse a un grupo externo a la Fundación. Ha sido editado para
clarificarlo.

Binance detuvo hoy la retirada de Dogecoin y declaró que encontró un "problema menor" en Dogecoin. La Fundación desea abordar esto:

Hace varios meses (cabe señalar que, aunque una publicación anterior indicaba un año, la primera mención confirmada es de Abril) Binance notificó a un grupo de responsables del mantenimiento de Dogecoin Core que Binance tuvo casos en los que las transacciones se atascaron, lo que significa que las transacciones no se minaron con éxito. Los responsables de mantenimiento de Dogecoin sugirieron que Binance utilizase RBF (replace by fee) en estas transacciones, lo que reemplazaría las transacciones originales por unas nuevas transacciones pagando una tarifa más alta. En particular, esto se sugirió porque "replace by fee" invalida la transacción anterior (por lo tanto, la reemplaza). Como la transacción tenía RBF deshabilitado, se recomendó que Binance creara una nueva transacción manualmente, que consumiría las mismas entradas para invalidar por la fuerza la transacción anterior.

Algún tiempo después, Binance notificó a los responsables de mantenimiento que tenían problemas de conciliación de cuentas. Los responsables no pudieron reproducir esos problemas con los datos proporcionados por Binance, pero en ese momento sugirieron usar la opción de línea de comando `-zapwallettxes` para mitigar el problema. Esto es señalable ya que se anticipa que esto también habría evitado el problema visto.

Ayer, 10 de noviembre, Binance notificó a los responsables de mantenimiento de Dogecoin Core que las transacciones previamente atascadas se habían retransmitido repentinamente con éxito, después de la actualización 1.14.5; probablemente porque las tarifas mínimas se han reducido en dicha 1.14.5, lo que hace que las transacciones previamente válidas pero no retransmitibles fuesen ya retransmitibles. El único ejemplo proporcionado es una transacción con tarifas que son válidas a partir de v1.14.5, pero que no eran válidas (demasiado bajas) en 1.14.3 y anteriores. A tener en cuenta que Binance se actualizó directamente de v1.14.3 a v1.14.5, en los últimos días.

Basándonos en la información disponible, parece que las transacciones bloqueadas anteriormente se reintentaron automáticamente, como sucedería en cada reinicio de nodo después de la actualización, y se realizaron, ya que ahora la tarifa de retransmisión mínima requerida es más baja. Este es un comportamiento correcto como resultado de la reducción de tarifas.

## Lecciones

* La manera correcta de manejar la cancelación de una transacción es usando las entradas (inputs) de la transacción a cancelar en una transacción diferente, lo que invalida la primera.
   * Idealmente, utilice el reemplazo por tarifa (replace by fee) si está disponible, pero de lo contrario, generar y enviar una transacción gastando los inputs elegidos anteriormente invalidarán la transacción anterior.
* Tenga en cuenta que las transacciones no tienen un período de tiempo de espera definido, sino que normalmente se descartan debido a los límites de memoria.

## Si tienes dudas

La Fundación no ha recibido más informes de este hecho. Para cualquier proveedor al que le preocupen las transacciones no válidas estancadas, recomendamos detener los nodos, eliminar el archivo mempool.dat por si acaso y luego iniciar el nodo con `-zapwallettxes`.

Para usuarios individuales con inquietudes, tenga en cuenta que enviarse a sí mismo todos sus Dogecoins (idealmente una nueva dirección, pero puede usar una ya existente para esto) también consumirá cualquier output de transacciónes anteriores e invalidará cualquier transacción "atascada".



