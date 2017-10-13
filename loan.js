let app = new Vue({
	el: '#app',
	data: {
		amount: '',
		interestRate: '',
		months: '',
		display: ''
	},

	methods: {
		calculate: function(event) {
			let interestPerPrincipal = this.amount * (this.interestRate/100);
			let interestPerMonth = interestPerPrincipal/this.months;

			let paymentPerMonth = ((this.amount/this.months) + interestPerMonth).toFixed(2);

			this.display = "The monthly repayment is: " + paymentPerMonth;
		}
	}
})