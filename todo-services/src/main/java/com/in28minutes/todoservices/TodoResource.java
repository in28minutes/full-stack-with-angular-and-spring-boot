package com.in28minutes.todoservices;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoResource {
	
	@GetMapping("/todos/1")
	public Todo retrieveTodo() {
		return new Todo(1l,"in28minutes","Learn to Dance", 
				new Date(), false);
	}
	
	@GetMapping("/todos")
	public Todo retrieveTodos() {
		return new Todo(1l,"in28minutes","Learn to Dance", 
				new Date(), false);
	}

}