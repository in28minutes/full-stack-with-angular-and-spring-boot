package com.in28minutes.todoservices;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.in28minutes.todoservices.Todo;

@Service
public class TodoService {
  private static List<Todo> todos = new ArrayList<Todo>();
  private static long todoCount = 3;

  static {
    todos.add(new Todo(1l, "in28minutes", "Learn Spring MVC", new Date(),
        false));
    todos.add(new Todo(2l, "in28minutes", "Learn Struts", new Date(), false));
    todos.add(new Todo(3l, "in28minutes", "Learn Hibernate", new Date(),
        false));
  }

  public List<Todo> retrieveTodos(String username) {
    List<Todo> filteredTodos = new ArrayList<Todo>();
    for (Todo todo : todos) {
      if (todo.getUsername().equals(username))
        filteredTodos.add(todo);
    }
    return filteredTodos;
  }

  public Todo retrieveTodo(int id) {
    for (Todo todo : todos) {
      if (todo.getId() == id)
        return todo;
    }
    return null;
  }

  public void updateTodo(Todo todo) {
    todos.remove(todo);
    todos.add(todo);
  }

  public Todo addTodo(String name, String desc, Date targetDate,
      boolean isDone) {
    Todo todo = new Todo(++todoCount, name, desc, targetDate, isDone);
    todos.add(todo);
    return todo;
  }

  public void deleteTodo(int id) {
    Iterator<Todo> iterator = todos.iterator();
    while (iterator.hasNext()) {
      Todo todo = iterator.next();
      if (todo.getId() == id) {
        iterator.remove();
      }
    }
  }
}