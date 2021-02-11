/**
 * Главный экран
 */
Ext.define('Swan.view.Main', {
	extend: 'Ext.container.Viewport',
	layout: 'fit',
	items: [{
		title: 'Swan Test App',
		xtype: 'tabpanel',
		activeTab: 0,
		items: [{
			title: 'Книги',
			layout: 'fit',
			items: [
				Ext.create('Swan.view.Books')
			]
		}, {
			title: 'Тест',
			bodyPadding: 20,
			scrollable: true,
			items: [{
				xtype: 'label',
				html: "--"
			}, {
				xtype: 'fieldset',
				title: '* Формат XML',
				items: [{
					anchor: '100%',
					height: 200,
					xtype: 'textarea',
					readOnly: true,
					value: '<books>\n\t' +
						'<book>\n\t\t' +
						'<id>1</id>\n\t\t' +
						'<name>Война и мир</name>\n\t\t' +
						'<author>Толстой Л.Н.</author>\n\t' +
						'</book>\n' +
						'</books>'
				}]
			}]
		}]
	}]
});