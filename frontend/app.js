const list = document.querySelector('ul.list')

const getEmployees = async () => {
  const res = await fetch("http://localhost:4000/employees", {
    method: "GET"
  });

  if (!response.ok) {
    throw new Error(`Failed to get employees: ${response.statusText}`);
  }

  const data = await res.json();
  return data;
}

async function render() {
  const employees = await getTodos()

  employees.forEach(employee => {
    const li = document.createElement('li')
    const viewBtn = document.createElement('button')
    const editBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')

    li.textContent = employee.task

    viewBtn.textContent = "VIEW"
    viewBtn.addEventListener('click', () => viewTodo(employee.id))
    li.appendChild(viewBtn)

    editBtn.textContent = "EDIT"
    editBtn.addEventListener('click', () => editTodo(employee.id))
    li.appendChild(editBtn)

    deleteBtn.textContent = "DELETE"
    deleteBtn.addEventListener('click', () => deleteTodo(employee.id))
    li.appendChild(deleteBtn)

    list.appendChild(li)
  })
}

render()

//



const addEmployee = async (firstname, lastname, age, isMarried) => {
  const res = await fetch("http://localhost:4000/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // When doing POST/PUT/PATCH, you need to set the Content-Type
    },
    body: JSON.stringify({ firstname, lastname, age, isMarried }),
  });

  if (!response.ok) {
    throw new Error(`Failed to add employee: ${response.statusText}`);
  }

  const data = await res.json(); // Returned employee data
  return data;
};

// Add the rest of the functions
