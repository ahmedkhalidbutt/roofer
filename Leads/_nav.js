export default [
	{
		_tag: 'CSidebarNavDropdown',
		name: 'Leads',
		phrase: 'leads',
		to: '/leads',
		icon: 'fas fa-bookmark',
		hasRoute: false,
		children: {
			visited: {
				name: 'Visited',
				phrase: 'visited',
				icon: 'fas fa-eye',				
				to: '/leads/visited',
			},
			requested: {
				name: 'Requested',
				phrase: 'requested',
				icon: 'fas fa-low-vision',
				to: '/leads/requested'
			}
		}
	}
];
