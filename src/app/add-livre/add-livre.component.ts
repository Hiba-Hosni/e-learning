import { Component, OnInit } from '@angular/core';
import {Livre} from '../model/livre';
import {LivreService} from '../shared/livre.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.scss']
})
export class AddLivreComponent implements OnInit {
  livre = new Livre();
  constructor(private livreSerrvice: LivreService,
              private router: Router) { }

  ngOnInit(): void {
  }
  save(): void {
      this.livre.disponible = true;
      this.livreSerrvice.add(this.livre).subscribe(res => {
      this.router.navigate(['/livre/list']);
    }, ex => console.log(ex));
  }
}
