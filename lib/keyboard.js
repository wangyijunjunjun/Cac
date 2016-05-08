;(function (exports) {
	var KeyBoard = function (input, options) {
		//var body = document.getElementsByTagName('body')[0];
		var fuckcontent = document.getElementById("fuckcontent");
		var DIV_ID = options && options.divId || '__w_l_h_v_c_z_e_r_o_divid';

		if (document.getElementById(DIV_ID)) {
			//body.removeChild(document.getElementById(DIV_ID));
			fuckcontent.removeChild(document.getElementById(DIV_ID));
		}

		this.input = input;
		this.el = document.createElement('div');

		var self = this;
		var zIndex = options && options.zIndex || 1000;
		var width = options && options.width || '100%';
		var height = options && options.height || '193px';
		var fontSize = options && options.fontSize || '15px';
		var backgroundColor = options && options.backgroundColor || '#fff';
		var TABLE_ID = options && options.table_id || 'table_0909099';
		var mobile = typeof orientation !== 'undefined';

		this.el.id = DIV_ID;
		this.el.style.position = 'fixed';
		this.el.style.left = 0;
		this.el.style.right = 0;
		this.el.style.bottom = 0;
		this.el.style.zIndex = zIndex;
		this.el.style.width = width;
		this.el.style.height = height;
		this.el.style.backgroundColor = backgroundColor;

		//样式
		var cssStr = '<style type="text/css">';
		cssStr += '#' + TABLE_ID + '{text-align:center;width:100%;height:161px;border-top:1px solid #CECDCE;background-color:#FFF;}';
		cssStr += '#' + TABLE_ID + ' td{width:33%;border:1px solid #ddd;border-right:0;border-top:0;-webkit-border-radius: 0;}';
		//if (mobile) {
			cssStr += '#' + TABLE_ID + ' td:hover{background-color:#000;color:#000;}';
		//}
		cssStr += '</style>';
		//input
		var inputStr = '<div id="show_input" value="dd" readonly="readonly" style="background-color:#415463;color:#fff;font-size:15px;margin:0;width:220px;height:28px;border:1px solid white;';
		inputStr += 'float:left;"></div>';

		//Button
		var btnStr = '<div style="width:60px;height:28px;background-color:#88D7F4;';
		btnStr += 'float:right;margin-right:5px;text-align:center;color:#fff;';
		btnStr += 'line-height:28px;border-radius:3px;margin-bottom:5px;cursor:pointer;">完成</div>';

		//table
		var tableStr = '<table id="' + TABLE_ID + '" border="0" cellspacing="0" cellpadding="0">';
		tableStr += '<tr><td>1</td><td>2</td><td>3</td></tr>';
		tableStr += '<tr><td>4</td><td>5</td><td>6</td></tr>';
		tableStr += '<tr><td>7</td><td>8</td><td>9</td></tr>';
		tableStr += '<tr><td style="background-color:#88D7F4;">.</td><td>0</td>';
		tableStr += '<td style="background-color:#88D7F4;color: white">删除</td></tr>';
		tableStr += '</table>';
		this.el.innerHTML = cssStr + btnStr+inputStr+tableStr;

		//var fuck = document.getElementById("fuck");
		function addEvent(e) {
			var ev = e || window.event;
			var clickEl = ev.element || ev.target;
			var value = clickEl.textContent || clickEl.innerText;

			if (clickEl.tagName.toLocaleLowerCase() === 'td' && value !== "删除") {
				if (self.input) {
					clickEl.style.backgroundColor = "#000";
                    //clickEl.style.backgroundColor = "#fff";
					self.input.value += value;

                    setTimeout(function(){clickEl.style.backgroundColor="#fff"},10);

					show_input.innerHTML += value;
				}
			} else if (clickEl.tagName.toLocaleLowerCase() === 'div' && value === "完成") {
				fuckcontent.removeChild(self.el);
			} else if (clickEl.tagName.toLocaleLowerCase() === 'td' && value === "删除") {
				var num = self.input.value;
				if (num) {
					var newNum = num.substr(0, num.length - 1);
					self.input.value = newNum;
                    show_input.innerHTML = newNum;
				}
			}
		}
		//if (mobile) {
		//	this.el.ontouchstart = addEvent;
		//} else {
		//	this.el.onclick = addEvent;
		//}
		this.el.onclick = addEvent;
		//body.appendChild(this.el);
		fuckcontent.appendChild(this.el);
	}

	exports.KeyBoard = KeyBoard;

})(window);
