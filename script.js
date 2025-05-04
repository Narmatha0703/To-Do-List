function addTask() {
    const taskInput = document.getElementById('taskInput');
    const dateInput = document.getElementById('taskDate');
    const timeInput = document.getElementById('taskTime');
  
    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;
    const taskTime = timeInput.value;
  
    if (!taskText) return;
  
    const li = document.createElement('li');
  
    // Task content
    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';
  
    const taskTextInput = document.createElement('input');
    taskTextInput.type = 'text';
    taskTextInput.value = taskText;
    taskTextInput.disabled = true;
  
    const datetimeSpan = document.createElement('div');
    datetimeSpan.className = 'datetime';
  
    if (taskDate || taskTime) {
      let displayDate = taskDate ? `📅 ${taskDate}` : '';
      let displayTime = taskTime ? `🕒 ${taskTime}` : '';
      datetimeSpan.textContent = `${displayDate} ${displayTime}`.trim();
    }
  
    taskContent.appendChild(taskTextInput);
    if (datetimeSpan.textContent) taskContent.appendChild(datetimeSpan);
  
    // Action buttons
    const actions = document.createElement('div');
    actions.className = 'actions';
  
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '✏️';
    editBtn.className = 'edit';
    editBtn.onclick = () => toggleEdit(taskTextInput, editBtn);
  
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '❌';
    deleteBtn.className = 'delete';
    deleteBtn.onclick = () => li.remove();
  
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
  
    li.appendChild(taskContent);
    li.appendChild(actions);
  
    document.getElementById('taskList').appendChild(li);
  
    // Clear inputs
    taskInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
  }
  
  function toggleEdit(input, button) {
    if (input.disabled) {
      input.disabled = false;
      input.focus();
      button.innerHTML = '💾';
    } else {
      input.disabled = true;
      button.innerHTML = '✏️';
    }
  }
  
