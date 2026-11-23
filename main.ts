import{mkdirSync,readdirSync,readFileSync,writeFileSync}from'node:fs';
import{join}from'node:path';
const S={1:[0,1],2:[0,1],3:[1,0],4:[1,2],5:[2,2],6:[2,3],7:[3,3],23:[1,1],27:[1,1],49:[1,0],50:[1,0],64:[1,1],65:[2,0],80:[1,0],81:[1,0],82:[0,1],83:[1,0]};
function run(p,q){
 const D=[],C=[],M=new Int32Array(256),o=[];
 let pc=0,ip=0,s=0;
 const t=c=>({o,c});
 for(;;){
  if(s===1e6)return t(10);
  if(pc<0||pc>=p.length)return t(9);
  const b=p[pc];
  if(!(b<8||(b>15&&b<35)||(b>47&&b<53)||(b>63&&b<66)||(b>79&&b<84)))return t(5);
  const m=b==1?1:b==2?4:b>47&&b<52?2:0;
  if(pc+m>=p.length)return t(9);
  s++;
  const n=pc+1+m,z=S[b]||(b>15&&b<35?[2,1]:[0,0]);
  if(D.length<z[0])return t(2);
  if(D.length-z[0]+z[1]>256)return t(3);
  pc=n;
  if(!b)return{o,c:0};
  if(b==1){D.push((p[n-1]<<24)>>24);continue}
  if(b==2){D.push(p[n-4]|p[n-3]<<8|p[n-2]<<16|p[n-1]<<24);continue}
  if(b==3){D.pop();continue}
  if(b==4){D.push(D[D.length-1]);continue}
  if(b==5){const x=D[D.length-1];D[D.length-1]=D[D.length-2];D[D.length-2]=x;continue}
  if(b==6){D.push(D[D.length-2]);continue}
  if(b==7){const a=D[D.length-3];D[D.length-3]=D[D.length-2];D[D.length-2]=D[D.length-1];D[D.length-1]=a;continue}
  if(b==23){D[D.length-1]=-D[D.length-1]|0;continue}
  if(b==27){D[D.length-1]=~D[D.length-1];continue}
  if(b>15&&b<35){
   const y=D.pop(),x=D.pop();let r;
   if(b==16)r=x+y;else if(b==17)r=x-y;else if(b==18)r=Math.imul(x,y);
   else if(b==19){if(!y)return t(4);r=(x/y)|0}
   else if(b==20){if(!y)return t(4);r=(x%y)|0}
   else if(b==21){if(!y)return t(4);r=Math.floor((x>>>0)/(y>>>0))}
   else if(b==22){if(!y)return t(4);r=(x>>>0)%(y>>>0)}
   else if(b==24)r=x&y;else if(b==25)r=x|y;else if(b==26)r=x^y;
   else if(b==28)r=x<<y;else if(b==29)r=x>>y;else if(b==30)r=x>>>y;
   else if(b==32)r=x==y?1:0;else if(b==33)r=x<y?1:0;else r=x>>>0<y>>>0?1:0;
   D.push(r|0);continue
  }
  if(b>47&&b<51){
   const r=((p[n-2]|p[n-1]<<8)<<16)>>16;
   if(b==48||(b==49)===(D.pop()==0))pc=n+r;
   continue
  }
  if(b==51){if(C.length==64)return t(7);C.push(n);pc=p[n-2]|p[n-1]<<8;continue}
  if(b==52){if(!C.length)return t(8);pc=C.pop();continue}
  if(b==64){const a=D[D.length-1];if(a<0||a>255)return t(6);D[D.length-1]=M[a];continue}
  if(b==65){const a=D.pop(),v=D.pop();if(a<0||a>255)return t(6);M[a]=v;continue}
  if(b==80){const w=String(D[D.length-1]);if(o.length+w.length>65536)return t(11);D.pop();for(const c of w)o.push(c.charCodeAt(0));continue}
  if(b==81){if(o.length+1>65536)return t(11);o.push(D.pop()&255);continue}
  if(b==82){D.push(ip<q.length?q[ip++]:-1);continue}
  return{o,c:D.pop()&255}
 }
}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const id of readdirSync(I).sort()){
 const r=run(readFileSync(join(I,id,'program.bin')),readFileSync(join(I,id,'input.bin')));
 mkdirSync(join(O,id),{recursive:true});
 writeFileSync(join(O,id,'stdout.bin'),Buffer.from(r.o));
 writeFileSync(join(O,id,'exit.txt'),r.c+'\n')
}
