let pathActive = false;

function TurnONOFF() 
{
  pathActive = !pathActive;
  
  if (pathActive) 
  {
    showPath();
  } 
  else 
  {
    hidePath();
  }

}

function showPath()
{
  const pathColor = getComputedStyle(document.documentElement).getPropertyValue('--path-color').trim();
  
  document.getElementById("startDot").style.backgroundColor = pathColor;
  
  document.querySelectorAll(".path").forEach(element => 
  {
    if (element.classList.contains("bordertop")) 
    {
      element.style.borderTopColor = pathColor;
    }

    if (element.classList.contains("borderbottom")) 
    {
      element.style.borderBottomColor = pathColor;
    }

    if (element.classList.contains("borderleft")) 
    {
      element.style.borderLeftColor = pathColor;
    }

    if (element.classList.contains("borderright")) 
    {
      element.style.borderRightColor = pathColor;
    }
  });
  
  document.getElementById("endDot").style.backgroundColor = pathColor;
}

function hidePath() 
{
  const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim();
  
  document.getElementById("startDot").style.backgroundColor = borderColor;
  
  document.querySelectorAll(".path").forEach(element =>  
  {
    if (element.classList.contains("bordertop"))
    {
      element.style.borderTopColor = borderColor;
    }

    if (element.classList.contains("borderbottom")) 
    {
      element.style.borderBottomColor = borderColor;
    }

    if (element.classList.contains("borderleft")) 
    {
      element.style.borderLeftColor = borderColor;
    }

    if (element.classList.contains("borderright")) 
    {
      element.style.borderRightColor = borderColor;
    }

  });
  
  document.getElementById("endDot").style.backgroundColor = borderColor;
}

window.onload = function() 
{
  document.getElementById("startDot").addEventListener("click", TurnONOFF);
};

