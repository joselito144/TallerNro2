import { Component, OnInit, forwardRef, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SimpleInputComponent),
  multi: true
};


@Component({
  selector: 'app-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.scss'],
  providers: [
    INPUT_VALUE_ACCESSOR
  ]
})
export class SimpleInputComponent implements OnInit, ControlValueAccessor {

  public onChange: any = () => { };
  public onTouched: any = () => { };

  constructor() { }

  public writeValue(value: any): void {
    this.onChange(value);
    this.onTouched();
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit() {
    console.log('inicie');
  }

  public ngAfterViewInit(): void {
    console.log('El componente y la vista se inicializaron');
  }

  @HostListener('keyup', ['$event']) public keyUpEvet(e: any) {
    this.writeValue(e.target.value);
  }


  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }

  public keydown(event): void{
    console.log(event);
  }

}
