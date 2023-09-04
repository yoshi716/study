$(document).ready(function(){


    $('#first-line').fadeIn(500).delay(1000).fadeOut(500);

    $('#second-line').delay(2000).fadeIn(500).delay(1000).fadeOut(500);

    $('#first-showrapper').delay(4000).fadeOut(500);

    $('#second-show').delay(4000).fadeIn(500);
    
    $('#btn').click(function(){
        window.open("https://www.bing.com/search?pglt=41&q=google&cvid=8d3ea4ef53b74a78be7fe7bb3af2013e&aqs=edge.0.0j69i59j0l2j46j69i65j69i60l3.4232j0j1&FORM=ANNTA1&PC=DCTS",null,'width=100,toolbar=yes,menubar=yes,scrollbars=yes');
    });

    $('#btn').hover(
        function(){
            $('#top-form').show(1000);
        },
        function(){

        }
    );

    
});



const minute = (hour,minutes)=>{
    return hour*60+minutes;
};

const Minute = minute(4,50);

console.log(Minute);

console.log("ohayou!");





var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: '#555',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: '#bbb',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});
