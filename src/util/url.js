var gourl = (url)=>{
    window.open(url)
}

var gohash = (hash)=>{
    window.location.hash = hash
}

/**
 * Copyright (c) 2020 Intelligent Software Research Center of ISCAS
 * Summer 2020 Homepage is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

const linkDataMap = {
    homepage:'首页',
    howitworks:'活动规划',
    organisations:'开源社区',
    summitmeeting:'2021峰会',
    help:'帮助',
    liveshow:'大咖说开源',
    apply:'如何加入'
}


var gettitle = function(){
    var titleContent = ` - 开源软件供应链点亮计划 - 暑期2021 | 中国科学院软件研究所 | openEuler 社区`;
    var location = window.location.hash.split("?")[0].split("/");
    if(location.length === 2){
        document.title = `${linkDataMap[location[1]]||'首页'}${titleContent}`;
        document.getElementsByTagName("meta")[2].content = "关注开源软件和开源社区，培养和发掘更多优秀的开发者。";
    }

  
    
    
}


var titleChange = function(){
    
    gettitle();
   
    window.addEventListener('hashchange',()=>{
        var hashname = decodeURIComponent(window.location.hash)
        window.location.hash=hashname
        var anounceflag =decodeURIComponent(window.location.hash).split("announcement#").length === 1;
        
        if(anounceflag && !window.location.hash.includes('?') ) {
            window.scrollTo(0,0);
        }
        gettitle();
    })

}

var getSplit = function(item,flag){
    const iteml = item.split("||")
    if(iteml.length === 1){
        return item
    }
    if(flag === "chi"){
        return iteml[0]
    }else{
        return iteml[1]
    }
}

var getSupportLanguage = function(num){
    return {
        0:"中文/English",
        1:"中文",
        2:"English"
    }[num]||"中文"
}


export {
    gourl,
    gohash,
    titleChange,
    getSplit,
    getSupportLanguage
}