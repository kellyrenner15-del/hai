function animateProgress(done){
  progressWrap.style.display = "block"
  bars.forEach(el => el.style.width = "0%")
  var t = 0, interval = 30, duration = 1500
  var timer = setInterval(function(){
    t += interval
    var percent = Math.min(100, Math.round((t/duration)*100))
    bars[0].style.width = percent + "%"
    if(percent > 33) bars[1].style.width = (percent - 33) * 1.5 + "%"
    if(percent > 66) bars[2].style.width = (percent - 66) * 3 + "%"
    if(t >= duration){
      clearInterval(timer)
      bars.forEach(el => el.style.width = "100%")
      setTimeout(done, 200)
    }
  }, interval)
}

function beginAnalysis(){
  var inputVal = $("#stockcode").val().trim()
  if(!inputVal){
    $(".alert-wrap").css("display","flex")
    setTimeout(function(){$(".alert-wrap").css("display","none")},1500)
    return false
  }
  modalBox.style.display = "flex"
  resultWrap.style.display = "none"
  animateProgress(() => {
    progressWrap.style.display = "none"
    resultWrap.style.display = "block"
  })
}

