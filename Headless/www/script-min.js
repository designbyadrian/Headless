!function(){var e=document.getElementById("go"),t=document.getElementById("address");e.addEventListener("click",function(e){e.preventDefault();var n=t.value;n.length>0&&(0!=n.indexOf("http://")&&(n="http://"+n),window.location.href=n)})}();