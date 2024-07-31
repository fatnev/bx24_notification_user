var CustomNotification = BX.namespace('CustomNotification');
var user_id = BX.message('USER_ID');

CustomNotification.addPopup = function () {
    var Confirmer = new BX.PopupWindow("addPopupNotification", null, {
        content: '<div id="mainshadow"></div>' + '<p>Кастомное уведомление о том, чтобы менеджеры не забыли</p>',
        // closeIcon: { right: "20px", top: "10px" },
        titleBar: 'Кастомое уведомление',
        zIndex: 9,
        width: 400, // ширина окна
        height: 400,
        offsetLeft: 0,
        offsetTop: 0,
        // draggable: { restrict: false },
        overlay: { backgroundColor: 'black', opacity: '80' },  /* затемнение фона */
        buttons: [
            new BX.PopupWindowButton({
                text: "Принял",
                className: "btn ui-btn-success",
                events: {
                    click: function () {
                        this.popupWindow.close(); // закрытие окна
                        var currentDate = new Date();
                        // Форматируем дату и время
                        var formattedDate = currentDate.toLocaleString();
                        BX.ajax({
                            url: '/local/scripts/user-notification-update.php', // URL обработчика на сервере
                            method: 'POST',
                            dataType: 'json',
                            timeout: 10,
                            data: {
                                action: 'saveDateTime',
                                dateTime: formattedDate,
                                user_id: user_id
                            },
                            onsuccess: function (response) {
                            },
                            onfailure: function () {
                                console.error("Произошла ошибка при отправке запроса.");
                            }
                        });
                    }
                }
            })
        ]
    });

    Confirmer.show();
};