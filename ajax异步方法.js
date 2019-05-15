var $={
    ajax:function(option){
        // 创建请求方式
        var type=option.type||"get"
        // 创建请求行的请求方式
        var dataType=option.dataType||"text/html";
        // 创建url的 如果不传值，则默认选择本地连接
        var url=option.url||location.pathname;
        // 创建响应体的数据类型
        var data=option.data||"";
        // 创建数据接受完毕后的回调函数
        var success=option.success
        // 创建异步对象
        var xhr=new XMLHttpRequest();
        // 判断当前请求行的请求方式
        if(type=="get"){
            // 如果请求方式为get，则拼接字符串
            url=url+"?"+data;
            // 拼接完成后，清空字符串
            data=null
        }
        // 发起请求行
        xhr.open(type,url)
        
        if(type=="post"){
            // 如果当前请求的方式为post，则设置请求post1的请求体
            xhr.setRequestHeader('Content - Type', 'application / x - www - form - urlencoded');
        }
        // 设置请求体
        xhr.send(data);
        // 监听异步对象的执行阶段
        xhr.onreadystatechange=function(){
            // 如果两个状态码和执行阶段都满足
            if(xhr.status==200&&xhr.readyState==4){
                // 设置变量，保存响应体的数据
                var reluat
                // 如果传入的数json的数据类型
                if(dataType=='json'){
                    // 转化成js的数据格式
                    reluat=JSON.parse(xhr.responseText);
                }else if(dataType=="xml"){
                    // 如果是xml的数据类型，则转化为xml数据类型
                    reluat=xhr.responseXML;
                }else{
                    // 如果没有穿，则直接返回当前的数据
                    reluat=xhr.responseText;
                }
            }
            // 当所有的数据都接受完毕后，则将返回体作为回调函数的参数传入
            success&& success(reluat);
        }
       }

}