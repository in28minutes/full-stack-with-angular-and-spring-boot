package com.in28minutes.todoservices;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoResource {
	
	@Autowired
	private TodoService todoService;
	
	@GetMapping("/todos/1")
	public Todo retrieveTodo() {
		return new Todo(1l,"in28minutes","Learn to Dance", 
				new Date(), false);
	}
	
	@GetMapping("/todos")
	public List<Todo> retrieveTodos() {
		//TODO : HARDCODED in28minutes
		return todoService.retrieveTodos("in28minutes");
	}

}