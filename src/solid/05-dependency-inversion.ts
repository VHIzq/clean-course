/*
? Princio de Inversion de Dependencias.

* Los modulo de alto nivel no deben depender de modulo de bajo nivel.
* Ambos tipos de modulo deben depender de abstracciones.
* Las abstracciones no deben depender de detalles.
* Los detalles deben depender de abstracciones.

* Los componentess mas importantes se enfocan en resolver el problema subyacente al negocio (capa de dominio).
* los de menor importancia estan proximos a la infraestrura (UI, persistencia, comunicacion con API externas).

! Permite la arquitectura hexagonal

*Al depender de clases abstractas o interfaces en la capa de dominio y no de concreciones es que aumenta la tolerancia al cambio.
* Los cambios en componentes abstractos implica un cambio en su implentacion.


? inyeccion de dependencias

* Depedencia significa que un modulo o componente requiere de otro para poder realizar su trabajo.
! Cuando la aplicacion este formada por muchos modulos, debemos usar la inyeccion de dependencias.
* Nos permite centralizaer las dependencias para evitar que esten dispersas en todo el proyecto.
* Evita las dependencias ocultas.
*/



