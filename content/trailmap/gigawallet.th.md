+++
title = "Project: GigaWallet" 
date = "2021-12-10"
type = "about"
[ author ]
name = "Dogecoin Foundation"
+++

<section class="presentation">
<div class="left">

<div class="title">


 ## <img width="60px" style='display: inline;' src="/marker.png"/>Project: GigaWallet 

<div class="underline"></div>
</div>

<div class="description">
 
* [เส้นทางของ Dogecoin : บทนำ](/th/trailmap/prologue/) 
* [โครงการ: การแปลงโฉมเว็บไซต์ Dogecoin.com และ สารานุกรมน้องหมา Dogepedia](/th/trailmap/website/)
* [โครงการ: Libdogecoin](/th/trailmap/libdogecoin/)
* [โครงการ: มาตรฐาน Dogecoin - Dogecoin Standard](/th/trailmap/standard/)
* [**โครงการ: กระเป๋าเงินกิกะ GigaWallet**](/th/trailmap/gigawallet/)
* โครงการ: Dogecoin Keyring (App / SDK)
* โครงการ: RadioDoge (Starlink + Radio nodes for remote locations)
* การนำเสนอโครงการ: Community Staking (Proof of Stake)
* การร่วมมือ: Point of Sale (L2 app) 
</div>

</div>

<div class="right">
<img class="dogegoin-light" src="/logo-gigawallet.jpg" alt="Dogecoin logo">
<img class="dogegoin-dark" src="/logo-gigawallet.jpg" alt="Dogecoin logo">
</div>


</section>

<section class='board'>

## "GIGAWALLET" เป็นการบริการที่จะช่วยบูรณาการการชำระเงินด้วย Dogecoin บนแพลตฟอร์มธุรกิจของคุณ

Aเหมือนกับที่เราได้พูดไว้ในบทนำข้างต้น เราเชื่อว่าการที่สิ่งใดจะมีประโยชน์ได้นั้นต้องเกิดขึ้นหลังจากที่มีคนนำไปใช้ได้
และในทางกลับกันถ้าเราอยากให้มีการนำไปใช้กันอย่างแพร่หลายเราย่อมต้องสร้างสิ่งนั้นให้มีประโยชน์
ซึ่งในตอนนี้การนำไปใช้นั้นค่อนข้างยากและช้า หลายๆ แพล็ตฟอร์มจึงยังไม่สามารถนำ Dogecoin ไปใช้ได้

ความคิดริเริ่มหลาย ๆ อย่างในเส้นทาง Trailmap นี้มุ่งเน้นไปที่การลดเวลาที่ใช้ในการพัฒนาและจัดการเส้นทางให้ราบรื่น
สำหรับนักพัฒนาที่ต้องการบูรณาการ Dogecoin เข้ากับแพลตฟอร์มของตน

อุปสรรคสำคัญประการหนึ่งในการเดินทางครั้งนี้คือการขาดบริการให้คำปรึกษาในระบบหลังบ้านที่ครบเครื่องที่ทุกๆ 
แพลตฟอร์ม ศูนย์ซื้อขาย หรือผู้ค้าปลีกสามารถใช้ต่อไปบนโครงสร้างพื้นฐานของตนเองซึ่งให้แนวทางแบบ Non-custodial
ที่ทันสมัยในการประมวลผลธุรกรรมของ Dogecoin 

โครงการ GigaWallet เป็นโครงการแบบ Open-source ที่มีเป้าหมายเพื่อเติมเต็มช่องว่างและเป็นทางออก
ในการติดตั้ง Node/API ที่สามารถติดตั้งได้ภายในไม่กี่วินาที และยินยอมให้นักพัฒนาเพิ่มธุรกรรม Dogecoin
ลงในแพลตฟอร์มของพวกเขาได้อย่างง่ายดายเหมือนกับที่ทำกับผู้ให้บริการชำระเงินที่ได้มาตรฐานรายอื่นๆ

GigaWallet ตั้งเป้าที่จะจัดหา API ไว้สองระดับ ระดับแรกเพื่อประมวลผลและตรวจสอบธุรกรรม Dogecoin
แบบดั้งเดิมด้วย Event-Architecture ทันสมัยที่พร้อมจะเชื่อมต่อกับคิวข้อความและ APIs ที่ทำงานบนเว็บไซต์
ระดับที่สองจะเป็น APIs เพื่อบูรณาการเข้ากับ Dogecoin Keyring App & SDK ที่เสนอมา สิ่งนี้เป็นโซลูชั่น
ซอฟต์แวร์แบบ (ติดต่อสื่อสารผ่านโทรศัพท์มือถือ) ที่ยินยอมให้แพลตฟอร์มที่ใช้ GigaWallet เรียกค่าธรรมเนียม
โดยตรงจากแอปพลิเคชั่นของพวกเขาไปยัง Dogecoin Keyring App เพื่อขออนุมัติจากผู้ใช้ เรื่องนี้เป็นเรื่อง
สำคัญเพราะจะทำให้สิทธิ์ผู้ถือครองกุญแจกลับมาอยู่ในมือของผู้ใช้โดยที่ไม่ได้ลดความสามารถของแพลตฟอร์มใน
การทำธุรกรรม Dogecoin

เราเชื่อว่าการจัดหาโซลูชั่นซอฟต์แวร์ทั้งสองระดับให้โครงการแบบ Open-source ระบบหลังบ้าน
และรวมถึงอุปกรณ์ Mobile SDK แบบพร้อมบูรณาการสำหรับการชำระเงินให้ Dogecoin จะช่วยเร่งให้ผู้ค้าปลีก
แพลตฟอร์มโซเชียลมีเดีย ผู้พัฒนาเกม และผู้คนอีกมากมายเข้าใจ Dogecoin ได้รวดเร็วยิ่งขึ้น


</section>
