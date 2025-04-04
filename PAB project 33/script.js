document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add');
    const notesContainer = document.body;

    // Function to create a new note
    function createNote() {
        // Create the note container
        const note = document.createElement('div');
        note.classList.add('note');

        // Create the tools container (edit and delete buttons)
        const tools = document.createElement('div');
        tools.classList.add('tools');
        
        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        
        tools.appendChild(editButton);
        tools.appendChild(deleteButton);
        
        // Create the hidden div and textarea
        const hiddenDiv = document.createElement('div');
        hiddenDiv.classList.add('hidden');

        const textarea = document.createElement('textarea');
        
        note.appendChild(tools);
        note.appendChild(hiddenDiv);
        note.appendChild(textarea);

        notesContainer.appendChild(note);
        
        // Handle the delete button
        deleteButton.addEventListener('click', function () {
            notesContainer.removeChild(note);
        });

        // Handle the edit button
        editButton.addEventListener('click', function () {
            hiddenDiv.classList.toggle('hidden');
            if (hiddenDiv.classList.contains('hidden')) {
                textarea.setAttribute('readonly', true);
            } else {
                textarea.removeAttribute('readonly');
            }
        });
    }

    // Add a new note when the "Add note" button is clicked
    addButton.addEventListener('click', createNote);
});
