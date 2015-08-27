(function() {
	var btn = document.getElementById('go'),
		input = document.getElementById('address');

	btn.addEventListener("click",function(e){
		e.preventDefault();
		var val = input.value;

		if(val.length>0) {
			if(val.indexOf("http://") != 0) {
				val = "http://"+val;
			}

			window.location.href=val;
		}

	});
})();