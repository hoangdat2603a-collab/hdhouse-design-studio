import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Palette, Hammer, Package, Key } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Thiết kế nội thất",
      description: "Tư vấn và thiết kế nội thất 3D chuyên nghiệp, phù hợp với phong cách và ngân sách.",
      features: ["Thiết kế 3D chân thực", "Tư vấn phong cách", "Bản vẽ kỹ thuật", "Miễn phí tư vấn"],
      price: "Miễn phí tư vấn"
    },
    {
      icon: <Hammer className="h-12 w-12" />,
      title: "Thi công nội thất", 
      description: "Thi công chuyên nghiệp với đội ngũ thợ lành nghề, đảm bảo chất lượng và tiến độ.",
      features: ["Thi công tiêu chuẩn", "Giám sát chất lượng", "Bảo hành 5 năm", "Đúng tiến độ"],
      price: "Từ 150.000 VNĐ/m²"
    },
    {
      icon: <Package className="h-12 w-12" />,
      title: "Cung cấp vật liệu",
      description: "Cung cấp vật liệu nội thất cao cấp từ các thương hiệu uy tín.",
      features: ["Vật liệu cao cấp", "Giá cạnh tranh", "Đa dạng mẫu mã", "Bảo hành chính hãng"],
      price: "Theo yêu cầu"
    },
    {
      icon: <Key className="h-12 w-12" />,
      title: "Trọn gói chìa khóa trao tay",
      description: "Gói dịch vụ toàn diện từ thiết kế, thi công đến hoàn thiện.",
      features: ["Thiết kế + Thi công", "Quản lý dự án", "Bàn giao hoàn thiện", "Hỗ trợ sau bán hàng"],
      price: "Ưu đãi đặc biệt"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-to-b from-hd-blue/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-primary">Dịch vụ HD HOUSE</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Dịch vụ thiết kế nội thất <span className="text-primary">trọn gói</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Từ ý tưởng đến hiện thực, HD HOUSE đồng hành cùng bạn tạo nên không gian sống hoàn hảo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300">
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4">
                  <div className="text-lg font-semibold text-primary mb-4">{service.price}</div>
                  <Button variant="outline" className="w-full">
                    <span className="mr-2">Tư vấn ngay</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;