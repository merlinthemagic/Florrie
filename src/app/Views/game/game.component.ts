import { Component, OnInit } from '@angular/core';
import { ToolsService } from '../../Services/Tools/tools.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	constructor(private _tools: ToolsService)
	{
		
	}

	ngOnInit()
	{
	  
	}
	public goToDuck()
	{
		this._tools.getRouter().navigate(["duck"]);
		
		
	}
}
