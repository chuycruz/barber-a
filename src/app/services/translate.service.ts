import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private dato:any

  constructor(private http: HttpClient) { }

  /**
   * getData
   */
  public getData() {
    return new Promise((resolve, reject)=>{
      this.http.get('assets/translations/' + navigator.language + '.json').subscribe(data => {
        this.dato = data
        console.log(this.dato)
        resolve(true)
      }, error => {
        console.error('Error al recuperar las traducciones: ' + error)
        reject(true)
      })
    })
  }

  public getTranslate(word: string){
    return this.dato[word]
  }
}
