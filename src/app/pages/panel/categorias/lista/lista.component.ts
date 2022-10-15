import { Component, OnInit } from '@angular/core';
import { ICategorias } from '../interfaces/categorias';
import { CategoriasService } from '../service/categorias.service';
import Swal from 'sweetalert2';

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

  eliminarCategoria(id: string) {
    Swal.fire({
      title: '¿Está seguro de querer eliminar la categoría?',
      //text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriasService.eliminar(id).subscribe(
          (data) => {
            Swal.fire(
              'Eliminado correctamente!',
              'Your file has been deleted.',
              'success'
            );
            this.loadLista();
          },
          () => {
            Swal.fire(
              'No se pudo eliminar el registro!',
              'Your file has been deleted.',
              'error'
            );
          }
        );
      }
    });
  }
}
