//bind to beforeshow to work with the ajax page loading
$(window).on('pagebeforeshow', function() {

	$('.loadmore a').click(function() {
		var $this = $(this);
		
		//load the new content into the load target
		$('.ui-page-active .loadtarget').load($this.attr('href') + ' .' + $this.attr('data-itemclass'), function(d) {	
			//check and see if there was a subsequent 'load more' link
			var matches = d.match(/'(.*\.asp\?.*(&|)PageNumber=\d+)/)
			if(matches) {
				//update load more link to new page number
				$this.attr('href', matches[1]);
				
				//disable this loadtarget and add a new one
				$(this).removeClass('loadtarget');
				$('<div class="loadtarget"></div>').insertAfter($(this));
			} else {
				//no more pages to load, so remove load more button
				$('.ui-page-active .loadmore').remove();
			}
			
			$(this).trigger('create');
		});
		
		return false;
	});
});

