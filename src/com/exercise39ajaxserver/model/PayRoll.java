package com.exercise39ajaxserver.model;
import com.exercise39ajaxserver.model.Employee;

public class PayRoll {

	
	public static double CalculateSalary (Employee miEmpleado) {
		
		return miEmpleado.getSalaryEmployee()*1.30;
	}
}
