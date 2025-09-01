import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  PaintBucket, 
  Hammer, 
  Package, 
  Key, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <PaintBucket className="h-8 w-8" />,
      title: "Thiết kế nội thất",
      description: "Thiết kế 2D, 3D chuyên nghiệp theo phong cách hiện đại, cổ điển hoặc tối giản phù hợp với nhu cầu khách hàng.",
      features: [
        "Tư vấn phong cách miễn phí",
        "Thiết kế 3D chân thực",
        "Bản vẽ kỹ thuật chi tiết",
        "Danh sách vật liệu đầy đủ"
      ],
      price: "Miễn phí tư vấn",
      popular: false
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Thi công nội thất",
      description: "Thi công chuyên nghiệp với đội ngũ thợ giày cao, sử dụng vật liệu chất lượng và công nghệ hiện đại.",
      features: [
        "Thi công theo tiêu chuẩn",
        "Giám sát chặt chẽ",
        "Tiến độ đúng cam kết",
        "Bảo hành 5 năm"
      ],
      price: "Từ 150,000 VND/m²",
      popular: true
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Cung cấp vật liệu",
      description: "Cung cấp đầy đủ vật liệu nội thất cao cấp từ các thương hiệu uy tín trong và ngoài nước.",
      features: [
        "Gỗ công nghiệp cao cấp",
        "Phụ kiện nhập khẩu",
        "Sơn an toàn, thân thiện",
        "Bảo hành sản phẩm"
      ],
      price: "Giá tốt nhất thị trường",
      popular: false
    },
    {
      icon: <Key className="h-8 w-8" />,
      title: "Gói trọn gói chìa khóa trao tay",
      description: "Dịch vụ hoàn thiện từ A-Z, khách hàng chỉ cần nhận nhà và sử dụng ngay mà không cần lo lắng gì.",
      features: [
        "Thiết kế + Thi công",
        "Cung cấp toàn bộ vật liệu",
        "Giám sát chuyên nghiệp",
        "Bàn giao sạch sẽ"
      ],
      price: "Tiết kiệm 20-30%",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-primary mb-4">
            Dịch vụ của chúng tôi
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dịch vụ thiết kế nội thất
            <span className="text-primary"> chuyên nghiệp</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            HD HOUSE cung cấp đầy đủ các dịch vụ từ thiết kế, thi công đến cung cấp vật liệu, 
            mang đến giải pháp toàn diện cho không gian nội thất của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 relative ${
                service.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Phổ biến nhất
                </Badge>
              )}

              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary w-fit">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="pt-4 border-t border-border">
                  <div className="text-lg font-semibold text-primary mb-4">
                    {service.price}
                  </div>
                  <Button 
                    variant={service.popular ? "default" : "outline"} 
                    className="w-full group"
                  >
                    <span className="mr-2">Tìm hiểu thêm</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Bạn cần tư vấn thiết kế nội thất?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá ưu đãi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white hover:text-primary"
              >
                Đăng ký tư vấn miễn phí
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Gọi ngay: 0969 620 037
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;