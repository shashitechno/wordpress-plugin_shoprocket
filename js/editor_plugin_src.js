﻿/**
 * @author Andre Fredette
 * @version 1.0 October 2009
 */

(function() {
	// Load plugin specific language pack
	tinymce.PluginManager.requireLangPack('shoprocket');

	tinymce.create('tinymce.plugins.shoprocket', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
			ed.addCommand('mcephproduct', function() {
				ed.windowManager.open({
					file : wpurl + '?shoprocketdialog=1', // wpurl is home_url( '/' )
					width : 500,
					height : 255 + (tinyMCE.isNS7 ? 20 : 0) + (tinyMCE.isMSIE ? 0 : 0),
					inline : 1
				}, {
					plugin_url : url, // Plugin absolute URL
					some_custom_arg : 'custom arg' // Custom argument
				});
			});

			// Register example button
			ed.addButton('shoprocket', {
				title : 'shoprocket.shoprocket_button_desc',
				cmd : 'mcephproduct',
				image : url + '/img/shoprocket.gif'
			});

		},

		/**
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'Shoprocket',
				author : 'Reality66',
				authorurl : 'http://shoprocket.com/',
				infourl : 'http://shoprocket.com/',
				version : "1.0"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('shoprocket', tinymce.plugins.shoprocket);
})();
