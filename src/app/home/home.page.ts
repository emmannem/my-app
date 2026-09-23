import { Component } from '@angular/core';
import { IonHeader, IonContent, IonFooter, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonFooter, IonHeader, IonContent],
})

// Aqui va toda la logica de mi App Móvil
// Metodos, Variables, etc.
export class HomePage {
  public numero: number = 0;
  constructor() {}
}
