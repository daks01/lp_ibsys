<?php
    header('Content-Type: application/json; charset=utf-8');

    // Если форму отправил робот, то отбреваем его
    if (!empty($data['email'])) {
        echo json_encode(['result' => 'success']); 
    }

    // Получаем данные из тела запроса
    $name = $_POST['name'] ?? '';
    $email = $_POST['liame'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';
    $file = $_FILES['file'] ?? null;

    // Обработка файла, если он был загружен
    if ($file && $file['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/'; // Папка для сохранения файлов
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true); // Создаем папку, если её нет
        }

        $fileName = basename($file['name']);
        $filePath = $uploadDir . $fileName;

        // Перемещаем файл в папку uploads
        if (move_uploaded_file($file['tmp_name'], $filePath)) {
            // Файл успешно загружен
        } else {
            echo json_encode(['result' => 'error', 'error' => 'Ошибка при загрузке файла']);
            exit;
        }
    }

    // Отправка email
    $to = "info@ibsys.ru"; // Замените на ваш email
    $subject = "Новое сообщение от " . $name;
    $emailMessage = "Имя: " . $name . "\n" .
                    "Email: " . $email . "\n" .
                    "Телефон: " . $phone . "\n" .
                    "Сообщение: " . $message;

    // Добавляем информацию о файле, если он был загружен
    if ($file && $file['error'] === UPLOAD_ERR_OK) {
        $emailMessage .= "\n\nПрикрепленный файл: " . $filePath;
    }

    $headers = "From: " . $email;

    if (mail($to, $subject, $emailMessage, $headers)) {
        echo json_encode(['result' => 'success']);
    } else {
        echo json_encode(['result' => 'error', 'error' => 'Произошла ошибка. Попробуйте еще раз']);
    }
?>