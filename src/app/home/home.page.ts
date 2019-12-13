import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  vengadores = [
    {
      nombre: 'Tony',
      imagen: 'assets/imagenes/ironman.jpg',
      audio: 'assets/audio/voztony.mp3'
    },
    {
      nombre: 'Thor',
      imagen: 'assets/imagenes/thor.jpg',
      audio: 'assets/audio/vozthor.mp3'
    },
    {
      nombre: 'Spider-Man',
      imagen: 'assets/imagenes/spyderman.jpg',
      audio: 'assets/audio/vozspyderman.mp3'
    },
    {
      nombre: 'Capi',
      imagen: 'assets/imagenes/capi.jpg',
      audio: 'assets/audio/vozcapi.mp3'
    }
  ];

  constructor() { }

  reproducirVoz(vengador) {
    console.log(vengador);
    let voz = new Audio();

    voz.src = vengador.audio;
    voz.load();
    voz.play();
  }

}
