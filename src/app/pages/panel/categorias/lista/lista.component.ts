import { Component, OnInit } from '@angular/core';
import { ICategorias } from '../interfaces/categorias';
import { CategoriasService } from '../service/categorias.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  listaCategorias: ICategorias[] = [];

  constructor(private categoriasService: CategoriasService) {}

  ngOnInit(): void {
    this.loadLista();
  }

  private loadLista() {
    this.categoriasService.listar().subscribe((lista: ICategorias[]) => {
      console.log(lista);
      this.listaCategorias = lista;
    });
  }
}
