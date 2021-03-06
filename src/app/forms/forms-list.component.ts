/**
 * Created by SergST on 22.02.2017.
 */

import { Component } from "@angular/core";

@Component ({
  selector: "forms-list",
  template: `
     <form-scu></form-scu>
     <div class="ui divider"></div>
     <form-sku-builder></form-sku-builder>
     <div class="ui divider"></div>
     <form-validation-expl></form-validation-expl>
     <div class="ui divider"></div>
     <form-validation-custom></form-validation-custom>
     <div class="ui divider"></div>
     <form-validation-events></form-validation-events>
     <div class="ui divider"></div>
     <form-ngmodel></form-ngmodel>
  `
})
export class FormsList{}