$(function () {

    var shoppingList = [];

    var appendList = function (array, location) {
        var listHtml = array.map(function (item, id) {
            return '<li class="item" id="' + id + '">' + item.name + '<button class="delete">X</button></li>';
        });
        $(location).html(listHtml);

    };

    var deleteItem = function (array, itemToDelete) {
        array.splice(itemToDelete, 1);
        appendList(array, $('#list'));
    };

    var addItem = function (array, item) {
        array.push({ name: item });
    };

    appendList(shoppingList, $('#list'));

    $('#list').on('click', '.delete', function (event) {

        var itemToDelete = $(event.currentTarget).closest('li').attr('id');
        deleteItem(shoppingList, itemToDelete);
    });

    $('form').submit(function (event) {
        event.preventDefault();
        var item = $('input').val();
        if (item === '') {
        } else {
            addItem(shoppingList, item);
            appendList(shoppingList, $('#list'));
            $('input').val('');
        }
    });
});

