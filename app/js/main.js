var bitrixEnv = bitrixEnv || false;
// $(document).ready(function(){


// SLIDERS
		
	function topSlider(){
		if(document.querySelectorAll('.sliderWrapper .topSliderEl').length * document.querySelector('.sliderWrapper .topSliderEl').offsetWidth > document.querySelector('.sliderWrapper').offsetWidth){	
			$('.topSlider').slick({
				slidesToShow: 1,
				lazyLoad: 'ondemand',
				slidesToScroll: 1,
				lazyLoadSrcAttr: 'data-src',
				dots: true,
				infinite: true,
				prevArrow: `<div class="sliderPrev">
								<svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.673 1.046a1.041 1.041 0 011.473 1.472L3.164 12.5l9.982 9.982a1.041 1.041 0 01-1.473 1.473L.22 12.5 11.673 1.046z" fill="#6EC045"/>
								</svg>
							</div>`,
				nextArrow: `<div class="sliderNext">
								<svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.327 1.046A1.041 1.041 0 00.854 2.518l9.982 9.982-9.982 9.982a1.041 1.041 0 101.473 1.473L13.78 12.5 2.327 1.046z" fill="#6EC045"/>
								</svg>
							</div>`,
				responsive: [
					{
				      breakpoint: 430,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        infinite: true,
				        dots: true,
				        arrows: false
				      }
				    }
				]
			});
		}
	}

	function productSliderTop(){
		if(document.querySelectorAll('.catalogSliderTop .catalogSliderElWrapper').length * document.querySelector('.catalogSliderTop .catalogSliderElWrapper').offsetWidth > document.querySelector('.catalogSliderTop').offsetWidth){		
			$('.catalogSliderTopTab .catalogSliderTop').slick({
				lazyLoad: 'ondemand',
				lazyLoadSrcAttr: 'data-src',
				slidesToShow: 4,
				slidesToScroll: 1,
				dots: false,
				infinite: false,
				prevArrow: `<div class="sliderPrev">
								<svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.673 1.046a1.041 1.041 0 011.473 1.472L3.164 12.5l9.982 9.982a1.041 1.041 0 01-1.473 1.473L.22 12.5 11.673 1.046z" fill="#6EC045"/>
								</svg>
							</div>`,
				nextArrow: `<div class="sliderNext">
								<svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.327 1.046A1.041 1.041 0 00.854 2.518l9.982 9.982-9.982 9.982a1.041 1.041 0 101.473 1.473L13.78 12.5 2.327 1.046z" fill="#6EC045"/>
								</svg>
							</div>`,
				responsive: [
					{
				      breakpoint: 425,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 1,
				        infinite: true,
				        arrows: false
				      }
				    }
				]			
			});
		}
	}

	function productSliderBottom(){
		if(document.querySelectorAll('.catalogSliderBottom .catalogSliderElWrapper').length * document.querySelector('.catalogSliderBottom .catalogSliderElWrapper').offsetWidth > document.querySelector('.catalogSliderBottom').offsetWidth){	
			$('.catalogSliderBottomTab .catalogSliderBottom').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				dots: false,
				lazyLoad: 'ondemand',
				lazyLoadSrcAttr: 'data-src',
				infinite: false,
				prevArrow: `<div class="sliderPrev">
								<svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.673 1.046a1.041 1.041 0 011.473 1.472L3.164 12.5l9.982 9.982a1.041 1.041 0 01-1.473 1.473L.22 12.5 11.673 1.046z" fill="#6EC045"/>
								</svg>
							</div>`,
				nextArrow: `<div class="sliderNext">
								<svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.327 1.046A1.041 1.041 0 00.854 2.518l9.982 9.982-9.982 9.982a1.041 1.041 0 101.473 1.473L13.78 12.5 2.327 1.046z" fill="#6EC045"/>
								</svg>
							</div>`,
				responsive: [
					{
				      breakpoint: 425,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 1,
				        infinite: true,
				        arrows: false
				      }
				    }
				]
			});
		}
	}

	function actionSlider(){
		if(document.querySelectorAll('.actionsSlider .actionsSliderEl').length * document.querySelector('.actionsSlider .actionsSliderEl').offsetWidth > document.querySelector('.actionsSlider').offsetWidth){
			$('.actionsSlider').slick({
				slidesToShow: 2,
				lazyLoad: 'ondemand',
				lazyLoadSrcAttr: 'data-src',
				slidesToScroll: 1,
				dots: false,
				infinite: false,
				prevArrow: `<div class="sliderPrev">
								<svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.673 1.046a1.041 1.041 0 011.473 1.472L3.164 12.5l9.982 9.982a1.041 1.041 0 01-1.473 1.473L.22 12.5 11.673 1.046z" fill="#6EC045"/>
								</svg>
							</div>`,
				nextArrow: `<div class="sliderNext">
								<svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.327 1.046A1.041 1.041 0 00.854 2.518l9.982 9.982-9.982 9.982a1.041 1.041 0 101.473 1.473L13.78 12.5 2.327 1.046z" fill="#6EC045"/>
								</svg>
							</div>`,
				responsive: [
					{
				      breakpoint: 425,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        infinite: true,
				        arrows: false
				      }
				    }
				]			
			});	
		}
	}

	function gamingSlider(){
		if(document.querySelectorAll('.gamingSlider .catalogSliderElWrapper').length * document.querySelector('.gamingSlider .catalogSliderElWrapper').offsetWidth > document.querySelector('.gamingSlider').offsetWidth){
			$('.gamingSlider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				lazyLoad: 'ondemand',
				lazyLoadSrcAttr: 'data-src',
				dots: false,
				infinite: false,
				prevArrow: `<div class="sliderPrev">
								<svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.673 1.046a1.041 1.041 0 011.473 1.472L3.164 12.5l9.982 9.982a1.041 1.041 0 01-1.473 1.473L.22 12.5 11.673 1.046z" fill="#6EC045"/>
								</svg>
							</div>`,
				nextArrow: `<div class="sliderNext">
								<svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.327 1.046A1.041 1.041 0 00.854 2.518l9.982 9.982-9.982 9.982a1.041 1.041 0 101.473 1.473L13.78 12.5 2.327 1.046z" fill="#6EC045"/>
								</svg>
							</div>`, 
				responsive: [
					{
				      breakpoint: 425,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 1,
				        infinite: true,
				        dots: false,
				        arrows: false
				      }
				    }
				]   
			});	
		}		
	}
	
	function productSlider(){
		$('.productSliderFor').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: '.productSliderNav',
			prevArrow: `<img class="arrowPrev arrows" src="images/card/arrowPrev.svg" alt="">`,
			nextArrow: `<img class="arrowNext arrows" src="images/card/arrowNext.svg" alt="">`,
		});
			$('.productSliderNav').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			focusOnSelect: true,
			asNavFor: '.productSliderFor',
			prevArrow: `<img class="arrowPrev arrows" src="images/card/arrowPrev.svg" alt="">`,
			nextArrow: `<img class="arrowNext arrows" src="images/card/arrowNext.svg" alt="">`,	
			responsive: [
				{
			      breakpoint: 425,
			      settings: {
			        slidesToShow: 5,
			        slidesToScroll: 1,
			        infinite: true,
			        arrows: false
			      }
			    }
			]			
		});
		
	}

	function technoBlogForNavSlider(){
		var forSlider = document.querySelectorAll('.technoBlogSliderFor'),
			navSlider = document.querySelectorAll('.technoBlogSliderNav'),
			prevArrowSlider = document.querySelectorAll('.technoBlogSlider .technoBlogSliderForWrapper .arrowPrev'),
			nextArrowSlider = document.querySelectorAll('.technoBlogSlider .technoBlogSliderForWrapper .arrowNext');
		for (var i = 0; forSlider.length > i ; i++) {
			$(forSlider[i]).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: true,
				asNavFor:  navSlider[i],
				prevArrow: prevArrowSlider[i],
				nextArrow: nextArrowSlider[i],	
			});

			$(navSlider[i]).slick({
				slidesToShow: 5,
				slidesToScroll: 1,
				asNavFor: forSlider[i],
				focusOnSelect: true,	
				arrows: false,
			});
		}	
	}

	function technoNewsSlider(){
		if(document.querySelectorAll('.technoNewsSlider .newsEl').length * document.querySelector('.technoNewsSlider .newsEl').offsetWidth > document.querySelector('.technoNewsSlider').offsetWidth){
			$('.technoNewsSlider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: false,
				infinite: false,
				lazyLoad: 'ondemand',
				lazyLoadSrcAttr: 'data-src',
				prevArrow: `<span class="sliderPrev arrow">
								<img src="images/technoblog/prevArrow.svg" alt="">
							</span>`,
				nextArrow: `<span class="sliderNext arrow">
								<img src="images/technoblog/nextArrow.svg" alt="">
							</span>`,
				responsive: [
					{
				      breakpoint: 425,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        infinite: true,
				        arrows: false
				      }
				    }
				]		
			});
		}		
	}

	function alternativeProdSlider(){
		if(document.querySelectorAll('.alternativeProdBlock .catalogSliderElWrapper').length * document.querySelector('.alternativeProdBlock .catalogSliderElWrapper').offsetWidth > document.querySelector('.alternativeProdBlock').offsetWidth){
			$('.alternativeProdBlock').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: false,
				infinite: true,
				lazyLoad: 'ondemand',
				lazyLoadSrcAttr: 'data-src',
				prevArrow: `<div class="sliderPrev">
								<svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.673 1.046a1.041 1.041 0 011.473 1.472L3.164 12.5l9.982 9.982a1.041 1.041 0 01-1.473 1.473L.22 12.5 11.673 1.046z" fill="#6EC045"/>
								</svg>
							</div>`,
				nextArrow: `<div class="sliderNext">
								<svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.327 1.046A1.041 1.041 0 00.854 2.518l9.982 9.982-9.982 9.982a1.041 1.041 0 101.473 1.473L13.78 12.5 2.327 1.046z" fill="#6EC045"/>
								</svg>
							</div>`,
				responsive: [
					{
				      breakpoint: 425,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 1,
				        infinite: true,
				        arrows: false
				      }
				    }
				]	
			});
		}		
	}

	function cartSlider(){
		if(document.querySelectorAll('.cartSlider .catalogSliderElWrapper').length * document.querySelector('.cartSlider .catalogSliderElWrapper').offsetWidth > document.querySelector('.cartSlider').offsetWidth){
			$('.cartSlider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				lazyLoad: 'ondemand',
				lazyLoadSrcAttr: 'data-src',
				dots: false,
				infinite: true,
				prevArrow: `<div class="sliderPrev">
								<svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.673 1.046a1.041 1.041 0 011.473 1.472L3.164 12.5l9.982 9.982a1.041 1.041 0 01-1.473 1.473L.22 12.5 11.673 1.046z" fill="#6EC045"/>
								</svg>
							</div>`,
				nextArrow: `<div class="sliderNext">
								<svg width="14" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.327 1.046A1.041 1.041 0 00.854 2.518l9.982 9.982-9.982 9.982a1.041 1.041 0 101.473 1.473L13.78 12.5 2.327 1.046z" fill="#6EC045"/>
								</svg>
							</div>`,   
				responsive: [
					{
				      breakpoint: 425,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 1,
				        infinite: true,
				        arrows: false
				      }
				    }
				]			 
			});	
		}		
	}


//GLOABAL functions
		//modal phone mask
		function maskTest() {
			if(document.querySelector('.tel')){
				$(".tel").mask("+38 (099) 999-99-99");
			}
		}
		maskTest();

		// input files with preload
		if(document.querySelector('input[type="file"]')){
	    	$('input[type="file"]').imageuploadify();
		}


	    //preloader
	    $(document).ready(function(){
		    function preloader(){
		    	var $preloader = $('#cube-loader');
			    $preloader.delay(500).fadeOut('slow');
		    }
		    preloader();
		})


	    //to top button
 		function scrollTop(){
			$(window).scroll(function(){
				if ($(this).scrollTop() > 300) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			});
			 
			$('.scrollup').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 600);
				return false;
			});
		}
		scrollTop();

		//tabs scrolling
		function customScrolling(){
			if(document.querySelector('.scrollingBlockWrapper')){
				document.querySelectorAll('.scrollingBlockWrapper').forEach(el =>{
					if(el.querySelector('.scrollingBlock').scrollWidth > el.querySelector('.scrollingBlock').clientWidth){
						el.querySelector('.arrowNext').classList.add('active');
						var scrollSize = document.querySelector('.scrollingBlock').clientWidth / 5;
						el.querySelector('.arrowNext').addEventListener('click',() =>{
							let scrollingBlock = el.querySelector('.scrollingBlock');	
							$(scrollingBlock).animate({
						    	scrollLeft: '+=' + scrollSize
							},500)
							setTimeout(
								() => {
									if((el.querySelector('.scrollingBlock').scrollLeft + 1) > (el.querySelector('.scrollingBlock').scrollWidth - el.querySelector('.scrollingBlock').clientWidth)){
										el.querySelector('.arrowNext.active').classList.remove('active');
									}
									if((el.querySelector('.scrollingBlock').scrollLeft > 0) && el.querySelector('.arrowPrevious:not(.active)')){
										el.querySelector('.arrowPrevious:not(.active)').classList.add('active');
									}		
								},
							500)
						})

						el.querySelector('.arrowPrevious').addEventListener('click',() =>{
							let scrollingBlock = el.querySelector('.scrollingBlock');
							$(scrollingBlock).animate({
						    	scrollLeft: '-=' + scrollSize
							},500)
							setTimeout(
								() => {
									if((el.querySelector('.scrollingBlock').scrollLeft >= 0)){
										el.querySelector('.arrowNext').classList.add('active');
									}
									if(el.querySelector('.scrollingBlock').scrollLeft == 0){
										el.querySelector('.arrowPrevious').classList.remove('active');
									}
								},
							500)		    
						})
					}
				})
			}
		}
		customScrolling();

	    //Start Jq LazyLoad
		lazyload();


		//PLYR
		function plyrStart(){
			if(document.querySelector('iframe')){
				var player = Plyr.setup('.plyrPlayer', {
				    /* options */
				});	
			}
		}	
		plyrStart();

		// page description function
		function pageDescription(){
			if(document.querySelector('main .pageDescription')){
				document.querySelector('main .pageDescription h5').addEventListener('click',() => {
					document.querySelector('main .pageDescription .gradient').classList.toggle('visible');
					if(document.querySelector('main .pageDescription .gradient').classList.contains('visible')){
						document.querySelector('main .pageDescription h5').innerText = "Скрыть"
					}
					else{
						document.querySelector('main .pageDescription h5').innerText = "Читать полностью"
					}
				});			
			}
		};
		pageDescription();


		//loadmore cards 
		function loadMore(){
			if(document.querySelector('.loadMoreCard')){
				document.querySelector('.loadMoreCard').addEventListener('click', () =>{
					var fileForLoad = 'ajax/loadMore' + document.querySelector('.loadMoreCard').getAttribute('data-id') + ".html"; 
					document.querySelector('.loadMoreCard > img').classList.add('circle');
					$.ajax({
				    	url: fileForLoad,
				    	type: "GET",
				    	data: {
				    	},
				    	success: function (response) {
				    		document.querySelector('.loadMoreCardWrapper').remove()
				    		document.querySelector('.catalogList').innerHTML += response;
				    		lazyload();
				    		loadMore();
				    		document.querySelector('.loadMoreCard > img').classList.remove('circle');

				    	},
				    	dataType: 'text',	
					})
				})
			}
		}
		loadMore();			



//PAGE FUNCTIONS

	// HEADER Functions
	if (document.querySelector('.headerGenegal')) {
		phoneBlockHideShow();
		selectLang();
		menuResizer();
		personBlockHideShow();
		searchStart();
		cartModalWindowStart();
		scrollBottomHeader();
		cartModalWindowCounter();
	}
		
	// HEADER ORDER Functions
	if (document.querySelector('.orderPage')) {
		phoneBlockHideShow();
		cartModalWindowStart();
	}
	
	// MAIN PAGE Functions
	if (document.querySelector('.startPage')){
		mainpageTab();
		gameBannersTab();
		timer();
		gamingAnimation();
		topSlider();
		productSliderTop();
		productSliderBottom();
		actionSlider();
	}

	// GAMING PAGE Functions
	if (document.querySelector('.gaming-page')){
		gameBannersTab();
		topSlider();
		productSliderTop();
		productSliderBottom();
		gamingSlider();
	}

	// FAN-SHOP PAGE Functions
	if (document.querySelector('.fan-shop-page')){
		gameBannersTab();
		topSlider();
		productSliderTop();
		productSliderBottom();
	}

	// ORDER PAGE Functions
	if (document.querySelector('.orderPageWrapper')){
		selectDrop();
		cityDropDown();
		validation();
		ajaxLoadPayment();
		ajaxLoadDelivery();

	}

	// ACTIONS PAGE Functions
	if (document.querySelector('.actionsPage')){
		actionPageTab();
		actionPageInsideTab();
		timer();
	}

	// ACTIONSINGLE PAGE Functions
	if (document.querySelector('.actionsPageSingle')){
		actionSinglePageTab();
		timer();
	}

	// CATEGORY PAGE Functions
	if (document.querySelector('.categoryPage')){
		productSliderTop();
		topSlider();
	}	

	// CABINET PAGE Functions
	if(document.querySelector('.cabinetPage')){
		cabinetPageGlobalTab();
		editData();
		personalMailingSubmit();
		validation();
	}

	// CHANGEPASSWORD PAGE Functions
	if(document.querySelector('.changePassword')){
		validation();
	}

	// 404 PAGE Functions
	if (document.querySelector('.pageError')){
		mainpageTab();
		timer();
		productSliderTop();
		productSliderBottom();
		actionSlider();
	}

	// COMPARE PAGE Functions
	if (document.querySelector('.comparePage')) {
		compareTab();
		scrollButtonComaparePageTop();
		scrollOnButtonComaparePageTop();
		scrollBriefBlock();	
		typeOfCompareSubmit();	
	}

	// FAQ PAGE Functions
	if (document.querySelector('.faqPage')) {
		faqPageDropDownText();
		validation();
	}	

	// TECHNOBLOG PAGE Functions
	if(document.querySelector('.technoblogPage')){
	    if(!bitrixEnv){
		    technoblogSubMenuDropDown();
		    technoblogTabs();
	    }
		validation();
	}

	// TECHNOBLOG SINGLE PAGE Functions
	if(document.querySelector('.technoblogSinglePageWrapper')){
		validation();
		leave_comment_technoblog();
		replicOnAnswer();
		showCommentsTechnoBlog();
		technoNewsSlider();
		showMoreAnswers();
		technoBlogForNavSlider();
	}

	// MARKET PAGE Functions
	if(document.querySelector('.marketPage')){
		sortingList();
		filterList();	
		followLinksVisible();
		rangeSlider();
		resultOfFilter();
	}

	// CARD PAGE Functions
	if(document.querySelector('.cartPage')){
		productSliderTop();
		productSliderBottom();
		startScrollOnCardPage();
		productSlider();
		tabOnCardPage();
		linkTabOnCardPage();
		commentAndAnswer();
		replicOnAnswer();
		tabInTabOnCardPage();
		validation();
		timer();
		citySelectorWithEvent();
		showMoreAnswers();
		stopVideoPlay();
		alternativeProdSlider();
	}

	// SEARCH RESULT PAGE Functions
	if(document.querySelector('.searchResultPage')){
	}

	// SUBMIT REGISTRATION PAGE Functions
	if(document.querySelector('.submitRegistration')){
		validation();
	}

	// SUBMIT CHANGE PASSWOR RECOVERY PAGE Functions
	if(document.querySelector('.submitChangePasswordRecovery')){
		validation();
	}
	
	// MODAL WINDOW Functions

	if(document.querySelector('.modalWindowBlock')){
		modalWindowStart();	
		modalWindowDropDownList();
		modalWindowInsideTab();
		cartModalWindowCounter();
	}

	if(document.querySelector('.modalWindowBlock .modalWindowSubModalWrapper')){
		modalWindowSubModal();
	}

	// productCart Functions
	if (document.querySelector('.productCardIcon ')) {
		colorSeletor()
	}

	// phoneField in HEADER
	function phoneBlockHideShow(){
		if (window.innerWidth > 421) {
			document.querySelector('.phoneWrapper').addEventListener('mouseover', () =>{
				$('header .headerTopWrapper .headerTop .phoneWrapper .phoneDetailWindowWrapper').animate(400);
				document.querySelector('header .headerTopWrapper .headerTop .phoneWrapper .phoneDetailWindowWrapper').classList.add('active');
			})
			document.querySelector('.phoneWrapper').addEventListener('mouseout', () =>{
				$('header .headerTopWrapper .headerTop .phoneWrapper .phoneDetailWindowWrapper').animate(400);
				document.querySelector('header .headerTopWrapper .headerTop .phoneWrapper .phoneDetailWindowWrapper').classList.remove('active');
			})	
		}
	}

	// langField in HEADER
	function selectLang(){
   		$( ".selectLang" ).selectmenu({
   			classes: {
			    "ui-selectmenu-menu": "langSelectorView"
			},
			change: function() {
   				let val = $(this).val();
				if(val != '') {
					window.location = val;
				}
			}
   		});	
	}

	// mainMenuResizer in HEADER
	function menuResizer(){
		document.querySelector('.specialButtonWrapper').addEventListener('mouseover', () => {
			document.querySelector(".mainMenu").style.height = 'auto';
			document.querySelector(".mainMenu").addEventListener('mouseout',() => {
				document.querySelector(".mainMenu").style.height = 'auto';
			})
			document.querySelector(".mainMenu").classList.add('active');
			document.querySelector(".specialButtonWrapper .arrowTriangle").classList.add('active');
			document.querySelector(".mainMenuWrapper").classList.add('active');
			var minHeight = document.querySelector(".mainMenu").offsetHeight + 'px';
	   		document.querySelectorAll(".categoryName.withSubmenu" ).forEach(el =>{
	   			el.addEventListener('mouseover',() => {
	   				document.querySelector(".mainMenu").style.width = document.querySelector(".headerBottom").offsetWidth + 'px';
	   				document.querySelector('body').classList.add('modal');
	   				document.querySelector('header .headerBottomWrapper .headerBottom .leftSide .mainMenu .categoryName:hover .categoryList').style.minHeight = minHeight
	   				document.querySelector(".mainMenu").style.height = document.querySelector('header .headerBottomWrapper .headerBottom .leftSide .mainMenu .categoryName:hover .categoryList').offsetHeight + 'px';
	   			})
	   			el.addEventListener('mouseout',() =>{
	   				document.querySelector(".mainMenu").style.width = 'unset';
	   				document.querySelector('body').classList.remove('modal');
	   			})
	   		})
	   	})
	   	document.querySelector('.specialButtonWrapper').addEventListener('mouseout', () => {
	   		document.querySelector(".mainMenuWrapper").classList.remove('active');
	   		document.querySelector(".mainMenu").classList.remove('active');
	   		document.querySelector(".specialButtonWrapper .arrowTriangle").classList.remove('active');
	   		
	   	})
	}	

	// search field in HEADER
	function searchStart(){
		if(document.querySelector('.search input')){
			document.querySelector('.search input').addEventListener('focusin', () => {
				document.querySelector('.search').classList.add('active');
			})
			document.querySelector('.search input').addEventListener('click', () => {
				document.querySelector('.searchWrapper .prevSearch').classList.add('insearch');
				document.querySelector('.wrapper').classList.add('active')
			})
			document.querySelectorAll('.searchWrapper .prevSearch .resultEl p').forEach(el => {
				el.parentElement.addEventListener('click', () => {
					document.querySelector('.search input').value = el.innerText;
				})
			})
			document.querySelector('.search input').addEventListener('input', () => {
				if (document.querySelector('.search input').value.length > 0) {
					document.querySelector('.searchWrapper .searchResult').classList.add('insearch')
				}
				else{
					document.querySelector('.searchWrapper .searchResult').classList.remove('insearch')
				}	
			})
			document.querySelector('.wrapper').addEventListener('click', () =>{
				document.querySelector('.wrapper').classList.remove('active');
				document.querySelector('.searchWrapper .prevSearch').classList.remove('insearch');
				document.querySelector('.search').classList.remove('active');
				document.querySelector('.searchWrapper .searchResult').classList.remove('insearch')
			})
		}
	}

	// scroll + hidden top menu field in HEADER
	function scrollBottomHeader(){
		var topHeader = document.querySelector('header .headerTopWrapper'),
			mainBlock = document.querySelector('main');
		window.addEventListener('scroll', () => {
			if (document.querySelector('html').scrollTop >= 100) {
				topHeader.classList.add('scroll');
				mainBlock.classList.add('scroll')
			}
			else if(document.querySelector('html').scrollTop < 600){
				topHeader.classList.remove('scroll');
				mainBlock.classList.remove('scroll');
			}
		})
	}

	// personField in HEADER 
	function personBlockHideShow(){
		if (document.querySelector('.personField .bonusInformation')){
			document.querySelector('.personField').addEventListener('mouseover', () =>{
				$('header .headerBottomWrapper .headerBottom .rightSide .personField .personDetailWindowWrapper').animate(400);
				document.querySelector('header .headerBottomWrapper .headerBottom .rightSide .personField .personDetailWindowWrapper').classList.add('active');
			})
			document.querySelector('.personField').addEventListener('mouseout', () =>{
				$('header .headerBottomWrapper .headerBottom .rightSide .personField .personDetailWindowWrapper').animate(400);
				document.querySelector('header .headerBottomWrapper .headerBottom .rightSide .personField .personDetailWindowWrapper').classList.remove('active');
			})
		}
	}

	//start cart and autorization modal window in HEADER
	function cartModalWindowStart() {
		document.querySelectorAll(".cartModalWindowPopUpOn").forEach(el => {
			el.addEventListener("click", () => {
				document.querySelector(".cartModalWindowBlock").classList.add("active");
				var fileForLoad = 'ajax/modal_' + el.getAttribute('data-id') + ".html";  		       					
				document.querySelector('#cube-loader').classList.add('localLoader');	
               	$.ajax({
                	url: fileForLoad,
                	type: "GET",
                	data: {
                	},
                	success: function (response) {
	                   	document.querySelector('header .cartModalWindowBlock .modalWindowContent .headerModal').innerHTML = response;
		                if ((document.documentElement.clientHeight <= document.querySelector('.cartModalWindowBlock .modalWindowContent').scrollHeight) && (document.documentElement.clientHeight <= document.querySelector('.cartModalWindowBlock .modalWindowContent').scrollHeight)){
							document.querySelector(".cartModalWindowBlock .modalWindowContent").classList.add("long");
							document.querySelector(".cartModalWindowBlock").classList.add("long");
						}
						document.querySelector('body').classList.add('modal');
						cartModalWindowCounter();
						lazyload();
						document.querySelector('.cartSlider') ? cartSlider() : false;
						inAutorizationModalWindowStart();
						validation();
						document.querySelector('#cube-loader').classList.remove('localLoader');
                	},
                	dataType: 'text',
                })
			});
		});
		document.querySelector(".cartModalWindowBlock .modalWindowWrapper").addEventListener("click", () => {
			document.querySelector(".cartModalWindowBlock .modalWindowContent").classList.remove("long");
			document.querySelector(".cartModalWindowBlock").classList.remove("long");
			document.querySelector(".cartModalWindowBlock").classList.remove("active");	
			document.querySelector('body').classList.remove('modal');	
		});
		document.querySelector(".cartModalWindowBlock .modalWindowOff").addEventListener("click",() => {
			document.querySelector(".cartModalWindowBlock .modalWindowContent").classList.remove("long");
			document.querySelector(".cartModalWindowBlock").classList.remove("long");
			document.querySelector(".cartModalWindowBlock").classList.remove("active");	
			document.querySelector('body').classList.remove('modal');		
		});
	}

	//start modal window in autorization modal window in HEADER
	function inAutorizationModalWindowStart(){
		document.querySelectorAll(".authorizedModalWindowPopUpOn").forEach(el => {
			el.addEventListener("click", () => {
				var fileForLoad = 'ajax/modal_' + el.getAttribute('data-id') + ".html";
				document.querySelector('#cube-loader').classList.add('localLoader');
				$.ajax({
                	url: fileForLoad,
                	type: "GET",
                	data: {
                	},
                	success: function (response) {
	                   	document.querySelector('header .cartModalWindowBlock .modalWindowContent .headerModal').innerHTML = response;
		                if ((document.documentElement.clientHeight <= document.querySelector('.cartModalWindowBlock .modalWindowContent').scrollHeight) && (document.documentElement.clientHeight <= document.querySelector('.cartModalWindowBlock .modalWindowContent').scrollHeight)){
							document.querySelector(".cartModalWindowBlock .modalWindowContent").classList.add("long");
							document.querySelector(".cartModalWindowBlock").classList.add("long");
						}
						document.querySelector('body').classList.add('modal');
						cartModalWindowCounter();
						lazyload();
						validation();
						inAutorizationModalWindowStart();
						document.querySelector('#cube-loader').classList.remove('localLoader');
                	},
                	dataType: 'text',
                })
			});
		});
	}

	// mainTab on MAIN PAGE
	function mainpageTab(){
		if(window.outerWidth > 430){
			var selectors  = [].slice.call(document.querySelectorAll('.hotNewcomesBlock .tabSelector p')),
				tabsTop = [].slice.call(document.querySelectorAll('.hotNewcomesBlock .catalogSliderTopTab')),
				tabsBottom = [].slice.call(document.querySelectorAll('.hotNewcomesBlock .catalogSliderBottomTab'));			
			selectors.forEach(el=>{
				el.addEventListener('click',() => {
					selectors.forEach(elem => elem.classList.remove('active'));
					el.classList.add('active');
					var fileForLoadTop = 'ajax/main_top_' + el.getAttribute('data-id') + ".html",	
						fileForLoadBottom = 'ajax/main_bottom_' + el.getAttribute('data-id') + ".html";
					document.querySelector('#cube-loader').classList.add('localLoader');
					document.querySelector('body').classList.add('modal');
					$.ajax({
	                	url: fileForLoadTop,
	                	type: "GET",
	                	data: {
	                	},
	                	success: function (response) {
		                   	document.querySelector('.hotNewcomesBlock .catalogSliderWrapper .catalogSliderTopTab').innerHTML = response;
	       					productSliderTop();
	       					document.querySelector('#cube-loader').classList.remove('localLoader');
	       					document.querySelector('body').classList.remove('modal');
	                	},
	                	dataType: 'text',
	                })
	                document.querySelector('#cube-loader').classList.remove('localLoader');
					$.ajax({
	                	url: fileForLoadBottom,
	                	type: "GET",
	                	data: {
	                	},
	                	success: function (response) {
		                   	document.querySelector('.hotNewcomesBlock .catalogSliderWrapper .catalogSliderBottomTab').innerHTML = response;
	       					productSliderBottom();
	       					document.querySelector('#cube-loader').classList.remove('localLoader');
	       					document.querySelector('body').classList.remove('modal');	
	                	},
	                	dataType: 'text',
	                })					
				})
			})
		}
		else{
			$(".selectMobileEvent").select2({
				minimumResultsForSearch: Infinity
			});
			$(".selectMobileEvent").on('select2:select', function(){
				var fileForLoadTop = 'ajax/main_top_' + $(".selectMobileEvent").val() + ".html",	
					fileForLoadBottom = 'ajax/main_bottom_' + $(".selectMobileEvent").val() + ".html";
				document.querySelector('#cube-loader').classList.add('localLoader');
				document.querySelector('body').classList.add('modal');	
				$.ajax({
                	url: fileForLoadTop,
                	type: "GET",
                	data: {
                	},
                	success: function (response) {
	                   	document.querySelector('.hotNewcomesBlock .catalogSliderWrapper .catalogSliderTopTab').innerHTML = response;
       					productSliderTop();
       					document.querySelector('#cube-loader').classList.remove('localLoader');
       					document.querySelector('body').classList.remove('modal');
                	},
                	dataType: 'text',
                })
                document.querySelector('#cube-loader').classList.remove('localLoader');
				$.ajax({
                	url: fileForLoadBottom,
                	type: "GET",
                	data: {
                	},
                	success: function (response) {
	                   	document.querySelector('.hotNewcomesBlock .catalogSliderWrapper .catalogSliderBottomTab').innerHTML = response;
       					productSliderBottom();
       					document.querySelector('#cube-loader').classList.remove('localLoader');
       					document.querySelector('body').classList.remove('modal');	
                	},
                	dataType: 'text',
                })		
			})
		}
	};


	// tab with brands MAIN PAGE
	function gameBannersTab(){
		if(window.outerWidth > 430){
			var selectors  = [].slice.call(document.querySelectorAll('.gamingBrandsBlockWrapper .selectors p')),
				tabsEl = [].slice.call(document.querySelectorAll('.gamingBrandsBlockWrapper .tabBlock .tabBlockEl'));
			
			selectors.forEach(el=>{
				el.addEventListener('click',() => {
					selectors.forEach(el => el.classList.remove('active'));
					el.classList.add('active');
					fileForLoad = 'ajax/main_' + el.getAttribute('data-id') + ".html";	
					document.querySelector('#cube-loader').classList.add('localLoader');
					document.querySelector('body').classList.add('modal');					
					$.ajax({
	                	url: fileForLoad,
	                	type: "GET",
	                	data: {
	                	},
	                	success: function (response) {
		                   	document.querySelector('main.indexPages .gamingBrandsBlockWrapper .tabBlock .tabBlockEl').innerHTML = response;
		                   	var imagePath = document.querySelector('.tabBlock .topBrandImage').src;
		                   	document.querySelector('.topBanner .topBrandImage').setAttribute('data-src', imagePath);
	                		document.querySelector('.topBanner .topBrandImage').src = imagePath;
	                		lazyload();
							document.querySelector('#cube-loader').classList.remove('localLoader');
							document.querySelector('body').classList.remove('modal');
	                	},
	                	dataType: 'text',
	                })
				})
			})
		}
		else{
			if(document.querySelector('.selectGamingMobileEvent')){
				$(".selectGamingMobileEvent").select2({
					minimumResultsForSearch: Infinity
				});
				$(".selectGamingMobileEvent").on('select2:select', function(){
					var fileForLoad = 'ajax/main_' + $(".selectGamingMobileEvent").val() + ".html";	
					document.querySelector('#cube-loader').classList.add('localLoader');
					document.querySelector('body').classList.add('modal');	
					$.ajax({
	                	url: fileForLoad,
	                	type: "GET",
	                	data: {
	                	},
	                	success: function (response) {
		                   	document.querySelector('main.indexPages .gamingBrandsBlockWrapper .tabBlock .tabBlockEl').innerHTML = response;
		                   	var imagePath = document.querySelector('.tabBlock .topBrandImage').src;
		                   	document.querySelector('.topBanner .topBrandImage').setAttribute('data-src', imagePath);
	                		document.querySelector('.topBanner .topBrandImage').src = imagePath;
	                		lazyload();
							document.querySelector('#cube-loader').classList.remove('localLoader');
							document.querySelector('body').classList.remove('modal');
	                	},
	                	dataType: 'text',
	                })		
				})
			}
		}

	}

	// gaming animation on MAIN PAGE
	function gamingAnimation(){
		var gamingList = [].slice.call(document.querySelectorAll('.startPage .gamesBannerBlockWrapper .gamesBannerBlock a'));
		gamingList.forEach(el => {
			el.addEventListener('mouseover', () => {
				gamingList.forEach(elem =>{
					elem.querySelector('img').classList.add('hidden')
				})	
				el.querySelector('img').classList.remove('hidden')
				gamingList.forEach(elem =>{
					elem.querySelector('.content').classList.add('hidden')
				})	
				el.querySelector('.content').classList.remove('hidden')
				var index = gamingList.indexOf(el);
				document.querySelectorAll('.gamesBannerBlockWrapper .layouts img').forEach(elem => {
					elem.classList.remove('visible');
				})
				document.querySelectorAll('.gamesBannerBlockWrapper .layouts img')[index].classList.add('visible')
			})
		})
		document.querySelector('.startPage .gamesBannerBlockWrapper .gamesBannerBlock').addEventListener('mouseout', () => {
			document.querySelectorAll('.startPage .gamesBannerBlockWrapper .gamesBannerBlock > a > img').forEach(el => {
				el.classList.remove('hidden');
			})
			document.querySelectorAll('.startPage .gamesBannerBlockWrapper .gamesBannerBlock > a > .content').forEach(el => {
				el.classList.remove('hidden');
			})
			document.querySelectorAll('.startPage .gamesBannerBlockWrapper .layouts > img').forEach(el => {
				el.classList.remove('visible')
			})
		})	
	}


	// validation for forms ORDER PAGE and FAQ PAGE
	function validation(){
		if(window.location.href.indexOf("/") != -1){
			var messages = {
				name: {
					required: "Поле обязательно для заполнения",
				},
				userName: {
					required: "Поле обязательно для заполнения",
					minlength: "Текст не должен быть меньше 6 символов",
					maxlength: "Текст не должен быть больше 32 символов",
				},
				old_password: {
					required: "Введите пожалуйста пароль",
					minlength: "Пароль не должен быть меньше 6 символов",
				},
				password: {
					required: "Введите пожалуйста пароль",
					minlength: "Пароль не должен быть меньше 6 символов",
				},
				confirm_password: {
					required: "Введите пожалуйста пароль",
					minlength: "Пароль не должен быть меньше 6 символов",
					equalTo: "Пароли должны совпадать",
				},
				email: {
					required:"Поле обязательно для заполнения",
					email: "Почта указана не корректно",
				},
				city:{
					required: "Поле обязательно для заполнения",
				},
				cityBank:{
					required: "Поле обязательно для заполнения",
				},
				tel:{
					required: "Поле обязательно для заполнения",
				},
				street:{
					required: "Поле обязательно для заполнения",
				},
				house:{
					required: "Поле обязательно для заполнения",
				},
				flat:{
					required: "Поле обязательно для заполнения",
				},
				office:{
					required: "Поле обязательно для заполнения",
				},
				organisationName:{
					required: "Поле обязательно для заполнения",	
				},
				organisationCode:{
					required: "Поле обязательно для заполнения",	
				},
				familyName:{
					required:"Поле обязательно для заполнения",
				},
				agreement:{
					required:"Поле обязательно для заполнения",
				},
				birthday:{
					required:"Поле обязательно для заполнения",
				},
				promocode:{
					required:"Поле обязательно для заполнения",
				},
				messageField:{
					required:"Поле обязательно для заполнения",
				},
				requiredTextField:{
					required:"Поле обязательно для заполнения",
				},
			}
		}
		else{
			var messages = {
				name: {
					required: "Поле обов'язкове до заповнення",
				},
				userName: {
					required: "Поле обов'язкове до заповнення",
					minlength: "Текст не може бути меньше 6 символов",
					maxlength: "Текст не може бути більше 32 символов",
				},
				old_password: {
					required: "Поле обов'язкове до заповнення",
					minlength: "Пароль не має бути меньше 6 символів",
				},
				password: {
					required: "Поле обов'язкове до заповнення",
					minlength: "Пароль не має бути меньше 6 символів",
				},
				confirm_password: {
					required: "Поле обов'язкове до заповнення",
					minlength: "Пароль не має бути меньше 6 символів",
					equalTo: "Паролі мають співпадати",
				},
				email: {
					required: "Поле обов'язкове до заповнення",
					email: "Почта зазначена не корректно",
				},
				city:{
					required: "Поле обов'язкове до заповнення",
				},
				cityBank:{
					required: "Поле обов'язкове до заповнення",
				},
				tel:{
					required: "Поле обов'язкове до заповнення",
				},
				street:{
					required: "Поле обов'язкове до заповнення",
				},
				house:{
					required: "Поле обов'язкове до заповнення",
				},
				flat:{
					required: "Поле обов'язкове до заповнення",
				},
				office:{
					required: "Поле обов'язкове до заповнення",
				},
				organisationName:{
					required: "Поле обов'язкове до заповнення",
				},
				organisationCode:{
					required: "Поле обов'язкове до заповнення",	
				},
				familyName:{
					required:"Поле обов'язкове до заповнення",
				},
				agreement:{
					required:"Поле обов'язкове до заповнення",
				},
				birthday:{
					required:"Поле обов'язкове до заповнення",
				},
				promocode:{
					required:"Поле обов'язкове до заповнення",
				},
				messageField:{
					required:"Поле обов'язкове до заповнення",
				},
				requiredTextField:{
					required:"Поле обов'язкове до заповнення",	
				},
			}
		}
		var rules = {
				name: {
					required: true,
				},
				userName:{
					required: true,
					minlength: 3,
					maxlength: 32,
				},
				password: {
					required: true,
					minlength: 6,
				},
				old_password: {
					required: true,
					minlength: 6,
				},
				confirm_password: {
					required: true,
					minlength: 6,
					equalTo: "#password",
				},
				email: {
					required: true,
					email: true,
				},
				city:{
					required: true,
				},
				cityBank:{
					required: true,
				},
				tel:{
					required: true,
				},
				street:{
					required: true,
				},
				house:{
					required: true,
				},
				flat:{
					required: true,
				},
				office:{
					required: true,
				},
				organisationName:{
					required:true,
				},
				organisationCode:{
					required:true,
				},
				familyName:{
					required:true,
				},
				agreement:{
					required:true,
				},
				birthday:{
					required:true,
				},
				promocode:{
					required:true,
				},
				messageField:{
					required:true,
				},
				requiredTextField:{
					required:true,
				},
		}
		if(document.querySelector('form.validate')){
			document.querySelectorAll('form.validate').forEach(el => {
				$(el).validate({
					rules,
					messages,
				})
			})
		}
		else if(document.querySelector('.autorizationForm')){
			$(".autorizationForm").validate({
				rules,
				messages,
			  	submitHandler: () => {
			  		if(document.querySelector('.autorizationModal > form.autorizationPart')){
				  		var emailData = document.querySelector('.autorizationModal .autorizationForm input[name=email]').value,
				  			passwordData = document.querySelector('.autorizationModal .autorizationForm input[name=password]').value;
				  		document.querySelector('#cube-loader').classList.add('localLoader');
				  		$.ajax({
		                	url: '/ajax/autorizationTest.html',
		                	type: "GET",
		                	data: {
		                		email: emailData,
		                		password: passwordData
		                	},
		                	success: function (response) {
		                		if(response == 'valid'){
		                			document.location.reload(false);
		                		}
		                		else{
		                			document.querySelector('.autorizationModal .autorizationForm > .errorInForm').innerText = "Неверный логин или пароль";
		                		}
		                		document.querySelector('#cube-loader').classList.remove('localLoader');
		                	},
		                	dataType: 'text',
		                })
				  	}
				  	else if(document.querySelector('.autorizationModal > form.registrationForm')){
				  		var emailData = document.querySelector('.autorizationModal .autorizationForm input[name=email]').value;
				  		document.querySelector('#cube-loader').classList.add('localLoader');
				  		$.ajax({
		                	url: '/ajax/autorizationTest.html',
		                	type: "GET",
		                	data: {
		                		email: emailData,
		                	},
		                	success: function (response) {
		                		if(response == 'valid'){
					               	document.querySelector('header .cartModalWindowBlock .modalWindowContent .headerModal .registrationForm').innerHTML = 
					               	"<h4 class='title'>Спасибо</h4><p class='submutAction'>Для завершения регистрации перейдите по ссылке отправленой в письме на email: <span>" + emailData + "</span></p>";        	
		                		}
		                		else{
		                			document.querySelector('.autorizationModal .autorizationForm.registrationForm > .errorInForm').innerText = "Пользователь с таким e-mail (" + emailData +") уже существует.";
		                		}
		                		document.querySelector('#cube-loader').classList.remove('localLoader');
		                	},
		                	dataType: 'text',
		                })
				  	}


					else if(document.querySelector('.autorizationModal > form.forgotPassword')){
				  		var emailData = document.querySelector('.autorizationModal .autorizationForm input[name=email]').value;
				  		document.querySelector('#cube-loader').classList.add('localLoader');
				  		$.ajax({
		                	url: '/ajax/autorizationTest.html',
		                	type: "GET",
		                	data: {
		                		email: emailData,
		                	},
		                	success: function () {
					            document.querySelector('header .cartModalWindowBlock .modalWindowContent .headerModal .forgotPassword').innerHTML = "<h4 class='title'>Отлично!</h4><p class='submutAction'>Мы выслали вам на email: <span>" + emailData + "</span> инструкцию о том как создать новый пароль.</p>";        
		                		document.querySelector('#cube-loader').classList.remove('localLoader');
		                	},
		                	dataType: 'text',
		                })
				  	}


			  	}
			});
		}
	};

	//ajax load of payment ORDER PAGE
	function ajaxLoadPayment() {
		document.querySelectorAll('.payList .title label span').forEach(el => {
			el.addEventListener('click', () => {
				if (el.parentElement.getAttribute('data-id') == null) {
					var contentBlock = document.querySelector('.payList .payListEl .contentAjax');
                   	contentBlock.innerHTML = null;
                   	el.parentElement.parentElement.after(contentBlock);
				}
				else{
					var fileForLoad = 'ajax/' + el.parentElement.getAttribute('data-id') + '.html';
					document.querySelector('#cube-loader').classList.add('localLoader');
					document.querySelector('body').classList.add('modal');
					$.ajax({
	                	url: fileForLoad,
	                	type: "GET",
	                	data: {
	                	},
	                	success: function (response) {
	                	var contentBlock = document.querySelector('.payList .payListEl .contentAjax');
	                   	contentBlock.innerHTML = response
	                   	el.parentElement.parentElement.after(contentBlock);
	                    selectDrop();
	                    validation();
	                    document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal');
                	},
                	dataType: 'text',
	                })
	            }
			})
		})
	}
	
	//ajax load of delivery ORDER PAGE
	function ajaxLoadDelivery() {
		document.querySelectorAll('.deliveryList .title label span').forEach(el => {
			el.addEventListener('click', () => {
				if (el.parentElement.getAttribute('data-id') == null) {
					var contentBlock = document.querySelector('.deliveryList .deliveryEl .contentAjax');
                   	contentBlock.innerHTML = null;
                   	el.parentElement.parentElement.after(contentBlock);
				}
				else{
					var fileForLoad = 'ajax/' + el.parentElement.getAttribute('data-id') + '.html';
					document.querySelector('#cube-loader').classList.add('localLoader');
					document.querySelector('body').classList.add('modal');
					$.ajax({
	                	url: fileForLoad,
	                	type: "GET",
	                	data: {
	                	},
	                	success: function (response) {
	                	var contentBlock = document.querySelector('.deliveryList .deliveryEl .contentAjax');
	                   	contentBlock.innerHTML = response
	                   	el.parentElement.parentElement.after(contentBlock);
	                    cityDropDown();
	                    validation();
	                    document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal');	
	                },
                	dataType: 'text',
	                })
                }
			})
		})
	}


	//generalTab ACTION PAGE
	function actionPageTab(){
		document.querySelectorAll(".actionsPage .generalSelector .generalSelectorEl").forEach(el => {
			el.addEventListener('click', () => {
				document.querySelectorAll(".actionsPage .generalSelector .generalSelectorEl").forEach(elem => {
					elem.classList.remove('active')
				})
				el.classList.add('active')
				var fileForLoad = "ajax/actions/" + el.getAttribute('data-id') + ".html";
				document.querySelector('#cube-loader').classList.add('localLoader');
				document.querySelector('body').classList.add('modal');
				$.ajax({
                	url: fileForLoad,
                	type: "GET",
                	data: {
                	},
                	success: function (response) {
                		var contentBlock = document.querySelector('.actionsPage .generalTabWrapper');
	                   	contentBlock.innerHTML = response;
	                   	actionPageInsideTab();
	                   	timer();
	                   	lazyload();
	                   	document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal');
						if (document.querySelector('.selectList')) {
							mobileTabToggle();
						}
						
                	},
                	dataType: 'text',
                })
			})
		})
	}

	//insideTab ACTION PAGE
	function actionPageInsideTab(){
		document.querySelectorAll('.actionsPage .generalTabWrapper .generalTabEl .insideTabSelector .insideTabSelectorEl').forEach(el => {
			el.addEventListener('click',() => {
				document.querySelectorAll('.actionsPage .generalTabWrapper .generalTabEl .insideTabSelector .insideTabSelectorEl').forEach(elem =>{
					elem.classList.remove('active');
				})
				el.classList.add('active');
				var rootTab = document.querySelector('.actionsPage .generalSelector .generalSelectorEl.active').getAttribute('data-id'),
					fileForLoad = "ajax/actions/" + rootTab + "_" + el.getAttribute('data-id') + ".html"; 
				document.querySelector('#cube-loader').classList.add('localLoader');
				document.querySelector('body').classList.add('modal');	
				$.ajax({
                	url: fileForLoad,
                	type: "GET",
                	data: {
                	},
                	success: function (response) {
                		var contentBlock = document.querySelector('.actionsPage .generalTabWrapper .generalTabEl .insideTabWrapper');
	                   	contentBlock.innerHTML = response;
	                   	timer();
	                   	lazyload();
						document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal');                  	
                	},
                	dataType: 'text',
                })
			})
		})
	}

	//timer for actions ACTION PAGE ACTIONPAGESINGLE MAIN PAGE
	function timer(){
		document.querySelectorAll('.timer').forEach(el =>{
			var finalDate = Date.parse(el.getAttribute('data-id'));
			if(Math.floor((finalDate - Date.now())/1000/60%60) >= 0){
				el.querySelector('.minutes').innerHTML = Math.floor((finalDate - Date.now())/1000/60%60);
				el.querySelector('.hours').innerHTML = Math.floor((finalDate - Date.now())/1000/60/60%24);
				el.querySelector('.days').innerHTML = Math.floor((finalDate - Date.now())/1000/60/60/24);						
			}
			else{
				el.querySelector('.minutes').innerHTML = 0;
				el.querySelector('.hours').innerHTML = 0;
				el.querySelector('.days').innerHTML = 0;					
			}
			setInterval(() => {
				if(Math.floor((finalDate - Date.now())/1000/60%60) >= 0){
					el.querySelector('.minutes').innerHTML = Math.floor((finalDate - Date.now())/1000/60%60);
					el.querySelector('.hours').innerHTML = Math.floor((finalDate - Date.now())/1000/60/60%24);
					el.querySelector('.days').innerHTML = Math.floor((finalDate - Date.now())/1000/60/60/24);						
				}
				else{
					el.querySelector('.minutes').innerHTML = 0;
					el.querySelector('.hours').innerHTML = 0;
					el.querySelector('.days').innerHTML = 0;					
				}
			}, 60000);	
		})
	}

	//tab ACTIONPAGESINGLE
	function actionSinglePageTab(){
		document.querySelectorAll('.actionsPageSingle .otherActionsProds .otherActionsProdsSelectors .otherActionsProdsSelectorsEl').forEach(el => {
			el.addEventListener('click',() => {
				document.querySelectorAll('.actionsPageSingle .otherActionsProds .otherActionsProdsSelectors .otherActionsProdsSelectorsEl').forEach(elem =>{
					elem.classList.remove('active');
				})
				el.classList.add('active');
				var fileForLoad = "ajax/actionSingle/" + el.getAttribute('data-id') + ".html";
				document.querySelector('#cube-loader').classList.add('localLoader');
				document.querySelector('body').classList.add('modal');				 
				$.ajax({
                	url: fileForLoad,
                	type: "GET",
                	data: {
                	},
                	success: function (response) {
                		var contentBlock = document.querySelector('.actionsPageSingle .otherActionsProds .otherActionsProdsTabs');
	                   	contentBlock.innerHTML = response;
	                   	lazyload();
	                   	document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal');	
                	},
                	dataType: 'text',
                })
			})
		})
	}

	// toptabs on CABINET PAGE
	function cabinetPageGlobalTab(){
		document.querySelectorAll('.cabinetPage .tabSelectorsWrapper > p').forEach(el => {
			el.addEventListener('click', () =>{
				document.querySelectorAll('.cabinetPage .tabSelectorsWrapper > p').forEach(elem => {
					elem.classList.remove('active');
				})
				el.classList.add('active');
				var fileForLoad = "ajax/cabinet/" + el.getAttribute('data-id') + ".html";
				document.querySelector('#cube-loader').classList.add('localLoader');
				document.querySelector('body').classList.add('modal');				
				$.ajax({
                	url: fileForLoad,
                	type: "GET",
                	data: {
                	},
                	success: function (response) {
                		var contentBlock = document.querySelector('.cabinetPage .tabsWrapper');
	                   	contentBlock.innerHTML = response;
	                   	editData();
	                   	personalMailingSubmit();
	                   	modalWindowCabinetStart();
	                   	if(document.querySelector('.cabinetPage .tabsWrapper .tabsBlock .tabSelector > p')){
	                   		cabinetPageInsideTab();
	                   	}
	                   	validation();
	                   	lazyload();
	                   	document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal');	
						if (document.querySelector('.selectList')) {
							mobileTabToggle();
						}
                	},
                	dataType: 'text',
                })			
			})
		})
	}

	// insidetabs on CABINET PAGE
	function cabinetPageInsideTab(){
		document.querySelectorAll('.cabinetPage .tabsWrapper .tabsBlock .tabSelector > p').forEach(el => {
			el.addEventListener('click', () =>{
				document.querySelectorAll('.cabinetPage .tabsWrapper .tabsBlock .tabSelector > p').forEach(elem => {
					elem.classList.remove('active');
				})
				el.classList.add('active');
				var rootPath = document.querySelector('.cabinetPage .tabSelectorsWrapper > p.active').getAttribute('data-id');
				var fileForLoad = "ajax/cabinet/" + rootPath + "_" + el.getAttribute('data-id') + ".html";
				document.querySelector('#cube-loader').classList.add('localLoader');
				document.querySelector('body').classList.add('modal');
				$.ajax({
                	url: fileForLoad,
                	type: "GET",
                	data: {
                	},
                	success: function (response) {
                		var contentBlock = document.querySelector('.cabinetPage .tabsWrapper .tabsBlock .tabsBlockWrapper');
	                   	contentBlock.innerHTML = response;
	                   	modalWindowCabinetStart();
	                   	lazyload();
	                   	document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal');
                	},
                	dataType: 'text',
                })			
			})
		})
	}

	// personalMailing on CABINET PAGE
	function personalMailingSubmit(){
		if(document.querySelector('.cabinetPage .tabsWrapper .personalDataTab .leftCol .mailingLists ul li label')){
			document.querySelectorAll('.cabinetPage .tabsWrapper .personalDataTab .leftCol .mailingLists ul li label span').forEach(el => {
				el.addEventListener('click', () => {
					document.querySelector('.personalDataWrapper .mailingLists').submit();
				})
			})
		}	
	}

	// open editUserData on CABINET PAGE
	function editData(){
		if(document.querySelector('button[data-id="edit_data"]')){
			document.querySelector('button[data-id="edit_data"]').addEventListener('click', () => {
				var fileForLoad = "ajax/cabinet/" + document.querySelector('button[data-id="edit_data"]').getAttribute('data-id') + ".html";
				document.querySelector('#cube-loader').classList.add('localLoader');
				document.querySelector('body').classList.add('modal');
				$.ajax({
	            	url: fileForLoad,
	            	type: "GET",
	            	data: {
	            	},
	            	success: function (response) {
	            		var contentBlock = document.querySelector('.cabinetPage .tabsWrapper');
	                   	contentBlock.innerHTML = response;
	                   	exitEditData();
	                   	validation();
	           			inputDate();
						selectDrop();
						addressInput();
						$(".tel").mask("+38 (099) 999-99-99");
						showInputImage();
						document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal');	
	            	},
	            	dataType: 'text',
	            })	
			})
		}
	}

	// editUserData show inputed image on CABINET PAGE
	function showInputImage(){
		document.querySelector('.singleInput').addEventListener('change', () => {
			document.querySelector('.singleImage').src = window.URL.createObjectURL((document.querySelector('.singleInput')).files[0])
		})
	}

	// exit editUserData on CABINET PAGE
	function exitEditData(){
		document.querySelector('.correctionOfPersonalDataWrapper .blockOfButtons .unsave').addEventListener('click', () => {
			var fileForLoad = "ajax/cabinet/" + document.querySelector('.cabinetPage .tabSelectorsWrapper .active').getAttribute('data-id') + ".html";
			document.querySelector('#cube-loader').classList.add('localLoader');
			document.querySelector('body').classList.add('modal');	
			$.ajax({
            	url: fileForLoad,
            	type: "GET",
            	data: {
            	},
            	success: function (response) {
            		var contentBlock = document.querySelector('.cabinetPage .tabsWrapper');
                   	contentBlock.innerHTML = response;
                   	editData();
                   	validation();
                   	personalMailingSubmit();
	                document.querySelector('#cube-loader').classList.remove('localLoader');
					document.querySelector('body').classList.remove('modal');	   	
            	},
            	dataType: 'text',
            })	
		})
	}

    //input of personal data CABINET PAGE
   	function inputDate(){
   		$( ".datepicker" ).datepicker({
			showOn: "both",
			dateFormat: "dd/mm/yy",
			buttonImage: 'images/cabinet/calendar.svg',
			buttonImageOnly: true,
			firstDay: 1,
			minDate: new Date($('#hiddendelivdate').val()),
			monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		});
		document.querySelector('.data').append(document.getElementById('ui-datepicker-div'))		
	}

	//dropDown select on CABINET PAGE
   	function selectDrop(){
   		$( ".select" ).selectmenu();	
	}

	// input adress data on CABINET PAGE
	function addressInput(){
		if (document.querySelector('.cabinetPage .personalDataTab .correctionOfPersonalDataWrapper')) {
			var saveButton = document.querySelector('.cabinetPage .personalDataTab .correctionOfPersonalDataWrapper .personalDataForm .addressWrapper .save'),
				inputArray = document.querySelectorAll('.cabinetPage .personalDataTab .correctionOfPersonalDataWrapper .personalDataForm .addressWrapper .address label input'),
				openForm = document.querySelector('.cabinetPage .tabsWrapper .personalDataTab .correctionOfPersonalDataWrapper .openAdressForm'),
				inputForm = document.querySelector('.cabinetPage .tabsWrapper .personalDataTab .correctionOfPersonalDataWrapper .personalDataForm .addressWrapper');			

			openForm.addEventListener('click', () => {
				openForm.classList.toggle('hidden')
				inputArray.forEach(elem => {elem.removeAttribute('disabled')})
				inputForm.classList.toggle('visible')
			})

			saveButton.addEventListener('click', () => {
				var addressArray = [],
					indexInput = (document.querySelector('ol.adresses').childElementCount);
				inputArray.forEach(el => {
					if(el.value < 1 && el.classList.contains('adressValidate')){
						el.classList.add('error')
					}
					else{
						el.classList.remove('error')	
					}
					addressArray.push(el.value);
				})

				if(addressArray[0].length > 0 && addressArray[1].length > 0 && addressArray[2].length > 0){
					var newAdress = document.createElement("li");
					newAdress.innerHTML = "<p>город " + addressArray[0] + ", "  + addressArray[1] + " дом " + addressArray[2] + " квартира " + addressArray[3] + "  " + "<span> Удалить </span></p>";    
					document.querySelector('.cabinetPage .tabsWrapper .personalDataTab .correctionOfPersonalDataWrapper .personalDataForm .adresses').append(newAdress);
					$('.addressWrapper .address').clone().appendTo(newAdress);
					newAdress.querySelectorAll('input').forEach(elem => {
						var attribute = elem.getAttribute('name');
						elem.setAttribute('name', attribute + "[" + indexInput + "]");
					})
					indexInput++;
					openForm.classList.toggle('hidden');
					inputForm.classList.toggle('visible');
					inputArray.forEach(elem => elem.setAttribute('disabled','disabled'))
				}


				var removeAdressArray = document.querySelectorAll('.cabinetPage .tabsWrapper .personalDataTab .correctionOfPersonalDataWrapper .personalDataForm .adresses li p span');
				removeAdressArray.forEach(el => {
					el.addEventListener('click', () => {
						el.parentElement.parentElement.remove()
					})	
				})
			})
		}
	}

	// modalWindow on CABINET PAGE
	function modalWindowCabinetStart() {
		if (document.querySelector('.popUpOn')) {
			document.querySelectorAll(".popUpOn").forEach(el => {
				el.addEventListener("click", () => {
					if(document.querySelector('.cabinetPage .tabsWrapper .tabsBlock .tabSelector p.active')){
						var rootPath= document.querySelector('.cabinetPage .tabsWrapper .tabsBlock .tabSelector p.active').getAttribute('data-id');
						var fileForLoad = 'ajax/cabinet/modal_' + rootPath + '_' + el.getAttribute('data-id') + '.html';
					}
					else{
						var fileForLoad = 'ajax/cabinet/modal_' + el.getAttribute('data-id') + '.html';
					}
					var contentBlock = document.querySelector('.modalWindowBlock .modalWindowContent .modalContent');
					document.querySelector('#cube-loader').classList.add('localLoader');
					$.ajax({
	                	url: fileForLoad,
	                	type: "GET",
	                	data: {
	                	},
	                	success: function (response) {
		                   	contentBlock.innerHTML = response;
		       				document.querySelector(".modalWindowBlock").classList.add("active");
							if ((document.documentElement.clientHeight <= document.querySelector('.modalWindowBlock .modalWindowContent').scrollHeight) && (document.documentElement.clientHeight <= document.querySelector('.modalWindowBlock .modalWindowContent').scrollHeight)){
								document.querySelector(".modalWindowBlock .modalWindowContent").classList.add("long");
								document.querySelector(".modalWindowBlock").classList.add("long");
							}
							document.querySelector('#cube-loader').classList.remove('localLoader');
		                	document.querySelector('body').classList.add('modal');
	                	},
	                	dataType: 'text',
	                })
				});
			});
			document.querySelector(".modalWindowBlock .modalWindowWrapper").addEventListener("click", () => {
					document.querySelector(".modalWindowBlock .modalWindowContent").classList.remove("long");
					document.querySelector(".modalWindowBlock").classList.remove("long");
					document.querySelector(".modalWindowBlock").classList.remove("active");	
					document.querySelector('body').classList.remove('modal');	
				});
			document.querySelector(".modalWindowBlock .modalWindowOff").addEventListener("click",() => {
					document.querySelector(".modalWindowBlock .modalWindowContent").classList.remove("long");
					document.querySelector(".modalWindowBlock").classList.remove("long");
					document.querySelector(".modalWindowBlock").classList.remove("active");	
					document.querySelector('body').classList.remove('modal');		
			});
		}
	}

	// Tab on COMPARE PAGE
	function compareTab(){
		var selectors  = [].slice.call(document.querySelectorAll('.comparePage .compareBlockWrapper .selectorTab p'));

		selectors.forEach(el=>{
			el.addEventListener('click',() => {
				selectors.forEach(el => el.classList.remove('active'));		
				el.classList.add('active');
				var fileForLoad = "ajax/compare/" + el.getAttribute('data-id') + ".html";
				document.querySelector('#cube-loader').classList.add('localLoader');
				document.querySelector('body').classList.add('modal');				
				$.ajax({
                	url: fileForLoad,
                	type: "GET",
                	data: {
                	},
                	success: function (response) {
                		var contentBlock = document.querySelector('.comparePage .compareBlockWrapper .tabContentBlock .tabContentBlockEl');
	                   	contentBlock.innerHTML = response;
						scrollButtonComaparePageTop();
						scrollBriefBlock();
						typeOfCompareSubmit();
						lazyload();
						document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal');						
                	},
                	dataType: 'text',
                })
			})
		})
	}

	// Check necessary of scroll button on COMPARE PAGE
	function scrollButtonComaparePageTop(){
		var visibleWidth = document.querySelector('.comparePage .tabContentBlockEl .topBlock .compareContent').clientWidth, 
			totalScrollWidth = document.querySelector('.comparePage .tabContentBlockEl .topBlock .compareContent').scrollWidth,
			briefScrollButtonRight = document.querySelector('.comparePage .compareBlockWrapper .tabContentBlock .tabContentBlockEl .briefBlock .rightButton'),
			briefScrollButtonLeft = document.querySelector('.comparePage .compareBlockWrapper .tabContentBlock .tabContentBlockEl .briefBlock .leftButton'),
			scrollButtonRight = document.querySelector('.comparePage .compareBlockWrapper .tabContentBlock > .tabContentBlockEl .topBlock .rightButton'),
			scrollButtonLeft = document.querySelector('.comparePage .compareBlockWrapper .tabContentBlock > .tabContentBlockEl .topBlock .leftButton');
			briefScrollButtonLeft.classList.remove('active');
			scrollButtonLeft.classList.remove('active');
		if (totalScrollWidth > visibleWidth) {			
			scrollButtonRight.classList.add('active');
			briefScrollButtonRight.classList.add('active');
		}
		else{
			scrollButtonRight.classList.remove('active');
			briefScrollButtonRight.classList.remove('active');
		}
	}

	//scroll clicking on button on COMPARE PAGE
	function scrollOnButtonComaparePageTop(){
		var scrollButtonRight = document.querySelector('.comparePage .compareBlockWrapper .tabContentBlock > .tabContentBlockEl .topBlock .rightButton'),
			scrollButtonLeft = document.querySelector('.comparePage .compareBlockWrapper .tabContentBlock > .tabContentBlockEl .topBlock .leftButton'),
			briefScrollButtonRight = document.querySelector('.comparePage .compareBlockWrapper .tabContentBlock .tabContentBlockEl .briefBlock .rightButton'),
			briefScrollButtonLeft = document.querySelector('.comparePage .compareBlockWrapper .tabContentBlock .tabContentBlockEl .briefBlock .leftButton'),
			activeWindowTop = document.querySelector('.comparePage .tabContentBlockEl .topBlock .compareContent'),
			modalCard = document.querySelectorAll('.catalogSliderElWrapper, .productCardIconWrapper')[0],
			activeWindowBrief = document.querySelector('.comparePage .tabContentBlockEl .briefBlock .compareContent'),
			activeWindowBottom = document.querySelector('.comparePage .tabContentBlockEl .bottomBlock'),
			cardBlockWidthPlus = '+=' + document.querySelector('.catalogSliderElWrapper, .productCardIconWrapper').scrollWidth,
			cardBlockWidthMinus = '-=' + document.querySelector('.catalogSliderElWrapper, .productCardIconWrapper').scrollWidth;

		scrollButtonRight.addEventListener('click', () =>{
			$(activeWindowTop).animate({
				scrollLeft: cardBlockWidthPlus
			}, 500);
			$(activeWindowBottom).animate({
				scrollLeft: cardBlockWidthPlus
			}, 500);
			$(activeWindowBrief).animate({
				scrollLeft: cardBlockWidthPlus
			}, 500);
			scrollButtonLeft.classList.add('active');
			if(activeWindowTop.scrollWidth <= (modalCard.clientWidth + 35 + activeWindowTop.scrollLeft + activeWindowTop.clientWidth + 5)){
				scrollButtonRight.classList.remove('active')
			}
		})

		briefScrollButtonRight.addEventListener('click', () =>{
			$(activeWindowTop).animate({
				scrollLeft: cardBlockWidthPlus
			}, 500);
			$(activeWindowBottom).animate({
				scrollLeft: cardBlockWidthPlus
			}, 500);
			$(activeWindowBrief).animate({
				scrollLeft: cardBlockWidthPlus
			}, 500);
			scrollButtonLeft.classList.add('active');
			if(activeWindowTop.scrollWidth <= (modalCard.clientWidth + 35 + activeWindowTop.scrollLeft + activeWindowTop.clientWidth + 5)){
				briefScrollButtonRight.classList.remove('active')
			}
		})

		scrollButtonLeft.addEventListener('click', () =>{
			$(activeWindowTop).animate({
				scrollLeft: cardBlockWidthMinus
			}, 500);
			$(activeWindowBottom).animate({
				scrollLeft: cardBlockWidthMinus
			}, 500);
			$(activeWindowBrief).animate({
				scrollLeft: cardBlockWidthMinus
			}, 500);
			scrollButtonRight.classList.add('active');
			if((modalCard.clientWidth + 35) > (activeWindowTop.scrollLeft)){
				scrollButtonLeft.classList.remove('active');
			}
		})

		briefScrollButtonLeft.addEventListener('click', () =>{
			$(activeWindowTop).animate({
				scrollLeft: cardBlockWidthMinus
			}, 500);
			$(activeWindowBottom).animate({
				scrollLeft: cardBlockWidthMinus
			}, 500);
			$(activeWindowBrief).animate({
				scrollLeft: cardBlockWidthMinus
			}, 500);
			scrollButtonRight.classList.add('active');
			if((modalCard.clientWidth + 35) > (activeWindowTop.scrollLeft)){
				briefScrollButtonLeft.classList.remove('active');
			}
		})

		activeWindowBottom.addEventListener('scroll', () => {
			activeWindowTop.scrollLeft = activeWindowBottom.scrollLeft;
			activeWindowBrief.scrollLeft = activeWindowBottom.scrollLeft;
			if((activeWindowTop.scrollWidth > (activeWindowTop.scrollLeft + activeWindowTop.clientWidth + 5)) && (0 != activeWindowTop.scrollLeft)) {
				scrollButtonRight.classList.add('active');
				scrollButtonLeft.classList.add('active');
				briefScrollButtonRight.classList.add('active');
				briefScrollButtonLeft.classList.add('active');				
			}

			else if (activeWindowTop.scrollWidth <= (activeWindowTop.scrollLeft + activeWindowTop.clientWidth + 5)) {
				scrollButtonRight.classList.remove('active');
				briefScrollButtonRight.classList.remove('active');
			}
			else if (0 == activeWindowTop.scrollLeft) {
				scrollButtonLeft.classList.remove('active');
				briefScrollButtonLeft.classList.remove('active');		
			}
		})
	}

	// scroll header on COMPARE PAGE AND MARKET PAGE
	function scrollBriefBlock(){
		var briefBlock = document.querySelector('.tabContentBlockEl .briefBlockWrapper');
		window.addEventListener('scroll', () => {
			if (document.querySelector('html').scrollTop >= 600) {
				briefBlock.classList.add('scroll');
			}
			else if(document.querySelector('html').scrollTop < 600){
				briefBlock.classList.remove('scroll');
			}
		})
	}

	// type of compare form submit on COMPARE PAGE
	function typeOfCompareSubmit(){
		if(document.querySelector('.compareBlockWrapper .tabContentBlockEl .topBlock .sideBar .radioButtonBlock label')){
			document.querySelectorAll('.compareBlockWrapper .tabContentBlockEl .topBlock .sideBar .radioButtonBlock label').forEach(el => {
				el.addEventListener('click', () => {
					document.querySelector('.compareBlockWrapper .tabContentBlockEl .topBlock .sideBar .radioButtonBlock').submit();
				})
			})
		}	
	}

	// type of compare form submit on FAQ PAGE
	function faqPageDropDownText(){
		document.querySelectorAll('main.faqPage .faqPageWrapper .faqPageBlock .faqPageStatementsList .faqPageStatementsEl').forEach(el => {
			el.addEventListener('click', () =>{
				if(!el.classList.contains('open')){
					document.querySelectorAll('main.faqPage .faqPageWrapper .faqPageBlock .faqPageStatementsList .faqPageStatementsEl').forEach(elem => {
						$(elem).removeClass('open');
						$(elem.querySelector('.faqPageStatementsElContent')).hide(500);
						$(elem.querySelector('.vertical')).removeClass('open');
					})
					$(el).addClass('open');		
					$(el.querySelector('.faqPageStatementsElContent')).show(500);
					$(el.querySelector('.vertical')).addClass('open');
				}
				else{
					$(el).removeClass('open');		
					$(el.querySelector('.faqPageStatementsElContent')).hide(500);
					$(el.querySelector('.vertical')).removeClass('open');
				}
			})
		})
	}

	// type of compare form submit on TECHNOBLOG PAGE
	function technoblogSubMenuDropDown(){
		document.querySelectorAll('.technoblogPageWrapper .sideBarMenu .sideBarMenuList .sideBarMenuListEl .sideBarMenuListElTitle').forEach(el => {
			el.addEventListener('click', (event) => {
				if(!el.parentElement.classList.contains('opened')){
					event.preventDefault();
					document.querySelectorAll('.technoblogPageWrapper .sideBarMenu .sideBarMenuList .sideBarMenuListEl').forEach(elem => {
						elem.classList.remove('opened');
						$(elem.querySelector('.sideBarMenuListElSubmenu')).hide();
					})
					el.parentElement.classList.add('opened');
					$(el.nextElementSibling).show();
				}
			})
		})
	}

	// tabs on TECHNOBLOG PAGE
	function technoblogTabs(){
		document.querySelectorAll('.technoblogPage .tabSelector p').forEach(el => {
			el.addEventListener('click', () => {
				document.querySelectorAll('.technoblogPage .tabSelector p').forEach(elem => {
					elem.classList.remove('active');
				})
				el.classList.add('active');
				var fileForLoad = "ajax/technoblog/" + el.getAttribute('data-id') + ".html";
				document.querySelector('#cube-loader').classList.add('localLoader');
				document.querySelector('body').classList.add('modal');
				$.ajax({
			    	url: fileForLoad,
			    	type: "GET",
			    	data: {
			    	},
			    	success: function (response) {
			           	document.querySelector('.technoblogPage .technoblogPageWrapper .contentWrapper .content').innerHTML = response;
			    		lazyload();
						document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal');				    	
			    	},
			    	dataType: 'text',	
				})
			})
		})
	}

	//transfaring technoBlog slider on TECHNOBLOG PAGE
	function transferTechnoBlogSlider(el){
		let	sliderForTransferToModal = el.parentElement.parentElement;
		let	sliderBlockToImport = document.querySelector('.modalWindowBlock .modalWindowContent .modalContent');
		let	sliderBlockToBackUp = el.parentElement.parentElement.parentElement;

		document.querySelectorAll('.technoblogSinglePageContentWrapper .technoblogSinglePageContent .technoblogSliderWrapper').forEach(elem => elem.classList.remove('active'))
		sliderBlockToBackUp.classList.add('active');

		sliderBlockToImport.append(sliderForTransferToModal);
		
		document.querySelector(".modalWindowBlock .modalWindowWrapper").addEventListener("click", () => {
			if(document.querySelector('.modalWindowContent .technoBlogSlider')){
				document.querySelector('.technoblogSliderWrapper.active').prepend(document.querySelector('.modalWindowBlock .modalWindowContent .technoBlogSlider'));
				$('.technoBlogSliderFor').slick('setPosition');
				$('.technoBlogSliderNav').slick('setPosition');		
			}
		});
		document.querySelector(".modalWindowBlock .modalWindowOff").addEventListener("click",() => {
			if(document.querySelector('.modalWindowContent .technoBlogSlider')){
				document.querySelector('.technoblogSliderWrapper.active').prepend(document.querySelector('.modalWindowBlock .modalWindowContent .technoBlogSlider'));	
				$('.technoBlogSliderFor').slick('setPosition');
				$('.technoBlogSliderNav').slick('setPosition');	
			}
		});
	}

	//leave comment on TECHNOBLOG PAGE
	function leave_comment_technoblog(){
		var commentButtom = document.querySelector('.technoblogSinglePage .leaveCommnet');
			commentButtom.addEventListener('click', () => {
			if(!document.querySelector('.addCommentTechnoBlog')){
				var fileForLoad = "ajax/technoblog/" + commentButtom.getAttribute('data-id') + ".html";
				document.querySelector('#cube-loader').classList.add('localLoader');
				document.querySelector('body').classList.add('modal');
				$.ajax({
			    	url: fileForLoad,
			    	type: "GET",
			    	data: {
			    	},
			    	success: function (response) {
			    		var addComment = document.createElement('div');
			    		addComment.classList.add('addCommentTechnoBlog');
			    		addComment.innerHTML = response;
			    		document.querySelector('.technoblogSinglePage .commentsBlock .title').after(addComment);
			    		validation();
			    		showCommentsTechnoBlog();
			    		document.querySelector('.leaveTechnoBlogCommnetBlock .sendCancel').addEventListener('click', ()=>{
			    			addComment.remove()
			    		})
			    		document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal');	
			    	},
			    	dataType: 'text',	
				})
			}
		})
	}

	//open replic window on TECHNOBLOG PAGE and CARD PAGE
    function replicOnAnswer(){
    	var startButton = document.querySelectorAll('.answerOnComment');
		startButton.forEach(el =>{
			el.addEventListener('click', () => {
				if(!el.closest('.commentEl').querySelector('.responseBlockWrapper')){
					var fileForLoad = "ajax/technoblog/" + el.getAttribute('data-id') + ".html";
					document.querySelector('#cube-loader').classList.add('localLoader');
					document.querySelector('body').classList.add('modal');
					$.ajax({
				    	url: fileForLoad,
				    	type: "GET",
				    	data: {
				    	},
				    	success: function (response) {
				    		var replicWindow = document.createElement('div');
				    		replicWindow.classList.add('responseBlockWrapper');
				    		replicWindow.innerHTML = response;		
				    		el.parentElement.parentElement.after(replicWindow);
				    		validation();
				    		document.querySelectorAll('.responseBlock .cancelResponce').forEach(elem => {
				    			elem.addEventListener('click', ()=>{
				    				elem.closest('.responseBlockWrapper').remove();
				    				elem.closest('.responseBlockWrapper').classList.remove('responseBlockWrapper');
				    			})
				    		})
				    		document.querySelector('#cube-loader').classList.remove('localLoader');
							document.querySelector('body').classList.remove('modal');
				    	},
				    	dataType: 'text',	
					})
				}		
			})
		})
    }
	
	//show/hide comments on TECHNOBLOG PAGE
    function showCommentsTechnoBlog(){
    	document.querySelector('.moreComments').addEventListener('click', () => {
    		var fileForLoad = "ajax/technoblog/" + document.querySelector('.moreComments').getAttribute('data-id') + ".html";
    		document.querySelector('#cube-loader').classList.add('localLoader');
			document.querySelector('body').classList.add('modal');
    		$.ajax({
		    	url: fileForLoad,
		    	type: "GET",
		    	data: {
		    	},
		    	success: function (response) {
		    		document.querySelector('.technoblogSinglePage .commentsBlock .commentList').innerHTML += response;
		    		replicOnAnswer();
		    		document.querySelector('#cube-loader').classList.remove('localLoader');
					document.querySelector('body').classList.remove('modal');
		    	},
		    	dataType: 'text',	
			})
    	})
    }

	//range price on MARKET PAGE
	function rangeSlider() {
		var minStart = Number(document.getElementById('slider-price').getAttribute('data-min')),
			maxStart = Number(document.getElementById('slider-price').getAttribute('data-max')),
			minDef = Number(document.getElementById('slider-price').getAttribute('data-def-min')),
			maxDef = Number(document.getElementById('slider-price').getAttribute('data-def-max'));
		$( "#slider-price" ).slider({
	  		range: true,
	  		min: minStart,
	  		max: maxStart,
	  		values: [ minDef, maxDef ],
	  		slide: function( event, ui ) {
		        $( "#amount1" ).val( ui.values[ 0 ]);
		        $( "#amount2" ).val( ui.values[ 1 ] );
		    }
		});
		$( "#amount1" ).val($( "#slider-price" ).slider( "values", 0 )) 
		$( "#amount2" ).val($( "#slider-price" ).slider( "values", 1 ))
		

		$("#amount1").on('input', function () {
		    var amount1 = $("#amount1").val() / maxStart * 100,
		    	amount2 = $("#amount2").val() / maxStart * 100,
		    	delta = amount2 - amount1;
		    	insideMaxStart = maxStart
		    if(amount1 < amount2){
			    if(($("#amount1").val() > minStart) && ($("#amount1").val() <= maxStart)){
			    	document.querySelector("#slider-price div").style.left = amount1 + '%';
			    	document.querySelector("#slider-price div").style.width = amount2 - amount1 + '%';
			    	document.querySelector("#slider-price span:first-of-type").style.left =  amount1 + '%';
				}
				if($("#amount1").val() < minStart){
					amount1= 0;
			    	document.querySelector("#slider-price div").style.left = amount1 + '%';
			    	document.querySelector("#slider-price div").style.width = amount2 - amount1 + '%';
			    	document.querySelector("#slider-price span:first-of-type").style.left =  amount1 + '%';
				};
			}
		});

		$("#amount2").on('input', function () {
		    var amount1 = $("#amount1").val() / maxStart * 100,
		    	amount2 = $("#amount2").val() / maxStart * 100,
		    	delta = amount2 - amount1;
		    if(amount1 < amount2){
			    if(($("#amount2").val() >= minStart) && ($("#amount1").val() <= maxStart)){
			    	document.querySelector("#slider-price div").style.left = amount1 + '%';
			    	document.querySelector("#slider-price div").style.width = amount2 - amount1 + '%';
			    	document.querySelector("#slider-price span:last-of-type").style.left =  amount2 + '%';
				}
				if($("#amount2").val() > maxStart){
					amount2 = 100;
			    	document.querySelector("#slider-price div").style.left = amount1 + '%';
			    	document.querySelector("#slider-price div").style.width = amount2 - amount1 + '%';
			    	document.querySelector("#slider-price span:last-of-type").style.left =  amount2 + '%';
				}
			}
		});
	};

	// follow links bottom on MARKET PAGE
	function followLinksVisible(){
		var activeButton = document.querySelector('.followLinksWrapper p'),
			visibleArea = document.querySelector('.followLinksWrapper .followLinks');
		activeButton.addEventListener('click', () => {
			visibleArea.classList.toggle('visible');
			if(visibleArea.classList.contains('visible')){
				activeButton.innerText = 'Скрыть'
			}
			else{
				activeButton.innerText = 'Показать все'
			}
		})
	}

	// drop down filter MARKET PAGE
	function filterList(){
		var arrows = document.querySelectorAll('main.marketPage .marketpageBlockWrapper .sidebar .filterEl h4'),
			seeMore = document.querySelectorAll('main.marketPage .marketpageBlockWrapper .sidebar .filterEl .seeMore');
		arrows.forEach(el=>{
			el.addEventListener('click', () => {
				var filteredList = [].slice.call(el.parentElement.children).filter(el=> el.tagName == 'LABEL' || el.classList.contains('priceWrapper'));
				if (el.classList.contains('visible')) {
					for(var i = 0; i < filteredList.length; i++){
						filteredList[i].classList.remove('visible');
					}
					el.classList.remove('visible');
					el.parentElement.children[el.parentElement.children.length - 1].classList.remove('visible');

				}
				else{
					if(filteredList.length > 5){
						for(var i = 0; i < 5; i++){
							filteredList[i].classList.add('visible')
						}
						el.parentElement.children[el.parentElement.children.length - 1].classList.add('visible')
					}
					else{
						for(var i = 0; i < filteredList.length; i++){
							filteredList[i].classList.add('visible');
						}
					}
					el.classList.add('visible')
				}
			})
		})
		seeMore.forEach(el=>{
			el.addEventListener('click', () =>{
				var filteredList = [].slice.call(el.parentElement.children).filter(el=> el.tagName == 'LABEL');
				for(var i = 0; i < filteredList.length; i++){
					filteredList[i].classList.add('visible')
				}
				el.parentElement.children[el.parentElement.children.length - 1].classList.remove('visible')
			})
		})
	}

	//label reslut of filter on MARKET PAGE
	function resultOfFilter(){
		var buttons = document.querySelectorAll('.marketpageBlockWrapper .sidebar .filterEl label'),
			labelWithResult = document.querySelector('.marketpageBlockWrapper .sidebar .foundProducts');
		
		buttons.forEach(el => {
			el.addEventListener('click',() => {
				document.querySelector('#cube-loader').classList.add('localLoader');
				document.querySelector('body').classList.add('modal');			
				$.ajax({
			        url: "ajax/amount.json",
			        type: "POST",
			        data: {
			        },
			        success: function(response){
			            var amount = JSON.parse(response);
			            labelWithResult.querySelector('.amount').innerHTML = amount.result;
			            el.append(labelWithResult)
			            document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal')
			        },
			        dataType: 'text',
			    });	
			})
		})
	}


	//drop down sort MARKET PAGE
	function sortingList(){
		$( ".selectSort" ).selectmenu({
			classes: {
			    "ui-selectmenu-menu": "marketSortClass"
			},
		});	
	}

	// city selector
	function cityDropDown() { 
		if(document.querySelector('.selectDropDown')){
			$(".selectDropDown").select2({
			   language: {
			    noResults: function (params) {
			      return "Результат: 0";
			    }
			  }
			});
		}
	}


	// stop video play in sliders (not modal window)

	function stopVideoPlay(){
		var videoCover = document.createElement("div");
		videoCover.classList.add('videoCover');
		document.querySelectorAll('.sliderWrapper iframe').forEach(el => {
			el.before(videoCover);
		})
	} 

	// card color selector on CARD ICON
	function colorSeletor(){
		[].slice.call(document.querySelectorAll('.colors div')).forEach(el => {
			el.addEventListener('click', function() {
				Array.from(el.parentElement.children).forEach(el => el.classList.remove('selected'))
				el.classList.add('selected');
			})
		})
	}

	// city selector on CARD PAGE	
	function citySelectorWithEvent() {
		$(".selectDropDown").select2({


		});
		$(".selectDropDown").on('select2:select', function(){
			var fileForLoad = "ajax/" + $(".selectDropDown").val() + ".html"
			document.querySelector('#cube-loader').classList.add('localLoader');
			document.querySelector('body').classList.add('modal');	
			$.ajax({
		    	url: fileForLoad,
		    	type: "GET",
		    	data: {
		    	},
		    	success: function (response) {
		           	document.querySelector('.cartPage .delivertPriceTabWrapper').innerHTML = response;
		           	document.querySelector('#cube-loader').classList.remove('localLoader');
					document.querySelector('body').classList.remove('modal');	
		    	},
		    	dataType: 'text',	
			})
		});
	}
	

	//main tab on CARD PAGE
	function tabOnCardPage(){
		var selector = [].slice.call(document.querySelectorAll('.cartPage .cartPageTabSelector p'));
		selector.forEach(el => {
			el.addEventListener('click',() =>{
				selector.forEach(el => {el.classList.remove('active')});
				el.classList.add('active');
				var fileForLoad = "ajax/" + el.getAttribute('data-id') + ".html";
				if(!document.querySelector('.cartPageContent').querySelector('.' + el.getAttribute('data-id'))){
					var fileForLoad = "ajax/" + el.getAttribute('data-id') + ".html";
					document.querySelector('#cube-loader').classList.add('localLoader');
					document.querySelector('body').classList.add('modal');	
					$.ajax({
				    	url: fileForLoad,
				    	type: "GET",
				    	data: {
				    	},
				    	success: function (response) {
							if(el.getAttribute('data-id') != "mainTab") {
								document.querySelector('.sideBarWrapper').classList.add('visible')
								$('.cartPageContent .slick-initialized').slick('unslick');
								$('.select2-hidden-accessible').select2("destroy");
							}
							else{
								document.querySelector('.sideBarWrapper').classList.remove('visible')
								productSlider();
								alternativeProdSlider();
								citySelectorWithEvent();
							}
				           	document.querySelector('.cartPage .cartPageTab .cartPageContent').innerHTML += response;
	           				linkTabOnCardPage();
							commentAndAnswer();
							modalWindowStart();
				    		lazyload();
				    		tabInTabOnCardPage();
				    		replicOnAnswer();
				    		validation();
				    		timer();
				    		citySelectorWithEvent();
				    		showMoreAnswers();
							plyrStart();
							stopVideoPlay();
							document.querySelectorAll('.cartPageContentEl').forEach(element => {
								element.classList.remove('visible')
							})
							document.querySelector('.' + el.getAttribute('data-id')).classList.add('visible');
							document.querySelector('#cube-loader').classList.remove('localLoader');
							document.querySelector('body').classList.remove('modal');
				    	},
				    	dataType: 'text',	
					})
				}
				else{
					document.querySelectorAll('.cartPageContentEl').forEach(element => {
						element.classList.remove('visible')
					})
					document.querySelector('.' + el.getAttribute('data-id')).classList.add('visible');
					if(el.getAttribute('data-id') != "mainTab") {
						document.querySelector('.sideBarWrapper').classList.add('visible')
						$('.cartPageContent .slick-initialized').slick('unslick');
						$('.select2-hidden-accessible').select2("destroy");
					}
					else{
						document.querySelector('.sideBarWrapper').classList.remove('visible');
						productSlider();
						alternativeProdSlider();
						citySelectorWithEvent();
					}
				}
			})
		})
	}

	//move to tab on link on CARD PAGE
	function linkTabOnCardPage(){	
		var selector = [].slice.call(document.querySelectorAll('.cartPage .cartPageTabSelector p')),
			moveToCharacteristic = document.querySelector('.cartPage .mainTab .moveToCharacteristic'),
			moveToComments = document.querySelector('.cartPage .mainTab .moveToComments');
		if (moveToCharacteristic) {
			moveToCharacteristic.addEventListener('click',() =>{
				selector.forEach(el => {el.classList.remove('active')});
				selector[1].classList.add('active');
				var fileForLoad = "ajax/" + event.target.getAttribute('data-id') + ".html";
				document.querySelector('#cube-loader').classList.add('localLoader');
				document.querySelector('body').classList.add('modal');	
				$.ajax({
			    	url: fileForLoad,
			    	type: "GET",
			    	data: {
			    	},
			    	success: function (response) {
			           	document.querySelector('.cartPage .cartPageTab').innerHTML = response;
			           	modalWindowStart();
			           	document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal');	
			    	},
			    	dataType: 'text',	
				})
			})
		}
		if(moveToComments){
			moveToComments.addEventListener('click',() =>{
				selector.forEach(el => {el.classList.remove('active')});
				selector[2].classList.add('active');
				var fileForLoad = "ajax/" + event.target.getAttribute('data-id') + ".html";
				document.querySelector('#cube-loader').classList.add('localLoader');
				document.querySelector('body').classList.add('modal');	
				$.ajax({
			    	url: fileForLoad,
			    	type: "GET",
			    	data: {
			    	},
			    	success: function (response) {
			           	document.querySelector('.cartPage .cartPageTab').innerHTML = response;
			           	modalWindowStart();
			           	commentAndAnswer();
			           	replicOnAnswer();
			           	showMoreAnswers();
			           	document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal');	
			    	},
			    	dataType: 'text',	
				})
			})
		}	
	}

	//tab in first tab on CARD PAGE
	function tabInTabOnCardPage(){
		var cheaperSelector = [].slice.call(document.querySelectorAll('.cartPage .mainTab .cheaperTogether .cheaperTogetherTabSelector p')),
			cheaperTab = [].slice.call(document.querySelectorAll('.cartPage .mainTab .cheaperTogether .cheaperTogetherTabContent'));
		
		cheaperSelector.forEach(el => {
			el.addEventListener('click',() =>{
				cheaperSelector.forEach(el => {el.classList.remove('active')});
				cheaperTab.forEach(el => {el.classList.remove('active')});
				el.classList.add('active');
				cheaperTab[cheaperSelector.indexOf(el)].classList.add('active')
			})
		})
	}

	//start scrool on CARD PAGE
	function startScrollOnCardPage(){
		var briefBlock = document.querySelector('.briefBlockWrapper');
		window.addEventListener('scroll', () => {
			if(document.querySelectorAll('.cartPage .cartPageTabSelector p')[0].classList.contains('active'))
				if (document.querySelector('html').scrollTop >= 600) {
					briefBlock.classList.add('scroll');
					document.querySelector('.cartPage .topBlock > .leftCol .sliderWrapper').classList.add('scrollActive')
				}
				else if(document.querySelector('html').scrollTop < 600){
					briefBlock.classList.remove('scroll');
					document.querySelector('.cartPage .topBlock > .leftCol .sliderWrapper').classList.remove('scrollActive')
				}
		})
	}	

	//drop down list on MODAL WINDOW
	function modalWindowDropDownList(){
		var dropDownModalArrow = document.querySelectorAll('.modalWindowBlock .byInCredit .tabBlock .tabBlockEl .termWrapper img');
		dropDownModalArrow.forEach(el => {
			el.addEventListener('click', () => {
				document.querySelectorAll('.modalWindowBlock .byInCredit .tabBlock.active .tabBlockEl .termWrapper').forEach(el => {
					el.classList.remove('active')
				})
				el.parentElement.classList.add('active');
				el.classList.add('active');
			})
			el.parentElement.querySelectorAll('.term li').forEach(el => {
				el.addEventListener('click', () =>{
					el.parentElement.querySelectorAll('li')[0].before(el);
					el.parentElement.parentElement.classList.remove('active')
				})
			})
		})
	}

	//modal window on MODAL WINDOW
	function modalWindowStart() {
		document.querySelectorAll(".popUpOn").forEach(el => {
			el.addEventListener("click", () => {
				var fileForLoad = 'ajax/modal_' + el.getAttribute('data-id') + '.html',
					contentBlock = document.querySelector('.modalWindowBlock .modalWindowContent .modalContent');
				if(!document.querySelector(".modalWindowBlock").classList.contains('active')){
					if (el.getAttribute('data-id') == "technoblogSlider"){				
						document.querySelector(".modalWindowBlock").classList.add("active");
						if ((document.documentElement.clientHeight <= document.querySelector('.modalWindowBlock .modalWindowContent').scrollHeight) && (document.documentElement.clientHeight <= document.querySelector('.modalWindowBlock .modalWindowContent').scrollHeight)){
							document.querySelector(".modalWindowBlock .modalWindowContent").classList.add("long");
							document.querySelector(".modalWindowBlock").classList.add("long");
						}
						transferTechnoBlogSlider(el);
						$('.technoBlogSliderFor').slick('setPosition');
						$('.technoBlogSliderNav').slick('setPosition');
	                	document.querySelector('body').classList.add('modal');
					}
					else{
						document.querySelector('#cube-loader').classList.add('localLoader');
						$.ajax({
		                	url: fileForLoad,
		                	type: "GET",
		                	data: {
		                	},
		                	success: function (response) {
			                   	contentBlock.innerHTML = response;
			       				document.querySelector(".modalWindowBlock").classList.add("active");
								if ((document.documentElement.clientHeight <= document.querySelector('.modalWindowBlock .modalWindowContent').scrollHeight) && (document.documentElement.clientHeight <= document.querySelector('.modalWindowBlock .modalWindowContent').scrollHeight)){
									document.querySelector(".modalWindowBlock .modalWindowContent").classList.add("long");
									document.querySelector(".modalWindowBlock").classList.add("long");
								}
								if (el.getAttribute('data-id') == 'slider') {
									transferSlider();
									console.log('tut')
			                	}
			                	if(el.getAttribute('data-id') == 'buy_in_credit'){
			                		modalWindowInsideTab();
			                		modalWindowDropDownList();
			                		modalWindowSubModal();
			                	}
			                	document.querySelector('body').classList.add('modal');
			                	validation();
			                	maskTest();
			                	document.querySelector('#cube-loader').classList.remove('localLoader');
		                	},
		                	dataType: 'text',
		                })
					}
				}
			});
		});

		document.querySelector(".modalWindowBlock .modalWindowWrapper").addEventListener("click", () => {
			document.querySelector(".modalWindowBlock .modalWindowContent").classList.remove("long");
			document.querySelector(".modalWindowBlock").classList.remove("long");
			document.querySelector(".modalWindowBlock").classList.remove("active");	
			document.querySelector('body').classList.remove('modal');	
		});
		document.querySelector(".modalWindowBlock .modalWindowOff").addEventListener("click",() => {	
			document.querySelector(".modalWindowBlock .modalWindowContent").classList.remove("long");
			document.querySelector(".modalWindowBlock").classList.remove("long");
			document.querySelector(".modalWindowBlock").classList.remove("active");	
			document.querySelector('body').classList.remove('modal');		
		});
	}

	//tab on MODAL WINDOW
	function modalWindowInsideTab(){
		var modalSelectorBlock = [].slice.call(document.querySelectorAll('.modalWindowBlock .modalWindowContent .byInCredit .selectorBlock p')),
			modalContentTab = [].slice.call(document.querySelectorAll('.modalWindowBlock .modalWindowContent .byInCredit .tabsBlockWrapper .tabBlock'));
		
		modalSelectorBlock.forEach(el => {
			el.addEventListener('click',() =>{
				modalSelectorBlock.forEach(el => {el.classList.remove('active')});
				modalContentTab.forEach(el => {el.classList.remove('active')});
				el.classList.add('active');
				modalContentTab[modalSelectorBlock.indexOf(el)].classList.add('active');
				if ((document.documentElement.clientHeight <= document.querySelector('.modalWindowBlock .modalWindowContent').scrollHeight) && (document.documentElement.clientHeight <= document.querySelector('.modalWindowBlock .modalWindowContent').scrollHeight)){
					document.querySelector(".modalWindowBlock .modalWindowContent").classList.add("long");
					document.querySelector(".modalWindowBlock").classList.add("long");
				}
				else{
					document.querySelector(".modalWindowBlock .modalWindowContent").classList.remove("long");
					document.querySelector(".modalWindowBlock").classList.remove("long");
				}				
			})
		})
	}

	//description submodal in MODAL WINDOW
	function modalWindowSubModal() {
		var startIcons = document.querySelectorAll('.modalWindowBlock .modalWindowContent .byInCredit .tabBlock .creditType .questionIcon img'),
			subModalBlock = document.querySelector('.modalWindowBlock .modalWindowContent .modalWindowSubModalWrapper .modalWindowCreditInfo'),
			subModelWrapper = document.querySelector('.modalWindowBlock .modalWindowContent .modalWindowSubModalWrapper');
		
		startIcons.forEach(el => {
			el.addEventListener('click', () =>{
				if(document.querySelector('.modalWindowSubModal')){
					document.querySelector('.modalWindowSubModal').remove();
				}
				document.querySelectorAll('.modalWindowBlock .modalWindowContent .byInCredit .tabBlock .creditType .questionIcon').forEach(elem => {
					elem.classList.remove('active')
				})
				var fileForLoad = 'ajax/modal_' + el.parentElement.getAttribute('data-id') + '.html';
				document.querySelector('#cube-loader').classList.add('localLoader');
				$.ajax({
                	url: fileForLoad,
                	type: "GET",
                	data: {
                	},
                	success: function (response) {
	                   	var subModalBlock = document.createElement("div");
	                   	subModalBlock.classList.add('modalWindowSubModal')
	                   	subModalBlock.innerHTML = response;
	                   	if(el.parentElement.classList.contains('active') != true){
	                		el.after(subModalBlock);
	                		el.parentElement.classList.add('active')
	                	}
	                	var closeIcon = document.querySelector('.modalWindowBlock .modalWindowContent .modalWindowSubModal .modalWindowCreditInfo .closeIcon');
	                	if(document.querySelector('.modalWindowBlock .modalWindowContent .modalWindowSubModal .modalWindowCreditInfo .closeIcon')){
		                	closeIcon.addEventListener('click',() =>{
								subModalBlock.remove();
								el.parentElement.classList.remove('active')
							})
						}
						document.querySelector('#cube-loader').classList.remove('localLoader');
                	},
                	dataType: 'text',
                })
			})
		})
	}

	//transfaring slider to MODAL WINDOW
	function transferSlider(){
		var	sliderForTransferToModal = document.querySelector('.cartPage .cartPageTab .mainTab .topBlock .leftCol .sliderWrapper'),
			sliderForTransferFromModal = document.querySelector('.modalWindowBlock .modalWindowContent .modalWindowSlider .sliderWrapper'),
			sliderBlockToImport = document.querySelector('.modalWindowBlock .modalWindowContent .modalWindowSlider'),
			sliderBlockToBackUp = document.querySelector('.cartPage .cartPageTab .mainTab .topBlock .leftCol');
			
		sliderBlockToImport.append(sliderForTransferToModal);


		$('.productSliderFor').slick('setPosition')
	
		function transferBack(){
			if(document.querySelector('.modalWindowSlider .sliderWrapper')){
				document.querySelector('.cartPage .cartPageTab .mainTab .topBlock .leftCol').prepend(document.querySelector('.modalWindowBlock .modalWindowContent .modalWindowSlider .sliderWrapper'));
				$('.productSliderFor').slick('setPosition');
			}
		}
		document.querySelector(".modalWindowBlock .modalWindowWrapper").addEventListener("click", transferBack);
		document.querySelector(".modalWindowBlock .modalWindowOff").addEventListener("click", transferBack);

		if(document.querySelector(".modalWindowBlock .modalWindowContent .modalWindowSlider .productSliderNavWrapper")){
			document.querySelector(".modalWindowBlock .modalWindowContent .modalWindowSlider .productSliderNavWrapper").addEventListener("click",() => {
				if(document.querySelector('.plyr')){
					player.forEach(el => el.pause());
				}
			});
		}

		document.querySelectorAll(".modalWindowBlock .modalWindowContent .modalWindowSlider .productSliderForWrapper .arrows").forEach(el => {
			el.addEventListener("click",() => {
				if(document.querySelector('.plyr')){
					player.forEach(el => el.pause());
				}
			});
		})
	}

    //open comment and answer window
    function commentAndAnswer(){
    	var startButton = document.querySelectorAll('.cartPage .rateAndButtonBlock .buttonBlock button');
			startButton.forEach(el =>{
				el.addEventListener('click', () => {
				document.querySelectorAll(".commentsModalWindow").forEach(elem =>{
					elem.remove()
				})
				var fileForLoad = 'ajax/' + el.getAttribute('data-id') + '.html';
				document.querySelector('#cube-loader').classList.add('localLoader');
				document.querySelector('body').classList.add('modal');				
				$.ajax({
                	url: fileForLoad,
                	type: "GET",
                	data: {
                	},
                	success: function (response) {
                		var commentWindow = document.createElement("div");
                		commentWindow.classList.add("commentsModalWindow")
	                   	commentWindow.innerHTML = response;
						el.parentElement.parentElement.parentElement.querySelector('.content').prepend(commentWindow)
					    if(document.querySelector('input[type="file"]')){
					    	$('input[type="file"]').imageuploadify();
						}
						commentRater();
						document.querySelectorAll('.content .commentsModalWindow .closeBlock').forEach(elem=>{
							elem.addEventListener('click', ()=>{
								commentWindow.remove();
							})
						})
						validation();
						document.querySelector('#cube-loader').classList.remove('localLoader');
						document.querySelector('body').classList.remove('modal');
                	},
                	dataType: 'text',
                })				
			})
		})
    }

    //show more answers on CABINET PAGE and TECHNOBLOG SINGLE PAGE
    function showMoreAnswers(){
    	document.querySelectorAll('.moreAnswers').forEach(el => {
		    el.addEventListener('click', () =>{
		    	el.parentElement.querySelectorAll('.answer').forEach(elem => {
		    		elem.classList.add('visible')
		    	})
		    	el.classList.add('hidden');			    		
		    })
		})
    }
    
	//rating in open comment and answer window
	function commentRater(){
	    $(".comment-rate").rate({
	        max_value: 5,
	        step_size: 1,
	        selected_symbol_type: 'image',
	        initial_value: 4,
	        update_input_field_name: $("#comment"),
	        symbols: {
	            image: {
	                base: '<div class="passiveStar">&nbsp;</div>',
	                hover: '<div class="activeStar">&nbsp;</div>',
	                selected: '<div class="activeStar">&nbsp;</div>',
	            },
	        }
	    });
    }

	// counter in CART MODAL WINDOW
	function cartModalWindowCounter() {
		if(document.querySelector('.cartModalWindowBlock .modalWindowContent .cartModal')){
			var plusOne = [].slice.call(document.querySelectorAll('.cartModalWindowBlock  .modalWindowContent .cartModal .fullCart .fullCartEl .priceAndAmount .counter .plus')),
				minusOne = [].slice.call(document.querySelectorAll('.cartModalWindowBlock  .modalWindowContent .cartModal .fullCart .fullCartEl .priceAndAmount .counter .minus'));

			minusOne.forEach(el => {
				el.addEventListener('click',() => {
					if(el.nextElementSibling.value > 0){
						el.nextElementSibling.value = Number(el.nextElementSibling.value) - 1;
					}
				})
			})
			plusOne.forEach(el => {
				el.addEventListener('click',() => {
					el.previousElementSibling.value = Number(el.previousElementSibling.value) + 1;
				})
			})
		}
	}
// })


//ADAPTATION FUNCTIONS

if(window.innerWidth < 430){
	function footerMenuShow() {
		document.querySelectorAll('footer .footerBlockWrapper .footerBlock .footerMenus h4').forEach(el => {         
		    el.addEventListener('click', () => {
		        el.classList.toggle('show');
		       	$(el.nextElementSibling).toggle(600)
		    })
		})
	}
	footerMenuShow();

	function mobileMenuToggle() {
		if (document.querySelector('.hamburgerMenuIcon')){
			document.querySelector('.hamburgerMenuIcon').addEventListener('click', () => {
				document.querySelector('header.headerGenegal .mobileMenu').classList.add('show');
				document.querySelector('body').classList.add('modal');
			})
			document.querySelector('.closeMobileMenu').addEventListener('click', () => {
				document.querySelector('header.headerGenegal .mobileMenu').classList.remove('show');
				document.querySelector('body').classList.remove('modal');
			})
		}
	}
	mobileMenuToggle();

	function mobileMenuElsToggle() {
		if (document.querySelector('.hamburgerMenuIcon')) {
			document.querySelectorAll('.submenuStart').forEach(el => {
				el.addEventListener('click', () => {
					$(el).next('.subMenu').addClass('show');
				})
			})			
			document.querySelectorAll('.subMenu .back').forEach(el => {
				el.addEventListener('click', () => {
					console.log(el.parentElement)
					el.parentElement.classList.remove('show');
				})
			})		
		}
	}
	mobileMenuElsToggle();				


	function mobileTabToggle() {
		$(".selectList").selectmenu({
			 classes: {
			    "ui-selectmenu-menu": "selectList"
			  }
		});
	}
	mobileTabToggle();
}
