/* 出现数字的动画效果*/
function showNumberWithAnimation(i,j,randNumber){
	var numberCell =$('#number-cell-'+i+"-"+j);
	numberCell.css('background-color',getNumberBackgroundColor(randNumber));
	numberCell.css('color',getNumberColor(randNumber));
	numberCell.text(randNumber);	
	numberCell.animate({
		width:"100px",
		height:"100px",
		top:getPosTop(i,j),
		left:getPosLeft(i,j)
	},150);
}


/* 移动的动画效果*/
function showMoveWithAnimation(fromx,fromy,tox,toy){
	$('#number-cell-'+fromx+'-'+fromy).animate({
		top:getPosTop(tox,toy),
		left:getPosLeft(tox,toy)
	},200);
}

/* 跟新分数的效果*/
function updateScore(score){
	$("#score").text(score);
}