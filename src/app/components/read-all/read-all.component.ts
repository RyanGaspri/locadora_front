import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/entities/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.scss'],
})
export class ReadAllComponent implements OnInit {
verCadastro() {
  this.router.navigate(['cadastro']);
}

  ativo = 0;
  inativo = 0;
  list: Aluno[] = [];
  inativos: Aluno[] = [];

  constructor(private service: AlunoService,  
    private router: Router) { }
  ngOnInit(): void {
    this.findAll();
  }
  contarAtivos(): void {
    for (let aluno of this.list) {
      if (aluno.ativo) this.ativo++;
    }
  }
  contarInativos(): void {
    for (let aluno of this.inativos) {
      if (!aluno.ativo) this.inativo++;
    }
  }
  findAll(): void {//nome do método(findAll) e tipo de retorno(void)
    this.service.findAll().subscribe((resposta) => {//criando um método semelhante ao lambda
      resposta.forEach(aluno => {
        if (aluno.ativo) {
          this.list.push(aluno); //atribuindo os ativos a lista a resposta da consulta.
          this.ativo++;
        }
        else {
          this.inativos.push(aluno); //atribuindo os inativos a lista a resposta da consulta.
          this.inativo++;
        }
      });
    })
  }


  apagar(id: any): void {
    this.service.apagar(id).subscribe((resposta) => {
      if (resposta === null) {
        this.service.message('Veiculo excluído com sucesso');
        this.list = this.list.filter(aluno => aluno.ra != id);
        this.ativo = 0;
        this.contarAtivos();
        this.inativo = 0;
        this.contarInativos();
      }
      else {
        this.service.message('Não foi possível excluir o Veiculo');
      }
    })
  }
  /*
  * O método inativar irá receber um aluno (item do html) e irá
  * chamar o service para transformar ele em inativo.
  * Após a inativação daremos uma mensagem na tela que 
   * o aluno foi inativado.
  */
  inativar(item: Aluno): void {
    item.ativo = false;
    this.service.atualizar(item).subscribe(() => {
      this.service.message('O veiculo foi baixado');
      this.list = this.list.filter(aluno => aluno.ra != item.ra);
      this.inativo++;
      this.ativo--;
    });
  }
  verInativos() : void{
    this.router.navigate(['inativos']);
    }

}
