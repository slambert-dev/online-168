<?php
$im = imagecreatefromjpeg('dpwo.jpeg');

// Tout d'abord, nous créons un cachet manuellement grâce à GD
$stamp = imagecreatetruecolor(100, 70);
imagefilledrectangle($stamp, 0, 0, 99, 69, 0x0000FF);
imagefilledrectangle($stamp, 9, 9, 90, 60, 0xFFFFFF);
imagestring($stamp, 5, 20, 20, 'libGD', 0x0000FF);
imagestring($stamp, 3, 20, 40, '(c) 2007-9', 0x0000FF);

// Définit les marges du cachet et récupère la largeur et la hauteur du cachet
$marge_right = 10;
$marge_bottom = 10;
$sx = imagesx($stamp);
$sy = imagesy($stamp);

// Fusionne le cachet dans notre photo avec une opacité de 50%
imagecopymerge($im, $stamp, imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom, 0, 0, imagesx($stamp), imagesy($stamp), 50);

// Sauvegarde l'image dans un fichier et libère la mémoire
imagepng($im, 'photo_stamp.png');
imagedestroy($im);
