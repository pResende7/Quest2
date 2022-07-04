import "./Botao.css";

function Botao({palavra}){
	
	return( 
        <button className="base">
		<h3>{palavra}</h3> 
         </button>
	);
}

export default Botao;
