$(document).ready(function() {
	var numOfOrders = 0;
	$(".num").text(numOfOrders);

	// hide dialogs on start
	$("#checkOrderChickentikkamasala, #checkOrderChickenCurry, #checkOrderLammMalaba, #checkOrderMixVegetariskBalti, #checkOrderNaanbrod, #checkOrderRisotto, #finishOrderDialog").hide();

	// open dialog on click
	$("#addToCartTikkaMasala").on("click", function () {
		$("#checkOrderChickentikkamasala").dialog({
            	width: "400px",
			  closeText: "X"
			});
	})

	$("#addToCartChickenCurry").on("click", function () {
		$("#checkOrderChickenCurry").dialog({
            	width: "400px",
              closeText: "X"});
	})

	$("#addToCartLammMalaba").on("click", function () {
		$("#checkOrderLammMalaba").dialog({
            	width: "400px",
              closeText: "X"});
	})

	$("#addToCartMixVegetariskBalti").on("click", function () {
		$("#checkOrderMixVegetariskBalti").dialog({
            	width: "400px",
              closeText: "X"});
	})

	$("#addToCartNaanbrod").on("click", function () {
		$("#checkOrderNaanbrod").dialog({
            	width: "400px",
              closeText: "X"});
	})

	$("#addToCartVitloksnaan").on("click", function () {
		$("#checkOrderRisotto").dialog({
            	width: "400px",
              closeText: "X"});
	})

	$(".listOver").on("click", function () {
		var orderName = '<h3 class="orderName"><span>' + $(this).parent().siblings(".ui-dialog-titlebar").children("span").text() + '</span><a class="delBtn">&#10008;</a>' +'</h3>';
		var orderIngredients = '<ul class="orderIngredients"></ul>';
		var orderPrice = '<h3 class="orderPrice"><span>' + $(this).parent().children(".totalDialog").children("span").text() + '</span>SEK<h3>'
		var horisontalLine = '<hr>';
		
		$(".cart").children("#listOfOrders").append("<li>" + orderName + orderIngredients + orderPrice + horisontalLine + "</li>");

		$(this).parent().children("ul").children().children("input:checked").each(function () {
			var selectedIngredient = $(this).parent().text();
			$(".orderIngredients").last().append("<li>" + selectedIngredient + "</li>");
		})

		// opens the cart side menu
		if ($('#cartToggle').prop('checked')) {
			$("#cartToggle").prop("checked", true);
		}else{
			$("#cartToggle").prop("checked", true);
		}

		$(this).parent(".ui-dialog-content").dialog("close");


		numOfOrders = $("#listOfOrders").children().length;
		$(".num").text(numOfOrders);

		// display total price in cart orders
		var totalOrderPrice = 0;
		$("#listOfOrders").children("li").children(".orderPrice").children("span").each(function () {
			var price = parseFloat($(this).text());
			totalOrderPrice += price;
			$(".cart > h3 > span").text(totalOrderPrice + "SEK");
		});

		// remove order from cart
		$(".delBtn").on("click", function () {
			var removePrice = $(this).parent().parent().children(".orderPrice").children("span").text();
			totalOrderPrice -= removePrice;
			$(".cart > h3 > span").text(totalOrderPrice + "SEK");

			$(this).parents("li").remove();
			numOfOrders = $("#listOfOrders").children().length;
			$(".num").text(numOfOrders);
		})
	}); // List over (done button)

	
})


function disableDates(){
	$('.datepicker').datepicker({
	daysOfWeekDisabled: [0,1,2,3,4]
	});
	$(".btn").click(function(){
		alert("Booking is confirmed");
	});
	}