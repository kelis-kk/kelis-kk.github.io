var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"go"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"go":[["^How lucky are we feeling today?","\n",["ev",{"^->":"go.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^!","/str","/ev",{"*":"go.0.c-0","flg":22},{"s":["^I am great",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"go.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"go.0.2.s"},[{"#n":"$r2"}],"^, ","<>","\n",{"->":"go.0.g-0"},{"#f":5}],"g-0":["^let's go and get started!","\n",{"->":"cardpull"},{"#f":5}]}],{"#f":1}],"cardpull":[["^本期卡池：【与克里斯一起来玩耍吧！】","\n","^SSR (x1) 克里斯和你","\n","^SR (x1) 与克里斯看海景","\n","^R* (x1) 魂穿鲨鲨红发版","\n","^N (x1) 克里斯想给你好吃的","\n","^注*：本期卡池中R为唯一非互动类卡片，请介意的宝贝们慎重哦！","\n","^点击↓开始抽卡↓来和克里斯互动吧！抽到结果之后记住要截图找克里斯兑奖哦！","\n",["ev",{"^->":"cardpull.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^已阅，开始抽卡吧。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"cardpull.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n",{"->":"pull"},{"#f":5}]}],{"#f":1}],"pull":[["^[",["ev","visit",4,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^SSR",{"->":".^.^.29"},null],"s1":["pop","^SR",{"->":".^.^.29"},null],"s2":["pop","^R",{"->":".^.^.29"},null],"s3":["pop","^N",{"->":".^.^.29"},null],"#f":5}],"^]","\n","^记住截图找克里斯哦~","\n","^么么哒","\n",["ev",{"^->":"pull.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^下次见啦",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"pull.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"next"},{"#f":5}]}],{"#f":1}],"next":["^Till we meet again...","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};