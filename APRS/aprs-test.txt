# APRS Test Strings

Feed the following strings into direwolf and transmit on NA APRS freq (144.39 MHz).

# APZxxx = experimental

## Custom Data
* {: user-defined type
* {: experimental user id
* R: user-defined (_R_ for _R_epeater request)

`KN4VJS>APZ420,WIDE1-1,WIDE2-1:{{R      :+34.123-86.456`

## message w/o id (no ack expected)
`KN4VJS>APZ420,WIDE1-1,WIDE2-1::KJ6ISW  :Hello KJ6, It's KN4.`

## message w/ id (ack expected)
`KN4VJS>APZ420,WIDE1-1,WIDE2-1::KJ6ISW  :Hello KJ6, It's KN4.{001`

## ack of message id 001
`KJ6ISW>APZ420,WIDE1-1,WIDE2-1::KN4VJS:ack001`