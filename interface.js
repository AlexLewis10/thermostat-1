$(function() {
  var thermostat = new Thermostat()
  var displayTemp = function() {
  $('#temp').text(thermostat.temp)
  $('#power-usage').text(thermostat.energyUsage())
  $('body').attr('class', thermostat.energyUsage())
  
}



displayTemp()

  $('#temp-increase').click( function() {
    thermostat.increase(1)
    displayTemp()
  })

  $('#temp-decrease').click( function() {
    thermostat.decrease(1)
    displayTemp()
  })

  $('#reset').click( function() {
    thermostat.reset()
    displayTemp()
  })

  $('#powersaving-switch').click( function() {
    if (thermostat.savingOn === true) {
      thermostat.powerSavingOff()
      $('#powersaving-switch').text('Powersaving Off')
    } else {
      thermostat.powerSavingOn()
      $('#powersaving-switch').text('Powersaving On')
    }
    displayTemp()
  })

  $('#update-weather').click( function(e) {
    e.preventDefault()
    var location = $('#location').val()
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed', function(data) {
    $('#london-weather').text(data.weather[0].description);
    
    })
  })

 
})