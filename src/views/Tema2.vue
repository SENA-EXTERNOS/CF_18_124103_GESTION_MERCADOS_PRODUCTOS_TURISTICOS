<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 #[i Merchandising]

    .row.justify-content-center.align-items-center

      .col-lg-5
        p Es una estrategia de #[i marketing] dedicada a la promoción de una marca haciendo presencia en los eventos de su segmento para brindar información, realizar degustaciones y obsequiar presentes y regalos a los asistentes. El objetivo de esta técnica es estimular la compra directa en el punto de venta y desarrollar en el consumidor conciencia de su existencia.


      .col-lg-3
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/tema2/img1.svg", alt="alt")

      p.mt-3 Con el #[i merchandising] aplicado a los eventos se puede influir en la transmisión de un mensaje, por tanto, es importante definir lo que se quiere transmitir, teniendo en cuenta los siguientes factores:

    .tarjeta.tarjeta--azul.p-4.banner3-tema-1
      SlyderA(tipo="b")
        .row
          .col-md-7.mb-4.mb-md-0
            h3 #[i Target]
            p Para quién será el obsequio, es decir, analizar y definir el público objetivo y sus gustos; en función de lo anterior, se elige un tipo de productos u otro para que sea un detalle original y funcional. 

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2.png', alt='Texto que describa la imagen')


        .row
          .col-md-7.mb-4.mb-md-0
            h3 Servicios ofertados
            p Es crucial que el #[i merchandising] elegido tenga relación con los servicios o productos que comercializa la empresa, para transmitir unidad y ser coherente. Si el evento es de carácter tecnológico, es recomendable que los objetos que se obsequian tengan componentes de tecnología y no programar obsequios como llaveros o pocillos.  

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='Texto que describa la imagen')

        .row
          .col-md-7.mb-4.mb-md-0
            h3 Valor de la marca
            p Aspecto para tener en cuenta son los valores de la marca, ya que, si entre ellos está el de la responsabilidad social corporativa, lo más lógico sería que los productos de #[i merchandising] estuvieran acorde con ello, y que, por ejemplo, tuvieran un empaquetado reciclable y sostenible.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen')

        .row
          .col-md-7.mb-4.mb-md-0
            h3 #[i Souvenirs]
            p Es importante que los productos a regalar sean útiles para que las personas los utilicen diariamente y se hagan conscientes de la marca; estos deben tener los datos de contacto de la empresa de manera visible. 

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Texto que describa la imagen')

        .row
          .col-md-7.mb-4.mb-md-0
            h3 Edecanes
            p Son las primeras personas que verán los asistentes al evento, por tanto, el primer contacto humano con la marca. Su presencia ayuda a mejorar las ventas en el punto, aumentan la visibilidad del producto, entregan documentación necesaria para el evento, reparten los regalos promocionales, revisan lista de asistentes, acompañan a los invitados, causan un buen impacto a la imagen de la marca y ayudan a los asistentes en todo lo que necesiten. También ayudarán a los participantes a respetar las medidas sanitarias que se impongan o sugieran para los eventos. Su estilo y protocolo dependerá del tipo de evento a cubrir, como feria, congreso, stand comercial, etc.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='Texto que describa la imagen')


        .row
          .col-md-7.mb-4.mb-md-0
            h3 Beneficios de incluir merchandising en eventos
       
            ul.lista-ul--color
              li 
                i.fas.fa-check
                p.mb-0 #[b Fidelizar:] los regalos son una forma de crear lazos positivos y fuertes con los clientes, ya que se van a sentir especiales por haber recibido este detalle. 

              li 
                i.fas.fa-check
                p.mb-0 #[b Visibilidad:] el merchandising va a llevar el logotipo de la empresa, ganando visibilidad, ya que si obsequió camisetas los usuarios que se la pongan van a ir haciendo publicidad de la marca indirectamente. 

              li 
                i.fas.fa-check
                p.mb-0 #[b Profesionalidad:] los objetos personalizados mejoran la imagen de la marca y de la empresa porque los usuarios van a poder ver inversión hacia ellos.


          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img7.svg', alt='Texto que describa la imagen')


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
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
