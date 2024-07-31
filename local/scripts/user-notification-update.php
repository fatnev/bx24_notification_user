<?
require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'];
    $dateTime = $_POST['dateTime'];
    $userId = $_POST['user_id'];

    if ($action == 'saveDateTime') {
        $user = new CUser;
        $fields = array(
            "UF_CUSTOM_NOTIFICATION" => $dateTime,
        );
        $user->Update($userId, $fields);


        $response = [
            'status' => 'success',
            'message' => 'Дата и время успешно сохранены.'
        ];
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Некорректное действие.'
        ];
    }

    echo json_encode($response);
}
