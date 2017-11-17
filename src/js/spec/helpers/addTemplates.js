(function() {
	var $body = $('body');

	for(var path in window.__html__) {
		console.log(path);
		$body.append(window.__html__[path]);
	}
}());