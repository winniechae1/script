$(document).ready(function(){
	var elm = $('.mxw600').children('.w3-row').children('span').end();
	$(elm).css('border','1px solid blue');
	
	/* 
		jQuery 에서 태그 내에 태그를 덧붙이는 방법 
			선택자.append(내용)
		==> 선택한 태그에 내용을 맨 마지막 부분에 덧붙여주는 함수 
	*/
	for(i = 0; i < 5; i++){
		$(elm).append('<div class="inblock box250 w3-circle ' + 
						w3color[i] +' w3-border">circle '+ (i+1) +'</div>');
	}
	$(elm).append('<div id="d1">' + 
						'<h2 class="w3-lime">제목추가</h2>' + 
				 '</div>');
	
	/*
		참고]
			append()를 이용해서 태그를 추가할 경우 
			반드시 태그를 완성해서 추가해야 한다.
			
		참고]
			선택 태그의 맨 앞부분에 내용을 추가해주는 함수 
			prepend();
	*/
	
	
	/*
	= $(elm).eq(0).get().innerHTML + '<div class="w3-button w3-blue">click</div>';
	*/
});