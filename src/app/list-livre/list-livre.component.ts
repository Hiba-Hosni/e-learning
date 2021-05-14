import { Component, OnInit } from '@angular/core';
import {LivreService} from "../shared/livre.service";
import {Livre} from "../model/livre";

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.scss']
})
export class ListLivreComponent implements OnInit {
  livres: Livre[] = [];
  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.livreService.getAll().subscribe(res => {
      this.livres = res;
    }, ex => console.log(ex));
  }

  delete(id) {
    if (id) {
      this.livreService.delete(id).subscribe(res => {
        this.getAll();
      }, ex => console.log(ex));
    }
  }

  filtrer(livre: Livre) {
    let  param = '?';
    if (livre.titre !== undefined && livre.titre !== '') {
      param += 'titre_like=' + livre.titre + '&';
    }
    if (livre.auteur !== undefined &&  livre.auteur !== '') {
      param += 'auteur_like=' + livre.auteur + '&';
    }
    if (livre.categorie !== undefined && livre.categorie !== '') {
      param += 'categorie_like=' + livre.categorie;
    }
    this.livreService.search(param).subscribe(res => {
      this.livres = res;
    }, ex => console.log(ex));
  }
}
