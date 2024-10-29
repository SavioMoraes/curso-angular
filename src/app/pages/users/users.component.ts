import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  // users: String[] = ['Sávio', 'Vera', 'Noah', 'Thor', 'Lucas', 'Lorena'];

  userSelecionado: User | undefined;

  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      idade: [0, [Validators.required, Validators.min(12), Validators.max(110)]]
    });
  }

  SubmitForm() {
    // if (this.userForm.invalid) {
    //   return;
    // }

    // const user: User = {
    //   nome: this.userForm.get('nome')?.value,
    //   idade: this.userForm.get('idade')?.value
    // };

    // this.users.push(user);
    // this.userForm.reset();
    console.log(this.userForm.value);

  }

  users: User[] = [
    { nome: 'Sávio', idade: 44 },
    { nome: 'Vera', idade: 43 },
    { nome: 'Noah', idade: 19 },
    { nome: 'Thor', idade: 6 },
    { nome: 'Lucas', idade: 21 },
    { nome: 'Lorena', idade: 17 }
  ];

  infoUserSelecionado(user: User) {
    this.userSelecionado = user;
  }
}
