var i;
i=0;
var z =prompt('would you like to change your info.. press y to change it or n')
if (z=='y'){
  var x =prompt('enter the new email');
  var y =prompt('enter the new password');
  e=x;
p=y;
    var v =prompt('enter email');
  var f =prompt('enter password');
    i=i+1;
}
else{ var v =prompt('enter email');
  var f =prompt('enter password');
     i=i+1;
    p='123a';
     e='a@g.com';
    }
if(v==e&&f==p){window.alert('login has been succesfuled!')}
else if(v==e){window.alert('password is false'); var v =prompt('enter email');
  var f =prompt('enter password');
     i=i+1; if(v==e&&f==p){window.alert('login has been succesfuled!')}else{window.alert('login failed');i=i+1;}if(v==e&&f==p){window.alert('login has been succesfuled!')}else{window.alert('login failed');i=i+1;}}
else if(f==p){window.alert('email is false'); var v =prompt('enter email');
  var f =prompt('enter password');
     i=i+1;     i=i+1;if(v==e&&f==p){window.alert('login has been succesfuled!')}else{window.alert('login failed');i=i+1;     i=i+2;if(v==e&&f==p){window.alert('login has been succesfuled!')}else{window.alert('login failed');i=i+2;}
}
}
else{window.alert('login failed'); var v =prompt('enter email'); var f =prompt('enter password');
     i=i+1;if(v==e&&f==p){window.alert('login has been succesfuled!')}else{window.alert('login failed');var v =prompt('enter email'); var f =prompt('enter password');i=i+1;}if(v==e&&f==p){window.alert('login has been succesfuled!')}else{window.alert('login failed'); i=i+1;}}
if (i>=4){window.alert('I think  you are a thefe!')}
console.log(i);






