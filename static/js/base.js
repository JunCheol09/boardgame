$(document).ready(function () {
    listing();
});



function listing() {
    $.ajax({
        type: 'GET',
        url: '/pybo',
        data: {},
        success: function (response) {
            let rows = response['shops']
            for (let i = 0; i < 8; i++) {
                let product_price = rows[i]['product_price']
                let product_name = rows[i]['product_name']
                let product_img = rows[i]['product_img']




                let temp_html = `<div class="col">
                                <div class="card h-100">
                                    <img src="${product_img}"
                                        class="card-img-top">
                                    <div class="card-body">
                                        <h5 class="card-title">${product_name}</h5>
                                        <p class="card-text">${product_price}</p>
                                    </div>
                                </div>
                            </div>`
                $('#cards-box').append(temp_html)


            }

        }
    })
}


function open_box() {
    $('#post-box').show()
}
function close_box() {
    $('#post-box').hide()
}