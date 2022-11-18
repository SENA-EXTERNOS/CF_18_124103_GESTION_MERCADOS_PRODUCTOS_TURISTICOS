export default {
  global: {
    componenteFormativo: 'Técnicas comerciales',
    descripcionCurso:
      'Este componente formativo pretende ilustrar al aprendiz en el uso y aplicación de diferentes técnicas comerciales, que junto al conocimiento de nuevos canales/tecnologías, le brindará las bases para crear estrategias de comercialización que permitan aprovechar al máximo las oportunidades derivadas de la innovación y la creatividad en la gestión de eventos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas comerciales para eventos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Mercadeo <em>above the line</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Mercadeo <em>bellow the line</em>',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Merchandising</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Layout</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Técnicas comerciales para eventos',
      referencia:
        'Torres, D. (2021, noviembre 25) <em>Las 6 técnicas de negociación más eficaces para tus ventas</em>. [Web log post] Hubspot',
      tipo: 'Artículo web',
      link: 'https://blog.hubspot.es/sales/tecnicas-negociacion',
    },
    {
      tema: '<em>Layout</em>',
      referencia:
        'Cordero López, L. (2016). <em>La organización de eventos como herramienta de comunicación interna: Avon Cosmetics España</em>. [Tesis de grado en publicidad y relaciones públicas, Universidad de Sevilla]. ',
      tipo: 'Tesis',
      link:
        'https://idus.us.es/bitstream/handle/11441/48294/CorderoLopez_Lucia_TFG_2016.pdf;jsessionid=ABFB63C6E2C28861D02F3DD09AF9E830?sequence=1',
    },
    {
      tema: '<em>Merchandising</em>',
      referencia:
        'Ruiz Fernández, C. (2019). <em>Marketing experiencial y su aplicación en la organización de eventos</em>. Ediciones Parainfo.',
      tipo: 'Libro',
      link:
        'https://books.google.com.co/books?id=sZAaEAAAQBAJ&printsec=frontcover&dq=organizaci%C3%B3n+de+eventos&hl=es&sa=X&redir_esc=y#v=onepage&q=organizaci%C3%B3n%20de%20eventos&f=false',
    },
    {
      tema: '<em>Marketing</em> de eventos',
      referencia:
        'InboundCycle. (2018) <em>Marketing de eventos: cómo conseguir un mayor alcance</em>. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hwdZnoGqb7U',
    },
  ],
  glosario: [
    {
      termino: '<em>Below the line</em>',
      significado:
        'significa ‘bajo la línea’ y consiste en la estrategia publicitaria donde se hace uso de formas no masivas de comunicación para el mercadeo, dirigidas a segmentos de mercado específicos. ',
    },
    {
      termino: '<em>Branding</em>',
      significado:
        'proceso por el que se define la identidad corporativa de una empresa.',
    },
    {
      termino: 'Emplazamiento',
      significado:
        'técnica publicitaria que consiste en la inserción de un producto, marca o mensaje dentro de la narrativa de un medio, ya sea una película o una serie televisiva.',
    },
    {
      termino: 'Empatía estratégica',
      significado:
        'técnica que consiste en practicar la escucha activa, continuar las interlocuciones repitiendo las últimas tres palabras del interlocutor, y de esta forma, ir creando una solución progresiva al empatizar con el cliente. ',
    },
    {
      termino: 'Estrategia cara a cara',
      significado:
        'es posiblemente el método más antiguo que existe, y se basa en establecer una relación estable entre comprador - cliente. ',
    },
    {
      termino: 'Fidelizar',
      significado:
        'concepto de <em>marketing</em> que designa la lealtad de un cliente a una marca, producto o servicio concretos.',
    },
    {
      termino: '<em>Layout</em>',
      significado:
        'representación de un plano sobre el cual se va a dibujar la distribución de un espacio específico o determinado.',
    },
    {
      termino: 'Método SPIN',
      significado:
        'es también un acróstico cuya base es el recorrido por cuatro (4) etapas que dan origen a su nombre: Situación, Problema, Implicación y Necesidad. ',
    },
    {
      termino: '<em>Target</em>',
      significado:
        'destinatario ideal de una determinada campaña, producto o servicio.',
    },
    {
      termino: 'Técnica de negociación ganar-ganar',
      significado:
        'esta técnica invita a conocer el contexto de la contraparte, y propone ir alimentando la reciprocidad y fomentando la colaboración hasta llegar al punto óptimo de negociación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cordero López, L. (2016). <em>La organización de eventos como herramienta de comunicación interna: Avon Cosmetics España</em>. [Tesis de grado en publicidad y relaciones públicas, Universidad de Sevilla]. ',
      link:
        'https://idus.us.es/bitstream/handle/11441/48294/CorderoLopez_Lucia_TFG_2016.pdf;jsessionid=ABFB63C6E2C28861D02F3DD09AF9E830?sequence=1',
    },
    {
      referencia:
        'Torres, D. (2021, noviembre 25) <em>Las 6 técnicas de negociación más eficaces para tus ventas</em>. [Web log post] Hubspot.',
      link: 'https://blog.hubspot.es/sales/tecnicas-negociacion',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
