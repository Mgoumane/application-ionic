import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup = this.fb.group({
		username: [],
		password: [],
	});

	constructor(private router: Router, private fb: FormBuilder) { }

	ngOnInit() {
		this.loginForm = this.fb.group({
			codeEvenement: [],
		});
	}

	login() {
		console.log('Données du formulaire', this.loginForm.value)
		this.router.navigate(['/home']);
	}
}
