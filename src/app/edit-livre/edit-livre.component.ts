import { Component, OnInit } from '@angular/core';
import {Livre} from '../model/livre';
import {LivreService} from '../shared/livre.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.scss']
})
export class EditLivreComponent implements OnInit {
  livre = new Livre();
  constructor(private livreSerrvice: LivreService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.getById();
  }
  getById(): void {
    const  idLivre = this.activatedRoute.snapshot.paramMap.get('id');
    this.livreSerrvice.getById(idLivre).subscribe(res => {
      this.livre = res;
    }, ex => console.log(ex));
  }
  edit(): void {
    this.livreSerrvice.edit(this.livre).subscribe(res => {
      this.router.navigate(['/livre/list']);
    }, ex => console.log(ex));
  }

}
