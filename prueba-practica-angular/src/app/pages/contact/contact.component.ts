import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    nombre: '',
    email: '',
    contrasena: ''
  };

  onSubmit() {
    console.log('Formulario enviado:', this.formData);
    // vemos los datos por consola
    console.log(this.formData);
    }
}
