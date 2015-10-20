/**
 * Created by admin on 2015/9/6.
 */
window.onload =function() {
    //var css={};
    //console.log(123);

    var userName = $id('hs-right-userLog-inputUName');//获得用户名id
    var userPwd =$id('hs-right-userLog-inputPwd');//获得密码id
    var btnLogin = $id('hs-login-btnLogin');
    focus(userName,'用户名/手机号/ID');
    focus(userPwd,'密码');
    blur(userName,'*用户名不能为空',$id('hs-right-userLog-uNameError'),1);
    blur(userPwd,'*密码不能为空',$id('hs-right-userLog-pwdError'),2);
    //judge(userName.value,userPwd.value);
    btnLogin.onclick=function () {
        var userName = $id('hs-right-userLog-uNameError').innerHTML;
        var userPwd = $id('hs-right-userLog-pwdError').innerHTML;
        var flag = judge1(userName,userPwd);

        if(flag){
            window.location = "index.html"
        }else{
            alert('登陆失败');
            return;
        }
    };
        function judge1(userName,userPwd){
            if(userName=='用户名正确'&&userPwd=='密码正确'){
                    return true;
            }else{
                return false;
            }
        }

        function focus(obj,value,id){  //获得焦点的时候
            obj.onfocus=function(){
                if(obj.value==value){
                    obj.value='';
                }else{
                    obj.value =obj.value;
                }
            }
        }
        function blur(obj,value,id,num){ //失去焦点的时候
            obj.onblur=function(){
                if(obj.value==''){
                    id.style.display = 'block';
                    id.innerHTML=value;
                    return;
                }
                else {
                    obj.value = obj.value;
                    id.style.display = 'block';
                    id.innerHTML = '';
                    $.ajax({
                        type: 'post',
                        url: "Json/user-json.json",
                        success: function (data) {
                            //var dataObj = JSON.parse(data);
                            var newData = data.user;
                            if (num == 1) {
                                var kk = false;
                                for (var i = 0; i < newData.length; i++) {
                                    if (obj.value == newData[i]['userName']) {
                                        id.innerHTML = '用户名正确';
                                        $(".hs-right-userLog-error1").css({color:"#02980A"})
                                        kk = true;
                                    }
                                    if (!kk) {
                                        id.innerHTML = '*用户名不存在，请注册';
                                        $(".hs-right-userLog-error1").css({color:"#cc1638"});
                                    }
                                }
                            } else if (num == 2) {
                                var flag = false;
                                for (var i = 0; i < newData.length; i++) {
                                    if (obj.value == newData[i]['key']) {
                                        id.innerHTML = '密码正确';
                                        $(".hs-right-userLog-error2").css({color:"#02980A"})
                                        flag = true;
                                    }
                                    if (!flag) {
                                        id.innerHTML = '*密码不正确，请重新输入';
                                        $(".hs-right-userLog-error2").css({color:"#cc1638"})
                                    }
                                }
                            }

                        }
                    });
                }
            }
        }
    //获得ID
    function $id(id) {
        return document.getElementById(id);
    }
};

