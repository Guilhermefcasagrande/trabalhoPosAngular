import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.css']
})
export class EditaComponent implements OnInit {

  item = {};
  id: any;

  constructor(private produtosService: ListaService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.carrega(params['id']);
    })
  }

  carrega(id: String) {
    this.id = id;
    if (this.id === "novo") {
      return;
    }
    this.produtosService.get(id).valueChanges().subscribe(
      obj => {
        this.item = obj
      }
    );
  }

  onSubmit(form: NgForm) {
    if (this.id === "novo") {
      this.produtosService.add(this.item);
    }
    else {
      this.produtosService.update(this.id, this.item);
    }
    this.router.navigate(['../..'], { relativeTo: this.route })
  }

}
