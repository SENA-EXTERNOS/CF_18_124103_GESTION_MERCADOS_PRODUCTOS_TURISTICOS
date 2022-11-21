<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Técnicas comerciales para eventos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .cajonAmarillo.bgr-tarjeta-tema1.p-4
           p A continuación, se detallan las técnicas comerciales para eventos y los aspectos a considerar en la comercialización de servicios turísticos.  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema1/img2.svg", alt="alt")
      .col-lg-10

        p La función comercial tiene como objetivo establecer y desarrollar las relaciones de intercambio con el mercado, incluyendo una serie de actividades que tienen como fin hacer llegar al consumidor final los bienes y servicios que produce una empresa, en este caso, el evento en el que se trabaja.


    SlyderF(columnas="col-lg-6 col-xl-4").text-movil
      .tarjeta.p-4.banner1-tema-1.mt-5
        .row.justify-content-center.mb-5
          .col-5(data-aos="zoom-in-left")
            img(src='@/assets/curso/temas/tema1/img3.svg' alt='AvatarTop')
        h3.text-center Comercialización de servicios
        p.text-center.text-small Está estrechamente ligada con el #[i marketing], dado que el mercado en el que se desarrolla la industria de eventos presenta altos niveles de competencia y surgen constantemente nuevos perfiles de clientes.

      .tarjeta.p-4.banner1-tema-1.mt-5
        .row.justify-content-center.mb-5
          .col-5(data-aos="zoom-in-left")
            img(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop')
        h3.text-center.pb-3 Beneficios
        p.text-center.text-small.pb-4 En este sentido, la función comercial definirá qué, cómo, cuándo y a quién dirigirse para ofrecer los productos o servicios, y en consecuencia, obtener beneficios.

      .tarjeta.p-4.banner1-tema-1.mt-5
        .row.justify-content-center.mb-3
          .col-5(data-aos="zoom-in-left")
            img(src='@/assets/curso/temas/tema1/img5.svg' alt='AvatarTop')
        h3.text-center Acciones comerciales
        p.text-center.text-small Las acciones comerciales online tienen como objetivo convertir al navegante en cliente. En los puntos de venta físicos, los consumidores cuentan con el producto tangible que pueden ver y tocar. En la industria turística la venta es de un intangible, es decir, servicios que se materializan solo cuando el cliente los utiliza. 

      .tarjeta.p-4.banner1-tema-1.mt-5
        .row.justify-content-center.mb-5
          .col-5(data-aos="zoom-in-left")
            img(src='@/assets/curso/temas/tema1/img6.svg' alt='AvatarTop')
        h3.text-center.pb-2 Comercio electrónico
        p.text-center.text-small.pb-3 El éxito del comercio electrónico radica en convertir al cliente en el centro de atención, ofreciéndole una experiencia diferenciada en la que elija cuando quiera, de manera eficiente, rápida, cómoda y segura.

      .tarjeta.p-4.banner1-tema-1.mt-5
        .row.justify-content-center.mb-5
          .col-5(data-aos="zoom-in-left")
            img(src='@/assets/curso/temas/tema1/img7.svg' alt='AvatarTop')
        h3.text-center.pb-4 Nuevo entorno digital
        p.text-center.text-small.pb-5 Se extiende en la sociedad generando nuevos estilos de vida y hábitos de consumo. 
      
    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Comercialización #[i Online]]

      p La mezcla de mercado tradicional con las cuatro (4) P’s (producto, precio, promoción y plaza) sigue siendo la columna vertebral del mercadeo. A continuación, se describen aspectos para tener en cuenta en procesos de comercialización #[i online]. 

      p Con la aparición de Internet y las nuevas tecnologías, se cambia hacia una perspectiva digital. Internet es un nuevo canal de información, de comercialización y de venta, de selección de productos de pago, y por tanto:


    TabsB.color-acento-contenido.mt-3
      .py-4.py-md-5(titulo="Mercado global" :icono="require('@/assets/curso/temas/tema1/img8.svg')")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-2
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img12.svg', alt='Texto que describa la imagen')
              
          .col-md-1.mb-4.mb-md-0

          .col-md-9.mb-4.mb-md-0
            h4 Mercado global
            p Afecta al producto o servicio, ya que el hecho de estar presentes en un mercado global, con mayor competencia, supone la necesidad de adaptación del producto o servicio a las exigencias del mercado.

      .py-4.py-md-5(titulo="Sistema logístico" :icono="require('@/assets/curso/temas/tema1/img9.svg')")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-2.mb-4.mb-md-0
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img13.svg', alt='Texto que describa la imagen')
          
          .col-md-1.mb-4.mb-md-0

          .col-md-9
            h4 Sistema logístico
            p Cambia por completo el sistema logístico de las empresas, con las consecuencias que ello puede conllevar (su impacto en costos, en las redes de venta físicas y fuerzas comerciales, etc.)

      .py-4.py-md-5(titulo="Precios" :icono="require('@/assets/curso/temas/tema1/img10.svg')")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-2.mb-4.mb-md-0
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img14.svg', alt='Texto que describa la imagen')

          .col-md-1.mb-4.mb-md-0

          .col-md-9
            h4 Sistema logístico
            p Influye en los precios (mayor sensibilidad al precio, presión de la oferta y la demanda, aumento de la competencia).

      .py-4.py-md-5(titulo="SPautas de comunicación" :icono="require('@/assets/curso/temas/tema1/img11.svg')")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-2.mb-4.mb-md-0
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img15.svg', alt='Texto que describa la imagen')
              
          .col-md-1.mb-4.mb-md-0

          .col-md-9
            h4 Sistema logístico
            p Modifica las pautas de la comunicación y la forma de relacionarnos.

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Producto y Precio]

      p El nuevo entorno tecnológico afecta a la gestión comercial y trae consigo consecuencias que inciden sobre las dos primeras variables del mercado por Internet.

    .row
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-contenido.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Marca y calidad")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img16.svg", alt="alt")

              .col-lg-10
                h3 Marca y calidad

                p Para la primera variable en el ámbito digital, se debe concretar la definición de un producto de eventos reconocible por su marca y calidad, teniendo en cuenta la posibilidad de detectar necesidades que no se han suplido adecuadamente, y que ahora se encuentra en condiciones de satisfacer, denotando que es un mercado global, con muchos usuarios y con una gran variedad de comportamientos y gustos, y a los que se sirve con una oferta personalizada.
         
          
          .tarjeta.clr-paleYellow.p-4(titulo="Interconectividad e interactividad")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img17.svg", alt="alt")

              .col-lg-10
                h3 Interconectividad e interactividad

                p En ambos casos, esto se consigue por dos características distintivas del entorno digital, como son: la interconectividad (todo está interrelacionado) y la interactividad (es posible mantener una comunicación real en doble vía). 

          .tarjeta.clr-paleYellow.p-4(titulo="Interconectividad e interactividad")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img18.svg", alt="alt")

              .col-lg-10
                h3 Posicionamiento

                p Con Internet existe la posibilidad de crear productos y servicios acordes a lo que el consumidor quiere, y modificarlos cuando este lo pida, siempre y cuando sus propuestas sean viables económica y técnicamente. 


          .tarjeta.clr-paleYellow.p-4(titulo="Mercadeo digital")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img19.svg", alt="alt")

              .col-lg-10
                h3 Mercadeo digital

                p Una vez logrado esto, se procede a crear la estrategia de mercadeo digital que logre comunicar adecuadamente la oferta, que se pretende sea única. A este concepto en mercadeo se conoce como #[i Unique Selling Proposition], y se relaciona directamente al producto o servicio y a la comunicación, logrando que una idea única y motivadora sobre el producto/servicio, quede registrada en la mente del consumidor. 

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Planteamientos en la comercialización digital]

      p La industria turística mayormente vende experiencias intangibles, es decir, servicios que el cliente va a materializar una vez haga uso de ellos. Internet proporciona oportunidades para comercializar nuevos productos, más y mejor adaptados a las necesidades y deseos de los clientes, como también facilita la introducción de servicios o beneficios complementarios, que aumentan el valor del producto. 

      p La utilización de Internet en la realización de los eventos suele cumplir los siguientes propósitos:

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema1/img20.svg", alt="alt")         

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Nuevos productos en Internet]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img21.svg')})`}"
          )

          .bloque-texto-g__texto.p-4
            p Constantemente, al interior de las empresas que trabajan en el sector eventos surgen oportunidades de cambio en su portafolio de servicios y productos; estos cambios se plasman en la creación de productos y servicios digitales para ser distribuidos a través de la #[i web]. 

            p En el medio turístico, un ejemplo bien conocido son los mapas creados por Google, que en sí son la versión digital de un producto genérico, pero que a su vez sirven como base para el desarrollo de guías de eventos interactivos, como #[i Lonely Planet], que se pueden consumir mediante una #[i app]. 


    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Marcas #[i online]]

      p La marca es la identificación de los productos de una empresa que los diferencia de los de la competencia. Con la consolidación de Internet, las empresas han decidido dar a conocer sus marcas y sitios invirtiendo en publicidad y relaciones públicas, lo que sugiere que dar notoriedad y desarrollar una identidad de marca realmente singular y reputada es, también aquí, de gran importancia.

      p Internet requiere estrategias más complejas para lograr posicionar la marca como algo preferente y único en la mente de los consumidores, revise las siguientes alternativas para establecer las marcas en línea:


    .tarjeta.tarjeta--gris.p-4.banner2-tema-1.MT-3
      PasosB.color-acento-botones
        .row.justify-content-center.align-items-center.mb-5(titulo="")

          .col-md-6.mb-4.mb-md-0
            h3 Alianza con una marca digital: 
            p Las alianzas entre marcas, conocidas también como co-branding, son acuerdos entre marcas complementarias que se comprometen en la realización de actividades de marketing de forma conjunta. Con estas estrategias se logra aumentar la notoriedad de las marcas que participan en el acuerdo, y se refuerza su imagen. De este modo, marcas poco conocidas en la red pueden optar por su alianza con nombres de fuerte presencia en el medio (como Google, Yahoo!, etc.) para facilitar su introducción.

          .col-md-4
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img22.svg', alt='Texto que describa la imagen')


        .row.justify-content-center.align-items-center.mb-5(titulo="")

          .col-md-6.mb-4.mb-md-0
            h3 Creación de una nueva marca: 
            p Esta opción se hace necesaria cuando la marca de la empresa tiene connotaciones inapropiadas para Internet, o cuando se desea llegar a segmentos distintos de aquellos a los que se orienta en los entornos físicos.

          .col-md-4
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img23.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center.mb-5(titulo="")

          .col-md-6.mb-4.mb-md-0
            h3 Marca tradicional:
            p Las empresas con marcas establecidas en los entornos convencionales pueden utilizarlas también en línea ahora.

          .col-md-4
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img24.svg', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center.mb-5(titulo="")

          .col-md-6.mb-4.mb-md-0
            h3 Marcas de confianza:
            p En Internet la confianza en la marca es muy importante; en la relación comercial a distancia la comunicación es prevalente y los consumidores refieren sitios en los que confían, con marcas que les son familiares, en oportunidades sin consideración del precio. 

          .col-md-4
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img25.svg', alt='Texto que describa la imagen')

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b El precio]

      p El precio es el principal factor que el consumidor valora en la decisión final de compra de un producto. También es relevante mencionar que, en los últimos tiempos, se ha superado la inseguridad y el miedo alrededor de los pagos online. Estas condiciones confieren al precio una dimensión psicológica prevalente que la estrategia de precios debe siempre tener muy en cuenta, más aún cuando se trata de un ámbito donde no existe una relación cara a cara con el comprador.


    .row.justify-content-center.align-items-center.mb-5.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure(data-aos="zoom-in-left")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            


    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b El consumo digital]

      p El comercio digital ha venido creciendo sostenidamente en el país y en todo el orbe; en la última década, este crecimiento se elevó por los cierres provocados por la emergencia sanitaria.

      p El comercio electrónico crece por varias razones. La principal razón es fundamentalmente la comodidad y la facilidad de compra. Es así como desde cualquier dispositivo el consumidor digital puede: 

    
    .row.justify-content-center.align-items-center.mb-5.mt-5           
      .col-lg-9 
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img26.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="78.2%" y="23%" numero="1")
            p.text-center #[b Acceder a ofertas exclusivas.]

          .tarjeta.color-acento-botones.p-3(x="96.6%" y="50%" numero="2")
            p.text-center #[b Ahorrar tiempo.]

          .tarjeta.color-acento-botones.p-3(x="78.3%" y="77%" numero="3")
            p.text-center #[b Acceder a Comparar precios.]

          .tarjeta.color-acento-botones.p-3(x="21.3%" y="77%" numero="4")
            p.text-center #[b Comprar novedades.]

          .tarjeta.color-acento-botones.p-3(x="3%" y="50%" numero="5")
            p.text-center #[b Múltiples formas de pago.]

          .tarjeta.color-acento-botones.p-3(x="21.3%" y="23%" numero="6")
            p.text-center #[b Ver comentarios de experiencias de otros compradores.]

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Características del consumidor digital]

      p A continuación, se describen las características por las cuales se puede reconocer un consumidor digital.

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="El consumidor está bien informado")
              .col-12
                p.mb-0 Además de eso, valora la honestidad de la información que recibe.

            .row(titulo="El consumidor digital espera mucho a cambio")
              .col-12
                p.mb-0 El nuevo consumidor digital, además de ser impaciente, espera como mínimo ser escuchado y recibir una respuesta personalizada hasta donde sea posible. 

            .row(titulo="El cliente digital aprovecha su tiempo y le gusta comparar")
              .col-12
                p.mb-0 La misma facilidad que brinda la Internet en la comunicación se traslada a la relación comercial digital. Es muy común que antes de comprar, un cliente busque productos o servicios, compare todos los detalles que considere relevantes y se nutra de información.

            .row(titulo="El cliente <em>online</em> es más poderoso")
              .col-12
                p.mb-0 Esta declaración de poder es posible hacerla con base en las tendencias actuales, es decir, si se piensa un instante, el cliente tiene el poder de investigar, de compartir, de interactuar y tiene a su disposición audiencias para premiar o castigar un producto o servicio.

        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img27.svg", alt="alt").img400.m-auto


    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Medios de pago en un entorno digital]

      p  Contribuyen a mejorar la comercialización #[i online] ofreciendo múltiples formas de pago, de tal manera que el consumidor tenga todas las posibilidades a su alcance y compre.

      p Las siguientes son las más utilizadas en Colombia para eventos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img28.svg", alt="alt").m-auto
          
      .col-lg-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta clr--gris")
          .row(titulo="Billeteras electrónicas")
            .col-12
              p Son aplicativos de pago bancarizados y no bancarizados (#[i Fintech]) que ofrecen a los clientes transacciones por montos bajos, además de realizar pagos; la premisa general es reemplazar el efectivo, y al parecer se está logrando, ya que cada vez son más los usuarios de estas apps. Entre las más Conocidas están: Tpaga, Nequi (Bancolombia), Movii, Powwi, Davipay (Davivienda), Rappi Pay, Tuya, Billetera Colpatria, BBVA Wallet y Billetera Móvil Bancolombia.

          .row(titulo="Botones de pago")
            .col-12
              p En este caso se redirige al cliente a la entidad bancaria para que efectúe allí el pago. De este modo, el vendedor no accede a los datos del cliente. El botón de pago más conocido es PSE.

          .row(titulo="Formulario de pago")
            .col-12
              p En este sistema el cliente rellena un formulario y efectúa la compra. Este sistema conlleva riesgos de seguridad, ya que el vendedor tiene acceso a los datos de la tarjeta de crédito del cliente. Se usa para garantizar reservas. 

          .row(titulo="Pasarelas de pago o TPV virtual (terminal de punto de venta virtual)")
            .col-12
              p Son sistemas (aplicativos #[i webs]) que permiten al vendedor aceptar tarjetas de crédito y otros métodos de pago electrónico. Se trata de un servicio que automatiza la operación de pago entre el cliente y el vendedor, a través de un sistema de procesos informáticos que verifica o rechaza las operaciones de tarjetas en nombre del comerciante, por medio de conexiones seguras de Internet.

          .row(titulo="Paypal")
            .col-12
              p Este sistema de pago pertenece a eBay. Consiste en la transferencia de dinero entre usuarios, vinculando una cuenta de correo electrónico a las cuentas bancarias correspondientes a sus tarjetas de crédito.


    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Portafolio de productos y servicios - portafolio de eventos]

      p El portafolio de servicios es un documento preparado por una empresa, organización o individuo en el que se describen sintéticamente los servicios que ofrece, detalla los límites y ofrecimientos del proveedor para todos los clientes y áreas de mercado a los que sirve. 
        
    .row.justify-content-center.align-items-center.mb-3
      .col-10
        .tarjeta.bgr-descargas.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img29.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Ejemplo de portafolio de eventos
                  p.text-small.text-white Lo invitamos a apropiar el significado y estructura de un portafolio de eventos, para ello, consulte el material complementario - #[b un ejemplo de portafolio de eventos].
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Material_complementario1-CF18.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row
      p La industria turística, en general, basa su oferta comercial en servicios intangibles, por lo cual se apoya de elementos gráficos que apoyen la transmisión del mensaje a los posibles clientes, uno de los más usados es el portafolio.


    .tarjeta.tarjeta--azul.p-4.banner3-tema-1
      SlyderA(tipo="b")
        .row
          .col-md-7.mb-4.mb-md-0
            h3 Ventajas de los portafolios
            p Este portafolio puede ser impreso o digital, y se trata de una descripción detallada de los productos o servicios que ofrece la empresa, cuya función es informar a los posibles clientes sobre las ventajas y beneficios de contratar a la empresa. En ellos se suministra información sobre:

            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Descripción del servicio.

              li 
                i.fas.fa-check
                | Alcance del servicio.

              li 
                i.fas.fa-check
                | Beneficios percibidos por el servicio.

              li 
                i.fas.fa-check
                | Impacto del uso del servicio.

              li 
                i.fas.fa-check
                | Procedimiento para la utilización del servicio.

              li 
                i.fas.fa-check
                | Vinculación con otros servicios.


          .col-md-5
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img30.svg', alt='Texto que describa la imagen')


        .row
          .col-md-7.mb-4.mb-md-0
            h3 Credibilidad de la oferta
            p Además de la descripción de productos y servicios, este documento puede incluir otros componentes, entre los que está el estratégico, es decir, una sección en la que se hable de la trayectoria, características de la empresa, socios, objetivos, misión y visión, proveedores, clientes, información de contacto, entre otros, todo esto tendiente a aportar credibilidad a la oferta.

          .col-md-5
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img31.svg', alt='Texto que describa la imagen')


        .row
          .col-md-7.mb-4.mb-md-0
            h3 Técnicas de negociación
            p “Las técnicas de negociación son herramientas que ayudan a persuadir al cliente, por medio del uso de la palabra, del control de las reacciones y de un pensamiento analítico” (Torres, 2021). A través de los años estas técnicas de negociación han sido estudiadas, referenciando las más usadas así: 

            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Estrategia cara a cara.

              li 
                i.fas.fa-check
                | El método AIDA.

              li 
                i.fas.fa-check
                | El método de negociación Harvard.

              li 
                i.fas.fa-check
                | El método SPIN.

              li 
                i.fas.fa-check
                | La empatía estratégica.

              li 
                i.fas.fa-check
                | La técnica de negociación ganar-ganar.


          .col-md-5
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img32.svg', alt='Texto que describa la imagen')

    .row.mt-5
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b  Técnicas de negociación ]

      p Es importante tener en cuenta que las técnicas de negociación incluyen estrategias cara a cara, el método AIDA, el método de negociación Harvard, el método SPIN, la empatía estratégica, la técnica de negociación ganar-ganar y la atención al cliente, tal como se muestra a continuación.

      p El portafolio de servicios es un documento preparado por una empresa, organización o individuo en el que se describen sintéticamente los servicios que ofrece, y detalla los límites y ofrecimientos del proveedor para todos los clientes y áreas de mercado a los que sirve.

    .row.mt-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-contenido.mb-5        
          .tarjeta.clr-paleYellow2.p-4(titulo="Estrategia cara a cara")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img33.svg", alt="alt")

              .col-lg-10
                h3 Estrategia cara a cara

                p Es posiblemente el método más antiguo que existe, y se basa en establecer una relación entre el comprador y el cliente. Para desarrollar esta técnica se aconseja tener una escucha activa, teniendo en cuenta los detalles entregados por el cliente. Adicionalmente, manejar un lenguaje corporal proactivo que exprese al cliente seguridad, confianza y una actitud genuina de ayudarlo.

          
          .tarjeta.clr-paleYellow2.p-4(titulo="El método AIDA")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img34.svg", alt="alt")

              .col-lg-10
                h3 El método AIDA
                p Este método obedece al acróstico Atención, Interés, Deseo y Acción. Fue creado en 1899 por Elmo Lewis, y se le considera como una técnica muy útil para atraer y mantener el foco de atención de los clientes hasta la conversión final en venta.

          .tarjeta.clr-paleYellow2.p-4(titulo="El método de negociación Harvard")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img35.svg", alt="alt")

              .col-lg-10
                h3 El método de negociación Harvard
                p Los autores norteamericanos Roger Fisher y William Ury, desarrollaron el método llamado Getting to yes, o método Harvard. Este se basa en la premisa de que un buen acuerdo no debe resultar de establecer una posición dominante, sino que debe ser fruto del fortalecimiento del vínculo entre las partes.

          .tarjeta.clr-paleYellow2.p-4(titulo="El método SPIN")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img36.svg", alt="alt")

              .col-lg-10
                h3 El método SPIN
                p Es también un acróstico, cuya base es el recorrido por cuatro (4) etapas que dan origen a su nombre: Situación, Problema, Implicación y Necesidad. Estas etapas se basan en la premisa de que el cliente es la parte que más tiene qué decir. Para su desarrollo los vendedores hacen unas preguntas, las cuales los llevan a analizar la situación, resaltar temas comunes, detectar problemas y buscar una solución.

          .tarjeta.clr-paleYellow2.p-4(titulo="La empatía estratégica")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img37.svg", alt="alt")

              .col-lg-10
                h3 La empatía estratégica
                p Este método está basado en las experiencias de Chris Voss, quien fue negociador del FBI durante 24 años. Él encontró, a lo largo de múltiples negociaciones, que el aspecto emocional de las negociaciones es vital, y sugiere una técnica que consiste en practicar la escucha activa, continuar las interlocuciones repitiendo las últimas tres palabras del interlocutor.

          .tarjeta.clr-paleYellow2.p-4(titulo="La técnica de negociación ganar-ganar")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img38.svg", alt="alt")

              .col-lg-10
                h3 La técnica de negociación ganar-ganar
                p Esta técnica invita a conocer el contexto de la contraparte y propone ir alimentando la reciprocidad y fomentando la colaboración, hasta llegar al punto óptimo de negociación.

          .tarjeta.clr-paleYellow2.p-4(titulo="Atención al cliente")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img39.svg", alt="alt")

              .col-lg-10
                h3 Atención al cliente
                p La atención al cliente es un ítem preponderante en la venta tradicional, y más aún en la venta digital. Al vender se ofrecen soluciones, por tanto, todo el soporte preventa y posventa será altamente apreciado. No basta con solo crear un buen contenido y ponerlo en la web, o promoverlo en redes sociales, si al final del día el prospecto o el cliente no pueden lograr el trato que desean.

          .tarjeta.clr-paleYellow2.p-4(titulo="Venta digital")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img40.svg", alt="alt")

              .col-lg-10
                h3 Venta digital
                p Dentro de la venta digital hay múltiples herramientas que funcionan como medios para generar ventas, pero también como medios de interacción y comunicación; por este motivo, hay que utilizarlos responsablemente, pero sobre todo enfocados a brindar un servicio genuino.

          .tarjeta.clr-paleYellow2.p-4(titulo="Servicios de chat")
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure(data-aos="zoom-in-left")
                  img(src="@/assets/curso/temas/tema1/img41.svg", alt="alt")

              .col-lg-10
                h3 Servicios de chat
                p Entre estas herramientas están los servicios de chat, los #[i bots] de servicio, los formularios de contacto, los enlaces telefónicos, los foros o grupos de ayuda, las redes sociales. Todos ellos, individualmente o en conjunto, cumplen la misma función: establecer una comunicación con el cliente; la gran mayoría de las veces un cliente solo desea ser escuchado.


    separador

    #t_1_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.1  Mercadeo #[i above the line]

    .row.justify-content-center.align-items-center
      .col-lg-3
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema1/img67.svg", alt="alt")

      .col-lg-5
        p Término inglés usado desde 1950 que en español alude a la expresión ‘encima de la línea’. Se considera como una estrategia orientada a producciones de eventos de gran escala, cuyo propósito es lograr el posicionamiento y reconocimiento de una marca en todo tipo de público.

      p.mt-3 Los medios de comunicación tradicionales, como radio, televisión, periódicos, revistas, cines, vallas publicitarias, mobiliario urbano, y por supuesto, la Internet, son los canales propicios para desarrollar la comercialización de eventos bajo esta técnica, llegando de manera específica a un público objetivo cuando este es demasiado amplio.

    .row.justify-content-center.mb-5.mt-5
      .col-lg-10.position-relative
        .avatar.justify-content-center.mb-5.mt-5
          figure(data-aos="zoom-in-left")
            img(src="@/assets/curso/temas/tema1/img47.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center.margen-tema1-figure
            .col-auto
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema1/img42.svg", alt="alt").img100
            .col
              h5 Televisión
              p El televidente percibe de manera simultánea palabras, sonido, movimiento, imágenes, que causan impacto de manera rápida y eficiente. 
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center.margen-tema1-figure
            .col-auto
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema1/img43.svg", alt="alt").img100
            .col
              h5 Periódico
              p Conocido por informar sobre las noticias y sucesos de una región o de un país de manera impresa, hoy alterna en muchos casos con su formato digital. Su mayor ventaja radica en la amplitud de la información a presentar y su periodicidad de aparición, pudiendo ser diaria en la mayoría de los casos. 
        .crd.crd--avatarHorizontal.crd--last.py-4.horizontal-1
          .row.align-items-center.margen-tema1-figure
            .col-auto
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema1/img44.svg", alt="alt").img100
            .col
              h5 Revista
              p Son publicaciones impresas que aparecen periódicamente en intervalos de tiempo mayores a un día. Su fuerte viene representado por la segmentación demográfica y socioeconómica que presentan este tipo de publicaciones.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center.margen-tema1-figure
            .col-auto
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema1/img45.svg", alt="alt").img100
            .col
              h5 Radio
              p Medio publicitario masivo por excelencia, aunque ha perdido audiencia de forma progresiva a partir del auge de la televisión, y luego de la Internet. A pesar de ello, conserva una cantidad de fieles oyentes que siguen escuchándola. Presenta como ventajas la selectividad geográfica, porque cubre la parte local, provincial o nacional, tiene alta segmentación de programas y facilidad para el ejercicio y repetición del mensaje. 
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center.margen-tema1-figure
            .col-auto
              figure(data-aos="zoom-in-left")
                img(src="@/assets/curso/temas/tema1/img46.svg", alt="alt").img100
            .col
              h5 Cine
              p Es la técnica que consiste en proyectar fotogramas, de forma rápida y sucesiva, para crear la ilusión de movimiento.

    .row.mt-5
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Publicidad exterior]

      p La publicidad exterior es considerada el medio publicitario original. Utiliza todos los espacios públicos posibles para desarrollar su mensaje, tiene impacto rápido sobre quien lo ve y sus ideas son transmitidas de manera llamativa y directa. 

      p Las formas publicitarias exteriores más utilizadas son:

    
    .row.justify-content-center.align-items-center.mb-5.mt-5           
      .col-lg-9 
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure(data-aos="zoom-in-left")
              img(src='@/assets/curso/temas/tema1/img48.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="72.7%" y="20%" numero="")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p #[b Vallas publicitarias:]

                p Estructuras situadas en espacios de gran visibilidad donde se coloca un anuncio publicitario.

          .tarjeta.color-acento-botones.p-3(x="75.5%" y="40.2%" numero="")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p #[b Letreros luminosos:]

                p Paneles que emiten luz y generalmente emulan el logotipo de una marca.

          .tarjeta.color-acento-botones.p-3(x="69.9%" y="58%" numero="")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p #[b Videopantallas:]

                p Soportes multimedia situados en lugares transitados, como centros comerciales o eventos.

          .tarjeta.color-acento-botones.p-3(x="58.0%" y="68.7%" numero="")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p #[b Muros:]

                p Publicidad impresa sobre muros o fachadas de edificios. Por sus características, suelen tener un carácter permanente.

          .tarjeta.color-acento-botones.p-3(x="42.8%" y="68.5%" numero="")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p #[b Publicidad que se realiza #[i online]:]

                p Al comparar esta publicidad resulta más económica que las prácticas con la publicidad tradicional, facilitando además la medición de resultados de la campaña.

          .tarjeta.color-acento-botones.p-3(x="30.5%" y="58%" numero="")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p #[b Transporte público:]

                p Publicidad situada en la superficie exterior de autobuses, trenes, tranvías o taxis.

          .tarjeta.color-acento-botones.p-3(x="24.5%" y="40%" numero="")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p #[b Banderolas:]

                p Anuncios de carácter repetitivo adosados generalmente a postes de iluminación. 

          .tarjeta.color-acento-botones.p-3(x="27.8%" y="19.5%" numero="")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p #[b Internet:]

                p La publicidad utiliza la red como medio de comunicación, ya sea una #[i web] o #[i blog], el correo electrónico, las redes sociales o cualquier otra plataforma o sistema virtual, permitiendo dar a conocer la marca, empresa o producto a prácticamente todo el mundo, sin importar la hora o día en el año.


    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.2  Mercadeo #[i bellow the line]

    .row.justify-content-center.align-items-center
      .col-lg-3
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema1/img57.svg", alt="alt")

      .col-lg-5
        p #[i Bellow the line] significa ‘bajo la línea’, y consiste en la estrategia de publicidad que hace uso de formas no masivas de comunicación para el mercadeo, las cuales están dirigidas a segmentos de mercado específicos.

      p.mt-3  A continuación, se presenta una breve descripción de las etapas que ha tomado el bellow the line desde que surgió el término hasta llegar a las grandes marcas en el tiempo:


    LineaTiempoE.color-acento-botones
      .row(titulo="1960 Bellow the line")
        .col-lg-6.mb-4.mb-lg-0
          p #[i Bellow the line] es un término que nació en el año 1960, ya que era la única forma de hacer publicidad superando las restricciones de ley en categorías de productos que ya se empezaban a regular por las autoridades, como cigarrillos y licores.
        .col-lg-6
          figure(data-aos="zoom-in-left")
            img(src='@/assets/curso/temas/tema1/img58.svg', alt='Texto que describa la imagen')

      .row(titulo="Nuevas leyes")
        .col-lg-6.mb-4.mb-lg-0
          p Estas nuevas leyes supusieron barreras para pautar en el horario diurno, en medios masivos como la televisión. 
        .col-lg-6
          figure(data-aos="zoom-in-left")
            img(src='@/assets/curso/temas/tema1/img59.svg', alt='Texto que describa la imagen')

      .row(titulo="Grandes marcas")
        .col-lg-6.mb-4.mb-lg-0
          p Las grandes marcas de las categorías de tabaco y licores concentraron sus esfuerzos y presupuestos en promociones, activaciones de marca, patrocinios, posicionamiento estratégico del producto en puntos de venta y #[i merchandising], creando experiencias en las calles con los consumidores al percibir la oportunidad de complementar con el uso de medios no convencionales los medios tradicionales, cada vez más costosos, y reducir costos a los clientes en momentos de limitación financiera.
        .col-lg-6
          figure(data-aos="zoom-in-left")
            img(src='@/assets/curso/temas/tema1/img60.svg', alt='Texto que describa la imagen')


    .row.mt-5
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Medios alternativos]

      p Los medios alternativos pueden tipificarse como medios bellow the line. Estos pueden verse como complemento de los medios tradicionales, y pueden definirse como acciones tácticas que hacen parte de las estrategias y nos ayudan a conseguir objetivos de ventas, de participación en el mercado o de posicionamiento, tales como: 


    .row.justify-content-center.align-items-center
      .col-lg-10.col-xs-10
        .tarjeta.tarjeta--azul.p-4.banner3-tema-1
          SlyderA(tipo="b")
            .row
              .col-md-7.mb-4.mb-md-0
                h3 Emplazamiento del producto:
                p Inserción de la marca en la narrativa de una serie, novela, película, etc.

              .col-md-5
                figure
                 img(src='@/assets/curso/temas/tema1/img61.svg', alt='Texto que describa la imagen')


            .row
              .col-md-7.mb-4.mb-md-0
                h3 #[i Advergaming:]
                p Cuando se crean videojuegos para promoción de una marca.

              .col-md-5
                figure
                 img(src='@/assets/curso/temas/tema1/img62.svg', alt='Texto que describa la imagen')

            .row
              .col-md-7.mb-4.mb-md-0
                h3 #[i Displays:]
                p Formato publicitario online en el que el anuncio (conocido generalmente como #[i banner] y formado por texto, imagen, audio e incluso vídeo) se muestra en una página web de destino, por lo general presentado en la parte superior o lateral de la misma.
              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema1/img63.svg', alt='Texto que describa la imagen')

            .row
              .col-md-7.mb-4.mb-md-0
                h3 #[i Marketing] directo:
                p Es una forma de comunicación de #[i marketing] que utiliza uno o más medios para comunicarse directamente con un público objetivo y obtener de él una respuesta medible.

              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema1/img64.svg', alt='Texto que describa la imagen')

            .row
              .col-md-7.mb-4.mb-md-0
                h3 Publicidad no casual:
                p Es necesario tener en cuenta que no es una nueva forma de publicidad, simplemente cumple con objetivos circunstanciales de mercado. En primer lugar, generar resultados en ventas inmediatas, visto globalmente implica todo tipo de publicidad no usual, que en su esencia concentra los esfuerzos en generar ventas durante los programas.

              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema1/img65.svg', alt='Texto que describa la imagen')


            .row
              .col-md-7.mb-4.mb-md-0
                h3 Ventajas de los medios alternativos:
       
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    p.mb-0 Optimización de recursos.

                  li 
                    i.fas.fa-check
                    p.mb-0 Implementación de bajo costo respecto a #[i above the line].

                  li 
                    i.fas.fa-check
                    p.mb-0 Diferenciación del mensaje según #[i target] y contexto del consumidor.

                  li 
                    i.fas.fa-check
                    p.mb-0 Se pueden realizar correctivos sobre la marcha.

                  li 
                    i.fas.fa-check
                    p.mb-0 De acuerdo con su implementación pueden lograr mayor recordación. 

                  li 
                    i.fas.fa-check
                    p.mb-0 Retroalimentación inmediata al posibilitar el contacto directo cara a cara con el consumidor.

              .col-md-5
                figure
                  img(src='@/assets/curso/temas/tema1/img66.svg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  components: {},
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
