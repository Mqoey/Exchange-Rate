
import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: [
                {
                    "id": 1,
                    "name": "ZWL",
                    "value": 113,
                    "created_at": "2022-01-31T13:02:08.000Z",
                    "updated_at": "2022-01-31T13:02:08.000Z"
                },
                {
                    "id": 2,
                    "name": "EUR",
                    "value": 126,
                    "created_at": "2022-01-30T13:02:08.000Z",
                    "updated_at": "2022-01-30T13:02:08.000Z"
                },
                {
                    "id": 3,
                    "name": "BWP",
                    "value": 10,
                    "created_at": "2022-01-30T13:02:08.000Z",
                    "updated_at": "2022-01-30T13:02:08.000Z"
                },
                {
                    "id": 4,
                    "name": "GBP",
                    "value": 151,
                    "created_at": "2022-01-18T13:02:08.000Z",
                    "updated_at": "2022-01-18T13:02:08.000Z"
                }
            ],
            selectedOption: {
                "id": 1,
                "name": "ZWL",
                "value": 113,
                "created_at": "2022-01-31T13:02:08.000Z",
                "updated_at": "2022-01-31T13:02:08.000Z"
            },

            selectedOption2: {
                "id": 2,
                "name": "EUR",
                "value": 126,
                "created_at": "2022-01-30T13:02:08.000Z",
                "updated_at": "2022-01-30T13:02:08.000Z"
            },
        };
    }
    renderOption() {
        return this.state.currencies.map((currency, key) => <option value="{currency.name}">{currency.name}</option>);;
    }

    handleChange = e => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    handleChange2 = e => {
        this.setState({
            selectedOption2: e.target.value
        })
    }

    render() {

        const { currencies } = this.state;

        return (
            <div>
                {/* Start Spinner */}
                <div id="preloader">
                    <div class="spinner">
                        <div class="spinner-a">
                        </div>
                        <div class="spinner-b">
                        </div>
                    </div>
                </div>
                {/* End Spinner */}

                <div id="main-wrapper">

                    <div class="content-body">

                        <div class="row page-titles mx-0">
                            <div class="col p-md-0">
                                <div class="breadcrumb-range-picker">
                                    <span><i class="icon-calender"></i></span>
                                    <span class="ml-1">January 08, 2022 - January 31, 2022</span>
                                </div>
                            </div>
                            <div class="col p-md-0 justify-content-end d-flex">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Components</a></li>
                                </ol>
                            </div>
                        </div>

                        <div class="container">

                            <div class="row">
                                <div class="col-lg-12 text-center">
                                    <div class="card currency-exchange-big">
                                        <div class="card-body text-center">
                                            <h2>Exchange Rate - Currency Converter.</h2>
                                            <p>Free foreign exchange rates and tools including a currency conversion calculator, historical rates and graphs, and a monthly exchange rate average..</p>
                                            <form action="#" class="currency-exchange mt-5">
                                                <div class="form-row justify-content-center">
                                                    <div class="form-group col-md-4">
                                                        <div class="input-group mb-0 mb-md-4">
                                                            <input type="text" value={this.state.selectedOption.value}
                                                                onChange={this.handleChange} class="form-control" aria-label="Text input with dropdown button" placeholder="0.25" />
                                                            <div class="input-group-append">
                                                                <select data-width="auto" class="custom-select bg-primary text-white" onChange={this.handleChange}>
                                                                    {this.state.currencies.map((i, index) => i.id == this.state.selectedOption.id ? (
                                                                        <option value={i.id} selected key={index}>
                                                                            {i.name}
                                                                        </option>
                                                                    ) : (<option value={i.id} key={index}>{i.name}</option>))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="form-group col-md-1">
                                                        <div class="text-center mt-md-3">
                                                            <i class="fa fa-exchange"></i>
                                                        </div>
                                                    </div>

                                                    <div class="form-group col-md-4">
                                                        <div class="input-group mb-4">
                                                            <input type="number" value={this.state.selectedOption2.value}
                                                                onChange={this.handleChange2} class="form-control" aria-label="Text input with dropdown button" placeholder="0.25" />
                                                            <div class="input-group-append">
                                                                <select data-width="auto" class="custom-select bg-primary text-white" onChange={this.handleChange2}>
                                                                    {this.state.currencies.map((i, index) => i.id == this.state.selectedOption2.id ? (
                                                                        <option value={i.id} selected key={index}>
                                                                            {i.name}
                                                                        </option>
                                                                    ) : (<option value={i.id} key={index}>{i.name}</option>))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-md-12 text-center">
                                                        <button type="submit" class="btn btn-primary qx_btn pr-5 pl-5">Exchange Now</button>
                                                        <p class="mt-3">You could save up to $45,42</p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-xxl-4 col-xl-3">
                                    <div class="card stat-widget-one bg-btc">
                                        <div class="card-body">
                                            <div class="row justify-content-between">
                                                <div class="col-auto">
                                                    <h4 class="mb-3">ZWL</h4>

                                                    <h3 class="mb-3">1.765 ZWL</h3>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="cc BTC-alt" title="BTC"></i>
                                                </div>
                                            </div>
                                            <div class="mb-4">
                                                <span class="badge text-success">
                                                    <i class="mdi mdi-arrow-up-bold"></i> 2.50 %
                                                </span>
                                                <span> Since last month</span>
                                            </div>

                                            <div class="progress">
                                                {/* <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-xxl-4 col-xl-3">
                                    <div class="card stat-widget-one bg-eth">
                                        <div class="card-body">
                                            <div class="row justify-content-between">
                                                <div class="col-auto">
                                                    <h4 class="mb-3">GDP</h4>

                                                    <h3 class="mb-3">1.765 ETH</h3>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="cc cc ETH-alt" title="ETH"></i>
                                                </div>
                                            </div>
                                            <div class="mb-4">
                                                <span class="badge text-danger">
                                                    <i class="mdi mdi-arrow-down-bold"></i> 2.50 %
                                                </span>
                                                <span> Since last month</span>
                                            </div>

                                            <div class="progress">
                                                {/* <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-xxl-4 col-xl-3">
                                    <div class="card stat-widget-one bg-xrp">
                                        <div class="card-body">
                                            <div class="row justify-content-between">
                                                <div class="col-auto">
                                                    <h4 class="mb-3">Ripple</h4>

                                                    <h3 class="mb-3">1.765 XRP</h3>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="cc XRP-alt" title="XRP"></i>
                                                </div>
                                            </div>
                                            <div class="mb-4">
                                                <span class="badge text-success">
                                                    <i class="mdi mdi-arrow-up-bold"></i> 2.50 %
                                                </span>
                                                <span> Since last month</span>
                                            </div>

                                            <div class="progress">
                                                {/* <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-xxl-4 col-xl-3">
                                    <div class="card stat-widget-one bg-dash">
                                        <div class="card-body">
                                            <div class="row justify-content-between">
                                                <div class="col-auto">
                                                    <h4 class="mb-3">Dash</h4>

                                                    <h3 class="mb-3">1.765 BTC</h3>
                                                </div>
                                                <div class="col-auto">
                                                    <i class="cc DASH-alt"></i>
                                                </div>
                                            </div>
                                            <div class="mb-4">
                                                <span class="badge text-danger">
                                                    <i class="mdi mdi-arrow-down-bold"></i> 2.50 %
                                                </span>
                                                <span> Since last month</span>
                                            </div>

                                            <div class="progress">
                                                {/* <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="footer">
                        <div class="copyright">
                            <p>Copyright © Designed  Developed by <a href="https://mqographics.co.zw" target="_blank">Mqondisi</a> 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home