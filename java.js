function ChangeSTR(){
    var x = Math.floor((Math.random() * 6) + 1);
    var y = Math.floor((Math.random() * 6) + 1);
    var z = Math.floor((Math.random() * 6) + 1);
    
    var raceModOne = 1;
    var raceModTwo = 2;
    var value;
    
    
    
    var race = document.getElementById("mySelectRace").value;
    if(race == 1 || race == 7 || race == 2)
        value = document.getElementById("STRSCORE").innerHTML = y + x + z + raceModTwo;
    else if (race == 8 )
        value = document.getElementById("STRSCORE").innerHTML = y + x + z + raceModOne;
    else
        value = document.getElementById("STRSCORE").innerHTML = y + x + z;
    
    var mod = document.getElementById("STRMOD").innerHTML = document.getElementById("STRSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("STRMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("STRMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("STRMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("STRMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("STRMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13){
        mod = document.getElementById("STRMOD").innerHTML = 1;
        mod = document.getElementById("STRMOD1").innerHTML = 1;
    }
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("STRMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("STRMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("STRMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("STRMOD").innerHTML = 5;
    ATH();
}

function STRUP(){
    var x = 1;
    var score = document.getElementById("STRSCORE").innerHTML;
    document.getElementById("STRSCORE").innerHTML = score - -1;
    var mod = document.getElementById("STRMOD").innerHTML = document.getElementById("STRSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("STRMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("STRMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("STRMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("STRMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("STRMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("STRMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("STRMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("STRMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("STRMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("STRMOD").innerHTML = 5;
    ATH();
}

function STRDOWN(){
    var score = document.getElementById("STRSCORE").innerHTML;
    document.getElementById("STRSCORE").innerHTML = score - 1;
    var mod = document.getElementById("STRMOD").innerHTML = document.getElementById("STRSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("STRMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("STRMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("STRMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("STRMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("STRMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("STRMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("STRMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("STRMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("STRMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("STRMOD").innerHTML = 5;  

    ATH();
}




function ChangeDEX(){
    var x = Math.floor((Math.random() * 6) + 1);
    var y = Math.floor((Math.random() * 6) + 1);
    var z = Math.floor((Math.random() * 6) + 1);
    
    var raceModOne = 1;
    var raceModTwo = 2;
    var value;
    
    var race = document.getElementById("mySelectRace").value;
    if(race == 3 || race == 6)
        value = document.getElementById("DEXSCORE").innerHTML = y + x + z + raceModTwo;
    else if (race == 8 || race == 4)
        value = document.getElementById("DEXSCORE").innerHTML = y + x + z + raceModOne;
    else
        value = document.getElementById("DEXSCORE").innerHTML = y + x + z;
        
    var mod = document.getElementById("DEXMOD").innerHTML = document.getElementById("DEXSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("DEXMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("DEXMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("DEXMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("DEXMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("DEXMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("DEXMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("DEXMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("DEXMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("DEXMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("DEXMOD").innerHTML = 5;
    INI();
    ACR();
    SOH();
    STE();
    AC();
}


function DEXUP(){
    var x = 1;
    var score = document.getElementById("DEXSCORE").innerHTML;
    document.getElementById("DEXSCORE").innerHTML = score - -1;
    var mod = document.getElementById("DEXMOD").innerHTML = document.getElementById("DEXSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("DEXMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("DEXMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("DEXMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("DEXMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("DEXMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("DEXMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("DEXMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("DEXMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("DEXMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("DEXMOD").innerHTML = 5;
    INI();
    ACR();
    SOH();
    STE();
    AC();
}

function DEXDOWN(){
    var score = document.getElementById("DEXSCORE").innerHTML;
    document.getElementById("DEXSCORE").innerHTML = score - 1;
    var mod = document.getElementById("DEXMOD").innerHTML = document.getElementById("DEXSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("DEXMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("DEXMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("DEXMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("DEXMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("DEXMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("DEXMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("DEXMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("DEXMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("DEXMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("DEXMOD").innerHTML = 5;  
    INI();
    ACR();
    SOH();
    STE();
    AC();
}

function ChangeCON(){
    var x = Math.floor((Math.random() * 6) + 1);
    var y = Math.floor((Math.random() * 6) + 1);
    var z = Math.floor((Math.random() * 6) + 1);
        
    var raceModOne = 1;
    var raceModTwo = 2;
    var value;
    
    var race = document.getElementById("mySelectRace").value;
    if(race == 2)
        value = document.getElementById("CONSCORE").innerHTML = y + x + z + raceModTwo;
    else if (race == 8 || race == 6 || race == 7)
        value = document.getElementById("CONSCORE").innerHTML = y + x + z + raceModOne;
    else
        value = document.getElementById("CONSCORE").innerHTML = y + x + z;
    
    
    var mod = document.getElementById("CONMOD").innerHTML = document.getElementById("CONSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("CONMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("CONMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("CONMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("CONMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("CONMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("CONMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("CONMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("CONMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("CONMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("CONMOD").innerHTML = 5;
    HP();
}


function CONUP(){
    var x = 1;
    var score = document.getElementById("CONSCORE").innerHTML;
    document.getElementById("CONSCORE").innerHTML = score - -1;
    var mod = document.getElementById("CONMOD").innerHTML = document.getElementById("CONSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("CONMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("CONMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("CONMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("CONMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("CONMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("CONMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("CONMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("CONMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("CONMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("CONMOD").innerHTML = 5;
    HP();
}

function CONDOWN(){
    var score = document.getElementById("CONSCORE").innerHTML;
    document.getElementById("CONSCORE").innerHTML = score - 1;
    var mod = document.getElementById("CONMOD").innerHTML = document.getElementById("CONSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("CONMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("CONMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("CONMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("CONMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("CONMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("CONMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("CONMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("CONMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("CONMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("CONMOD").innerHTML = 5;  
    HP();
}

function ChangeINT(){
    var x = Math.floor((Math.random() * 6) + 1);
    var y = Math.floor((Math.random() * 6) + 1);
    var z = Math.floor((Math.random() * 6) + 1);
        
    var raceModOne = 1;
    var raceModTwo = 2;
    var value;
    
    var race = document.getElementById("mySelectRace").value;
    if(race == 4)
        value = document.getElementById("INTSCORE").innerHTML = y + x + z + raceModTwo;
    else if (race == 8 || race == 9 || race == 3)
        value = document.getElementById("INTSCORE").innerHTML = y + x + z + raceModOne;
    else
        value = document.getElementById("INTSCORE").innerHTML = y + x + z;
    
    var mod = document.getElementById("INTMOD").innerHTML = document.getElementById("INTSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("INTMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("INTMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("INTMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("INTMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("INTMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("INTMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("INTMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("INTMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("INTMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("INTMOD").innerHTML = 5;
    
    ARC();
    HIS();
    INV();
    NAT();
    REL();
}


function INTUP(){
    var x = 1;
    var score = document.getElementById("INTSCORE").innerHTML;
    document.getElementById("INTSCORE").innerHTML = score - -1;
    var mod = document.getElementById("INTMOD").innerHTML = document.getElementById("INTSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("INTMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("INTMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("INTMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("INTMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("INTMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("INTMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("INTMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("INTMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("INTMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("INTMOD").innerHTML = 5;
    ARC();
    HIS();
    INV();
    NAT();
    REL();
}

function INTDOWN(){
    var score = document.getElementById("INTSCORE").innerHTML;
    document.getElementById("INTSCORE").innerHTML = score - 1;
    var mod = document.getElementById("INTMOD").innerHTML = document.getElementById("INTSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("INTMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("INTMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("INTMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("INTMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("INTMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("INTMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("INTMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("INTMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("INTMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("INTMOD").innerHTML = 5;  
    ARC();
    HIS();
    INV();
    NAT();
    REL();
}

function ChangeWIS(){
    var x = Math.floor((Math.random() * 6) + 1);
    var y = Math.floor((Math.random() * 6) + 1);
    var z = Math.floor((Math.random() * 6) + 1);
    
    var raceModOne = 1;
    var value;
    
    var race = document.getElementById("mySelectRace").value;
    if (race == 8 || race == 3 || race == 2)
        value = document.getElementById("WISSCORE").innerHTML = y + x + z + raceModOne;
    else
        value = document.getElementById("WISSCORE").innerHTML = y + x + z;
    
    var mod = document.getElementById("WISMOD").innerHTML = document.getElementById("WISSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("WISMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("WISMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("WISMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("WISMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("WISMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("WISMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("WISMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("WISMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("WISMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("WISMOD").innerHTML = 5;
    ANH();
    INS();
    MED();
    PER();
    SUR();
}


function WISUP(){
    var x = 1;
    var score = document.getElementById("WISSCORE").innerHTML;
    document.getElementById("WISSCORE").innerHTML = score - -1;
    var mod = document.getElementById("WISMOD").innerHTML = document.getElementById("WISSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("WISMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("WISMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("WISMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("WISMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("WISMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("WISMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("WISMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("WISMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("WISMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("WISMOD").innerHTML = 5;
    ANH();
    INS();
    MED();
    PER();
    SUR();
}

function WISDOWN(){
    var score = document.getElementById("WISSCORE").innerHTML;
    document.getElementById("WISSCORE").innerHTML = score - 1;
    var mod = document.getElementById("WISMOD").innerHTML = document.getElementById("WISSCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("WISMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("WISMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("WISMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("WISMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("WISMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("WISMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("WISMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("WISMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("WISMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("WISMOD").innerHTML = 5;  
    ANH();
    INS();
    MED();
    PER();
    SUR();
}

function ChangeCHA(){
    var x = Math.floor((Math.random() * 6) + 1);
    var y = Math.floor((Math.random() * 6) + 1);
    var z = Math.floor((Math.random() * 6) + 1);
        
    var raceModOne = 1;
    var raceModTwo = 2;
    var value;
    
    var race = document.getElementById("mySelectRace").value;
    if(race == 5 || race == 9 )
        value = document.getElementById("CHASCORE").innerHTML = y + x + z + raceModTwo;
    else if (race == 8 || race == 1 || race == 7)
        value = document.getElementById("CHASCORE").innerHTML = y + x + z + raceModOne;
    else
        value = document.getElementById("CHASCORE").innerHTML = y + x + z;
    
    var mod = document.getElementById("CHAMOD").innerHTML = document.getElementById("CHASCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("CHAMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("CHAMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("CHAMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("CHAMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("CHAMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("CHAMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("CHAMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("CHAMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("CHAMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("CHAMOD").innerHTML = 5;
    DEC();
    INTI();
    PERF();
    PERS();
}


function CHAUP(){
    var x = 1;
    var score = document.getElementById("CHASCORE").innerHTML;
    document.getElementById("CHASCORE").innerHTML = score - -1;
    var mod = document.getElementById("CHAMOD").innerHTML = document.getElementById("CHASCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("CHAMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("CHAMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("CHAMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("CHAMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("CHAMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("CHAMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("CHAMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("CHAMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("CHAMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("CHAMOD").innerHTML = 5;
    DEC();
    INTI();
    PERF();
    PERS();
}

function CHADOWN(){
    var score = document.getElementById("CHASCORE").innerHTML;
    document.getElementById("CHASCORE").innerHTML = score - 1;
    var mod = document.getElementById("CHAMOD").innerHTML = document.getElementById("CHASCORE").innerHTML;
    if(mod == 3)
        mod = document.getElementById("CHAMOD").innerHTML = -4;
    else if(mod == 4 || mod == 5)
        mod = document.getElementById("CHAMOD").innerHTML = -3;
    else if(mod == 6 || mod == 7)
        mod = document.getElementById("CHAMOD").innerHTML = -2;
    else if(mod == 8 || mod == 9)
        mod = document.getElementById("CHAMOD").innerHTML = -1;
    else if(mod == 10 || mod == 11)
        mod = document.getElementById("CHAMOD").innerHTML = 0;
    else if(mod == 12 || mod == 13)
        mod = document.getElementById("CHAMOD").innerHTML = 1;
    else if(mod == 14 || mod == 15)
        mod = document.getElementById("CHAMOD").innerHTML = 2;
    else if(mod == 16 || mod == 17)
        mod = document.getElementById("CHAMOD").innerHTML = 3;
    else if(mod == 18 || mod == 19)
        mod = document.getElementById("CHAMOD").innerHTML = 4;
    else if(mod == 20 || mod == 21)
        mod = document.getElementById("CHAMOD").innerHTML = 5;  
    DEC();
    INTI();
    PERF();
    PERS();
}

function ChangePT(){
    var randomNumber = Math.floor((Math.random() * 6) + 1);
}

function SELECTPT(){
    var x = document.getElementById("mySelectPT");
    var i = x.selectedIndex;
    document.getElementById("PTtxt").innerHTML = x.options[i].text;
}


function SELECTIDEAL(){
    var x = document.getElementById("mySelectIDEAL");
    var i = x.selectedIndex;
    document.getElementById("IDEALtxt").innerHTML = x.options[i].text;
}

function SELECTBOND(){
    var x = document.getElementById("mySelectBOND");
    var i = x.selectedIndex;
    document.getElementById("BONDtxt").innerHTML = x.options[i].text;
}

function SELECTFLAW(){
    var x = document.getElementById("mySelectFLAW");
    var i = x.selectedIndex;
    document.getElementById("FLAWtxt").innerHTML = x.options[i].text;
}

function isChecked(){
    var number = 18;
    var ath = document.getElementById("PROATH").checked;
    var acr = document.getElementById("PROACR").checked;
    var soh= document.getElementById("PROSOH").checked;
    var ste = document.getElementById("PROSTE").checked;
    var arc = document.getElementById("PROARC").checked;
    var his = document.getElementById("PROHIS").checked;
    var inv = document.getElementById("PROINV").checked;
    var nat = document.getElementById("PRONAT").checked;
    var rel = document.getElementById("PROREL").checked;
    var anh = document.getElementById("PROANH").checked;
    var ins = document.getElementById("PROINS").checked;
    var med = document.getElementById("PROMED").checked;
    var per = document.getElementById("PROPER").checked;
    var sur = document.getElementById("PROSUR").checked;
    var dec = document.getElementById("PRODEC").checked;
    var inti = document.getElementById("PROINTI").checked;
    var perf = document.getElementById("PROPERF").checked;
    var pers = document.getElementById("PROPERS").checked;    
    
    var howManyChecked = ath + acr + soh + ste + arc + his + inv + nat + rel + anh + ins + med + per + sur + dec + inti + per + pers;
    return number - howManyChecked;
}

function SELECTCLASS(){
    var x = document.getElementById("mySelectClass");
    var i = x.selectedIndex;
    var howMany = isChecked();
    
    if(i == 0){
        document.getElementById("SELECTSKILLS").innerHTML = "";
        document.getElementById("ARMORLIST").innerHTML = "";
        document.getElementById("WEAPONLIST").innerHTML = "";
        document.getElementById("hitDieImage").value = 0;
        document.getElementById("hitDieImage").src = "";    
        document.getElementById("FEATLIST").innerHTML = "";
        document.getElementById("TOOLLIST").innerHTML = "";
        document.getElementById("PROFNUM").innerHTML = 0;
                
    } else if(i == 1){ // Barbarian
        document.getElementById("SELECTSKILLS").innerHTML = "";
        document.getElementById("ARMORLIST").innerHTML = "";
        document.getElementById("WEAPONLIST").innerHTML = "";
        document.getElementById("FEATLIST").innerHTML = "";
        document.getElementById("TOOLLIST").innerHTML = "";
        document.getElementById("hitDieImage").value = 12;
        document.getElementById("hitDieImage").src = "d12.png";
        document.getElementById("PROFNUM").innerHTML = 2;
        document.getElementById("SAVELIST").innerHTML = "";
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Strength");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Constitution");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Animal Handling");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Atheletics");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Intimidation");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Nature");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Perception");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Survival");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Simple Weapons");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Martial Weapons");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Medium Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Shields");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Explorer's Pack");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("4 Javelins 1d6 Piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("2 Handaxes 1d6 Slashing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);        
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Greataxe 1d12 Slashing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
    } else if(i == 2){ // Bard
        document.getElementById("SELECTSKILLS").innerHTML = "";
        document.getElementById("ARMORLIST").innerHTML = "";
        document.getElementById("WEAPONLIST").innerHTML = "";
        document.getElementById("FEATLIST").innerHTML = "";
        document.getElementById("TOOLLIST").innerHTML = "";
        document.getElementById("hitDieImage").value = 8;
        document.getElementById("hitDieImage").src = "d8.png";
        document.getElementById("PROFNUM").innerHTML = 3;
        document.getElementById("SAVELIST").innerHTML = "";
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Dexterity");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Charisma");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Any Three");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Simple Weapons");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Hand Crossbows");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Longswords");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Rapiers");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("ShortSwords");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Choose Three Muscial Instruments");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Diplomat's Pack");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Rapier 1d8 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Dagger 1d4 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Lute");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Leather Armor");
        node.appendChild(textnode);
        document.getElementById("ARMORLIST").appendChild(node);
        
        
    } else if(i == 3){ // Cleric
        document.getElementById("SELECTSKILLS").innerHTML = "";
        document.getElementById("ARMORLIST").innerHTML = "";
        document.getElementById("WEAPONLIST").innerHTML = "";
        document.getElementById("FEATLIST").innerHTML = "";
        document.getElementById("TOOLLIST").innerHTML = "";
        document.getElementById("hitDieImage").value = 8;
        document.getElementById("hitDieImage").src = "d8.png";
        document.getElementById("PROFNUM").innerHTML = 2;
        document.getElementById("SAVELIST").innerHTML = "";
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Wisdom");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Charisma");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);

        var node = document.createElement("li");
        var textnode = document.createTextNode("History");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Insight");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Medicine");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Persuasion");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Religion");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Simple Weapons");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Medium Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Shields");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Holy Symbol");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Mace 1d6 bludgeoning");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Crossbow 1d8 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("20 crossbow bolts");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
    
        var node = document.createElement("li");
        var textnode = document.createTextNode("Priest's Pack");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Scalemail");
        node.appendChild(textnode);
        document.getElementById("ARMORLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Shield");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
    } else if(i == 4){ // Druid
        document.getElementById("SELECTSKILLS").innerHTML = "";
        document.getElementById("ARMORLIST").innerHTML = "";
        document.getElementById("WEAPONLIST").innerHTML = "";
        document.getElementById("FEATLIST").innerHTML = "";
        document.getElementById("TOOLLIST").innerHTML = "";
        document.getElementById("hitDieImage").value = 8;
        document.getElementById("hitDieImage").src = "d8.png";
        document.getElementById("PROFNUM").innerHTML = 2;
        document.getElementById("SAVELIST").innerHTML = "";
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Intelligence");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Wisdom");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Arcana");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Animal Handling");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Insight");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Medicine");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Nature");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Perception");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Religion");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Survival");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Clubs");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
            
        var node = document.createElement("li");
        var textnode = document.createTextNode("Daggers");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Darts");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Javelins");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Maces");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Quarterstaffs");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Scimitars");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Sickles");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Slings");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Spears");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Armor* no metal");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Medium Armor* no metal");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Sheilds* no metal");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Herbalism Kit");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Explorer's Pack");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Wooden Shield");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("QuarterStaff 1d6 bludgeoning");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Leather Armor");
        node.appendChild(textnode);
        document.getElementById("ARMORLIST").appendChild(node);
        
        
    } else if(i == 5){ // Fighter
        document.getElementById("SELECTSKILLS").innerHTML = "";
        document.getElementById("ARMORLIST").innerHTML = "";
        document.getElementById("WEAPONLIST").innerHTML = "";
        document.getElementById("FEATLIST").innerHTML = "";
        document.getElementById("TOOLLIST").innerHTML = "";
        document.getElementById("hitDieImage").value = 10;
        document.getElementById("hitDieImage").src = "d10.png";
        document.getElementById("PROFNUM").innerHTML = 2;
        document.getElementById("SAVELIST").innerHTML = "";
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Strength");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Constitution");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Acrobatics");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Animal Handling");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Athletics");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("History");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Insight");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Intimidation");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Perception");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Survival");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Simple Weapons");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Martial Weapons");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Medium Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Heavy Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Shields");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Chainmail");
        node.appendChild(textnode);
        document.getElementById("ARMORLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Shield");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Rapier 1d8 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Crossbow 1d8 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);

        var node = document.createElement("li");
        var textnode = document.createTextNode("20 crossbow bolts");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Dungeoneer's pack");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
    } else if(i == 6){ // Monk
        document.getElementById("SELECTSKILLS").innerHTML = "";
        document.getElementById("FEATLIST").innerHTML = "";
        document.getElementById("ARMORLIST").innerHTML = "";
        document.getElementById("WEAPONLIST").innerHTML = "";
        document.getElementById("TOOLLIST").innerHTML = "";
        document.getElementById("hitDieImage").value = 8;
        document.getElementById("hitDieImage").src = "d8.png";
        document.getElementById("PROFNUM").innerHTML = 2;
        document.getElementById("SAVELIST").innerHTML = "";
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Strength");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Dexterity");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);        
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Acrobatics");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Athletics");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("History");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Insight");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Religion");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Stealth");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Simple Weapons");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Shortswords");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Choose a Muscial Instrument or artisans tool");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Shortsword 1d6 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Dungeoneer's pack");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("10 Darts 1d4 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
    } else if(i == 7){ // Paladin
        document.getElementById("SELECTSKILLS").innerHTML = "";
        document.getElementById("ARMORLIST").innerHTML = "";
        document.getElementById("WEAPONLIST").innerHTML = "";
        document.getElementById("FEATLIST").innerHTML = "";
        document.getElementById("TOOLLIST").innerHTML = "";
        document.getElementById("hitDieImage").value = 10;
        document.getElementById("hitDieImage").src = "d10.png";
        document.getElementById("PROFNUM").innerHTML = 2;
        document.getElementById("SAVELIST").innerHTML = "";
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Wisdom");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Charisma");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Athletics");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Insight");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Intimidation");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Medicine");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Persuasion");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Religion");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Medium Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Heavy Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Sheilds");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Simple Weapons");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Martial Weapons");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Holy Symbol");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Rapier 1d6 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Shield");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("5 Javelins 1d6 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Priest's Pack");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Chain Mail");
        node.appendChild(textnode);
        document.getElementById("ARMORLIST").appendChild(node);
        
    } else if(i == 8){ // Ranger
        document.getElementById("SELECTSKILLS").innerHTML = "";
        document.getElementById("ARMORLIST").innerHTML = "";
        document.getElementById("WEAPONLIST").innerHTML = "";
        document.getElementById("FEATLIST").innerHTML = "";
        document.getElementById("TOOLLIST").innerHTML = "";
        document.getElementById("hitDieImage").value = 10;
        document.getElementById("hitDieImage").src = "d10.png";
        document.getElementById("PROFNUM").innerHTML = 3;
        document.getElementById("SAVELIST").innerHTML = "";
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Strength");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Dexterity");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Animal Handling");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Athletics");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Insight");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Investigation");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Nature");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);

        var node = document.createElement("li");
        var textnode = document.createTextNode("Perception");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Stealth");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Survival");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Medium Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Shields");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Simple Weapons");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Martial Weapons");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Quiver");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Leather Armor");
        node.appendChild(textnode);
        document.getElementById("ARMORLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Longbow 1d8 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Dungeoneer's pack");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("2 Shortsword 1d6 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("20 Arrows");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
    } else if(i == 9){ // Rogue
        document.getElementById("SELECTSKILLS").innerHTML = "";
        document.getElementById("ARMORLIST").innerHTML = "";
        document.getElementById("WEAPONLIST").innerHTML = "";
        document.getElementById("FEATLIST").innerHTML = "";
        document.getElementById("TOOLLIST").innerHTML = "";
        document.getElementById("hitDieImage").value = 8;
        document.getElementById("hitDieImage").src = "d8.png";
        document.getElementById("PROFNUM").innerHTML = 4;
        document.getElementById("SAVELIST").innerHTML = "";
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Dexterity");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Intelligence");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Acrobatics");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Athletics");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Deception");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Insight");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Intimidation");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Investigation");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Perception");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Performance");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Persuasion");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Sleight of Hand");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Stealth");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Simple Weapons");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
         var node = document.createElement("li");
        var textnode = document.createTextNode("Hand Crossbows");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Longswords");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Rapiers");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("ShortSwords");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Thieves' Tools");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Rapier 1d8 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Shortbow 1d6 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("20 arrows");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Burglar's pack");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Leather Armor");
        node.appendChild(textnode);
        document.getElementById("ARMORLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("2 Daggers 1d4 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Thieves' Tools");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
    } else if(i == 10){ //Sorcerer
        document.getElementById("SELECTSKILLS").innerHTML = "";
        document.getElementById("ARMORLIST").innerHTML = "";
        document.getElementById("WEAPONLIST").innerHTML = "";
        document.getElementById("FEATLIST").innerHTML = "";
        document.getElementById("TOOLLIST").innerHTML = "";
        document.getElementById("hitDieImage").value = 6;
        document.getElementById("hitDieImage").src = "d6.png";
        document.getElementById("PROFNUM").innerHTML = 2;
        document.getElementById("SAVELIST").innerHTML = "";
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Constitution");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Charisma");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Arcana");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Deception");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Insight");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Intimidation");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Persuasion");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Religion");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Daggers");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);

        var node = document.createElement("li");
        var textnode = document.createTextNode("Darts");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Slings");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Quarterstaffs");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Crossbows");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
                       
        var node = document.createElement("li");
        var textnode = document.createTextNode("Components Pouch");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);    
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Crossbow 1d8 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("20 crossbow bolts");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Dungeoneer's pack");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("2 Daggers 1d4 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        
    } else if(i == 11){ // Warlock
        document.getElementById("SELECTSKILLS").innerHTML = "";
        document.getElementById("ARMORLIST").innerHTML = "";
        document.getElementById("WEAPONLIST").innerHTML = "";
        document.getElementById("FEATLIST").innerHTML = "";
        document.getElementById("TOOLLIST").innerHTML = "";
        document.getElementById("hitDieImage").value = 8;
        document.getElementById("hitDieImage").src = "d8.png";
        document.getElementById("PROFNUM").innerHTML = 2;
        document.getElementById("SAVELIST").innerHTML = "";
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Wisdom");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Charisma");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Arcana");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Deception");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("History");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Intimidation");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Investigation");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Nature");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Religion");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Armor");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Simple Weapons");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Components Pouch");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Crossbow 1d8 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("20 crossbow bolts");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Scholar's pack");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Leather Armor");
        node.appendChild(textnode);
        document.getElementById("ARMORLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Quarterstaff 1d6 bludgeoning");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("2 Daggers 1d4 piercing");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        
    } else if(i == 12){ // Wizard
        document.getElementById("SELECTSKILLS").innerHTML = "";
        document.getElementById("ARMORLIST").innerHTML = "";
        document.getElementById("WEAPONLIST").innerHTML = "";
        document.getElementById("FEATLIST").innerHTML = "";
        document.getElementById("TOOLLIST").innerHTML = "";
        document.getElementById("hitDieImage").value = 6;
        document.getElementById("hitDieImage").src = "d6.png";
        document.getElementById("PROFNUM").innerHTML = 2;
        document.getElementById("SAVELIST").innerHTML = "";
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Intelligence");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Wisdom");
        node.appendChild(textnode);
        document.getElementById("SAVELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Arcana");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("History");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Insight");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Investigation");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Medicine");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Religion");
        node.appendChild(textnode);
        document.getElementById("SELECTSKILLS").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Daggers");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);

        var node = document.createElement("li");
        var textnode = document.createTextNode("Darts");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Slings");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Quarterstaffs");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Light Crossbows");
        node.appendChild(textnode);
        document.getElementById("FEATLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Spell Book");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Quarterstaff 1d6 bludgeoning");
        node.appendChild(textnode);
        document.getElementById("WEAPONLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Components Pouch");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Scholar's pack");
        node.appendChild(textnode);
        document.getElementById("TOOLLIST").appendChild(node);
        
    }
    HP();   
}

function HP(){
    var die = document.getElementById("hitDieImage").value;
    var level = document.getElementById("mySelectLevel").value;
    var CONMOD = document.getElementById("CONMOD").innerHTML;
    if(level == 1)
        document.getElementById("HP").innerHTML = "<br/>" + (die - -CONMOD);
    else{
        var hp = (die - -CONMOD) * level;
        document.getElementById("HP").innerHTML = "<br/>" + hp;
        }
}

function AC(){
    var dexMod = document.getElementById("DEXMOD").innerHTML;
    document.getElementById("AC").innerHTML = "<br/>" + (- -dexMod + 10);
    document.getElementById("AC").value = (- -dexMod + 10);
    SELECTARMOR();
}


function INI(){
    var dexMod = document.getElementById("DEXMOD").innerHTML;
    document.getElementById("INI").innerHTML = "<br\>" + (- -dexMod);
}

function ATH(){
    var strMod = document.getElementById("STRMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROATH").checked;
    if(prof == true)
        document.getElementById("ATHMOD").innerHTML = (- -strMod - -bonus);
    else
        document.getElementById("ATHMOD").innerHTML = (- -strMod);
    
    
}

function ACR(){
    var dexMod = document.getElementById("DEXMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROACR").checked;
    if(prof == true)
        document.getElementById("ACRMOD").innerHTML = (- -dexMod - -bonus);
    else
        document.getElementById("ACRMOD").innerHTML = (- -dexMod);
}

function SOH(){
    var dexMod = document.getElementById("DEXMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    document.getElementById("SOHMOD").innerHTML = (- -dexMod - -bonus);      
    var prof = document.getElementById("PROSOH").checked;
    if(prof == true)
        document.getElementById("SOHMOD").innerHTML = (- -dexMod - -bonus);
    else
        document.getElementById("SOHMOD").innerHTML = (- -dexMod);
}

function STE(){
    var dexMod = document.getElementById("DEXMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROSTE").checked;
    if(prof == true)
        document.getElementById("STEMOD").innerHTML = (- -dexMod - -bonus);
    else
        document.getElementById("STEMOD").innerHTML = (- -dexMod);      
}

function ARC(){
    var intMod = document.getElementById("INTMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROARC").checked;
    if(prof == true)
        document.getElementById("ARCMOD").innerHTML = (- -intMod - -bonus);
    else
        document.getElementById("ARCMOD").innerHTML = (- -intMod);
}

function HIS(){
    var intMod = document.getElementById("INTMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROHIS").checked;
    if(prof == true)
        document.getElementById("HISMOD").innerHTML = (- -intMod - -bonus);
    else
        document.getElementById("HISMOD").innerHTML = (- -intMod);
}

function INV(){
    var intMod = document.getElementById("INTMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROINV").checked;
    if(prof == true)
        document.getElementById("INVMOD").innerHTML = (- -intMod - -bonus);
    else
        document.getElementById("INVMOD").innerHTML = (- -intMod);
}

function NAT(){
    var intMod = document.getElementById("INTMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PRONAT").checked;
    if(prof == true)
        document.getElementById("NATMOD").innerHTML = (- -intMod - -bonus);
    else
        document.getElementById("NATMOD").innerHTML = (- -intMod);}

function REL(){
    var intMod = document.getElementById("INTMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROREL").checked;
    if(prof == true)
        document.getElementById("RELMOD").innerHTML = (- -intMod - -bonus);
    else
        document.getElementById("RELMOD").innerHTML = (- -intMod);
}

function ANH(){
    var wisMod = document.getElementById("WISMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROANH").checked;
    if(prof == true)
        document.getElementById("ANHMOD").innerHTML = (- -wisMod - -bonus);
    else
        document.getElementById("ANHMOD").innerHTML = (- -wisMod);
}

function INS(){
    var wisMod = document.getElementById("WISMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROINS").checked;
    if(prof == true)
        document.getElementById("INSMOD").innerHTML = (- -wisMod - -bonus);
    else
        document.getElementById("INSMOD").innerHTML = (- -wisMod);
}

function MED(){
    var wisMod = document.getElementById("WISMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROMED").checked;
    if(prof == true)
        document.getElementById("MEDMOD").innerHTML = (- -wisMod - -bonus);
    else
        document.getElementById("MEDMOD").innerHTML = (- -wisMod);      
}

function PER(){
    var wisMod = document.getElementById("WISMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROPER").checked;
    if(prof == true)
        document.getElementById("PERMOD").innerHTML = (- -wisMod - -bonus);
    else
        document.getElementById("PERMOD").innerHTML = (- -wisMod);
}

function SUR(){
    var wisMod = document.getElementById("WISMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROSUR").checked;
    if(prof == true)
        document.getElementById("SURMOD").innerHTML = (- -wisMod - -bonus);
    else
        document.getElementById("SURMOD").innerHTML = (- -wisMod);
}

function DEC(){
    var chaMod = document.getElementById("CHAMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PRODEC").checked;
    if(prof == true)
        document.getElementById("DECMOD").innerHTML = (- -chaMod - -bonus);
    else
        document.getElementById("DECMOD").innerHTML = (- -chaMod);
}

function INTI(){
    var chaMod = document.getElementById("CHAMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROINTI").checked;
    if(prof == true)
        document.getElementById("INTIMOD").innerHTML = (- -chaMod - -bonus);
    else
        document.getElementById("INTIMOD").innerHTML = (- -chaMod);
}

function PERF(){
    var chaMod = document.getElementById("CHAMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROPERF").checked;
    if(prof == true)
        document.getElementById("PERFMOD").innerHTML = (- -chaMod - -bonus);
    else
        document.getElementById("PERFMOD").innerHTML = (- -chaMod);
}

function PERS(){
    var chaMod = document.getElementById("CHAMOD").innerHTML;
    var bonus = document.getElementById("bonus").innerHTML;
    var prof = document.getElementById("PROPERS").checked;
    if(prof == true)
        document.getElementById("PERSMOD").innerHTML = (- -chaMod - -bonus);
    else
        document.getElementById("PERSMOD").innerHTML = (- -chaMod);
}

function SELECTLEVEL(){
    var x = document.getElementById("mySelectLevel");
    var i = x.selectedIndex;
    if(i == 0 || i == 1 || i == 2 || i == 3)
        document.getElementById("bonus").innerHTML = 2;
    else if(i == 4 || i == 5 || i == 6 || i == 7)
        document.getElementById("bonus").innerHTML = 3;
    else if(i == 8 || i == 9 || i == 10 || i == 11)
        document.getElementById("bonus").innerHTML = 4;
    else if(i == 12 || i == 13 || i == 14 || i == 15)
        document.getElementById("bonus").innerHTML = 5;
    else if(i == 16 || i == 17 || i == 18 || i == 19)
        document.getElementById("bonus").innerHTML = 6;
    UPDATE();
        
}

function UPDATE(){
    ATH();
    ACR();
    SOH();
    STE();
    ARC();
    HIS();
    INV();
    NAT();
    REL();
    ANH();
    INS();
    MED();
    PER();
    SUR();
    DEC();
    INTI();
    PERF();
    PERS();  
    HP();
    

}

function SELECTRACE(){
    var x = document.getElementById("mySelectRace");
    var i = x.selectedIndex;
    // Speeds
    if(i == 0)
        document.getElementById("SPEED").innerHTML = "<br/>" + "0ft";    
    else if(i == 2 || i == 4 || i == 6)
        document.getElementById("SPEED").innerHTML = "<br/>" + "25ft";
    else
        document.getElementById("SPEED").innerHTML = "<br/>" + "30ft";
    /* Abilities    STR | DEX | CON | INT | WIS | CHA
    1    Dragonborn   2     0     0     0     0     1
    2    Dwarf        2     0     2     0     0     0
    3    Elf          0     2     0     0     0     0
    4    Gnome        0     1     0     2     0     0 
    5    Half-elf     0     0     0     1     0     2
    6    Halfling     0     2     1     0     0     0
    7    Half-Orc     2     0     1     0     0     0 
    8    Human        1     1     1     1     1     1 
    9    Tielfling    0     0     0     1     0     2
    
    var node = document.createElement("li");
    var textnode = document.createTextNode("Draconic");
    node.appendChild(textnode);
    document.getElementById("LANGUAGELIST").appendChild(node);
    
    */
    
    if(i == 0){
        document.getElementById("STRSCORE").innerHTML = 10;
        document.getElementById("DEXSCORE").innerHTML = 10;
        document.getElementById("CONSCORE").innerHTML = 10;
        document.getElementById("INTSCORE").innerHTML = 10;
        document.getElementById("WISSCORE").innerHTML = 10;
        document.getElementById("CHASCORE").innerHTML = 10;

        document.getElementById("STRMOD").innerHTML = 0;    
        document.getElementById("DEXMOD").innerHTML = 0;
        document.getElementById("CONMOD").innerHTML = 0;
        document.getElementById("INTMOD").innerHTML = 0;
        document.getElementById("WISMOD").innerHTML = 0;
        document.getElementById("CHAMOD").innerHTML = 0;          
        
        document.getElementById("LANGUAGELIST").innerHTML = "";
        var node = document.createElement("li");
        var textnode = document.createTextNode("Common");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
    }else if(i == 1){ // DragonBorn
       document.getElementById("STRSCORE").innerHTML = 12;
        document.getElementById("DEXSCORE").innerHTML = 10;
        document.getElementById("CONSCORE").innerHTML = 10;
        document.getElementById("INTSCORE").innerHTML = 10;
        document.getElementById("WISSCORE").innerHTML = 10;
        document.getElementById("CHASCORE").innerHTML = 11;
        document.getElementById("STRMOD").innerHTML = 1;
        document.getElementById("DEXMOD").innerHTML = 0;
        document.getElementById("CONMOD").innerHTML = 0;
        document.getElementById("INTMOD").innerHTML = 0;
        document.getElementById("WISMOD").innerHTML = 0;
        document.getElementById("CHAMOD").innerHTML = 0;
        
        document.getElementById("LANGUAGELIST").innerHTML = "";
        var node = document.createElement("li");
        var textnode = document.createTextNode("Common");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Draconic");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
    }else if(i == 2){ // Dwarf
        document.getElementById("STRSCORE").innerHTML = 10;
        document.getElementById("DEXSCORE").innerHTML = 10;
        document.getElementById("CONSCORE").innerHTML = 12;
        document.getElementById("INTSCORE").innerHTML = 10;
        document.getElementById("WISSCORE").innerHTML = 11;
        document.getElementById("CHASCORE").innerHTML = 10;
        document.getElementById("STRMOD").innerHTML = 0;
        document.getElementById("DEXMOD").innerHTML = 0;
        document.getElementById("CONMOD").innerHTML = 1;
        document.getElementById("INTMOD").innerHTML = 0;
        document.getElementById("WISMOD").innerHTML = 0;
        document.getElementById("CHAMOD").innerHTML = 0;
        
        document.getElementById("LANGUAGELIST").innerHTML = "";
        var node = document.createElement("li");
        var textnode = document.createTextNode("Common");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Dwarvish");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
    } else if(i == 3){ //Elf
        document.getElementById("STRSCORE").innerHTML = 10;
        document.getElementById("DEXSCORE").innerHTML = 12;
        document.getElementById("CONSCORE").innerHTML = 10;
        document.getElementById("INTSCORE").innerHTML = 11;
        document.getElementById("WISSCORE").innerHTML = 10;
        document.getElementById("CHASCORE").innerHTML = 10;
        document.getElementById("STRMOD").innerHTML = 0;
        document.getElementById("DEXMOD").innerHTML = 1;
        document.getElementById("CONMOD").innerHTML = 0;
        document.getElementById("INTMOD").innerHTML = 0;
        document.getElementById("WISMOD").innerHTML = 0;
        document.getElementById("CHAMOD").innerHTML = 0;
        
        document.getElementById("LANGUAGELIST").innerHTML = "";
        var node = document.createElement("li");
        var textnode = document.createTextNode("Common");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Elvish");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
    } else if(i == 4){ // Gnome
        document.getElementById("STRSCORE").innerHTML = 10;
        document.getElementById("DEXSCORE").innerHTML = 11;
        document.getElementById("CONSCORE").innerHTML = 10;
        document.getElementById("INTSCORE").innerHTML = 12;
        document.getElementById("WISSCORE").innerHTML = 10;
        document.getElementById("CHASCORE").innerHTML = 10;
        document.getElementById("STRMOD").innerHTML = 0;
        document.getElementById("DEXMOD").innerHTML = 0;
        document.getElementById("CONMOD").innerHTML = 0;
        document.getElementById("INTMOD").innerHTML = 1;
        document.getElementById("WISMOD").innerHTML = 0;
        document.getElementById("CHAMOD").innerHTML = 0;
        
        document.getElementById("LANGUAGELIST").innerHTML = "";
        var node = document.createElement("li");
        var textnode = document.createTextNode("Common");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Gnomish");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
    } else if(i == 5){ // Half Elf
        document.getElementById("STRSCORE").innerHTML = 10;
        document.getElementById("DEXSCORE").innerHTML = 10;
        document.getElementById("CONSCORE").innerHTML = 10;
        document.getElementById("INTSCORE").innerHTML = 11;
        document.getElementById("WISSCORE").innerHTML = 10;
        document.getElementById("CHASCORE").innerHTML = 12;
        document.getElementById("STRMOD").innerHTML = 0;
        document.getElementById("DEXMOD").innerHTML = 0;
        document.getElementById("CONMOD").innerHTML = 0;
        document.getElementById("INTMOD").innerHTML = 0;
        document.getElementById("WISMOD").innerHTML = 0;
        document.getElementById("CHAMOD").innerHTML = 1;
        
        document.getElementById("LANGUAGELIST").innerHTML = "";
        var node = document.createElement("li");
        var textnode = document.createTextNode("Common");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Elvish");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
    } else if(i == 6){ // Halfling
       document.getElementById("STRSCORE").innerHTML = 10;
        document.getElementById("DEXSCORE").innerHTML = 12;
        document.getElementById("CONSCORE").innerHTML = 10;
        document.getElementById("INTSCORE").innerHTML = 10;
        document.getElementById("WISSCORE").innerHTML = 10;
        document.getElementById("CHASCORE").innerHTML = 11;
        document.getElementById("STRMOD").innerHTML = 0;
        document.getElementById("DEXMOD").innerHTML = 1;
        document.getElementById("CONMOD").innerHTML = 0;
        document.getElementById("INTMOD").innerHTML = 0;
        document.getElementById("WISMOD").innerHTML = 0;
        document.getElementById("CHAMOD").innerHTML = 0;
        
        document.getElementById("LANGUAGELIST").innerHTML = "";
        var node = document.createElement("li");
        var textnode = document.createTextNode("Common");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);

        var node = document.createElement("li");
        var textnode = document.createTextNode("Halfling");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
    } else if(i == 7){ // Half Orc
        document.getElementById("STRSCORE").innerHTML = 12;
        document.getElementById("DEXSCORE").innerHTML = 10;
        document.getElementById("CONSCORE").innerHTML = 11;
        document.getElementById("INTSCORE").innerHTML = 10;
        document.getElementById("WISSCORE").innerHTML = 10;
        document.getElementById("CHASCORE").innerHTML = 10;
        document.getElementById("STRMOD").innerHTML = 1;
        document.getElementById("DEXMOD").innerHTML = 0;
        document.getElementById("CONMOD").innerHTML = 0;
        document.getElementById("INTMOD").innerHTML = 0;
        document.getElementById("WISMOD").innerHTML = 0;
        document.getElementById("CHAMOD").innerHTML = 0;
        
        document.getElementById("LANGUAGELIST").innerHTML = "";
        var node = document.createElement("li");
        var textnode = document.createTextNode("Common");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Orc");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
    } else if(i == 8){ // Human
        document.getElementById("STRSCORE").innerHTML = 11;
        document.getElementById("DEXSCORE").innerHTML = 11;
        document.getElementById("CONSCORE").innerHTML = 11;
        document.getElementById("INTSCORE").innerHTML = 11;
        document.getElementById("WISSCORE").innerHTML = 11;
        document.getElementById("CHASCORE").innerHTML = 11;
        document.getElementById("STRMOD").innerHTML = 0;
        document.getElementById("DEXMOD").innerHTML = 0;
        document.getElementById("CONMOD").innerHTML = 0;
        document.getElementById("INTMOD").innerHTML = 0;
        document.getElementById("WISMOD").innerHTML = 0;
        document.getElementById("CHAMOD").innerHTML = 0;
        
        document.getElementById("LANGUAGELIST").innerHTML = "";
        var node = document.createElement("li");
        var textnode = document.createTextNode("Common");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
                
    }else if(i == 9){ // Tiefling
        document.getElementById("STRSCORE").innerHTML = 10;
        document.getElementById("DEXSCORE").innerHTML = 10;
        document.getElementById("CONSCORE").innerHTML = 10;
        document.getElementById("INTSCORE").innerHTML = 11;
        document.getElementById("WISSCORE").innerHTML = 10;
        document.getElementById("CHASCORE").innerHTML = 12;
        document.getElementById("STRMOD").innerHTML = 0;
        document.getElementById("DEXMOD").innerHTML = 0;
        document.getElementById("CONMOD").innerHTML = 0;
        document.getElementById("INTMOD").innerHTML = 0;
        document.getElementById("WISMOD").innerHTML = 0;
        document.getElementById("CHAMOD").innerHTML = 1;
        
        document.getElementById("LANGUAGELIST").innerHTML = "";
        var node = document.createElement("li");
        var textnode = document.createTextNode("Common");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
        var node = document.createElement("li");
        var textnode = document.createTextNode("Infernal");
        node.appendChild(textnode);
        document.getElementById("LANGUAGELIST").appendChild(node);
        
    }
}

function ADDFEAT(){
    
    var ul = document.getElementById("FEATLIST");
    var value = document.getElementById("SELECTFEAT").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(value));
    var button = document.createElement("button");
    
    button.innerHTML = "REMOVE";
    button.style.background = "Red";
    button.style.border = "solid white 1px";
    button.style.fontSize = "20px";
    ul.appendChild(li);
    li.innerHTML = value;
    li.appendChild(button);
    li.setAttribute("id", "element4");
    ul.appendChild(li);
    
    ul.addEventListener('click', function(e){
    if(e.target && e.target.nodeName == "BUTTON") {
        e.target.parentNode.remove();
        }
    });
}

function ADDWEAPON(){    
    var ul = document.getElementById("WEAPONLIST");
    var value = document.getElementById("SELECTWEAPON").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(value));
    var button = document.createElement("button");

    button.innerHTML = "REMOVE";
    button.style.background = "Red";
    button.style.border = "solid white 1px";
    button.style.fontSize = "20px";
    ul.appendChild(li);
    li.innerHTML = value;
    li.appendChild(button);
    li.setAttribute("id", "element4");
    ul.appendChild(li);
    
    ul.addEventListener('click', function(e){
    if(e.target && e.target.nodeName == "BUTTON") {
        e.target.parentNode.remove();
        }
    });
}

function SELECTARMOR(){
    var x = document.getElementById("SELECTARMOR");
    var i = x.selectedIndex;
    var AC = document.getElementById("AC").value;
    var DEX = document.getElementById("DEXMOD").innerHTML;
    
    if(i == 0){
        document.getElementById("AC").innerHTML = "<br/>" + (- -DEX + 10);
    }else if(i == 1){
        document.getElementById("AC").innerHTML = "<br/>" + (- -DEX + 11);
    }else if(i == 2){
        document.getElementById("AC").innerHTML = "<br/>" + (- -DEX + 11);
    }else if(i == 3){
        document.getElementById("AC").innerHTML = "<br/>" + (- -DEX + 12);
    }else if(i == 4){
        if(DEX > 3){
            DEX = 2;
            document.getElementById("AC").innerHTML = "<br/>" + (- -DEX + 12);
        } else{
            document.getElementById("AC").innerHTML = "<br/>" + (- -DEX + 12);
        }
    }else if(i == 5){
        if(DEX > 3){
            DEX = 2;
            document.getElementById("AC").innerHTML = "<br/>" + (- -DEX + 13);
        } else{
            document.getElementById("AC").innerHTML = "<br/>" + (- -DEX + 13);
        }
    }else if(i == 6){
        if(DEX > 3){
            DEX = 2;
            document.getElementById("AC").innerHTML = "<br/>" + (- -DEX + 14);
        } else{
            document.getElementById("AC").innerHTML = "<br/>" + (- -DEX + 14);
        }
    }else if(i == 7){
        if(DEX > 3){
            DEX = 2;
            document.getElementById("AC").innerHTML = "<br/>" + (- -DEX + 14);
        } else{
            document.getElementById("AC").innerHTML = "<br/>" + (- -DEX + 14);
        }
    }else if(i == 8){
        if(DEX > 3){
            DEX = 2;
            document.getElementById("AC").innerHTML = "<br/>" + (- -DEX + 15);
        } else{
            document.getElementById("AC").innerHTML = "<br/>" + (- -DEX + 15);
        }
    }else if(i == 9){
        document.getElementById("AC").innerHTML = "<br/>" + 14;
    }else if(i == 10){
        document.getElementById("AC").innerHTML = "<br/>" + 16;
    }else if(i == 11){
        document.getElementById("AC").innerHTML = "<br/>" + 17;
    }else if(i == 12){
        document.getElementById("AC").innerHTML = "<br/>" + 18;
    }
}


function ADDARMOR(){
    var ul = document.getElementById("ARMORLIST");
    var value = document.getElementById("SELECTARMOR").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(value));
    var button = document.createElement("button");

    button.innerHTML = "REMOVE";
    button.style.background = "Red";
    button.style.border = "solid white 1px";
    button.style.fontSize = "20px";
    ul.appendChild(li);
    li.innerHTML = value;
    li.appendChild(button);
    li.setAttribute("id", "element4");
    ul.appendChild(li);
    
    ul.addEventListener('click', function(e){
    if(e.target && e.target.nodeName == "BUTTON") {
        e.target.parentNode.remove();
        }
    });   
}

    
function ADDLANGUAGES(){    
    var ul = document.getElementById("LANGUAGELIST");
    var value = document.getElementById("SELECTLANGUAGE").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(value));
    var button = document.createElement("button");

    button.innerHTML = "REMOVE";
    button.style.background = "Red";
    button.style.border = "solid white 1px";
    button.style.fontSize = "20px";
    ul.appendChild(li);
    li.innerHTML = value;
    li.appendChild(button);
    li.setAttribute("id", "element4");
    ul.appendChild(li);
    
    ul.addEventListener('click', function(e){
    if(e.target && e.target.nodeName == "BUTTON") {
        e.target.parentNode.remove();
        }
    });
}

function ADDMISC(){
    var ul = document.getElementById("MISCLIST");
    var value = document.getElementById("MISC").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(value));
    var button = document.createElement("button");

   button.innerHTML = "REMOVE";
    button.style.background = "Red";
    button.style.border = "solid white 1px";
    button.style.fontSize = "20px";
    ul.appendChild(li);
    li.innerHTML = value;
    li.appendChild(button);
    li.setAttribute("id", "element4");
    ul.appendChild(li);
    
    ul.addEventListener('click', function(e){
    if(e.target && e.target.nodeName == "BUTTON") {
        e.target.parentNode.remove();
        }
    });
}

function ADDTOOLS(){
    var ul = document.getElementById("TOOLLIST");
    var value = document.getElementById("TOOL").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(value));
    var button = document.createElement("button");

    button.innerHTML = "REMOVE";
    button.style.background = "Red";
    button.style.border = "solid white 1px";
    button.style.fontSize = "20px";
    ul.appendChild(li);
    li.innerHTML = value;
    li.appendChild(button);
    li.setAttribute("id", "element4");
    ul.appendChild(li);
    
    ul.addEventListener('click', function(e){
    if(e.target && e.target.nodeName == "BUTTON") {
        e.target.parentNode.remove();
        }
    });   
}