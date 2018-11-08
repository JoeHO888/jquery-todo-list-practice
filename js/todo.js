$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        // code to be implemented
		
		// Add Item
		$("#button").click(function(){
			var uuid = generateUUID();
			var item = $("textarea[class='createItem']").val();
			$("ol").append("<li id="+uuid+" class='' onclick='listenForDoubleClick(this)'>"+"<input name='done-todo' type='checkbox' class='done-todo' onclick='handleCheckBox(this)'>"+item+"</li>");
			
		});
		
		
		$('textarea').each(function () {
			this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
		}).on('input', function () {
				this.style.height = 'auto';
				this.style.height = (this.scrollHeight) + 'px';
			});
		
});

function handleCheckBox(cb) {
  var parentId = cb.parentNode.id;
  if (cb.checked){
	  $("#"+parentId).addClass("checked");
	  console.log($("#"+parentId));
  }else{
	  $("#"+parentId).removeClass("checked");
  }
}

function listenForDoubleClick(element) {
  element.contentEditable = true;
  setTimeout(function() {
    if (document.activeElement !== element) {
      element.contentEditable = false;
    }
  }, 300);
}
	
function filterActive(element){
	 $("li").show();
	 $("li[class='checked']").hide();

} 

function filterAll(element){
	 $("li").show();

}  

function filterComplete(element){
	$("li").show();
	$("li[class='']").hide();

}  

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

	
showTime();
