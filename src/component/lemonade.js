import React, { Component } from 'react';
import { connect } from 'react-redux';
import {buyLemonade,incStock} from '../store/action/lemonadeAction';

 class lemonade extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="card" style={{width: "18rem"}}>
                        <h4 className="text-center mt-4">Lemonade Stand</h4>
                        <div className="card-body">
                            <div>
                                <h5>Stock</h5>
                                <p>{this.props.lemo} lemonades left</p>
                                <button className="btn btn-primary" 
                                onClick={this.props.buyLemonade}
                                //onClick={this.increment}
                                >Buy Lemondes</button>
                            </div>
                            <div className="mt-5">
                                <h5>Revenue</h5>
                                <p>{this.props.rev} $ today</p>
                                <button className="btn btn-success" 
                                onClick={this.props.incStock}
                                //onClick={this.decrement}
                                >Increase Stock</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state) =>{
  return {
    lemo: state.lemon.lemo,
    rev: state.lemon.rev,
  };
}

export default connect(mapStateToProps,{buyLemonade,incStock})(lemonade);