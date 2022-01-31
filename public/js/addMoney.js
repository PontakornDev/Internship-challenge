$(document).ready(function () {
    $('#one').click(function () {
        var nummonitor = $('.monitor').val();
        var total_nummonitor = parseInt(nummonitor);
        var num_one = $('#one').val();
        var totalnum_one = parseInt(num_one);
        var sum;
        sum = total_nummonitor + totalnum_one;
        $('.monitor').val(sum)
    })
    $('#two').click(function () {
        var nummonitor = $('.monitor').val();
        var total_nummonitor = parseInt(nummonitor);
        var num_two = $('#two').val();
        var totalnum_two = parseInt(num_two);
        var sum;
        sum = total_nummonitor + totalnum_two;
        $('.monitor').val(sum)
    })
    $('#five').click(function () {
        var nummonitor = $('.monitor').val();
        var total_nummonitor = parseInt(nummonitor);
        var num_five = $('#five').val();
        var totalnum_five = parseInt(num_five);
        var sum;
        sum = total_nummonitor + totalnum_five;
        $('.monitor').val(sum)
    })
    $('#ten').click(function () {
        var nummonitor = $('.monitor').val();
        var total_nummonitor = parseInt(nummonitor);
        var num_ten = $('#ten').val();
        var totalnum_ten = parseInt(num_ten);
        var sum;
        sum = total_nummonitor + totalnum_ten;
        $('.monitor').val(sum)
    })
})

$(document).ready(function () {
    $('#submit').click(function () {
        var payment = $('.monitor').val();
        swal.fire({
            title: "ทำการชำระเงิน!",
            text: "คุณชำระเงินจำนวน " + payment + " บาท",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: "ตกลง",
            cancelButtonColor: '#d33',
            cancelButtonText: "ยกเลิก",
        }).then((result) => {
            var c10=0,c5=0,c2=0,c1=0;
            var price = $('.product_price').val();
                var total_price = parseInt(price);
                var total_payment = parseInt(payment);
                var chang = total_payment - total_price;
                var coin_chang = chang;
            if (result.isConfirmed) {
                const id_product = $('#id_product') .val();
                if(total_payment >= total_price){
                    while(coin_chang>0){
                        if(coin_chang>=10){c10+=1;
                            coin_chang-=10;}
                        else if((coin_chang>=5)&&(coin_chang<10)){c5+=1;
                            coin_chang-=5;}
                        else if((coin_chang>=2)&&(coin_chang<5)){c2+=1;
                            coin_chang-=2;}
                        else{
                              c1+=1;
                              coin_chang-=1;                       
                              }
                        }
                    swal.fire({
                        icon: "success",
                        title: "ทำการชำระเงินเรียบร้อย",
                        text: "เงินทอนจำนวน" + chang + "บาท",
                        footer:"เหรียญที่ต้องทอน (เหรียญ10บาท จำนวน:" + c10 + ") (เหรียญ5บาท จำนวน:" + c5 + ") (เหรียญ2บาท จำนวน:" + c2 + ") (เหรียญ1บาท จำนวน:" + c1+")",
                        showConfirmButton: false,
                        timer:9000
                      },);
                      setTimeout(
                        function () {
                            location.href = "/product"
                        }, 9000) 
                }else{
                    swal.fire({
                        icon: "error",
                        title: "ไม่สามารถทำการชำระเงินได้",
                        text: "เนื่องจากยอดเงินไม่เพียงพอในการซื้อสินค้า",
                        footer: "โปรดระบุจำนวนเงินใหม่",
                        showConfirmButton: false,
                        timer:2500
                      },);
                      setTimeout(
                        function () {
                            location.href = "/productAdd/" + id_product ;
                        }, 2500) 
                }
            } else {
                while(total_payment>0){
                    if(total_payment>=10){c10+=1;
                        total_payment-=10;}
                    else if((total_payment>=5)&&(total_payment<10)){c5+=1;
                        total_payment-=5;}
                    else if((total_payment>=2)&&(total_payment<5)){c2+=1;
                        total_payment-=2;}
                    else{
                          c1+=1;
                          total_payment-=1;                       
                          }
                    }
                swal.fire({
                    icon: "warning",
                    title: "คุณได้ทำการยกเลิก",
                    footer: "คืนเหรียญ (เหรียญ10บาท จำนวน:" + c10 + ") (เหรียญ5บาท จำนวน:" + c5 + ") (เหรียญ2บาท จำนวน:" + c2 + ") (เหรียญ1บาท จำนวน:" + c1+")",
                    showConfirmButton: false,
                    timer: 9000
                });
                setTimeout(
                    function () {
                        location.href = "/product";
                    }, 9000) 
            }
        });
    })
})

$(document).ready(function () {
$('#clear').click(function () {
    $('.monitor').val(0);
})
})