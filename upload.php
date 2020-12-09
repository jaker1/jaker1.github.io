<?php


// For uploading texture files
if(isset($_GET['texture_file'])){
    // Cleading directory
    $files = glob("uploads/1/temp/files".'/*');  
    // Deleting all the files in the list 
    foreach($files as $file) { 
        if(is_file($file))  
            // Delete the given file 
            unlink($file);  
    }


    // Extracting zip file to a files folder an parsing each folder and file
    $file = $_FILES['file'];
    move_uploaded_file($file['tmp_name'],"uploads/1/temp/files/".$file['name']);


    $zip = new ZipArchive;
    $res = $zip->open("uploads/1/temp/files/".$file['name']);
    if ($res === TRUE) {
      $zip->extractTo('uploads/1/temp/files/');
      $zip->close();
    } else {
      echo 'Problem with zip file';
    }

    // Creating array of file details
    $file_details = array();
    $resolutions = ["1k", "2k", "3k", "4k", "8k"];
    $maps = ["diffuse", "normal", "bump", "glossiness", "roughness"];
    $destination = "uploads/1/temp/files";


    foreach($resolutions as $resolution){
        // Check for resolution
        if(is_dir($destination."/$resolution")){
            $detail = [$resolution => True];

            // Check for map type
            foreach($maps as $map){
                $dir_content = scandir($destination."/$resolution/");

                foreach($dir_content as $file){
                    
                    if( !in_array($map,$detail) or $detail[$map] == False){
                        if(stripos($file,$map)){
                            $detail[$map] = True;
                        }
                        else{
                            $detail[$map] = False;
                        }
                    }

                }
            }

            array_push($file_details, $detail);

        }
        // If res not found
        else{
            $detail = [$resolution => False];
            array_push($file_details, $detail);
        }
    }

    echo json_encode($file_details);

    

    

    
}

// For uploading texture photos
else{
    if(isset($_GET[first_request])){
        // Cleading directory
        $files = glob("uploads/1/temp/photos".'/*');  

        // Deleting all the files in the list 
        foreach($files as $file) { 
        
            if(is_file($file))  

                // Delete the given file 
                unlink($file);  
        } 
    }


    $file = $_FILES['file'];
    move_uploaded_file($file['tmp_name'],"uploads/1/temp/photos/".$file['name']);

    header("HTTP/1.1 200 File is Uploaded");
}


?>