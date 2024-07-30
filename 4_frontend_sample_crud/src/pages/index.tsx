import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/bg-cafe-1.jpg";
import ajPanwitImage from "../assets/images/aj-panwit.jpg";
import coffeeImage from "../assets/images/coffee-1.jpg";
import pornsekImage from "../assets/images/me.gif";

export default function HomePage() {
  return (
    <Layout>
      <section
        className="h-[500px] w-full text-white bg-orange-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage: `url(${cafeBackgroundImage})`,
        }}
      >
        <h1 className="text-5xl mb-2">ยินดีต้อนรับสู่ IoT Library & Cafe</h1>
        <h2>ร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน</h2>
      </section>

      <section className="container mx-auto py-8">
        <h1>เกี่ยวกับเรา</h1>

        <div className="grid grid-cols-3 gap-4">
          <p className="text-left col-span-2">
            IoT Library & Cafe เป็นร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน
            และเรียนรู้เรื่องใหม่ๆ ที่เกี่ยวกับเทคโนโลยี IoT โดยคาเฟ่ของเรานั้น ก่อตั้งขึ้นโดย
            ผศ.ดร. ปานวิทย์ ธุวะนุติ ซึ่งเป็นอาจารย์ในวิชา Internet of Things และนายกฤตณัฏฐ์
            ศิริพรนพคุณ เป็นผู้ช่วยสอนในหัวข้อ FastAPI และ React ในวิชานี้
          </p>

          <div>
            <img src={ajPanwitImage} alt="Panwit Tuwanut" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <img src={pornsekImage} alt="Pornsek Chuenmee" className="h-full w-full object-cover" />
          </div>
          <p className="text-right col-span-2">
            📚☕ "โย่วๆ wassup bro! ยินดีต้อนรับสู่คาเฟ่ห้องสมุดของเรา hehe! ที่นี่คุณสามารถเพลิดเพลินกับเครื่องดื่มหลากหลายชนิด ไม่ว่าจะเป็นกาแฟหอมๆ 
            ชาเย็นสดชื่น หรือเครื่องดื่มสูตรพิเศษของเรา ที่จะทำให้คุณตื่นตัวและพร้อมลุยในทุกๆ วัน! ในบรรยากาศเงียบสงบและอบอุ่น คุณสามารถหาหนังสือเล่มโปรดหรือค้นพบหนังสือใหม่ๆ 
            ที่น่าสนใจมากมาย ไม่ว่าจะเป็นนิยายสุดฟิน หนังสือการพัฒนาตนเอง หรือหนังสือวิชาการสำหรับการค้นคว้า มาอ่านหนังสือชิลๆ พร้อมกับจิบเครื่องดื่มไปด้วยได้เลย!
            และถ้าคุณมาพร้อมเพื่อนๆ ที่นี่ก็มีมุมสบายๆ สำหรับการนั่งคุยหรือทำงานร่วมกันได้อย่างมีสมาธิ มาร่วมสร้างช่วงเวลาพิเศษและเติมเต็มความรู้ไปกับเราที่คาเฟ่ห้องสมุดแห่งนี้กันเถอะ! 

          </p>
          <p className="text-right col-span-2">
            <h1>นายพรเสก ชื่นมี 65070147</h1> เจ้าของคาเฟ่สุดเฟี้ยว
          </p>
        </div>
      </section>

      <section className="w-full flex justify-center">
        <img src={coffeeImage} alt="Coffee" className="w-full" />
      </section>
    </Layout>
  );
}
