import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

	constructor(
		  private _router: Router
	) {
      
	}

	public getRouter()
	{
		return this._router;
	}
}
