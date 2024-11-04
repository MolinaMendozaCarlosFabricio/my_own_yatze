import { Component } from '@angular/core';

@Component({
  selector: 'app-yatze-view',
  templateUrl: './yatze-view.component.html',
  styleUrl: './yatze-view.component.css'
})
export class YatzeViewComponent {
  rounds: number = 1;

  dados: number[] = [1, 1, 1, 1, 1];

  dados_mantenidos: number[] = [0,0,0,0,0]

  message: string = "";

  objetivos_menores: string[] = []

  restard(){
    this.rounds = 1;
    this.dados_mantenidos = [0,0,0,0,0]
  }

  mantener_dado(dado: number, resultado: number){
    this.dados_mantenidos[dado] = resultado;
  }

  start(){

    this.message = "";
    this.objetivos_menores = []

    for(let i: number = 0; i < this.dados.length; i++){
      this.dados[i] = Math.floor(Math.random()*(6 - 1 + 1)) + 1;
    }

    for(let i: number = 0; i <this.dados_mantenidos.length; i++){
      if(this.dados_mantenidos[i] > 0)
        this.dados[i] = this.dados_mantenidos[i];
    }

    this.comprobate();

    this.rounds++
  }

  comprobate(){
    let coincidencias: number[] = [0, 0, 0, 0, 0];
    for(let i: number = 0; i < this.dados.length; i++){
      for (let j: number = 0; j < this.dados.length; j++){
        if(this.dados[i] == this.dados[j])
          coincidencias[i]++
      }
    }

    for(let i: number = 0; i < this.dados.length; i++){
      if(coincidencias[i] == 5){
        this.message = "Yatze!!";
        i = this.dados.length + 1
      }
    }

    for(let i: number = 0; i < this.dados.length; i++){
      if(coincidencias[i] == 4){
        this.message = "4 de un tipo";
        i = this.dados.length + 1;
      }
    }

    for(let i: number = 0; i < this.dados.length; i++){
      if(coincidencias[i] == 3){
        let bandera: boolean = false
        for(let j: number = 0; j < this.dados.length; j++){
          if(coincidencias[j] == 2){
            bandera = true;
            j = this.dados.length + 1;
          }
        }
        if(bandera)
          this.message = "Full house!";
        else
          this.message = "3 de un tipo";
        i = this.dados.length + 1;
      }
    }

    for(let i: number = 0; i < this.dados.length; i++){
      if(coincidencias[i] == 2){
        if(this.dados[i] == 1 && !this.find_objetivo_menor("Unos"))
          this.objetivos_menores.push("Unos")
        if(this.dados[i] == 2 && !this.find_objetivo_menor("Doses"))
          this.objetivos_menores.push("Doses")
        if(this.dados[i] == 3 && !this.find_objetivo_menor("Treses"))
          this.objetivos_menores.push("Treses")
        if(this.dados[i] == 4 && !this.find_objetivo_menor("Cuatros"))
          this.objetivos_menores.push("Cuatros")
        if(this.dados[i] == 5 && !this.find_objetivo_menor("Cincos"))
          this.objetivos_menores.push("Cincos")
        if(this.dados[i] == 6 && !this.find_objetivo_menor("Seises"))
          this.objetivos_menores.push("Seises")
      }
    }
  }

  find_objetivo_menor(objetivo: string): boolean{
    for(let objetivo_menor of this.objetivos_menores){
      if (objetivo_menor === objetivo)
        return true
    }

    return false
  }
}
