window.onload = function(){
var menuLeft = document.getElementById('menu-bar'),
	showLeft = document.getElementById('showLeft'),
	body = document.body;

showLeft.onclick = function() {
	classie.toggle(this, 'active');
	classie.toggle(body, 'spmenu-push-toleft');
	classie.toggle(menuLeft, 'menuOpen');
	disableOther('showLeft');
};

function disableOther(button){
	if (button !== 'showLeft') {
		classie.toggle(showLeft, 'disabled');
	}
};
}