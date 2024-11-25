import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../entities/aluno';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {


  baseUrl = environment.baseUrl;
  baseUrlCep?: string;


  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  message(msg: String): void {
    this.snack.open(`${msg}`, `OK`, {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 5000
    })
  }

  apagar(id: any): Observable<void> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url);
  }

  findAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.baseUrl);
  }
  /*
  * irá alterar o aluno chamando o back, através do método PUT
  * lembrando que a url espera receber o ra a ser alterado.
   * Ao final é retornado um Aluno atualizado.
   */
  atualizar(aluno: Aluno): Observable<Aluno> {
    const url = `${this.baseUrl}/${aluno.ra}`
    return this.http.put<Aluno>(url, aluno);
  }
  cadastrar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.baseUrl, aluno);
  }
  /*O método pesquisarRA irá fazer a requisição
 * para o back passando um id com a url e aguardará
 um aluno como resposta do get.*/
  pesquisarRA(ra: any): Observable<Aluno> {
    const url = `${this.baseUrl}/${ra}`
    return this.http.get<Aluno>(url);
  }  
}
