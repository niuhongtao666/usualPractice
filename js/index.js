$(function () {
    var productData=dataArray.dataList;
    console.log(productData);
    //使用baidu.template命名空间
    var bt=baidu.template;
    var data={"list":productData};
    //最简使用方法
    var html=bt('part1',data);
    document.getElementById('main').innerHTML=html;
})