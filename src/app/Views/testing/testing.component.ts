import { Component, OnInit } from '@angular/core';
import { ToolsService } from '../../Services/Tools/tools.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

	constructor(private _tools: ToolsService)
	{
	  
	}

	ngOnInit()
	{
	  
	}
	public goHome()
	{
		//use this when you want to go to a different page, just 
		//replace home with the page you want to go
		this._tools.getRouter().navigate(["home"]);
	}
}