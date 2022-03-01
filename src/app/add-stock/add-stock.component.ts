import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StockService } from '../services/stock.service';


/**
 * Use Reactive forms
 * Validations
 * stock price should be positive 
 * quantity should be positive and max 100 can be added at a time
 * name should not be empty or null and max 10 letters   
 */
@Component({
	selector: 'app-add-stock',
	templateUrl: './add-stock.component.html',
	styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

	public form: FormGroup = this.formBuilder.group(
		{
			stockName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
			price : new FormControl('', Validators.required),
			quantity: new FormControl('', [Validators.required, Validators.max(100)]),
		},
	);

	constructor(
		private formBuilder: FormBuilder,
		private stockService: StockService
	) { }

	ngOnInit(): void {
		
	}

	resetForm(){
		this.form.get('stockName').setValue('')
		this.form.get('quantity').setValue('')
		this.form.get('price').setValue('')
	}

	submit() {
		if (this.form.valid) {
			console.log(this.form.value)
			this.stockService.add(this.form.value);
			this.resetForm()
			alert('Stock Added');
		}
	}

	// checking fieds are valid or not
	isFieldInvalid(field: string) {
		return (
			(this.form.get(field).invalid)
		);
	}

}
