import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent  implements OnInit {

	constructor(private router: Router) { }
	title = "Aloha Checkin";
	codeEvenement = "";
	ngOnInit() {}

	inputValue(event:any) 
	{ 
		this.codeEvenement =  event.target.value;
	} 
	login(){ 
		fetch("https://dev.aloha-checkin.mediactive-events.com/wsrv/mobile/index.php", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				codeEvenement: this.codeEvenement,
			}) 
		})
		.then((res)=>{
			return res.json();
		})
		.then((value)=>{
			// Réponse du serveur 
			//console.log(value);
			this.router.navigate(['/home']);
		})
		
	}
}
