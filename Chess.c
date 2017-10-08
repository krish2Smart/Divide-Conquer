#include<stdio.h>
#include<conio.h>
#include<graphics.h>
#include<dos.h>
#include<stdlib.h>
#include<ctype.h>
void fn_choice();
void fn_chess();
void fn_lines();
void fn_board(int,int);
void fn_coins();
void fn_player1();
void fn_player2();
void fn_check(int *a,int *b,int *c,int *d,int pos);
void fn_clear(int *a,int *b,int *c,int *d);
void fn_wCoinMoves();
void fn_wPond();
void fn_wRook();
void fn_wKnight();
void fn_wBishop();
void fn_wKing();
void fn_wQueen();
void fn_bCoinMoves();
void fn_bPond();
void fn_bRook();
void fn_bKnight();
void fn_bBishop();
void fn_bKing();
void fn_bQueen();
void fn_disCheckP1();
void fn_disCheckP2();
void fn_wrCheck();
void fn_brCheck();
void fn_wbCheck();
void fn_bbCheck();
void fn_wqCheck();
void fn_bqCheck();
void fn_wknCheck();
void fn_bknCheck();
void fn_wrongmove();
void fn_coinCutp1(int *a,int *b,int *c,int *d);
void fn_coinCutp2(int *a,int *b,int *c,int *d);
char coin[36]={'r','h','b','k','q','b','h','r','p','p','p','p','p','p','p','p','r','h','b','q','k','b','h','r'},C_p1[33][33],C_p2[33][33];
char C_cap;
int I_m,I_n,I_i,I_j,I_k,I_l,I_x,I_y;
void main()
{
   //Graphics Initialization
   int gdriver = DETECT;
   int gmode;
   clrscr();
   initgraph(&gdriver,&gmode,"C:\\TC\\BGI");
   fn_choice();
}
void fn_choice()
{
  /* int I_choice,I_a;
   long int I_b;
   printf("1.Chess\n2.Quit\n\t\tEnter your choice:");
   scanf("%d",&I_choice);
   cleardevice();
   if(I_choice==2)
      exit(0);
   printf("\t\t\tWELCOME TO CHESS GAME\n\nGame Instructions:\n\tThis game is as same as normal chess game,there will be two players\n\tplayer 1 will take the white coins and he/she will start the game with \n\tfirst move and then the person who beat the opponent king will win the \tgame.\n\tyou can use only 'c' key to grab a coin and 'p' key to place that coin  in the desired position the coins will be placed as per the rules only \n\n\n\tpress 'esc' key to quit game\n\t\t\t");
   getch();
   cleardevice();
   for(I_a=0;I_a<20;I_a++)
    {
      setcolor(GREEN);
      outtextxy(220,200,"loading....");
      printf("%c",177);
      for(I_b=0;I_b<1000000;I_b++);
    }
   cleardevice();*/
   fn_chess();
}
void fn_chess()
{
  setcolor(GREEN);
   outtextxy(400,40,"Player1 WHITE");
   setcolor(BLUE);
   outtextxy(400,280,"Player2 BLACK");
    fn_lines();
    fn_coins();
    fn_player1();
}
void fn_lines()
{
  setcolor(WHITE);
  setviewport(0,0,639,440,1);
  line(0,0,320,0);
  line(0,0,0,320);
  line(0,320,320,320);
  line(320,320,320,0);
    fn_board(0,40);
    fn_board(80,120);
    fn_board(160,200);
    fn_board(240,280);
}
void fn_board(int b,int d)
{
  int a,c;
  for(a=0,c=40;c<=280;a+=80,c+=80)
  {
      bar(a,b,c,d);
  }
  for(a=40,c=80;c<=320;a+=80,c+=80)
  {
      bar(a,b+40,c,d+40);
  }
}
void fn_coins()
{
  int a,b,i,j,k=0,l=23,m=0,n=0;
  for(j=4,a=32;j<=8;j+=4,a-=4)
  {
    for(i=4,b=32;i<=32;i+=4,b-=4)
    {
      C_p1[i][j]=coin[k];
      C_p2[b][a]=coin[l];
      setcolor(GREEN);
      outtextxy((i*5)+n,(j*5)+m,&C_p1[i][j]);
      setcolor(BLUE);
      outtextxy((b*10)-20,(a*10)-20,&C_p2[b][a]);
      k++;
      l--;
      n=i*5;
    }
    n=0;
    m+=20;
  }
}
void fn_player1()
{
   int ch,i,j;
   static int a=0,b=0,c=40,d=40;
   setcolor(RED);
   rectangle(a,b,c,d);
   ch=getch();
   setcolor(WHITE);
   rectangle(a,b,c,d);
   //Moves
   //Up
  if(ch==72)
   {
     setcolor(RED);
     fn_check(&a,&b,&c,&d,2);
     rectangle(a,b-=40,c,d-=40);
     fn_player1();
   }
   //Left
   else if(ch==75)
   {
     setcolor(RED);
     fn_check(&a,&b,&c,&d,4);
     rectangle(a-=40,b,c-=40,d);
     fn_player1();
   }
   //Right
   else if(ch==77)
   {
      setcolor(RED);
      fn_check(&a,&b,&c,&d,6);
      rectangle(a+=40,b,c+=40,d);
      fn_player1();
   }
   //Down
   else if(ch==80)
   {
      setcolor(RED);
      fn_check(&a,&b,&c,&d,8);
      rectangle(a,b+=40,c,d+=40);
      fn_player1();
   }
   else if(ch=='c')
   {
     // sound(500000000);
     // delay(200);
     // nosound();
      fn_clear(&a,&b,&c,&d);
      C_cap=C_p1[(c/10)][(d/10)];
      I_m=c;
      I_n=d;
      //cleardevice();
      //printf("%d %d %d %d",a,b,c,d);
      fn_player1();
   }
   else if(ch=='p')
   {
      I_x=a;
      I_y=b;
      I_k=c;
      I_l=d;
      setcolor(GREEN);
      fn_wCoinMoves();
     // sound(10000);
     // delay(200);
     // nosound();
      C_p1[(c/10)][(d/10)]=C_cap;
      C_p1[(I_m/10)][(I_n/10)]=NULL;
      C_cap=NULL;
      fn_player2();
   }
   else if(ch==27)
   {
      cleardevice();
      exit(0);
   }
   else
   {
     fn_player1();
   }
}
void fn_player2()
{
   int ch,i,j;
   static int a=280,b=280,c=320,d=320;
   setcolor(RED);
   rectangle(a,b,c,d);
   ch=getch();
   setcolor(WHITE);
   rectangle(a,b,c,d);
   //Moves
   //Up
   if(ch==72)
   {
     setcolor(RED);
     fn_check(&a,&b,&c,&d,2);
     rectangle(a,b-=40,c,d-=40);
     fn_player2();
   }
   //Left
   else if(ch==75)
   {
     setcolor(RED);
     fn_check(&a,&b,&c,&d,4);
     rectangle(a-=40,b,c-=40,d);
     fn_player2();
   }
   //Right
   else if(ch==77)
   {
      setcolor(RED);
      fn_check(&a,&b,&c,&d,6);
      rectangle(a+=40,b,c+=40,d);
      fn_player2();
   }
   //Down
   else if(ch==80)
   {
      setcolor(RED);
      fn_check(&a,&b,&c,&d,8);
      rectangle(a,b+=40,c,d+=40);
      fn_player2();
   }
   else if(ch=='c')
   {
     fn_clear(&a,&b,&c,&d);
     C_cap=C_p2[(c/10)][(d/10)];
     I_m=c;
     I_n=d;
     fn_player2();
   }
   else if(ch=='p')
   {
     I_x=a;
     I_y=b;
     I_k=c;
     I_l=d;
     setcolor(BLUE);
     fn_bCoinMoves();
     C_p2[(c/10)][(d/10)]=C_cap;
     C_p2[(I_m/10)][(I_n/10)]=NULL;
     C_cap=NULL;
     fn_player1();
   }
   else if(ch==27)
   {
     cleardevice();
     exit(0);
   }
   else
   {
     fn_player2();
   }
}
void fn_check(int *a,int *b,int *c,int *d,int pos)
{
  if(pos==2&&*b==0)
  {
    *b+=40;
    *d+=40;
  }
  else if(pos==4&&*a==0)
  {
    *a+=40;
    *c+=40;
  }
  else if(pos==6&&*c==320)
  {
    *a-=40;
    *c-=40;
  }
  else if(pos==8&&*d==320)
  {
    *b-=40;
    *d-=40;
  }
}
void fn_clear(int *a,int *b,int *c,int *d)
{
  if((*a==0&&*d==40)||(*a==80&&*d==40)||(*a==160&&*d==40)||(*a==240&&*d==40)||(*a==320&&*d==40)||(*a==40&&*d==80)||(*a==120&&*d==80)||(*a==200&&*d==80)||(*a==280&&*d==80)||(*a==0&&*d==120)||(*a==80&&*d==120)||(*a==160&&*d==120)||(*a==240&&*d==120)||(*a==320&&*d==120)||(*a==40&&*d==160)||(*a==120&&*d==160)||(*a==200&&*d==160)||(*a==280&&*d==160)||(*a==0&&*d==200)||(*a==80&&*d==200)||(*a==160&&*d==200)||(*a==240&&*d==200)||(*a==320&&*d==200)||(*a==40&&*d==240)||(*a==120&&*d==240)||(*a==200&&*d==240)||(*a==280&&*d==240)||(*a==0&&*d==280)||(*a==80&&*d==280)||(*a==160&&*d==280)||(*a==240&&*d==280)||(*a==320&&*d==280)||(*a==40&&*d==320)||(*a==120&&*d==320)||(*a==200&&*d==320)||(*a==280&&*d==320))
  {
    setfillstyle(SOLID_FILL,WHITE);
    bar(*a,*b,*c,*d);
  }
  else
  {
    setfillstyle(SOLID_FILL,BLACK);
    bar(*a,*b,*c,*d);
  }
}
void fn_wCoinMoves()
{
  if(C_cap=='p')
  {
     fn_wPond();
  }
  else if(C_cap=='r')
  {
     fn_wRook();
  }
  else if(C_cap=='h')
  {
     fn_wKnight();
  }
  else if(C_cap=='b')
  {
     fn_wBishop();
  }
  else if(C_cap=='k')
  {
     fn_wKing();
  }
  else if(C_cap=='q')
  {
     fn_wQueen();
  }
}
void fn_bCoinMoves()
{
  if(C_cap=='p')
  {
    fn_bPond();
  }
  else if(C_cap=='r')
  {
    fn_bRook();
  }
  else if(C_cap=='h')
  {
     fn_bKnight();
  }
  else if(C_cap=='b')
  {
     fn_bBishop();
  }
  else if(C_cap=='k')
  {
     fn_bKing();
  }
  else if(C_cap=='q')
  {
     fn_bQueen();
  }
}
void fn_wPond()
{
  if(C_p2[I_k/10][I_l/10]==NULL)
  {
    if((I_m>=40&&I_m<=320)&&(I_n==80))
    {
      if(I_k==I_m&&I_l==I_n+40)
      {
	outtextxy(I_k-20,I_l-20,&C_cap);
      }
      else if((I_k==I_m&&I_l==I_n+80)&&(C_p1[I_m/10][(I_n+40)/10]==NULL)&&(C_p2[I_m/10][(I_n+40)/10]==NULL))
      {
	outtextxy(I_k-20,I_l-20,&C_cap);
      }
      else
      {
	fn_wrongmove();
	fn_player1();
      }
    }
    else if(I_k==I_m&&I_l==I_n+40)
    {
      outtextxy(I_k-20,I_l-20,&C_cap);
    }
    else
    {
      fn_wrongmove();
      fn_player1();
    }
  }
  else if(C_p2[I_k/10][I_l/10]!=NULL)
  {
    if(I_k==I_m+40&&I_l==I_n+40)
    {
      fn_coinCutp1(&I_x,&I_y,&I_k,&I_l);
      outtextxy(I_k-20,I_l-20,&C_cap);
    }
    else if(I_k==I_m-40&&I_l==I_n+40)
    {
       fn_coinCutp1(&I_x,&I_y,&I_k,&I_l);
       outtextxy(I_k-20,I_l-20,&C_cap);
    }
    else
    {
      fn_wrongmove();
      fn_player1();
    }
  }
  else
  {
    fn_wrongmove();
    fn_player1();
  }
}
void fn_bPond()
{
  if(C_p1[I_k/10][I_l/10]==NULL)
  {
    if((I_m>=40&&I_m<=320)&&(I_n==280))
    {
      if(I_k==I_m&&I_l==I_n-40)
      {
	outtextxy(I_k-20,I_l-20,&C_cap);
      }
      else if((I_k==I_m&&I_l==I_n-80)&&(C_p1[I_m/10][(I_n-40)/10]==NULL)&&(C_p2[I_m/10][(I_n-40)/10]==NULL))
      {
	outtextxy(I_k-20,I_l-20,&C_cap);
      }
      else
      {
	fn_wrongmove();
	fn_player2();
      }
    }
    else if(I_k==I_m&&I_l==I_n-40)
    {
      outtextxy(I_k-20,I_l-20,&C_cap);
    }
    else
    {
      fn_wrongmove();
      fn_player2();
    }
  }
  else if(C_p1[I_k/10][I_l/10]!=NULL)
  {
    if(I_k==I_m-40&&I_l==I_n-40)
    {
      fn_coinCutp2(&I_x,&I_y,&I_k,&I_l);
      outtextxy(I_k-20,I_l-20,&C_cap);
    }
    else if(I_k==I_m+40&&I_l==I_n-40)
    {
      fn_coinCutp2(&I_x,&I_y,&I_k,&I_l);
      outtextxy(I_k-20,I_l-20,&C_cap);
    }
    else
    {
      fn_wrongmove();
      fn_player2();
    }
  }
  else
  {
    fn_wrongmove();
    fn_player2();
  }
}
void fn_wRook()
{
  if((I_k==I_m)&&(I_l>=I_n+40&&I_l<=I_n+280))
  {
     I_i=I_m;
     I_j=I_n+40;
     while(I_j<I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_j+=40;
     }
  }
  else if((I_k==I_m)&&(I_l<=I_n-40&&I_l>=I_n-280))
  {
     I_i=I_m;
     I_j=I_n-40;
     while(I_j>I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_j-=40;
     }
  }
  else if((I_k>=I_m+40&&I_k<=I_m+280)&&(I_l==I_n))
  {
     I_i=I_m+40;
     I_j=I_n;
     while(I_i<I_k)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_i+=40;
     }
  }
  else if((I_k<=I_m-40||I_k>=I_m-280)&&(I_l==I_n))
  {
     I_i=I_m-40;
     I_j=I_n;
     while(I_i>I_k)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_i-=40;
     }
  }
  else
  {
     fn_wrongmove();
     fn_player1();
  }
  if(C_p1[I_i/10][I_j/10]==NULL)
  {
       outtextxy(I_k-20,I_l-20,&C_cap);
       fn_wrCheck();
  }
  else
  {
     fn_wrongmove();
     fn_player1();
  }
}
void fn_bRook()
{
  if((I_k==I_m)&&(I_l>=I_n+40&&I_l<=I_n+280))
  {
     I_i=I_m;
     I_j=I_n+40;
     while(I_j<I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_j+=40;
     }
  }
  else if((I_k==I_m)&&(I_l<=I_n-40&&I_l>=I_n-280))
  {
     I_i=I_m;
     I_j=I_n-40;
     while(I_j>I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_j-=40;
     }
  }
  else if((I_k>=I_m+40&&I_k<=I_m+280)&&(I_l==I_n))
  {
     I_i=I_m+40;
     I_j=I_n;
     while(I_i<I_k)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_i+=40;
     }
  }
  else if((I_k<=I_m-40||I_k>=I_m-280)&&(I_l==I_n))
  {
     I_i=I_m-40;
     I_j=I_n;
     while(I_i>I_k)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_i-=40;
     }
  }
  else
  {
     fn_wrongmove();
     fn_player2();
  }
  if(C_p2[I_i/10][I_j/10]==NULL)
  {
     outtextxy(I_k-20,I_l-20,&C_cap);
     fn_brCheck();
  }
  else
  {
     fn_wrongmove();
     fn_player2();
  }
}
void fn_wKnight()
{
  if((I_k==I_m-40&&I_l==I_n+80)||(I_k==I_m+40&&I_l==I_n+80)||(I_k==I_m+80&&I_l==I_n+40)||(I_k==I_m-80&&I_l==I_n+40))
  {
    outtextxy(I_k-20,I_l-20,&C_cap);
    fn_wknCheck();
  }
  else if((I_k==I_m-40&&I_l==I_n-80)||(I_k==I_m+40&&I_l==I_n-80)||(I_k==I_m+80&&I_l==I_n-40)||(I_k==I_m-80&&I_l==I_n-40))
  {
    outtextxy(I_k-20,I_l-20,&C_cap);
    fn_wknCheck();
  }
  else
  {
    fn_wrongmove();
    fn_player1();
  }
}
void fn_bKnight()
{
  if((I_k==I_m-40&&I_l==I_n+80)||(I_k==I_m+40&&I_l==I_n+80)||(I_k==I_m+80&&I_l==I_n+40)||(I_k==I_m-80&&I_l==I_n+40))
  {
    outtextxy(I_k-20,I_l-20,&C_cap);
     fn_bknCheck();
  }
  else if((I_k==I_m-40&&I_l==I_n-80)||(I_k==I_m+40&&I_l==I_n-80)||(I_k==I_m+80&&I_l==I_n-40)||(I_k==I_m-80&&I_l==I_n-40))
  {
    outtextxy(I_k-20,I_l-20,&C_cap);
    fn_bknCheck();
  }
  else
  {
    fn_wrongmove();
    fn_player2();
  }
}
void fn_wBishop()
{
  if((I_k==I_m-40&&I_l==I_n+40)||(I_k==I_m-80&&I_l==I_n+80)||(I_k==I_m-120&&I_l==I_n+120)||(I_k==I_m-160&&I_l==I_n+160)||(I_k==I_m-200&&I_l==I_n+200)||(I_k==I_m-240&&I_l==I_n+240)||(I_k==I_m-280&&I_l==I_n+280))
  {
     I_i=I_m-40;
     I_j=I_n+40;
     while(I_i>I_k&&I_j<I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_i-=40;
       I_j+=40;
     }
  }
  else if((I_k==I_m+40&&I_l==I_n-40)||(I_k==I_m+80&&I_l==I_n-80)||(I_k==I_m+120&&I_l==I_n-120)||(I_k==I_m+160&&I_l==I_n-160)||(I_k==I_m+200&&I_l==I_n-200)||(I_k==I_m+240&&I_l==I_n-240)||(I_k==I_m+280&&I_l==I_n-280))
  {
     I_i=I_m+40;
     I_j=I_n-40;
     while(I_i<I_k&&I_j>I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_i+=40;
       I_j-=40;
     }
  }
  else if((I_k==I_m+40&&I_l==I_n+40)||(I_k==I_m+80&&I_l==I_n+80)||(I_k==I_m+120&&I_l==I_n+120)||(I_k==I_m+160&&I_l==I_n+160)||(I_k==I_m+200&&I_l==I_n+200)||(I_k==I_m+240&&I_l==I_n+240)||(I_k==I_m+280&&I_l==I_n+280))
  {
     I_i=I_m+40;
     I_j=I_n+40;
     while(I_i<I_k&&I_j<I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_i+=40;
       I_j+=40;
     }
  }
  else if((I_k==I_m-40&&I_l==I_n-40)||(I_k==I_m-80&&I_l==I_n-80)||(I_k==I_m-120&&I_l==I_n-120)||(I_k==I_m-160&&I_l==I_n-160)||(I_k==I_m-200&&I_l==I_n-200)||(I_k==I_m-240&&I_l==I_n-240)||(I_k==I_m-280&&I_l==I_n-280))
  {
     I_i=I_m-40;
     I_j=I_n-40;
     while(I_i>I_k&&I_j>I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_i-=40;
       I_j-=40;
     }
  }
  else
  {
    fn_wrongmove();
    fn_player1();
  }
  if(C_p1[I_i/10][I_j/10]==NULL)
  {
     outtextxy(I_k-20,I_l-20,&C_cap);
     fn_wbCheck();
  }
  else
  {
     fn_wrongmove();
     fn_player1();
  }
}
void fn_bBishop()
{
  if((I_k==I_m-40&&I_l==I_n+40)||(I_k==I_m-80&&I_l==I_n+80)||(I_k==I_m-120&&I_l==I_n+120)||(I_k==I_m-160&&I_l==I_n+160)||(I_k==I_m-200&&I_l==I_n+200)||(I_k==I_m-240&&I_l==I_n+240)||(I_k==I_m-280&&I_l==I_n+280))
  {
     I_i=I_m-40;
     I_j=I_n+40;
     while(I_i>I_k&&I_j<I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_i-=40;
       I_j+=40;
     }
  }
  else if((I_k==I_m+40&&I_l==I_n-40)||(I_k==I_m+80&&I_l==I_n-80)||(I_k==I_m+120&&I_l==I_n-120)||(I_k==I_m+160&&I_l==I_n-160)||(I_k==I_m+200&&I_l==I_n-200)||(I_k==I_m+240&&I_l==I_n-240)||(I_k==I_m+280&&I_l==I_n-280))
  {
     I_i=I_m+40;
     I_j=I_n-40;
     while(I_i<I_k&&I_j>I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_i+=40;
       I_j-=40;
     }
  }
  else if((I_k==I_m+40&&I_l==I_n+40)||(I_k==I_m+80&&I_l==I_n+80)||(I_k==I_m+120&&I_l==I_n+120)||(I_k==I_m+160&&I_l==I_n+160)||(I_k==I_m+200&&I_l==I_n+200)||(I_k==I_m+240&&I_l==I_n+240)||(I_k==I_m+280&&I_l==I_n+280))
  {
     I_i=I_m+40;
     I_j=I_n+40;
     while(I_i<I_k&&I_j<I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_i+=40;
       I_j+=40;
     }
  }
  else if((I_k==I_m-40&&I_l==I_n-40)||(I_k==I_m-80&&I_l==I_n-80)||(I_k==I_m-120&&I_l==I_n-120)||(I_k==I_m-160&&I_l==I_n-160)||(I_k==I_m-200&&I_l==I_n-200)||(I_k==I_m-240&&I_l==I_n-240)||(I_k==I_m-280&&I_l==I_n-280))
  {
     I_i=I_m-40;
     I_j=I_n-40;
     while(I_i>I_k&&I_j>I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_i-=40;
       I_j-=40;
     }
  }
  else
    fn_player2();
  if(C_p2[I_i/10][I_j/10]==NULL)
  {
     outtextxy(I_k-20,I_l-20,&C_cap);
     fn_bbCheck();
  }
  else
  {
     outtextxy(I_m-20,I_n-20,&C_cap);
     fn_player2();
  }
}
void fn_wKing()
{
  if((I_k==I_m&&I_l==I_n+40)||(I_k==I_m&&I_l==I_n-40)||(I_k==I_m+40&&I_l==I_n)||(I_k==I_m-40&&I_l==I_n)||(I_k==I_m+40&&I_l==I_n-40)||(I_k==I_m-40&&I_l==I_n+40)||(I_k==I_m+40&&I_l==I_n+40)||(I_k==I_m-40&&I_l==I_n-40))
  {
    outtextxy(I_k-20,I_l-20,&C_cap);
  }
  else
    fn_player1();
}
void fn_bKing()
{
  if((I_k==I_m&&I_l==I_n+40)||(I_k==I_m&&I_l==I_n-40)||(I_k==I_m+40&&I_l==I_n)||(I_k==I_m-40&&I_l==I_n)||(I_k==I_m+40&&I_l==I_n-40)||(I_k==I_m-40&&I_l==I_n+40)||(I_k==I_m+40&&I_l==I_n+40)||(I_k==I_m-40&&I_l==I_n-40))
  {
    outtextxy(I_k-20,I_l-20,&C_cap);
  }
  else
    fn_player2();
}
void fn_wQueen()
{
  if((I_k==I_m)&&(I_l>=I_n+40&&I_l<=I_n+280))
  {
     I_i=I_m;
     I_j=I_n+40;
     while(I_j<I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_j+=40;
     }
  }
  else if((I_k==I_m)&&(I_l<=I_n-40&&I_l>=I_n-280))
  {
     I_i=I_m;
     I_j=I_n-40;
     while(I_j>I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_j-=40;
     }
  }
  else if((I_k>=I_m+40&&I_k<=I_m+280)&&(I_l==I_n))
  {
     I_i=I_m+40;
     I_j=I_n;
     while(I_i<I_k)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_i+=40;
     }
  }
  else if((I_k<=I_m-40||I_k>=I_m-280)&&(I_l==I_n))
  {
     I_i=I_m-40;
     I_j=I_n;
     while(I_i>I_k)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_i-=40;
     }
  }
  else if((I_k==I_m-40&&I_l==I_n+40)||(I_k==I_m-80&&I_l==I_n+80)||(I_k==I_m-120&&I_l==I_n+120)||(I_k==I_m-160&&I_l==I_n+160)||(I_k==I_m-200&&I_l==I_n+200)||(I_k==I_m-240&&I_l==I_n+240)||(I_k==I_m-280&&I_l==I_n+280))
  {
     I_i=I_m-40;
     I_j=I_n+40;
     while(I_i>I_k&&I_j<I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_i-=40;
       I_j+=40;
     }
  }
  else if((I_k==I_m+40&&I_l==I_n-40)||(I_k==I_m+80&&I_l==I_n-80)||(I_k==I_m+120&&I_l==I_n-120)||(I_k==I_m+160&&I_l==I_n-160)||(I_k==I_m+200&&I_l==I_n-200)||(I_k==I_m+240&&I_l==I_n-240)||(I_k==I_m+280&&I_l==I_n-280))
  {
     I_i=I_m+40;
     I_j=I_n-40;
     while(I_i<I_k&&I_j>I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_i+=40;
       I_j-=40;
     }
  }
  else if((I_k==I_m+40&&I_l==I_n+40)||(I_k==I_m+80&&I_l==I_n+80)||(I_k==I_m+120&&I_l==I_n+120)||(I_k==I_m+160&&I_l==I_n+160)||(I_k==I_m+200&&I_l==I_n+200)||(I_k==I_m+240&&I_l==I_n+240)||(I_k==I_m+280&&I_l==I_n+280))
  {
     I_i=I_m+40;
     I_j=I_n+40;
     while(I_i<I_k&&I_j<I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_i+=40;
       I_j+=40;
     }
  }
  else if((I_k==I_m-40&&I_l==I_n-40)||(I_k==I_m-80&&I_l==I_n-80)||(I_k==I_m-120&&I_l==I_n-120)||(I_k==I_m-160&&I_l==I_n-160)||(I_k==I_m-200&&I_l==I_n-200)||(I_k==I_m-240&&I_l==I_n-240)||(I_k==I_m-280&&I_l==I_n-280))
  {
     I_i=I_m-40;
     I_j=I_n-40;
     while(I_i>I_k&&I_j>I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player1();
       }
       I_i-=40;
       I_j-=40;
     }
  }
  else
  {
     fn_wrongmove();
     fn_player1();
  }
  if(C_p1[I_i/10][I_j/10]==NULL)
  {
     outtextxy(I_k-20,I_l-20,&C_cap);
     fn_wqCheck();
  }
  else
  {
     fn_wrongmove();
     fn_player1();
  }
}
void fn_bQueen()
{
  if((I_k==I_m)&&(I_l>=I_n+40&&I_l<=I_n+280))
  {
     I_i=I_m;
     I_j=I_n+40;
     while(I_j<I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_j+=40;
     }
  }
  else if((I_k==I_m)&&(I_l<=I_n-40&&I_l>=I_n-280))
  {
     I_i=I_m;
     I_j=I_n-40;
     while(I_j>I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_j-=40;
     }
  }
  else if((I_k>=I_m+40&&I_k<=I_m+280)&&(I_l==I_n))
  {
     I_i=I_m+40;
     I_j=I_n;
     while(I_i<I_k)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_i+=40;
     }
  }
  else if((I_k<=I_m-40||I_k>=I_m-280)&&(I_l==I_n))
  {
     I_i=I_m-40;
     I_j=I_n;
     while(I_i>I_k)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_i-=40;
     }
  }
  else if((I_k==I_m-40&&I_l==I_n+40)||(I_k==I_m-80&&I_l==I_n+80)||(I_k==I_m-120&&I_l==I_n+120)||(I_k==I_m-160&&I_l==I_n+160)||(I_k==I_m-200&&I_l==I_n+200)||(I_k==I_m-240&&I_l==I_n+240)||(I_k==I_m-280&&I_l==I_n+280))
  {
     I_i=I_m-40;
     I_j=I_n+40;
     while(I_i>I_k&&I_j<I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_i-=40;
       I_j+=40;
     }
  }
  else if((I_k==I_m+40&&I_l==I_n-40)||(I_k==I_m+80&&I_l==I_n-80)||(I_k==I_m+120&&I_l==I_n-120)||(I_k==I_m+160&&I_l==I_n-160)||(I_k==I_m+200&&I_l==I_n-200)||(I_k==I_m+240&&I_l==I_n-240)||(I_k==I_m+280&&I_l==I_n-280))
  {
     I_i=I_m+40;
     I_j=I_n-40;
     while(I_i<I_k&&I_j>I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_i+=40;
       I_j-=40;
     }
  }
  else if((I_k==I_m+40&&I_l==I_n+40)||(I_k==I_m+80&&I_l==I_n+80)||(I_k==I_m+120&&I_l==I_n+120)||(I_k==I_m+160&&I_l==I_n+160)||(I_k==I_m+200&&I_l==I_n+200)||(I_k==I_m+240&&I_l==I_n+240)||(I_k==I_m+280&&I_l==I_n+280))
  {
     I_i=I_m+40;
     I_j=I_n+40;
     while(I_i<I_k&&I_j<I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_i+=40;
       I_j+=40;
     }
  }
  else if((I_k==I_m-40&&I_l==I_n-40)||(I_k==I_m-80&&I_l==I_n-80)||(I_k==I_m-120&&I_l==I_n-120)||(I_k==I_m-160&&I_l==I_n-160)||(I_k==I_m-200&&I_l==I_n-200)||(I_k==I_m-240&&I_l==I_n-240)||(I_k==I_m-280&&I_l==I_n-280))
  {
     I_i=I_m-40;
     I_j=I_n-40;
     while(I_i>I_k&&I_j>I_l)
     {
       if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
       {
	  fn_wrongmove();
	  fn_player2();
       }
       I_i-=40;
       I_j-=40;
     }
  }
  else
  {
     fn_wrongmove();
     fn_player2();
  }
  if(C_p2[I_i/10][I_j/10]==NULL)
  {
     outtextxy(I_k-20,I_l-20,&C_cap);
     fn_bqCheck();
  }
  else
  {
     fn_wrongmove();
     fn_player2();
  }
}
void fn_wrCheck()
{
  I_i=I_k;
  I_j=I_l+40;
  while(I_j<=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p2[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP1();
      }
      break;
    }
    I_j+=40;
  }
  I_i=I_k;
  I_j=I_l-40;
  while(I_j>=0)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p2[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP1();
      }
      break;
    }
    I_j-=40;
  }
  I_i=I_k+40;
  I_j=I_l;
  while(I_i<=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p2[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP1();
      }
      break;
    }
    I_i+=40;
  }
  I_i=I_k-40;
  I_j=I_l;
  while(I_i>=0)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p2[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP1();
      }
      break;
    }
    I_i-=40;
  }
}
void fn_brCheck()
{
  I_i=I_k;
  I_j=I_l+40;
  while(I_j<=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p1[I_i/10][I_j/10]=='k')
      {
	fn_disCheckP2();
      }
      break;
    }
    I_j+=40;
  }
  I_i=I_k;
  I_j=I_l-40;
  while(I_j>=0)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p1[I_i/10][I_j/10]=='k')
      {
	fn_disCheckP2();
      }
      break;
    }
    I_j-=40;
  }
  I_i=I_k+40;
  I_j=I_l;
  while(I_i<=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p1[I_i/10][I_j/10]=='k')
      {
	fn_disCheckP2();
      }
      break;
    }
    I_i+=40;
  }
  I_i=I_k-40;
  I_j=I_l;
  while(I_i>=0)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
    if(C_p1[I_i/10][I_j/10]=='k')
      {
	fn_disCheckP2();
      }
      break;
    }
    I_i-=40;
  }
}
void fn_wbCheck()
{
  I_i=I_k-40;
  I_j=I_l+40;
  while(I_i>=0&&I_j<=320)
  {
     if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
     {
       if(C_p2[I_i/10][I_j/10]=='k')
       {
	  fn_disCheckP1();
       }
       break;
     }
     I_i-=40;
     I_j+=40;
  }
  I_i=I_k+40;
  I_j=I_l-40;
  while(I_i<=320&&I_j>=0)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p2[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP1();
      }
      break;
    }
    I_i+=40;
    I_j-=40;
  }
  I_i=I_k+40;
  I_j=I_l+40;
  while(I_i<=320&&I_j<=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p2[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP1();
      }
      break;
    }
    I_i+=40;
    I_j+=40;
  }
  I_i=I_k-40;
  I_j=I_l-40;
  while(I_i>=320&&I_j>=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p2[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP1();
      }
      break;
    }
    I_i-=40;
    I_j-=40;
  }
}
void fn_bbCheck()
{
  I_i=I_k-40;
  I_j=I_l+40;
  while(I_i>=0&&I_j<=320)
  {
     if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
     {
       if(C_p1[I_i/10][I_j/10]=='k')
       {
	  fn_disCheckP2();
       }
       break;
     }
     I_i-=40;
     I_j+=40;
  }
  I_i=I_k+40;
  I_j=I_l-40;
  while(I_i<=320&&I_j>=0)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p1[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP2();
      }
      break;
    }
    I_i+=40;
    I_j-=40;
  }
  I_i=I_k+40;
  I_j=I_l+40;
  while(I_i<=320&&I_j<=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p1[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP2();
      }
      break;
    }
    I_i+=40;
    I_j+=40;
  }
  I_i=I_k-40;
  I_j=I_l-40;
  while(I_i>=320&&I_j>=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p1[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP2();
      }
      break;
    }
    I_i-=40;
    I_j-=40;
  }
}
void fn_wqCheck()
{
  I_i=I_k;
  I_j=I_l+40;
  while(I_j<=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p2[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP1();
      }
      break;
    }
    I_j+=40;
  }
  I_i=I_k;
  I_j=I_l-40;
  while(I_j>=0)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p2[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP1();
      }
      break;
    }
    I_j-=40;
  }
  I_i=I_k+40;
  I_j=I_l;
  while(I_i<=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p2[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP1();
      }
      break;
    }
    I_i+=40;
  }
  I_i=I_k-40;
  I_j=I_l;
  while(I_i>=0)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p2[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP1();
      }
      break;
    }
    I_i-=40;
  }
  I_i=I_k-40;
  I_j=I_l+40;
  while(I_i>=0&&I_j<=320)
  {
     if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
     {
       if(C_p2[I_i/10][I_j/10]=='k')
       {
	  fn_disCheckP1();
       }
       break;
     }
     I_i-=40;
     I_j+=40;
  }
  I_i=I_k+40;
  I_j=I_l-40;
  while(I_i<=320&&I_j>=0)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p2[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP1();
      }
      break;
    }
    I_i+=40;
    I_j-=40;
  }
  I_i=I_k+40;
  I_j=I_l+40;
  while(I_i<=320&&I_j<=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p2[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP1();
      }
      break;
    }
    I_i+=40;
    I_j+=40;
  }
  I_i=I_k-40;
  I_j=I_l-40;
  while(I_i>=320&&I_j>=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p2[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP1();
      }
      break;
    }
    I_i-=40;
    I_j-=40;
  }
}
void fn_bqCheck()
{
  I_i=I_k;
  I_j=I_l+40;
  while(I_j<=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p1[I_i/10][I_j/10]=='k')
      {
	fn_disCheckP2();
      }
      break;
    }
    I_j+=40;
  }
  I_i=I_k;
  I_j=I_l-40;
  while(I_j>=0)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p1[I_i/10][I_j/10]=='k')
      {
	fn_disCheckP2();
      }
      break;
    }
    I_j-=40;
  }
  I_i=I_k+40;
  I_j=I_l;
  while(I_i<=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p1[I_i/10][I_j/10]=='k')
      {
	fn_disCheckP2();
      }
      break;
    }
    I_i+=40;
  }
  I_i=I_k-40;
  I_j=I_l;
  while(I_i>=0)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
    if(C_p1[I_i/10][I_j/10]=='k')
      {
	fn_disCheckP2();
      }
      break;
    }
    I_i-=40;
  }
  I_i=I_k-40;
  I_j=I_l+40;
  while(I_i>=0&&I_j<=320)
  {
     if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
     {
       if(C_p1[I_i/10][I_j/10]=='k')
       {
	  fn_disCheckP2();
       }
       break;
     }
     I_i-=40;
     I_j+=40;
  }
  I_i=I_k+40;
  I_j=I_l-40;
  while(I_i<=320&&I_j>=0)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p1[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP2();
      }
      break;
    }
    I_i+=40;
    I_j-=40;
  }
  I_i=I_k+40;
  I_j=I_l+40;
  while(I_i<=320&&I_j<=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p1[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP2();
      }
      break;
    }
    I_i+=40;
    I_j+=40;
  }
  I_i=I_k-40;
  I_j=I_l-40;
  while(I_i>=320&&I_j>=320)
  {
    if((C_p1[I_i/10][I_j/10]!=NULL)||(C_p2[I_i/10][I_j/10]!=NULL))
    {
      if(C_p1[I_i/10][I_j/10]=='k')
      {
	 fn_disCheckP2();
      }
      break;
    }
    I_i-=40;
    I_j-=40;
  }
}
void fn_wknCheck()
{
  if(C_p2[(I_k/10)-4][(I_l/10)+8]=='k'||C_p2[(I_k/10)+4][(I_l/10)+8]=='k'||C_p2[(I_k/10)+8][(I_l/10)+4]=='k'||C_p2[(I_k/10)-8][(I_l/10)+4]=='k')
  {
    fn_disCheckP1();
  }
  else if(C_p2[(I_k/10)-4][(I_l/10)-8]=='k'||C_p2[(I_k/10)+4][(I_l/10)-8]=='k'||C_p2[(I_k/10)+8][(I_l/10)-4]=='k'||C_p2[(I_k/10)-8][(I_l/10)-4]=='k')
  {
    fn_disCheckP1();
  }
}
void fn_bknCheck()
{
  if(C_p1[(I_k/10)-4][(I_l/10)+8]=='k'||C_p1[(I_k/10)+4][(I_l/10)+8]=='k'||C_p1[(I_k/10)+8][(I_l/10)+4]=='k'||C_p1[(I_k/10)-8][(I_l/10)+4]=='k')
  {
    fn_disCheckP2();
  }
  else if(C_p1[(I_k/10)-4][(I_l/10)-8]=='k'||C_p1[(I_k/10)+4][(I_l/10)-8]=='k'||C_p1[(I_k/10)+8][(I_l/10)-4]=='k'||C_p1[(I_k/10)-8][(I_l/10)-4]=='k')
  {
    fn_disCheckP2();
  }
}
void fn_disCheckP1()
{
  sound(100);
  setcolor(RED);
  outtextxy(130,340,"Check for Player1");
  delay(200);
  nosound();
  setfillstyle(SOLID_FILL,BLACK);
  delay(1200);
  bar(130,340,300,360);
}
void fn_disCheckP2()
{
  sound(100);
  setcolor(RED);
  outtextxy(130,340,"Check for Player2");
  delay(200);
  nosound();
  setfillstyle(SOLID_FILL,BLACK);
  delay(1200);
  bar(130,340,300,360);
}
void fn_wrongmove()
{
  sound(100);
  setcolor(RED);
  outtextxy(130,340,"wrong move");
  delay(200);
  nosound();
  setfillstyle(SOLID_FILL,BLACK);
  delay(1200);
  bar(130,340,210,360);
}
void fn_coinCutp1(int *a,int *b,int *c,int *d)
{
  int C_cut;
  static int I_z=360;
  if((*a==0&&*d==40)||(*a==80&&*d==40)||(*a==160&&*d==40)||(*a==240&&*d==40)||(*a==320&&*d==40)||(*a==40&&*d==80)||(*a==120&&*d==80)||(*a==200&&*d==80)||(*a==280&&*d==80)||(*a==0&&*d==120)||(*a==80&&*d==120)||(*a==160&&*d==120)||(*a==240&&*d==120)||(*a==320&&*d==120)||(*a==40&&*d==160)||(*a==120&&*d==160)||(*a==200&&*d==160)||(*a==280&&*d==160)||(*a==0&&*d==200)||(*a==80&&*d==200)||(*a==160&&*d==200)||(*a==240&&*d==200)||(*a==320&&*d==200)||(*a==40&&*d==240)||(*a==120&&*d==240)||(*a==200&&*d==240)||(*a==280&&*d==240)||(*a==0&&*d==280)||(*a==80&&*d==280)||(*a==160&&*d==280)||(*a==240&&*d==280)||(*a==320&&*d==280)||(*a==40&&*d==320)||(*a==120&&*d==320)||(*a==200&&*d==320)||(*a==280&&*d==320))
  {
    setfillstyle(SOLID_FILL,WHITE);
    bar(*a,*b,*c,*d);
  }
  else
  {
    setfillstyle(SOLID_FILL,BLACK);
    bar(*a,*b,*c,*d);
  }
  C_cut=C_p2[*c/10][*d/10];
  setcolor(BLUE);
  outtextxy(I_z,260,&C_cut);
  setcolor(GREEN);
  I_z+=20;
}
void fn_coinCutp2(int *a,int *b,int *c,int *d)
{
  int C_cut;
  static int I_z=360;
  if((*a==0&&*d==40)||(*a==80&&*d==40)||(*a==160&&*d==40)||(*a==240&&*d==40)||(*a==320&&*d==40)||(*a==40&&*d==80)||(*a==120&&*d==80)||(*a==200&&*d==80)||(*a==280&&*d==80)||(*a==0&&*d==120)||(*a==80&&*d==120)||(*a==160&&*d==120)||(*a==240&&*d==120)||(*a==320&&*d==120)||(*a==40&&*d==160)||(*a==120&&*d==160)||(*a==200&&*d==160)||(*a==280&&*d==160)||(*a==0&&*d==200)||(*a==80&&*d==200)||(*a==160&&*d==200)||(*a==240&&*d==200)||(*a==320&&*d==200)||(*a==40&&*d==240)||(*a==120&&*d==240)||(*a==200&&*d==240)||(*a==280&&*d==240)||(*a==0&&*d==280)||(*a==80&&*d==280)||(*a==160&&*d==280)||(*a==240&&*d==280)||(*a==320&&*d==280)||(*a==40&&*d==320)||(*a==120&&*d==320)||(*a==200&&*d==320)||(*a==280&&*d==320))
  {
    setfillstyle(SOLID_FILL,WHITE);
    bar(*a,*b,*c,*d);
  }
  else
  {
    setfillstyle(SOLID_FILL,BLACK);
    bar(*a,*b,*c,*d);
  }
  C_cut=C_p1[*c/10][*d/10];
  setcolor(GREEN);
  outtextxy(I_z,60,&C_cut);
  setcolor(BLUE);
  I_z+=20;
}
