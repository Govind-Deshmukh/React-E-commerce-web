import React from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'


const Dashboard = () => {

	return (
		<>
			<div>
				<h1>Hi, Welcome to our shop</h1>
			</div>
			<div className='d-flex justify-content-center'>
				<div className="card">
					<img className="card-img-top" alt="okay" src="https://magmainfotech.herokuapp.com/static/img/logo.png" />
						<div className="card-body">
							<h5 className="card-title">Product 1</h5>
							<p className="card-text">Product 1 info goes here</p>
							<a href="#" className="btn btn-primary">Buy Now</a>
						</div>
					</div>				
			</div>
	
		</>

	)
}

export default Dashboard
