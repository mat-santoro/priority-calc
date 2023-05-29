// Function to handle color change for each criteria element
function handleColorChange(event) {
    var element = event.target;
    var value = parseInt(element.value);
    var className = '';
  
    if (value <= 1) {
      className = 'lowest';
    } else if (value <= 2) {
      className = 'low';
    } else if (value <= 3) {
      className = 'medium';
    } else if (value <= 4) {
      className = 'high';
    } else {
      className = 'highest';
    }
  
    // Remove previous color classes
    element.classList.remove('lowest', 'low', 'medium', 'high', 'highest');
  
    // Apply the new color class
    element.classList.add(className);
  }
  
  // Attach color change event listeners to each criteria element
  var criteriaElements = document.getElementsByClassName('criteria');
  for (var i = 0; i < criteriaElements.length; i++) {
    criteriaElements[i].addEventListener('change', handleColorChange);
  }
  
  document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Retrieve the selected values for each criteria
    var financeImpact = parseInt(document.getElementById('financeImpact').value);
    var urgency = parseInt(document.getElementById('urgency').value);
    var operationalImpact = parseInt(document.getElementById('operationalImpact').value);
    var dependency = parseInt(document.getElementById('dependency').value);
    var technicalComplexity = parseInt(document.getElementById('technicalComplexity').value);
  
    // Calculate the sum of values
    var sum = financeImpact + urgency + operationalImpact + dependency + technicalComplexity;
  
    // Determine the priority based on the sum
    var priority;
    if (sum <= 9) {
      priority = 'Lowest';
    } else if (sum <= 12) {
      priority = 'Low';
    } else if (sum <= 17) {
      priority = 'Medium';
    } else if (sum <= 22) {
      priority = 'High';
    } else {
      priority = 'Highest';
    }
  
    // Display the priority
    document.getElementById('priority').textContent = priority;
    // Apply text color based on background color
  var resultElement = document.getElementById('result');
  resultElement.style.display = 'block';
  
  if (sum <= 9) {
    resultElement.style.color = '#008000'; // Light green
  } else if (sum <= 12) {
    resultElement.style.color = '#6B8E23'; // Olive
  } else if (sum <= 17) {
    resultElement.style.color = '#FF8C00'; // Dark orange
  } else if (sum <= 22) {
    resultElement.style.color = '#FF4500'; // Orange Red
  } else {
    resultElement.style.color = '#B22222'; // Fire Brick
  }
  });
