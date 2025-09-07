function getValue() {
  
  let textbox = document.getElementById("myTextbox");
  let value = textbox.value.trim();
  
  if (value === "") {
    alert("Please enter a city name.");
    return;
  }
  
  const availableCities = ["ahmedabad", "surat", "mumbai", "kolkata", "delhi"];
  
  const lowerCaseValue = value.toLowerCase();
  
  if (availableCities.includes(lowerCaseValue)) {
       window.open(`weather-details.html?city=${lowerCaseValue}`, "_blank");
  } else {
       alert("City is not Currently Available");
  }
}