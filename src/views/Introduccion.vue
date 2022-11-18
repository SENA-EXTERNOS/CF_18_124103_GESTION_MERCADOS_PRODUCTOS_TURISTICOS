<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="zoom-in-left")
          img(src="@/assets/curso/temas/introduccion/img1.svg", alt="alt")
      .col-lg-8

        p Estimado aprendiz, bienvenido a este recurso educativo, el cual describe las principales #[b técnicas comerciales] para eventos, dentro de las cuales se destaca el mercadeo above the line, el cual se refiere a una estrategia orientada a producciones de eventos de gran escala, cuyo propósito es lograr el posicionamiento y reconocimiento de una marca en todo tipo de público, usa medios de comunicación como la televisión, la radio, el cine, periódicos y revistas;  y el mercadeo #[i bellow the line], el cual se caracteriza por ser una estrategia de publicidad que usa formas no masivas de comunicación para el mercadeo, dirigidas a segmentos de mercado específicos, utiliza medios alternativos que complementan los medios tradicionales y ayuda a conseguir objetivos de ventas, participación en el mercado y posicionamiento. El aprendiz estudiará sobre promoción de marca en eventos, y las ventajas y desventajas del uso de técnicas comerciales en eventos orientados al sector turismo.
    
    .row
      p #[b En el siguiente video conocerá, de forma general, la temática que estudiará a lo largo del componente formativo. ¡Muchos éxitos en este proceso de aprendizaje!]
    
    .row.justify-content-center.align-items-center.mb-5.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
         
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
