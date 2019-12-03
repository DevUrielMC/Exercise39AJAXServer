package com.exercise39ajaxserver.model;

public class Employee {
	
	private String nameEmployee;
	private double salaryEmployee;
	
	public Employee() {
		
	}
	
	public Employee(String nameEmployee, double salaryEmployee) 
	{
		this.nameEmployee = nameEmployee;
		this.salaryEmployee = salaryEmployee;
		
	}
	
	public String getNameEmployee()
	{
		return this.nameEmployee;
	}
	
	public void setNameEmployee(String nameEmployee)
	{
		this.nameEmployee = nameEmployee;
		
	}
	public double getSalaryEmployee()
	{
		return this.salaryEmployee;
	}
	public void setSalaryEmployee(double salaryEmployee)
	{
		this.salaryEmployee = salaryEmployee;
		
	}

	@Override
	public String toString() {
		return "Employee [nameEmployee=" + nameEmployee + ", salaryEmployee=" + salaryEmployee + "]";
	}
	
	
}
