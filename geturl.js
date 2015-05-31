$("tbody tr").map(function()
{
	var filename = $(this).data("name");
	var hash = $(this).data("hash");
	var base64 = new TextUtil.base64();
	var url = 'http://192.168.1.233/ftn_handler/' + filename + '?&&txf_fid=' + hash;
	return url
}).get().join('\n')
