// Registered Components
const buyCoin = {
	data() {
		return {
			price: 100,
			amount: 1,
			total: 0
		}
	},
	template: `
		<div class="card border-top-0">
			<div class="card-header bg-white">
				Buy QC
			</div>
			<div class="card-body">
				<form>
					<div class="form-group row">
					    <label for="buyPrice" class="col-sm-3 col-form-label"><small><strong>Price</strong></small></label>
					    <div class="col-sm-9">
					      	<div class="input-group mb-3">
							  <input type="number" class="form-control form-control-sm text-right" v-model="price">
							  <div class="input-group-prepend">
							    <span class="input-group-text p-0 px-2" id="buyPrice">IDR</span>
							  </div>
							</div>
					    </div>
					</div>
					<div class="form-group row">
					    <label for="buyAmount" class="col-sm-3 col-form-label"><small><strong>Amount</strong></small></label>
					    <div class="col-sm-9">
					    	<div class="input-group mb-3">
							  <input type="number" class="form-control form-control-sm text-right" v-model="amount">
							  <div class="input-group-prepend">
							    <span class="input-group-text p-0 px-2" id="buyAmount">BTC</span>
							  </div>
							</div>
					    </div>
					</div>
					<hr />
					<div class="form-group row">
					    <label for="buyTotal" class="col-sm-3 col-form-label"><small><strong>Total</strong></small></label>
					    <div class="col-sm-9">
					    	<div class="input-group mb-3">
							  <input type="number" class="form-control form-control-sm text-right" :value="totalPrice">
							  <div class="input-group-prepend">
							    <span class="input-group-text p-0 px-2" id="buyTotal">IDR</span>
							  </div>
							</div>
					    </div>
					</div>
					<div class="form-group">
						<div class="border border-warning rounded">
							<small class="text-center d-block p-2">
								<a href=""><strong class="text-warning">Log In</strong></a> or <a href=""><strong class="text-warning">Register</strong></a> to trade
							</small>
						</div>
					</div>
				</form>
			</div>
		</div>
	`,
	computed: {
		totalPrice() {
			return this.price * this.amount
		}
	}
}

const sellCoin = {
	data() {
		return {
			price: 100,
			amount: 1,
			total: 0
		}
	},
	template: `
		<div class="card border-top-0">
			<div class="card-header bg-white">
				Sell QC
			</div>
			<div class="card-body">
				<form>
					<div class="form-group row">
					    <label for="buyPrice" class="col-sm-3 col-form-label"><small><strong>Price</strong></small></label>
					    <div class="col-sm-9">
					      	<div class="input-group mb-3">
							  <input type="number" class="form-control form-control-sm text-right" v-model="price">
							  <div class="input-group-prepend">
							    <span class="input-group-text p-0 px-2" id="buyPrice">IDR</span>
							  </div>
							</div>
					    </div>
					</div>
					<div class="form-group row">
					    <label for="buyAmount" class="col-sm-3 col-form-label"><small><strong>Amount</strong></small></label>
					    <div class="col-sm-9">
					    	<div class="input-group mb-3">
							  <input type="number" class="form-control form-control-sm text-right" v-model="amount">
							  <div class="input-group-prepend">
							    <span class="input-group-text p-0 px-2" id="buyAmount">BTC</span>
							  </div>
							</div>
					    </div>
					</div>
					<hr />
					<div class="form-group row">
					    <label for="buyTotal" class="col-sm-3 col-form-label"><small><strong>Total</strong></small></label>
					    <div class="col-sm-9">
					    	<div class="input-group mb-3">
							  <input type="number" class="form-control form-control-sm text-right" :value="totalPrice">
							  <div class="input-group-prepend">
							    <span class="input-group-text p-0 px-2" id="buyTotal">IDR</span>
							  </div>
							</div>
					    </div>
					</div>
					<div class="form-group">
						<div class="border border-warning rounded">
							<small class="text-center d-block p-2">
								<a href=""><strong class="text-warning">Log In</strong></a> or <a href=""><strong class="text-warning">Register</strong></a> to trade
							</small>
						</div>
					</div>
				</form>
			</div>
		</div>
	`,
	computed: {
		totalPrice() {
			return this.price * this.amount
		}
	}
}

const stopLimit = {
	data() {
		return {
			price: 100,
			amount: 1,
			total: 0
		}
	},
	template: `
		<div class="card border-top-0">
			<div class="card-header bg-white">
				Buy QC
			</div>
			<div class="card-body">
				<form>
					<div class="form-group row">
					    <label for="buyPrice" class="col-sm-3 col-form-label"><small><strong>Price</strong></small></label>
					    <div class="col-sm-9">
					      	<div class="input-group mb-3">
							  <input type="number" class="form-control text-right" v-model="price">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="buyPrice">IDR</span>
							  </div>
							</div>
					    </div>
					</div>
					<div class="form-group row">
					    <label for="buyAmount" class="col-sm-3 col-form-label"><small><strong>Amount</strong></small></label>
					    <div class="col-sm-9">
					    	<div class="input-group mb-3">
							  <input type="number" class="form-control text-right" v-model="amount">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="buyAmount">BTC</span>
							  </div>
							</div>
					    </div>
					</div>
					<hr />
					<div class="form-group row">
					    <label for="buyTotal" class="col-sm-3 col-form-label"><small><strong>Total</strong></small></label>
					    <div class="col-sm-9">
					    	<div class="input-group mb-3">
							  <input type="number" class="form-control text-right" :value="totalPrice">
							  <div class="input-group-prepend">
							    <span class="input-group-text" id="buyTotal">IDR</span>
							  </div>
							</div>
					    </div>
					</div>
				</form>
			</div>
		</div>
	`,
	computed: {
		totalPrice() {
			return this.price * this.amount
		}
	}	
}

const ticker = {
	template: `
		<div class="row">
			<div class="col-lg-12">
				<div class="row" id="ticker">
					<div class="col-lg-2">
						<span class="d-block text-secondary"><strong><big>BTC</big>/QC</strong></span>
						<span>Bitcoin</span>
					</div>
					<div class="col">
						<small class="d-block text-secondary mb-1">Last Price</small>
						<span>Rp.10,100,001</span>
					</div>
					<div class="col">
						<small class="d-block text-secondary mb-1">24h Change</small>
						<span>Rp.10,100,001</span>
					</div>
					<div class="col">
						<small class="d-block text-secondary mb-1">24h High</small>
						<span>Rp.10,100,001</span>
					</div>
					<div class="col">
						<small class="d-block text-secondary mb-1">24h Low</small>
						<span>Rp.10,100,001</span>
					</div>
					<div class="col">
						<small class="d-block text-secondary mb-1">24h Volume</small>
						<span>Rp.10,100,001</span>
					</div>
				</div>
			</div>
		</div>
	`
}
	
const tradingChart = {
	data() {
		return {
			base: 'QC/BTC'
		}
	},
	template: `
		<div class="row mt-4">
			<div class="col-lg-4">
				<div class="card">
					<div class="card-header bg-white p-0 border-0">
						<ul class="nav nav-tabs border-0" id="myTab" role="tablist">
							<li class="nav-item">
							    <a class="nav-link active" id="buy-tab" data-toggle="tab" href="#buy" role="tab" aria-controls="buy" aria-selected="true">Buy</a>
							</li>
							<li class="nav-item">
							    <a class="nav-link" id="sell-tab" data-toggle="tab" href="#sell" role="tab" aria-controls="sell" aria-selected="false">Sell</a>
							</li>
						</ul>
					 </div>
					 <div class="card-body p-0">
						<div class="tab-content" id="myTabContent">
						 	<div class="tab-pane fade show active" id="buy" role="tabpanel" aria-labelledby="buy-tab">
								<div class="table-responsive">
									<table class="table table-striped">
									  <thead>
									    <tr>
									      <th scope="col">Price</th>
									      <th scope="col">ETH</th>
									      <th scope="col">BTC</th>
									      <th scope="col">SUM(BTC)</th>
									    </tr>
									  </thead>
									  <tbody>
									    <tr v-for="x in 50">
									      <td class="text-success py-0">0.000212112</td>
									      <td class="py-0">0.000212112</td>
									      <td class="py-0">0.000212112</td>
									      <td class="py-0">1.009987890</td>
									    </tr>
									  </tbody>
									</table>
								</div>
							</div>
							<div class="tab-pane fade" id="sell" role="tabpanel" aria-labelledby="sell-tab">
								<div class="table-responsive">
									<table class="table table-striped">
									  <thead>
									    <tr>
									      <th scope="col">Price</th>
									      <th scope="col">ETH</th>
									      <th scope="col">BTC</th>
									      <th scope="col">SUM(BTC)</th>
									    </tr>
									  </thead>
									  <tbody>
									    <tr v-for="y in 50">
									      <td class="text-danger py-0">0.000212112</td>
									      <td class="py-0">0.000212112</td>
									      <td class="py-0">0.000212112</td>
									      <td class="py-0">1.009987890</td>
									    </tr>
									  </tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-8">
				<div class="row">
					<div class="col-lg-12">
						<div class="card">
							<div class="card-body">
								<div id="trading-chart"></div>
							</div>
						</div>
					</div>
					<div class="col-lg-12 mt-4">
						<ul class="nav nav-tabs" id="myTab" role="tablist">
						  <li class="nav-item">
						    <a class="nav-link active" id="market-tab" data-toggle="tab" href="#market" role="tab" aria-controls="market" aria-selected="true">Market</a>
						  </li>
						  <li class="nav-item">
						    <a class="nav-link" id="stoplimit-tab" data-toggle="tab" href="#stoplimit" role="tab" aria-controls="stoplimit" aria-selected="false">Stop Limit</a>
						  </li>
						</ul>
						<div class="tab-content" id="myTabContent">
						  <div class="tab-pane fade show active" id="market" role="tabpanel" aria-labelledby="market-tab">
							<div class="row">
								<div class="col-6">
									<buy-coin></buy-coin>
								</div>
								<div class="col-6">
									<sell-coin></sell-coin>
								</div>
							</div>
						  </div>
						  <div class="tab-pane fade" id="stoplimit" role="tabpanel" aria-labelledby="stoplimit-tab">
							<stop-limit></stop-limit>
						  </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
	components: {
		'buy-coin': buyCoin,
		'sell-coin': sellCoin,
		'stop-limit': stopLimit
	},
	mounted() {
		let options = {
			chart: {
				height: 350,
				type: 'candlestick',
			},
			series: [{
				data: [{
					x: new Date(1538778600000),
					y: [6629.81, 6650.5, 6623.04, 6633.33]
				},
				{
					x: new Date(1538780400000),
					y: [6632.01, 6643.59, 6620, 6630.11]
				},
				{
					x: new Date(1538782200000),
					y: [6630.71, 6648.95, 6623.34, 6635.65]
				},
				{
					x: new Date(1538784000000),
					y: [6635.65, 6651, 6629.67, 6638.24]
				},
				{
					x: new Date(1538785800000),
					y: [6638.24, 6640, 6620, 6624.47]
				},
				{
					x: new Date(1538787600000),
					y: [6624.53, 6636.03, 6621.68, 6624.31]
				},
				{
					x: new Date(1538789400000),
					y: [6624.61, 6632.2, 6617, 6626.02]
				},
				{
					x: new Date(1538791200000),
					y: [6627, 6627.62, 6584.22, 6603.02]
				},
				{
					x: new Date(1538793000000),
					y: [6605, 6608.03, 6598.95, 6604.01]
				},
				{
					x: new Date(1538794800000),
					y: [6604.5, 6614.4, 6602.26, 6608.02]
				},
				{
					x: new Date(1538796600000),
					y: [6608.02, 6610.68, 6601.99, 6608.91]
				},
				{
					x: new Date(1538798400000),
					y: [6608.91, 6618.99, 6608.01, 6612]
				},
				{
					x: new Date(1538800200000),
					y: [6612, 6615.13, 6605.09, 6612]
				},
				{
					x: new Date(1538802000000),
					y: [6612, 6624.12, 6608.43, 6622.95]
				},
				{
					x: new Date(1538803800000),
					y: [6623.91, 6623.91, 6615, 6615.67]
				},
				{
					x: new Date(1538805600000),
					y: [6618.69, 6618.74, 6610, 6610.4]
				},
				{
					x: new Date(1538807400000),
					y: [6611, 6622.78, 6610.4, 6614.9]
				},
				{
					x: new Date(1538809200000),
					y: [6614.9, 6626.2, 6613.33, 6623.45]
				},
				{
					x: new Date(1538811000000),
					y: [6623.48, 6627, 6618.38, 6620.35]
				},
				{
					x: new Date(1538812800000),
					y: [6619.43, 6620.35, 6610.05, 6615.53]
				},
				{
					x: new Date(1538814600000),
					y: [6615.53, 6617.93, 6610, 6615.19]
				},
				{
					x: new Date(1538816400000),
					y: [6615.19, 6621.6, 6608.2, 6620]
				},
				{
					x: new Date(1538818200000),
					y: [6619.54, 6625.17, 6614.15, 6620]
				},
				{
					x: new Date(1538820000000),
					y: [6620.33, 6634.15, 6617.24, 6624.61]
				},
				{
					x: new Date(1538821800000),
					y: [6625.95, 6626, 6611.66, 6617.58]
				},
				{
					x: new Date(1538823600000),
					y: [6619, 6625.97, 6595.27, 6598.86]
				},
				{
					x: new Date(1538825400000),
					y: [6598.86, 6598.88, 6570, 6587.16]
				},
				{
					x: new Date(1538827200000),
					y: [6588.86, 6600, 6580, 6593.4]
				},
				{
					x: new Date(1538829000000),
					y: [6593.99, 6598.89, 6585, 6587.81]
				},
				{
					x: new Date(1538830800000),
					y: [6587.81, 6592.73, 6567.14, 6578]
				},
				{
					x: new Date(1538832600000),
					y: [6578.35, 6581.72, 6567.39, 6579]
				},
				{
					x: new Date(1538834400000),
					y: [6579.38, 6580.92, 6566.77, 6575.96]
				},
				{
					x: new Date(1538836200000),
					y: [6575.96, 6589, 6571.77, 6588.92]
				},
				{
					x: new Date(1538838000000),
					y: [6588.92, 6594, 6577.55, 6589.22]
				},
				{
					x: new Date(1538839800000),
					y: [6589.3, 6598.89, 6589.1, 6596.08]
				},
				{
					x: new Date(1538841600000),
					y: [6597.5, 6600, 6588.39, 6596.25]
				},
				{
					x: new Date(1538843400000),
					y: [6598.03, 6600, 6588.73, 6595.97]
				},
				{
					x: new Date(1538845200000),
					y: [6595.97, 6602.01, 6588.17, 6602]
				},
				{
					x: new Date(1538847000000),
					y: [6602, 6607, 6596.51, 6599.95]
				},
				{
					x: new Date(1538848800000),
					y: [6600.63, 6601.21, 6590.39, 6591.02]
				},
				{
					x: new Date(1538850600000),
					y: [6591.02, 6603.08, 6591, 6591]
				},
				{
					x: new Date(1538852400000),
					y: [6591, 6601.32, 6585, 6592]
				},
				{
					x: new Date(1538854200000),
					y: [6593.13, 6596.01, 6590, 6593.34]
				},
				{
					x: new Date(1538856000000),
					y: [6593.34, 6604.76, 6582.63, 6593.86]
				},
				{
					x: new Date(1538857800000),
					y: [6593.86, 6604.28, 6586.57, 6600.01]
				},
				{
					x: new Date(1538859600000),
					y: [6601.81, 6603.21, 6592.78, 6596.25]
				},
				{
					x: new Date(1538861400000),
					y: [6596.25, 6604.2, 6590, 6602.99]
				},
				{
					x: new Date(1538863200000),
					y: [6602.99, 6606, 6584.99, 6587.81]
				},
				{
					x: new Date(1538865000000),
					y: [6587.81, 6595, 6583.27, 6591.96]
				},
				{
					x: new Date(1538866800000),
					y: [6591.97, 6596.07, 6585, 6588.39]
				},
				{
					x: new Date(1538868600000),
					y: [6587.6, 6598.21, 6587.6, 6594.27]
				},
				{
					x: new Date(1538870400000),
					y: [6596.44, 6601, 6590, 6596.55]
				},
				{
					x: new Date(1538872200000),
					y: [6598.91, 6605, 6596.61, 6600.02]
				},
				{
					x: new Date(1538874000000),
					y: [6600.55, 6605, 6589.14, 6593.01]
				},
				{
					x: new Date(1538875800000),
					y: [6593.15, 6605, 6592, 6603.06]
				},
				{
					x: new Date(1538877600000),
					y: [6603.07, 6604.5, 6599.09, 6603.89]
				},
				{
					x: new Date(1538879400000),
					y: [6604.44, 6604.44, 6600, 6603.5]
				},
				{
					x: new Date(1538881200000),
					y: [6603.5, 6603.99, 6597.5, 6603.86]
				},
				{
					x: new Date(1538883000000),
					y: [6603.85, 6605, 6600, 6604.07]
				},
				{
					x: new Date(1538884800000),
					y: [6604.98, 6606, 6604.07, 6606]
				},
				]
			}],
			title: {
				text: this.base,
				align: 'left'
			},
			xaxis: {
				type: 'datetime'
			},
			yaxis: {
				tooltip: {
					enabled: true
				}
			}
		}

		let chart = new ApexCharts(
			document.querySelector("#trading-chart"),
			options
			);

		chart.render();
	}
}

const stockMarketControl = {
	template: `
		<div id="stock-market-control" class="mb-3 mx-1 row">
			<div class="col-12">
				<div class="btn-group mb-2" role="group">
				  <button type="button" class="btn btn-outline-secondary btn-sm sm-btn-control">QC</button>
				  <button type="button" class="btn btn-outline-secondary btn-sm sm-btn-control">BTC</button>
				  <button type="button" class="btn btn-outline-secondary btn-sm sm-btn-control">ALTS</button>
				</div>
			</div>
			<div class="col-6">
				<input type="search" class="form-control form-control-sm" placeholder="search" />
			</div>
			<div class="col-6">
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="change" id="sm-change-control" value="change" checked>
				  <label class="form-check-label" for="sm-change-control">
				    Change
				  </label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="volume" id="sm-volume-control" value="volume">
				  <label class="form-check-label" for="sm-volume-control">
				    Volume
				  </label>
				</div>
			</div>
		</div>
	`
}

const stockMarket = {
	template: `
		<div class="card">
			 <div class="card-body p-0">
				<strong class="mb-3 d-block m-3">Markets</strong>
				<stock-market-control></stock-market-control>
				<div class="table-responsive" id="stock-market">
					<table class="table mb-0 table-striped">
					  	<thead>
					    	<tr>
						      	<th scope="col">Coin</th>
						      	<th scope="col">Price</th>
						      	<th scope="col">Volume</th>
						      	<th scope="col">Change</th>
						    </tr>
					  	</thead>
					  	<tbody>
					  		<tr v-for="x in 50">
					  			<td class="py-0">BTC</td>
					  			<td class="py-0">20.000</td>
					  			<td class="py-0">20.000</td>
					  			<td class="py-0 text-success">0.10%</td>
					  		</tr>
					  	</tbody>
					</table>
				</div>
			</div>
		</div>
	`,
	components: {
		'stock-market-control': stockMarketControl
	}
}

const marketTrades = {
	template: `
		<div class="card">
			<div class="card-body p-0">
				<strong class="mb-3 d-block m-3">Market Trades</strong>
				<div class="table-responsive" id="market-trades">
					<table class="table mb-0 table-striped">
					  	<thead>
					    	<tr>
						      	<th scope="col">Date</th>
						      	<th scope="col">Type</th>
						      	<th scope="col">Price</th>
						      	<th scope="col">Amount</th>
						      	<th scope="col">Total</th>
						    </tr>
					  	</thead>
					  	<tbody>
					  		<tr v-for="x in 50">
					  			<td class="py-0">20-09-2019</td>
					  			<td class="text-success py-0">Buy</td>
					  			<td class="py-0">20.000.000</td>
					  			<td class="py-0">10.000.000</td>
					  			<td class="py-0">123.000.00</td>
					  		</tr>
					  	</tbody>
					</table>
				</div>
			</div>
		</div>
	`
}

// Qovar Navigation Bar
Vue.component('qovar-navbar', {
	template: `
		<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm	">
			<div class="container">
				<a class="navbar-brand" href="#">Qovar</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Dropdown
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" href="#">Action</a>
								<a class="dropdown-item" href="#">Another action</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">Something else here</a>
							</div>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	`
})

// Exchange Container
Vue.component('qovar-exchange-container', {
	template: `
		<div class="container-fluid mt-5">
			<div class="row">
				<div class="col-lg-9">
					<ticker></ticker>
					<trading-chart></trading-chart>
				</div>
				<div class="col-lg-3">
					<stock-market></stock-market>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-lg-12">
					<market-trades></market-trades>
				</div>
			</div>
		</div>
	`,
	components: {
		'ticker': ticker,
		'trading-chart': tradingChart,
		'stock-market': stockMarket,
		'market-trades': marketTrades
	}
})

// Footer
Vue.component('qovar-footer', {
	template: `
		<div class="jumbotron container-fluid mb-0 mt-5">
			<h1 class="text-center">Footer</h1>
		</div>
	`
})

new Vue({
	el: '#qovar-exchange',
})