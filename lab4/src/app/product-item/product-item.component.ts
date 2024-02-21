import { Component,OnInit, Input  } from '@angular/core';
import {
  CommonModule
} from "@angular/common";
import {
  itemList
} from "../products";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})

export class ProductItemComponent implements OnInit {

  itemList = itemList;

  goBack(i:number){
    if(this.itemList[i]["imgSrc"].length >1){
      if(this.itemList[i]["imgCnt"] == 1 || this.itemList[i]["imgCnt"]==2){
        this.itemList[i]["imgCnt"]--;

      }else if(this.itemList[i]["imgCnt"] ==0){
        this.itemList[i]["imgCnt"] = 2;
      }
    }
  }

  goForward(i:number){
    if(this.itemList[i]["imgSrc"].length >1){
      if(this.itemList[i]["imgCnt"] == 0 || this.itemList[i]["imgCnt"]==1){
        this.itemList[i]["imgCnt"]++;

      }else if(this.itemList[i]["imgCnt"] ==2){
        this.itemList[i]["imgCnt"] = 0;
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

