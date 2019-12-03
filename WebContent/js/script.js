/**
 * 
 */

let xhr = new XMLHttpRequest();
let name = this.document.getElementById("txtName");
console.log(name);
let salary= this.document.getElementById("txtSalary");
console.log(salary);
window.onload = function (){
	
	document.getElementById("btnSalary").addEventListener("click", CalculateSalary)
	
	document.getElementById("btnSalary2").addEventListener("click", CalculateSalary2);
}

function  CalculateSalary(){
	
xhr.onload =funcionCallBack;
let name= document.getElementById("txtName").value;
let salary = document.querySelector("#txtSalary").value;
xhr.open ("GET","CalculateSalaryServlet?txtName="+name+"&txtSalary=" +salary); //campo 1 txtName, campo 2 txtSalary
xhr.send(null);
}

function funcionCallBack()
{
	document.getElementById("salaryCalculated").innerHTML = xhr.responseText;
}
function  CalculateSalary2(){
	
	xhr.onload =funcionCallBack2;
	let name2= document.getElementById("txtName2").value;
	let salary2 = document.querySelector("#txtSalary2").value;
	console.log(name2);
	console.log(salary2);
	//crear mi formulario
	let miFormulario= new FormData();
	//crea los parametros txtName y txtSalary
	miFormulario.append("txtName", name2);
	miFormulario.append("txtSalary", salary2);
	
	xhr.open ("POST","CalculateSalaryServlet2"); //campo 1 txtName, campo 2 txtSalary
	xhr.send(miFormulario);
	}
function funcionCallBack2()
{
	document.getElementById("salaryCalculated2").innerHTML = xhr.responseText;
}