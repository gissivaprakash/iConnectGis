import React, { Component } from 'react';

import styles from './sidebar.css';
import {NavLink} from 'react-router-dom';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon, Row, Col} from 'react-bootstrap';
import {Switch, Route, Redirect} from 'react-router-dom';
import Nav1 from './nav1'
import Header from './header'
// import App from './App';
// const style = {
// 	heading :{
// 		textAlign: 'center',
//     color: '#ec9090'
// 	}
// }
console.log(Nav1 , "NAV!")
class Dashboard extends Component {


  render() {
    return (
    	<div>
    	<Header />
    	<Col md={12}>
    	
    	<Row className="show-grid" >
		    <Col xs={6} md={2} id="sidebar-menu">
		      <Nav>
	            	<NavItem>
	            		<NavLink to="/dashboard/nav1" activeClassName="active" >
			              NAV 1
			            </NavLink>
	            	</NavItem>
	            	<NavItem>
	            		<NavLink to="/" activeClassName="active" >
			              NAV 2
			            </NavLink>
			            
	            	</NavItem>
	            	<NavItem>
	            		<NavLink to="/" activeClassName="active" >
			              NAV 3
			            </NavLink>
	            	</NavItem>
	            	<NavItem>
	            		<NavLink to="/" activeClassName="active" >
			              NAV 4
			            </NavLink>
	            	</NavItem>
	            	<NavItem>
	            		<NavLink to="/" activeClassName="active" >
			              NAV 5
			            </NavLink>
	            	</NavItem>
	            	<NavItem>
	            		<NavLink to="/" activeClassName="active" >
			              NAV 6
			            </NavLink>
	            	</NavItem>

	            </Nav>
		    </Col>
		    <Col xs={6} md={10} className="layout">
		      <Switch>
	        	 	<Route path="/dashboard/nav1" name="Nav1" component={Nav1}/>
	        	</Switch>
		    </Col>
		</Row>

    		</Col>
        </div>

    	// <div className="dashboard">
    		
    	// </div>
        // <h1 style={style.heading}> Welcome to Gis Connect</h1>
    );
  }
}

export default Dashboard;
