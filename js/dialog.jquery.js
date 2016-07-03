;(function(){
$.fn.extend({
    dialog:function(opt){
    	// 默认参数
        var defalut={
            width:400,
            height:"",
            title:"提示",
            content:"",
            okBtn:"",
            cancleBtn:"",
            okCallback:"",
            cancleCallback:"",
            closeCallback:""
        };
        var obj=$.extend(true, defalut, opt);
        // 弹框片段
        var dHtml='<div class="dialog-container">'+
                                '<div class="mask"></div>'+
                               ' <div class="d-container">'+
                                       ' <div class="d-header">'+
                                                '<div class="title"><h3></h3></div>'+
                                                '<div class="close-icon"><span>X</span></div>'+
                                        '</div>'+
                                       ' <div class="d-content"></div>'+
                                        '<div class="d-footer">'+
                                                '<button class="cancle-btn">取消</button>'+
                                                '<button class="ok-btn">确定</button>'+
                                       ' </div>'+
                                '</div>'+
                        '</div>';
            var $dHtml=$(dHtml);
            var objStr=JSON.stringify(obj);
            console.log(obj)
            $dHtml.attr("data-obj",objStr)
            // 初始化弹框内容
            $dHtml.find(".title h3").text(obj.title);
            $dHtml.find(".d-content").html(obj.content);
             $dHtml.find(".d-container").css('width', obj.width);
             if(obj.height){
  	           $dHtml.find(".d-container").css('height', obj.height);
            }
            // 确认按钮显示
            if(obj.okBtn){
            	$dHtml.find(".d-footer").show().find(".ok-btn").text(obj.okBtn).show()
            }
            // 取消按钮显示
            if(obj.cancleBtn){
            	$dHtml.find(".d-footer").show().find(".cancle-btn").text(obj.cancleBtn).show()
            }
            // 将弹框添加文档流
            $(this).append($dHtml.prop("outerHTML"))
            // 弹窗显示动画
	var _set = setTimeout(function() {
		$(".d-container").addClass('showani');
	}, 10)
            // 关闭按钮事件绑定
            $(".close-icon").click(function(){
            	if(obj.closeCallback){
            		obj.closeCallback()
            	}else{
            		var _obj=$(this).parents(".d-container");
            		hideAni(_obj)
            	}
            });
            // 确定按钮事件
            $(".ok-btn").click(function(){
            	if(obj.okCallback){
            		obj.okCallback()
            	}else{
            		var _obj=$(this).parents(".d-container");
            		hideAni(_obj)
            	}
            });
            // 取消按钮事件
              $(".cancle-btn").click(function(){
            	if(obj.cancleCallback){
            		obj.cancleCallback()
            	}else{
            		var _obj=$(this).parents(".d-container");
            		hideAni(_obj)
            	}
            });
              //遮盖层点击事件
              $(".mask").click(function() {
              	var _obj=$(this).next()
              	_obj.addClass('shake');
              	var _set=setTimeout(function(){
              		_obj.removeClass('shake')
              	},300)
              });
              // 弹框弹出动画
              function hideAni(_obj){
              	_obj.addClass('hideani')
              	var _set=setTimeout(function(){
              		_obj.parents(".dialog-container").remove();
              	},300)
              }
    }
})
})(jQuery);