import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Livre} from '../../model/livre';

@Component({
  selector: 'app-search-livre',
  templateUrl: './search-livre.component.html',
  styleUrls: ['./search-livre.component.scss']
})
export class SearchLivreComponent implements OnInit {
  livre = new Livre();
  @Output() sendFiltre = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  doFilter(): void {
    this.sendFiltre.emit(this.livre);
  }
}
