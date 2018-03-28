/* PC Slider - Start */
function pcSlider (slider_name) {
	const pointer_top = 13;					

	$(slider_name+" .pcf-title").click(function(){
		$(slider_name+' .pcf-desc').removeClass('pcf-desc-active');
		
		var _feature = $(this).parent().parent();
		
		var _feature_index = _feature.attr("data-index");
		
		var top = pointer_top;
		if (_feature_index >= 0)
			top = (34 * parseInt(_feature_index)) + 13
		
		$(_feature[0].children[1]).addClass("pcf-desc-active");
		$(slider_name+" .pcm-img").attr("src", _feature.attr("data-img"));
		$(slider_name+" .pc-pointer").attr("style", "top:"+top+"px")
	});
	
	$(slider_name+" .pcf-title").click()
}
/* PC Slider - End */