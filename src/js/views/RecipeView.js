var app = window.app || {};
app.Views = app.Views || {};

app.Views.Recipe = Backbone.View.extend({
	template: Handlebars.compile($('#recipe-tmpl').html()),
	render: function(){
		var data = this.model.toJSON();

		this.$el.html(this.template(data));
	}
});