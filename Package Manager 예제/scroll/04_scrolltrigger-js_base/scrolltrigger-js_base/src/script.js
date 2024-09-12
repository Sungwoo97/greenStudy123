const trigger = new ScrollTrigger.default({
  trigger: {
    once: true,
		offset:{
			viewport: {
				y: 0.2
			}
		},
		toggle:{
			class: {
				in: 'active', // Either a string, or an array of strings
			}
		}
  }
}); 
// Add all html elements with attribute data-trigger
trigger.add('[data-trigger]');