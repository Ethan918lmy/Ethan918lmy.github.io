/**
 * 功能扩展及jQuery关于表单的功能扩展
 */
var by = by || {};
by.ajax = function (urlObj, params, callback) { //简单封装$.ajax
	var _param;
	var _callBack;
	if (jQuery.isFunction(params)) {
		_callBack = params;
		_param = $.extend({}, urlObj.params || {}, callback || {});
	} else {
		_callBack = callback;
		_param = $.extend({}, urlObj.params || {}, params || {});
	}
	sino.globalLoading.show();
	return $.ajax({
		type: "post",
		url: urlObj.url,
		withCredentials: true,
		data: _param,
		success: function (data) {
			sino.globalLoading.hide();
			_callBack(data);
		}
	});
};