import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servicios = [
    {
      servicio: "Formateo de discos y reestablecimiento a valores de fábrica",
      descripcion: "En RepairTech nos encargamos de dejar listo tu equipo para nuevos movimientos que tengas pensado realizar sobre ellos, por ejemplo: prepararlo para venderlo, borrar sus datos para mejorar su rendimiento o incluso simplemente borrar información que ya no sea necesaria.",
      precio: "60",
      img: "formateo.jpg"
    },
    {
      servicio: "Limpieza de componentes electrónicos",
      descripcion: "Para mantener en buen estado tus electrónicos es necesario limpiarlos constantemente, pues el polvo aísla el calor y el calor a la larga trae problemas con los circuitos internos de tus dispositivos. Por esta razón te ofrecemos una limpieza que consiste en quitar la mayor cantidad de suciedad posible en los componentes internos del dispositivo, incluyendo ventilacion y tarjetas de circuito.",
      precio: "100",
      img: "limpia.jpg"
    },
    {
      servicio: "Mejora de componentes",
      descripcion: "Si te gustaría que tu dispositivo rindiera mejor, puedes traerlo con nosotros y te ayudaremos a ver qué partes de él pueden mejorarse* (por ejemplo la memoria o el almacenamiento). Igualmente, puedes dejarnos tu dispositivo para hacer la mejora que hayas escogido y al regresar a tus manos verás un incremento en su rendimiento. *Puede no aplicar en ciertos dispositivos",
      precio: "Variable dependiendo del trabajo",
      img: "cambio.jpg"
    },
    {
      servicio: "Diagnóstico de equipos",
      descripcion: "Si tu equipo está dando fallas o sientes que algo no está funcionando como debería, nosotros nos encargamos de revisarlo y decirte qué es lo que le puede estar pasando. Con esto puedes estar más seguro de qué solución buscarle a tu problema e incluso dejarlo para que lo reparemos.",
      precio: "75",
      img: "diagnostico_2.jpg"
    },
    {
      servicio: "Resolución de problemas",
      descripcion: "Tras haber hecho el diagnóstico puedes dejarnos tu dispositivo para poder reparar el problema que le impide funcionar de la forma correcta. El tiempo de reparación puede llegar a variar, por lo que llega a ser necesario dejar el dispositivo por unos días, para que al terminar lo tengas en su estado óptimo.",
      precio: "Variable dependiendo del problema",
      img: "reparacion.jpg"
    },
    {
      servicio: "Reemplazo de partes dañadas",
      descripcion: "Si tu dispositivo sufrió algún daño por algún motivo, podemos arreglarlo, ya sea reemplazando la parte dañada o incluso reparando la sección en cuestión.",
      precio: "Variable dependiendo del problema",
      img: "reemplazo.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
