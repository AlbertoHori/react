package com.luv2code.hiebernate.solution.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.luv2code.hiebernate.solution.entity.Employee;



public class CreateEmployeeDemo {

	public static void main(String[] args) {
		//create session factory
		
				SessionFactory factory=new Configuration()
									   .configure("hibernate.cfg.xml")
									   .addAnnotatedClass(Employee.class)
									   .buildSessionFactory();
						
				//create session

				Session session=factory.getCurrentSession();
				
				try {
				
					
					//create a student object
					System.out.println("Creating new student object...");
					Employee tempEmployee=new Employee("Daisy","Duck","Commerzbank");
					
					//start a transaction
					session.beginTransaction();
					
					//save the student object
					System.out.println("Saving the student...");
					System.out.println(tempEmployee);
					session.save(tempEmployee);
					
					//commit transaction
					session.getTransaction().commit();
					
					//My new code
					
					//find out the employee's id: primary key
					System.out.println("Saved employee. Generated id: "+ tempEmployee.getId());
					
					//now get a new session and start transaction
					session=factory.getCurrentSession();
					session.beginTransaction();
					
					//retrieve student base on the id: primary key
					System.out.println("\nGetting employee with id: "+tempEmployee.getId());
					Employee myEmployee =session.get(Employee.class, tempEmployee.getId());
					
					System.out.println("Get complete: "+myEmployee);
					
					//commit the transaction
					
					session.getTransaction().commit();
					
					System.out.println("Done");
				}finally {
					factory.close();
				}
			}


	

}
