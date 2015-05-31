$("tbody tr").map(function()
{
	var filename = $(this).data("name");
	if (filename.indexOf("资源已被屏蔽") == 0) return ""
		
	var hash = $(this).data("hash");
	var base64 = new TextUtil.base64();
	var url = 'http://192.168.1.233/ftn_handler/' + filename + '?&&txf_fid=' + hash;
	return url
}).get().join('\n')
