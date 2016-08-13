;
(function($) {
	$.fn.extend({
		hConfirm: function(opt) {
			var _default = {
				title: "友情提示：", //弹框标题
				width: 400, //弹框宽度
				height: "", //弹框高度
				content: "", //弹框内容
				okTxt: "", //确定按钮
				cancelTxt: "", //取消按钮
				okCallback: "", //成功按钮回调
				cancelCallback: "", //取消按钮回调
				closeCallback: "", //关闭按钮回调
			};
			var obj = $.extend({}, _default, opt);
			var dHtml = '<div class="h-modal">' +
				'<div class="h-mask"></div>' +
				'<div class="h-container">' +
				'<div class="h-title">' +
				'<div class="title-text">' +
				'<h3>标题</h3>' +
				'</div>' +
				'<div class="close-icon">' +
				'<span class="hclose"></span>' +
				'</div>' +
				'</div>' +
				'<div class="h-content"></div>' +
				'<div class="h-footer">' +
				'<button class="cancel-btn"></button>' +
				'<button class="ok-btn"></button>' +
				'</div>' +
				'</div>' +
				'</div>';
			var $dHtml = $(dHtml);
			// 设置弹框标题
			$dHtml.find(".title-text h3").text(obj.title)
				// 设置弹框内容
			$dHtml.find(".h-content").html(obj.content)
				// 显示确认按钮
			if (obj.okTxt) {
				$dHtml.find(".h-footer").show()
				$dHtml.find(".ok-btn").text(obj.okTxt).show()
			};
			// 显示取消按钮
			if (obj.cancelTxt) {
				$dHtml.find(".h-footer").show()
				$dHtml.find(".cancel-btn").text(obj.cancelTxt).show()
			};
			// 设置弹窗样式
			$dHtml.find(".h-container").css('width', obj.width);
			if (obj.height) {
				$dHtml.find(".h-container").css('height', obj.height);
			};
			// 将dom节点添加到文档流中
			$("body").find(".h-modal").remove();
			$(this).append($dHtml.prop("outerHTML"));
			setOverflow()
				// 弹框显示动画
			var _container = $(".h-container")
			var _set = setTimeout(function() {
				_container.addClass('showani');

			}, 100);
			var _set2 = setTimeout(function() {
				_container.addClass('h-show');
			}, 500);
			// 关闭按钮事件
			$(".hclose").click(function() {
				if (obj.closeCallback) {
					obj.closeCallback()
				} else {
					var _obj = $(this).parents(".h-container");
					hideani(_obj);
				};
			});
			// 确定按钮事件绑定
			$(".ok-btn").click(function() {
				if (obj.okCallback) {
					obj.okCallback()
				} else {
					var _obj = $(this).parents(".h-container");
					hideani(_obj);
				};
			});
			// 取消按钮事件绑定
			$(".cancel-btn").click(function() {
				if (obj.cancelCallback) {
					obj.cancelCallback()
				} else {
					var _obj = $(this).parents(".h-container");
					hideani(_obj);
				};
			});
			// 弹框关闭动画
			function hideani(_obj) {
				_obj.removeClass('showani')
				var set = setTimeout(function() {
					_obj.parents(".h-modal").remove();
					setOverflow();
				}, 300)
			};

			function setOverflow() {
				var mLen = $(".h-modal").length;
				var tLen = $(".tip-modal").length;
				var wHeight = $(window).height()
				var bHeight = $(document).height();

				if (mLen == "0") {
					$("body").removeClass('overflow');
					if(tLen=="0"){
						$("body").css('margin-right', 0);
					}
				} else {
					if (bHeight > wHeight) {
						var winWidth1 = $(window).width();
						$("body").addClass('overflow');
						var winWidth2 = $(window).width();
						var _mr = parseInt($("body").css("margin-right"));
						var mRight = winWidth2 - winWidth1;
						mRight = mRight > _mr ? mRight : _mr;
						$("body").css('margin-right', mRight);
					}
				}
			};
		},
		hTip: function(opt) {
			var _default = {
				title: "友情提示：", //弹框标题
				width: 400, //弹框宽度
				height: "", //弹框高度
				content: "", //弹框内容
				okTxt: "", //确定按钮
				cancelTxt: "", //取消按钮
				okCallback: "", //成功按钮回调
				cancelCallback: "", //取消按钮回调
				closeCallback: "", //关闭按钮回调
			};

			var obj = $.extend({}, _default, opt);
			var dHtml = '<div class="tip-modal">' +
				'<div class="tip-mask"></div>' +
				'<div class="tip-container">' +
				'<div class="tip-title">' +
				'<div class="title-text">' +
				'<h3>标题</h3>' +
				'</div>' +
				'<div class="close-icon">' +
				'<span class="hclose"></span>' +
				'</div>' +
				'</div>' +
				'<div class="tip-content"></div>' +
				'<div class="tip-footer">' +
				'<button class="cancel-btn"></button>' +
				'<button class="ok-btn"></button>' +
				'</div>' +
				'</div>' +
				'</div>';
			var $dHtml = $(dHtml);
			// 设置弹框标题
			$dHtml.find(".title-text h3").text(obj.title)
				// 设置弹框内容
			$dHtml.find(".tip-content").html(obj.content)
				// 显示确认按钮
			if (obj.okTxt) {
				$dHtml.find(".tip-footer").show()
				$dHtml.find(".ok-btn").text(obj.okTxt).show()
			};
			// 显示取消按钮
			if (obj.cancelTxt) {
				$dHtml.find(".tip-footer").show()
				$dHtml.find(".cancel-btn").text(obj.cancelTxt).show()
			};
			// 设置弹窗样式
			$dHtml.find(".tip-container").css('width', obj.width);
			if (obj.height) {
				$dHtml.find(".tip-container").css('height', obj.height);
			};
			// 将dom节点添加到文档流中
			$("body").find(".tip-modal").remove();
			$(this).append($dHtml.prop("outerHTML"));
			setOverflow()
				// 弹框显示动画
			var _container = $(".tip-container")
			var _set = setTimeout(function() {
				_container.addClass('showani');
			}, 100);
			var _set2 = setTimeout(function() {
				_container.addClass('tip-show');
			}, 500);
			// 关闭按钮事件
			$(".hclose").click(function() {
				if (obj.closeCallback) {
					obj.closeCallback()
				}
				var _obj = $(this).parents(".tip-container");
				hideani(_obj);
			});
			// 确定按钮事件绑定
			$(".ok-btn").click(function() {
				if (obj.okCallback) {
					obj.okCallback()
				}
				var _obj = $(this).parents(".tip-container");
				hideani(_obj);
			});
			// 取消按钮事件绑定
			$(".cancel-btn").click(function() {
				if (obj.cancelCallback) {
					obj.cancelCallback()
				}
				var _obj = $(this).parents(".tip-container");
				hideani(_obj);
			});
			// 弹框关闭动画
			function hideani(_obj) {
				_obj.removeClass('showani')
				var set = setTimeout(function() {
					_obj.parents(".tip-modal").remove();
					setOverflow();
				}, 300)
			};

			function setOverflow() {
				var mLen = $(".h-modal").length;
				var tLen = $(".tip-modal").length;
				var wHeight = $(window).height()
				var bHeight = $(document).height();

				if (tLen == "0") {
					$("body").removeClass('tip-overflow')
					if (mLen == "0") {
						$("body").css('margin-right', 0);
					}
				} else {
					if (bHeight > wHeight) {
						var winWidth1 = $(window).width();
						$("body").addClass('tip-overflow');
						var winWidth2 = $(window).width();
						var _mr = parseInt($("body").css("margin-right"));
						var mRight = winWidth2 - winWidth1;
						mRight = mRight > _mr ? mRight : _mr;
						$("body").css('margin-right', mRight);
					}
				}
			};
		},
		confirmRemove: function() {
			var _obj = $(this).find(".h-container")
			_obj.removeClass('showani')
			var set = setTimeout(function() {
				_obj.parents(".h-modal").remove();
				setOverflow()
			}, 300);

			function setOverflow() {
				var mLen = $(".h-modal").length;
				var tLen = $(".tip-modal").length;
				if (mLen == "0" ) {
					$("body").removeClass('overflow');
					if(tLen == "0"){
						$("body").css('margin-right', 0);
					}
				}
			};
		}
	});
})(jQuery);