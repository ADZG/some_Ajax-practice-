var $={
    ajax:function(option){
        var type=option.type||"get"
        var url=option.url||location.pathname
        var datatype=option.datatype||""
        var data=option.data||"text/html"
        var success=option.success

        var xhr=new XMLHttpRequest();
        if(type=="get"){
            url=url+"?"+data
            data=null
        }
        if(type="post"){
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        }
        xhr.open(type,url)
        xhr.send(data)

        xhr.onreadystatechange=function(){
            if(xhr.status==200&&xhr.readyState==4){
                var result
                if(datatype=="json"){
                    result=JSON.parse(xhr.responseText)
                }else if(datatype=="xml"){
                    result=xhr.responseXML
                }else{
                    result=xhr.responseText
                }
            }
        }
        success&&success(result)
    }
}