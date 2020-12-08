<?php

// Cleading directory
$files = glob("uploads/1/temp".'/*');  
   
// Deleting all the files in the list 
foreach($files as $file) { 
   
    if(is_file($file))  
    
        // Delete the given file 
        unlink($file);  
} 


$file = $_FILES['file'];
move_uploaded_file($file['tmp_name'],"uploads/1/temp/".$file['name']);

header("HTTP/1.1 200 File is Uploaded")
?>