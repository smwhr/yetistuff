var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"intro"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"intro":[["ev","str","^normal","/str","/ev",{"VAR=":"difficulty","re":true},"ev",30,"/ev",{"VAR=":"time","re":true},"ev",0,"/ev",{"VAR=":"inventory_Key","re":true},"^This is a template for an escape game.","\n",["^You are currently playing on the ","ev",{"VAR?":"difficulty"},"out","/ev","^ difficulty, which means a ","ev",{"VAR?":"time"},"out","/ev","^ seconds timer.","\n","ev","str","^Start","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Easy","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Normal","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^Hard","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["^ ","\n",{"->":"start"},{"#f":5}],"c-1":["\n","ev","str","^easy","/str","/ev",{"VAR=":"difficulty","re":true},"ev",60,"/ev",{"VAR=":"time","re":true},{"->":".^.^"},{"#f":5}],"c-2":["\n","ev","str","^normal","/str","/ev",{"VAR=":"difficulty","re":true},"ev",30,"/ev",{"VAR=":"time","re":true},{"->":".^.^"},{"#f":5}],"c-3":["\n","ev","str","^hard","/str","/ev",{"VAR=":"difficulty","re":true},"ev",15,"/ev",{"VAR=":"time","re":true},{"->":".^.^"},{"#f":5}],"#f":5,"#n":"difficulty_selection"}],null],{"#f":1}],"start":["^The glacial touch of water wakes you up.","\n","^You open your eyes. You are in a room with only one opening to your right: a locked door. Water is rising. It looks like you have ","<>","\n","ev",{"VAR?":"difficulty"},"str","^easy","/str","==","/ev",[{"->":".^.b","c":true},{"b":["^ roughly a minute to escape.",{"->":"start.13"},null]}],"nop","\n","ev",{"VAR?":"difficulty"},"str","^normal","/str","==","/ev",[{"->":".^.b","c":true},{"b":["^ half a minute to escape.",{"->":"start.23"},null]}],"nop","\n","ev",{"VAR?":"difficulty"},"str","^hard","/str","==","/ev",[{"->":".^.b","c":true},{"b":["^ only a few seconds to escape. Soon, you'll be dead.",{"->":"start.33"},null]}],"nop","\n",{"->":"action_hub"},{"#f":1}],"action_hub":[["ev",{"VAR?":"time"},1,"<","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"game_over"},{"->":".^.^.^.6"},null]}],"nop","\n","^You look around you.","\n","ev","str","^Do nothing.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Test an action.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Test another action.","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Test a third action.","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^Open the key to escape.","/str",{"VAR?":"inventory_Key"},1,"==","/ev",{"*":".^.c-4","flg":21},{"c-0":["\n","ev",{"VAR?":"time"},10,"-",{"VAR=":"time","re":true},"/ev",{"->t->":"time_logic"},["ev","visit",6,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"ev","du",5,"==","/ev",{"->":".^.s5","c":true},"nop",{"s0":["pop","^You wait",{"->":".^.^.41"},null],"s1":["pop","^You scream",{"->":".^.^.41"},null],"s2":["pop","^You remember that time you said \"To you as well\" to a barista asking for your name",{"->":".^.^.41"},null],"s3":["pop","^You wait",{"->":".^.^.41"},null],"s4":["pop","^You sob",{"->":".^.^.41"},null],"s5":["pop","^You sing a song",{"->":".^.^.41"},null],"#f":5}],"^.","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n",{"->":"action_01"},{"#f":5}],"c-2":["\n",{"->":"action_02"},{"#f":5}],"c-3":["\n",{"->":"action_03"},{"#f":5}],"c-4":["^ ","\n",{"->":"escape"},{"#f":5}]}],{"#f":1}],"timer":[["ev",{"VAR?":"time"},45,">","/ev",{"->":".^.b","c":true},{"b":["\n","^You still have enough time to escape… maybe ","ev",{"VAR?":"time"},"out","/ev","^ seconds?","\n",{"->":"action_hub"},{"->":"timer.3"},null]}],["ev",{"VAR?":"time"},25,">","/ev",{"->":".^.b","c":true},{"b":["\n",["ev","visit",3,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^Time is ticking out.",{"->":".^.^.23"},null],"s1":["pop","^You'll be soon out of oxygen.",{"->":".^.^.23"},null],"s2":["pop","^Water is high. You'll be dead soon.",{"->":".^.^.23"},null],"#f":5}],"\n",{"->":"action_hub"},{"->":"timer.3"},null]}],[{"->":".^.b"},{"b":["\n","^Water's up now. You… can… hardly… breathe…","\n",{"->":"action_hub"},{"->":"timer.3"},null]}],"nop","\n",{"#f":1}],"action_01":["ev",{"VAR?":"time"},10,"-",{"VAR=":"time","re":true},"/ev",{"->t->":"time_logic"},"^You try something. It doesn't work.","\n",{"->":"timer"},{"#f":1}],"action_02":["ev",{"VAR?":"time"},10,"-",{"VAR=":"time","re":true},"/ev",{"->t->":"time_logic"},"^You try something and find a key.","\n","ev",1,"/ev",{"VAR=":"inventory_Key","re":true},{"->":"timer"},{"#f":1}],"action_03":["ev",{"VAR?":"time"},10,"-",{"VAR=":"time","re":true},"/ev",{"->t->":"time_logic"},"^You try something else and it is not a success.","\n",{"->":"timer"},{"#f":1}],"time_logic":["ev",{"VAR?":"time"},1,"<","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"game_over"},{"->":".^.^.^.6"},null]}],"nop","\n","ev","void","/ev","->->",{"#f":1}],"game_over":["^Your lungs are empty. You head is suddenly light. Your last thought is vaguely happy. You die.","\n","^Game over.","\n",{"->":"ending"},{"#f":1}],"escape":["^You successfuly open the door and escape. Well played!","\n",{"->":"ending"},{"#f":1}],"ending":[["ev","str","^Start over.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"->":"intro"},"end",{"#f":5}]}],{"#f":1}],"global decl":["ev",30,{"VAR=":"time"},"str","^normal","/str",{"VAR=":"difficulty"},0,{"VAR=":"inventory_Key"},"/ev","end",null],"#f":1}],"listDefs":{}};