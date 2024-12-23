$(document).ready(function() {
    $('.order_button').click(function() {
        $.ajax({
            url: '/send_order/',
            method: "POST",
            data: {
                id: $(this).attr('data-id')
            },
            success: (response) => {
                alert("Ваше замовленян прийнято")
            }
        })
    })
})