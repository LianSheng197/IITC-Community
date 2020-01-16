// @id             font-awesome
// @name           IITC plugin: Font Awesome
// @author         breunigs
// @category       Tweaks
// @version        0.0.3
// @description    Add Font Awesome Icons.

// PLUGIN START ////////////////////////////////////////////////////////
window.plugin.faIcon = {};

var setup = function(){
  $('<link>')
  .prop('type', 'text/css')
  .prop('rel', 'stylesheet')
  .prop('href', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css')
  .appendTo('head');


  $("<style>").prop("type", "text/css").html(''
  +'#toolbox a .fa{ margin-right:4px; }'
).appendTo("head");

}
// PLUGIN END //////////////////////////////////////////////////////////
