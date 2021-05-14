import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Livre} from '../../model/livre';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-table-livre',
  templateUrl: './table-livre.component.html',
  styleUrls: ['./table-livre.component.scss']
})
export class TableLivreComponent implements OnInit {
  @Input() livres: Livre[];
  @Output() clikDelete = new EventEmitter();
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(content, id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (result === 'Ok') {
        this.onDelete(id);
      }
    }, (reason) => {
    });
}
  onDelete(id): void {
    this.clikDelete.emit(id);
  }
}
