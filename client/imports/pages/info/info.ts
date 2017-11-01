import { Component,OnInit } from '@angular/core';
import template from './info.html';
import {ActivatedRoute} from '@angular/router';
import{Observable} from 'rxjs';
import { Register } from '../../../../both/models';

import {Actions} from '../../../../both/collections/actions';
import { Registers } from '../../../../both/collections/register'

@Component({
    template
})
export class InfoPage {

  private id;
  private sub :any;

  registers: Observable<Register[]>;
  temperature : Observable<any>;
  pressure : Observable<any>;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
      this.sub = this.route.queryParams.subscribe(params => {
          this.id= params['id'];
          this.temperature = Actions.find({id_client:this.id, action_name:"temperature"},{ sort: {createdAt:-1}, limit:5});
          this.registers= Registers.findOne({_id:this.id});
          this.pressure = Actions.find({id_client:this.id, action_name:"pressure"},{sort: {createdAt:-1}, limit:5});
          console.log(this.temperature)
      })


  }

}