import { Component } from '@angular/core';
@Component({
    selector: 'app-body',
    templateUrl: './body.components.html'
})
export class BodyComponents {
    mostrar = true;
    mostrar1 = true;
    mostrar2 = true;
    mostrar3 = true;
    mostrar4 = true;
    mostrar5 = true;
    frase: any = {
        mensaje: 'Longitud: 356 mm, Alimentación: Tambor 6 cartuchos, Cañón: 210 mm, Peso (arma): 1,5 Kg., Calibre: .44 Magnum',
        autor: 'SMITH & WESSON, Modelo 29 .44Magnum'
    }
    frase1: any = {
        mensaje: 'Longitud: 208 mm, Alimentación: Cargador de 20 cartuchos, Cañón: 122 mm, Cadencia: Semi-automática, Peso (arma): 0,74 Kg., Velocidad de salida: 650 m/s, Calibre: 5,7x28 mm',
        autor: 'FN FIVE-SEVEN 5,7mm'
    }
    frase2: any = {
        mensaje: 'Longitud: 356 mm, Alimentación: Tambor 6 cartuchos, Cañón: 210 mm, Peso (arma): 1,5 Kg., Calibre: .44 Magnum',
        autor: 'HK USP-45'
    }
    frase3: any = {
        mensaje: 'Longitud: 216 mm, Alimentación: Cargador de 7 cartuchos, Cañón: 127 mm, Cadencia: Semi-automática, Peso (arma): 1,1 Kg., Velocidad de salida: 262 m/s, Calibre: .45 ACP(11,4 mm)',
        autor: 'COLT 1911- A1 .45ACP'
    }
    frase4: any = {
        mensaje: 'Longitud: 356 mm, Alimentación: Tambor 6 cartuchos, Cañón: 210 mm, Peso (arma): 1,5 Kg., Calibre: .44 Magnum',
        autor: 'SMITH & WESSON, Modelo 29 .44Magnum'
    }
    frase5: any = {
        mensaje: 'Longitud: 356 mm, Alimentación: Tambor 6 cartuchos, Cañón: 210 mm, Peso (arma): 1,5 Kg., Calibre: .44 Magnum',
        autor: 'SMITH & WESSON, Modelo 29 .44Magnum'
    }
}
