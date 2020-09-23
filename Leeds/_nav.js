export default [
	{
		_tag: 'CSidebarNavDropdown',
		name: 'Leeds',
		phrase: 'leeds',
		to: '/leeds',
		icon: 'fas fa-bookmark',
		hasRoute: false,
		children: {
			visited: {
				name: 'Visited',
				phrase: 'visited',
				icon: 'fas fa-eye',				
				to: '/leeds/visited',
			},
			requested: {
				name: 'Requested',
				phrase: 'requested',
				icon: 'fas fa-low-vision',
				to: '/leeds/requested'
			}
		}
	}
];
