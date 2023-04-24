import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
function Protected() {
	let auth = { token: false };
	return auth.token ? <Outlet /> : <Navigate to='/admin' />;
}

export default Protected;
