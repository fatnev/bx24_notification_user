<?php

defined('B_PROLOG_INCLUDED') || die;

use Bitrix\Main\Page\Asset;

CJSCORE::RegisterExt(
    'custom_notification',
    array(
        'js' => '/local/js/custom_notification.js',
        // 'css' => '/local/css/custom_notification.css',
        'rel' => array('popup', 'sidepanel'),
    )
);

// Подключение зарегистрированного расширения
CJSCORE::Init('custom_notification');

$asset = Asset::getInstance();
$asset->addString('<script>BX.ready( function(){ BX.CustomNotification.addPopup(); });</script>');
