<?php
    include_once('storage.php');
    $search = $_GET['search'] ?? '';
    $stor = new Storage(new JsonIO('contacts.json'));
    $data = $stor -> findAll();
    $filter_data = [];
    foreach($data as $d){
        if ($search === '' || strpos($d['name'], $search) !== false){
            $filter_data[] = [
                'name'  => $d['name'],
                'job'   => $d['job'],
                'email' => $d['email'],
                'phone' => $d['phone']
            ];
        }
    }
    usort($filter_data, function($a, $b){
        return strcmp($a['name'], $b['name']);
    });
    echo json_encode($filter_data, JSON_PRETTY_PRINT);
?>