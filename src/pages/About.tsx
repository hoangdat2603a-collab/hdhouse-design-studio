import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Lightbulb, ArrowRight, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Sáng tạo",
      description: "Không ngừng đổi mới trong thiết kế, tạo ra những không gian sống độc đáo và phù hợp với phong cách riêng của từng gia đình."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Chất lượng",
      description: "Cam kết sử dụng vật liệu cao cấp và thi công theo tiêu chuẩn quốc tế, đảm bảo độ bền và thẩm mỹ cao."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Tận tâm",
      description: "Đặt sự hài lòng của khách hàng lên hàng đầu, luôn lắng nghe và thấu hiểu nhu cầu để mang lại giải pháp tối ưu."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Uy tín",
      description: "Xây dựng thương hiệu dựa trên chất lượng, sự minh bạch trong giá cả và cam kết bảo hành lâu dài."
    }
  ];

  const achievements = [
    { number: "1000+", label: "Dự án hoàn thành" },
    { number: "20+", label: "Năm kinh nghiệm" },
    { number: "99%", label: "Khách hàng hài lòng" },
    { number: "100+", label: "Đối tác tin cậy" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-hd-blue/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-primary">
              Về HD HOUSE
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Câu chuyện thương hiệu 
              <span className="text-primary"> HD HOUSE</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Với slogan <strong>"Không gian sống – Đẳng cấp thăng hoa"</strong>, HD HOUSE tự hào là đơn vị 
              thiết kế và thi công nội thất hàng đầu, mang đến những giải pháp hoàn hảo cho không gian sống hiện đại.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  HD HOUSE - Đơn vị thiết kế nội thất uy tín
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Được thành lập với khát vọng mang đến những không gian sống đẳng cấp, 
                  HD HOUSE đã không ngừng khẳng định vị thế trong lĩnh vực thiết kế và thi công nội thất.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Chúng tôi hiểu rằng ngôi nhà không chỉ là nơi ở, mà còn là nơi thể hiện cá tính, 
                  phong cách sống và là tổ ấm gắn kết các thành viên trong gia đình.
                </p>
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
            </div>

            <div className="space-y-8">
              {/* Mission & Vision */}
              <div className="space-y-6">
                <Card className="p-8 bg-gradient-subtle">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Sứ mệnh</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Kiến tạo những không gian sống đẳng cấp, hiện đại và tiện nghi, 
                        giúp mỗi gia đình có được tổ ấm hoàn hảo với giá cả hợp lý và chất lượng vượt trội.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-subtle">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                      <Eye className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Tầm nhìn</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Trở thành thương hiệu thiết kế nội thất hàng đầu Việt Nam, 
                        được khách hàng tin tưởng và lựa chọn cho mọi dự án từ nhà ở đến thương mại.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-background to-hd-blue/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Những giá trị định hướng mọi hoạt động của HD HOUSE trong hành trình 
              mang đến trải nghiệm hoàn hảo cho khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-elegant transition-all duration-300 group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Tại sao chọn HD HOUSE?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Giá cả hợp lý</h3>
                <p className="text-muted-foreground">
                  Cam kết mang đến chất lượng cao nhất với mức giá phù hợp, 
                  giúp khách hàng tiết kiệm chi phí mà vẫn có được không gian đẹp.
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Chất lượng đảm bảo</h3>
                <p className="text-muted-foreground">
                  Sử dụng vật liệu cao cấp, thi công theo tiêu chuẩn nghiêm ngặt 
                  và có chế độ bảo hành dài hạn cho mọi sản phẩm.
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Uy tín lâu năm</h3>
                <p className="text-muted-foreground">
                  Với hơn 20 năm kinh nghiệm trong ngành, HD HOUSE đã xây dựng 
                  được uy tín vững chắc và sự tin tưởng từ hàng nghìn khách hàng.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Button size="lg" className="group">
                <span className="mr-2">Liên hệ tư vấn miễn phí</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;