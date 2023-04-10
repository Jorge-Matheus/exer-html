function fatorial
 
somaFatorial (num) } 




{
  
let
 fatorial = 
1
;
  
let
 soma = 
0
;

  
for
 (
let
 i = 
1
; i <= num; i++) {
    fatorial *= i;
    soma += fatorial;
  }

  
return
 soma;