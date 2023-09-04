import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
//Create a protected route, that can only be accessed with admin credentials
//In the future we will have a database to manage user credentials for clients
//For the prototype this will do
function Protected() {
	const token = localStorage.getItem('token');
	console.log(localStorage.getItem('token'));
	return true /* token */ ? <Outlet /> : <Navigate to="/admin" />;
}

export default Protected;

/*
const token = localStorage.getItem('token');
	if(!token){
		return <Navigate to='/admin' />;
	}
	fetch('/api/check-token', {
		headers: {
			Authorization: `Bearer ${token}`,

		},
	}).then((res) => {
		if(!res.ok){
			throw new Error('Invalid Token');
		}
	}).catch((err)=>{
		console.error(err);
		return <Navigate to='/login' />
	})
*/
