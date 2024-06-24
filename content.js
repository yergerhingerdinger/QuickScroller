// Create the button element
downButton = document.createElement('button');
downButton.innerText = '↓';
downButton.classList.add('fab-button');

upButton = document.createElement('button');
upButton.innerText = '↑';
upButton.classList.add('up-button');

// Create div container for buttons
buttonContainer = document.createElement('div');
buttonContainer.classList.add('fab-button-container');

// Add click event listener to the button
downButton.addEventListener('click', () => {
	// Add your action here
	window.scrollTo({
		//top: document.body.scrollHeight,
		top: document.documentElement.scrollHeight,
		behavior: 'smooth'
	})	
});

// Add click event listener to the button
upButton.addEventListener('click', () => {
	// Add your action here
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})	
});

buttonContainer.appendChild(downButton);
buttonContainer.appendChild(upButton);

document.body.appendChild(buttonContainer);