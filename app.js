jQuery.fn.toTextDate = function(
    config = {
        classInputDate: null,
        classInputMonth: null,
        classInputYear: null,
        symbol: null
    }
) {
    this.each( function() {
        let parent = $(this).parent();
        let div = document.createElement('div');
        div.className="datetime-module";
        $(this).css('display','none').addClass('role');
        $(this).data('date',"").data('month',"").data('year',"");
        let lastIndex = $(this).index();

        div.innerHTML="";
        $(div).append($(this));
        let input = `
            <input type="text" class="text-date `+ (config.classInputDate?config.classInputDate:"")
            +`" data-type="date" length="2" `+ (config.classInputDate?"":'style="width:20px"') +`>
            <span>`+ (config.symbol?config.symbol:'/') +`</span>
            <input type="text" class="text-date `+ (config.classInputDate?config.classInputMonth:"")
            +`" data-type="month" length="2" `+ (config.classInputMonth?"":'style="width:20px"') +`>
            <span>`+ (config.symbol?config.symbol:'/') +`</span>
            <input type="text" class="text-date `+ (config.classInputDate?config.classInputYear:"")
            +`" data-type="year" length="4" `+ (config.classInputYear?"":'style="width:40px"') +`>
        `;
        div.innerHTML+=input;
        if(lastIndex==0){
            $(parent).prepend(div);
        }else{
            $(div).insertAfter($(parent).children().eq(lastIndex-1)); 
        }
            
        $(parent).find('.text-date').keyup(keyUpField);
    });
};
function keyUpField(a){
    let length = $(this).attr('length');
    let type = $(this).data('type');
    let num = $(this).val();
    if(num.length>length) {
        $(this).val(num.substring(0, length));
    }
    if(a.keyCode<48||a.keyCode>57){
        num = num.replace(a.originalEvent.key, "");
        $(this).val(num);
    }
    num = $(this).val();
    if(num.length>=length){
        switch (type) {
        case 'date':
            if(parseInt(num)<0||parseInt(num)>31)  $(this).val(0);
            break;
        case 'month':
            if(parseInt(num)<0||parseInt(num)>12)  $(this).val(0);
            break;
        case 'year':
            if(parseInt(num)<1900)  $(this).val(0);
            break;
        }
    }

    let inputDate = $(this).parent().find('.role');
    let dataType = type=='year'?$(this).val():
        (parseInt($(this).val())<10?'0'+$(this).val():$(this).val());
    $(inputDate).data(type,dataType);
    $(inputDate).val(
        $(inputDate).data('year')+'-'+
        $(inputDate).data('month')+'-'+
        $(inputDate).data('date')
    );
};