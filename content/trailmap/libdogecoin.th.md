+++
title = "Project: Libdogecoin"
date = "2021-12-10"
type = "about"
[ author ]
name = "Dogecoin Foundation"
+++

<section class="presentation">
<div class="left">

<div class="title">


 ## <img width="60px" style='display: inline;' src="/marker.png"/>Project: Libdogecoin 

<div class="underline"></div>
</div>

<div class="description">
 
* [เส้นทางของ Dogecoin : บทนำ](/th/trailmap/prologue/) 
* [โครงการ: การแปลงโฉมเว็บไซต์ Dogecoin.com และ สารานุกรมน้องหมา Dogepedia](/th/trailmap/website/)
* [**โครงการ: Libdogecoin**](/th/trailmap/libdogecoin/)
* [โครงการ: มาตรฐาน Dogecoin - Dogecoin Standard](/th/trailmap/standard/)
* [โครงการ: กระเป๋าเงินกิกะ GigaWallet](/th/trailmap/gigawallet/)
* โครงการ: Dogecoin Keyring (App / SDK)
* โครงการ: RadioDoge (Starlink + Radio nodes for remote locations)
* การนำเสนอโครงการ: Community Staking (Proof of Stake)
* การร่วมมือ: Point of Sale (L2 app) 
</div>

</div>

<div class="right">
<img class="dogegoin-light" src="/logo-libdogecoin.jpg" alt="Dogecoin logo">
<img class="dogegoin-dark" src="/logo-libdogecoin.jpg" alt="Dogecoin logo">
</div>


</section>

<section class='board'>

## "Libdogecoin" คือ clean C ไลบรารี่ของ Dogecoin บล็อคเชน

"Libdogecoin" จะเป็นข้อกำหนดมาตรฐานของการนำไปใช้งานที่สมบูรณ์ ในรูปแบบของ C ไลบรารี่
ที่จะช่วยให้ใครก็ตามสามารถสร้างผลิตภัณฑ์ Dogecoin ได้โดยไม่ต้องกังวลกับข้อกำหนดที่ลึกลงไปใน
การทำงานของบล็อคเชน 

สิ่งสำคัญคือ "Libdogecoin" จะเป็นไลบรารี่เท่านั้นไม่ได้เป็นสิ่งอำนวยความสะดวกให้กับโหนด
มันเป็นความตั้งใจที่จะเชื่อมต่อสิ่งเล็กๆให้เป็นเครื่องจักรที่สามารถทำงานในระดับบน ผ่านเครือข่าย
ไลบรารี่ของภาษาโฮสต์

** โหนด (Node) คือคอมพิวเตอร์ที่เชื่อมต่อกับเครือข่ายสกุลเงินดิจิทัล
โดยจะรองรับเครือข่ายผ่านการตรวจสอบและส่งต่อธุรกรรม

During the process of extracting the fundamentals from the Dogecoin Core
Wallet (reference implementation) we aim to document 'how Dogecoin works' 
as a suite of tests and documents we are calling the [Dogecoin Standard](/th/trailmap/standard).
By doing this we will be able to verify that the Libdogecoin implementation
of Dogecoin's internals is accurate to the OG wallet, and thus provide 
a mechanism for any future Dogecoin implementations to verify compliance
with the Dogecoin Network.

ในชั้นตอนการดึงเอาพื้นฐานมาจาก "Dogrcoin Core Wallet" (กระเป๋าหลัก) เราตั้งเป้าหมายที่จะ
จัดทำข้อมูลในเรื่องการทำงานของ Dogecoin ในรูปแบบชุดการทดสอบและเอกสารที่เราเรียกว่า
มาตรฐาน Dogecoin (Dogecoin Standard) การทำแบบนี้ทำให้เราสามารถตรวจสอบว่าการนำไปใช้
ของ "Libdogecoin" ภายในนั้นเข้ากันได้กับกระเป๋าเงินดั้งเดิม และยังจัดสรรกลไกสำหรับการนำ 
Dogecoin ไปใช้ในอนาคตว่าสอดคล้องกับโครงข่าย Dogecoin


## ทำไม? ,แล้วมันจะช่วยอะไรกับ Dogecoin เหรอ?

สิ่งสำคัญก็คือการได้รับการยอมรับนำเอาไปใช้ และการนำเอาไปใช้ได้นั้นย่อมต้องมาจากการบูรณาการ
ตอนนี้ Dogecoin core wallet อันเก่าที่อาจจะเหมาะกับการใช้งานในอดีตนั้นกีดขวางและทำให้การ
พัฒนาช้าลงมันคงดีกว่าถ้าจะถ้าจะทำให้ใช้งานได้มากขึ้น 


เราเชื่อว่าเราจะเพิ่มความสามารถของชุมชนในการสร้างสรรค์สิ่งใหม่ๆ ได้ด้วยการนำฟังก์ชันการทำงาน
หลักจาก Dogecoin และด้วยการทำให้สามารถเข้าถึงได้ในรูปแบบของ C ไลบรารี่ ที่ไม่ซับซ้อนซึ่งมีการ
เก็บเข้ารวมกันเป็นภาษาโปรแกรมต่างๆ 

* อยากสร้าง Dogecoin Wallet ใหม่เป็นภาษา Python หรือ Ruby หรือ Node.js ใช่ไหม - ลงมือได้เลย

* อยากสร้าง Dogecoin Node ให้เล็กลงเพื่อวัตถุประสงค์เฉพาะ (เช่น GigaWallet) ใช่ไหม - ได้แน่นอน

* อยากสร้าง Shell Utility เพื่อจัดการกับ HD Dogecoin keypairs เป็นภาษา Golang ใช่ไหม - เอาให้สุดไปเลย


เรากำลังตั้งเป้าที่จะทำให้ระบบนิเวศของ Dogecoin นั้นดียิ่งขึ้นในขณะที่เรา:

*กระจายการพึ่งพา Core Wallet ให้เป็นบล็อกเชน Dogecoin ที่มีคำจำกัดความเดียว 

* เพิ่มตัวเลือกสำหรับการใช้งาน Wallet และ Node ตามมาตรฐานที่จะได้รับการพัฒนา

* เพิ่มตัวเลือกการบูรณาการเพื่อปรับปรุงการนำ Dogecoin ไปใช้โดยแพลตฟอร์ม

* ปรับปรุงกระบวนการเข้าร่วมเครือข่ายของ Dogecoin เพื่อให้มีคนใช้ Dogecoin Node มากขึ้น


<img class='center' src="/libdogecoin-purpose.png">

เป้าหมายต่างๆ นี้สำเร็จลงไปได้ส่วนใหญ่ด้วยการรวบรวมชุดคำสั่งให้เป็นคลังโปรแกรมของ Dogecoin 
และด้วยการตรวจสอบตามมาตรฐานของ Dogecoin ซึ่งจะช่วยให้ชุมชนมีความมั่นใจในการใช้งานที่หลาก
หลายของ Dogecoin Nodes และ Wallets

"Libdogecoin" ถือเป็นส่วนสำคัญที่จะทำให้สิ่งนี้เกิดขึ้นตามแผนของมูลนิธินั่งเอง


</section>
