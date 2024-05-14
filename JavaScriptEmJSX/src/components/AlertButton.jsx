import React from "react";

function alertWindow(){
	alert("O botão foi clicado!");
};

function AlertButton(){
	return(
		<button onClick={alertWindow}>
			Clique em mim!
		</ button>
	);
};

export default AlertButton;