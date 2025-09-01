import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Lightbulb, ArrowRight } from "lucide-react";
import kitchenImage from "@/assets/kitchen-modern.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Sáng tạo",
      description: "Luôn đổi mới trong thiết kế, tạo ra những không gian độc đáo và phù hợp với từng khách hàng"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Chất lượng",
      description: "Cam kết sử dụng vật liệu cao cấp và thi công theo tiêu chuẩn quốc tế"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Tận tâm",
      description: "Đặt sự hài lòng của khách hàng lên hàng đầu trong mọi dự án"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Uy tín",
      description: "Xây dựng thương hiệu dựa trên chất lượng và sự tin tưởng của khách hàng"
    }
  ];

  const achievements = [
    { number: "500+", label: "Dự án hoàn thành" },
    { number: "15+", label: "Năm kinh nghiệm" },
    { number: "98%", label: "Khách hàng hài lòng" },
    { number: "50+", label: "Đối tác tin cậy" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary">
                Về chúng tôi
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                HD HOUSE - Đơn vị thiết kế nội thất 
                <span className="text-primary"> hàng đầu</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Với sứ mệnh <strong>"Kiến tạo không gian sống đẳng cấp"</strong>, HD HOUSE tự hào là đơn vị 
                thiết kế và thi công nội thất chuyên nghiệp với hơn 15 năm kinh nghiệm trong ngành.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Tầm nhìn</h3>
                <p className="text-muted-foreground">
                  Trở thành thương hiệu thiết kế nội thất số 1 Việt Nam, mang đến những không gian sống 
                  hiện đại, tiện nghi và thẩm mỹ cao cho mọi gia đình.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Sứ mệnh</h3>
                <p className="text-muted-foreground">
                  Cung cấp dịch vụ thiết kế và thi công nội thất trọn gói chất lượng cao với giá thành 
                  hợp lý, giúp khách hàng hiện thực hóa ước mơ về tổ ấm hoàn hảo.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{item.number}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            <Button className="group">
              <span className="mr-2">Tìm hiểu thêm</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image & Values */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src={kitchenImage} 
                alt="HD HOUSE - Thiết kế nội thất hiện đại" 
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl"></div>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Giá trị cốt lõi</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <Card key={index} className="p-6 hover:shadow-soft transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">{value.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;