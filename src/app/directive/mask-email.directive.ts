import { Directive, ElementRef, HostListener, OnInit, forwardRef, Output, EventEmitter  } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { strictEqual } from 'assert';

export const NUMBER_VALUE: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MaskEmailDirective),
  multi: true
};

@Directive({
  selector: '[appMaskEmail]',
  providers: [NUMBER_VALUE]
})
export class MaskEmailDirective implements OnInit, ControlValueAccessor{


  private readonly element: HTMLInputElement; 

  public onChange: any = () => { };
  public onTouched: any = () => { };

  constructor(
    public ref: ElementRef
  ) {
    this.element = ref.nativeElement;
  }

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

  public ngOnInit(): void {
    this.element.autocomplete = 'off';
  }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) { //para bloquear pegar
    e.preventDefault();
  }


  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) { //para bloquear copiar
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) { //para bloquear cortar
    e.preventDefault();
  }

  @HostListener('blur', ['$event']) blurEvent(e: any) {
    if (!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(e.target.value))) {
      this.setInput('');
      this.writeValue('');
      alert('la dirección de correo ingresada no es válida. Digítela nuevamente');
      console.log('formato de correo inválido');
     }
     else{
      this.setInput(e.target.value);
      this.writeValue(e.target.value);
     }
  }

  public setInput(value: any): void {
    this.element.value = value;
    this.element.dispatchEvent(new Event('input'));
  }

}
