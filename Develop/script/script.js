$(document).ready(function () {
    var currentDate = moment();
    $('#currentDay').text(currentDate.format('dddd MM-DD-YYYY'));

    $('.hour').each(function () {
        var getHour = $(this).attr('id');
        var currentHour = currentDate.hours();
        var txtBx=$(this).siblings('.description');
            
        if (getHour === currentHour) {
             txtBx.addClass('present');
        }else if(getHour < currentHour)
        {
             txtBx.addClass('past');
         }
         else {
             txtBx.addClass('future');
         }

        var toDo= localStorage.getItem(getHour,);
         t
        });

        $('.saveBtn').on('click',()=>{
          
          var newBox=$(this).siblings('.description');
          
          localStorage.setItem('key',newBox.val());
          
          
        });
});