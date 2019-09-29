import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title: string = 'clase2';

  public $formSuscribe: Subscription;

  public formOne = new FormGroup({
    name: new FormControl('', Validators.required),
    firstlastname: new FormControl('Hola',[Validators.required, Validators.maxLength(50)]),
    secondName: new FormControl('digita tu cédula', Validators.required)
  });


  public ngOnInit(): void{
    this.$formSuscribe = this.formOne.valueChanges.subscribe(
      (value) => {
        console.log('mi formulario: ', value);
        console.log('Si es así que funciona');
      }
    );
  }


}



