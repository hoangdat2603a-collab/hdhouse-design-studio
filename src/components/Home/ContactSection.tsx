import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  User,
  Home
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-primary mb-4">
            Liên hệ với chúng tôi
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sẵn sàng bắt đầu dự án
            <span className="text-primary"> của bạn?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hãy liên hệ với HD HOUSE ngay hôm nay để được tư vấn miễn phí và nhận báo giá tốt nhất 
            cho dự án thiết kế nội thất của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Thông tin liên hệ
              </h3>
              
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-soft transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Hotline</h4>
                      <p className="text-muted-foreground mb-2">Liên hệ ngay để được hỗ trợ</p>
                      <a 
                        href="tel:0969620037" 
                        className="text-primary font-semibold hover:text-primary/80 transition-colors"
                      >
                        0969 620 037
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-soft transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground mb-2">Gửi yêu cầu tư vấn qua email</p>
                      <a 
                        href="mailto:hdhousedesign@gmail.com" 
                        className="text-primary font-semibold hover:text-primary/80 transition-colors"
                      >
                        hdhousedesign@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-soft transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Địa chỉ</h4>
                      <p className="text-muted-foreground mb-2">Showroom & Văn phòng</p>
                      <p className="text-foreground">
                        Thạnh Lỗi - Nội Bài - Hà Nội
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-soft transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Giờ làm việc</h4>
                      <div className="text-foreground space-y-1">
                        <div>Thứ 2 - Thứ 6: 8:00 - 18:00</div>
                        <div>Thứ 7 - CN: 8:00 - 17:00</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Đăng ký tư vấn miễn phí
                </h3>
                <p className="text-muted-foreground">
                  Điền thông tin dưới đây, chúng tôi sẽ liên hệ với bạn trong 24h
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      Họ và tên *
                    </label>
                    <Input placeholder="Nhập họ và tên của bạn" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Số điện thoại *
                    </label>
                    <Input placeholder="Nhập số điện thoại" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </label>
                  <Input placeholder="Nhập địa chỉ email" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <Home className="h-4 w-4 mr-2" />
                    Loại dự án
                  </label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option value="">Chọn loại dự án</option>
                    <option value="nha-pho">Nhà phố</option>
                    <option value="chung-cu">Chung cư</option>
                    <option value="biet-thu">Biệt thự</option>
                    <option value="van-phong">Văn phòng</option>
                    <option value="khac">Khác</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Diện tích (m²)
                    </label>
                    <Input placeholder="Nhập diện tích" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Ngân sách dự kiến
                    </label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option value="">Chọn ngân sách</option>
                      <option value="duoi-100">Dưới 100 triệu</option>
                      <option value="100-300">100 - 300 triệu</option>
                      <option value="300-500">300 - 500 triệu</option>
                      <option value="tren-500">Trên 500 triệu</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Mô tả chi tiết dự án
                  </label>
                  <Textarea 
                    placeholder="Mô tả chi tiết về dự án, yêu cầu đặc biệt, phong cách thiết kế mong muốn..."
                    rows={4}
                  />
                </div>

                <Button className="w-full group" size="lg">
                  <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Gửi yêu cầu tư vấn
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Bằng cách gửi form này, bạn đồng ý với điều khoản sử dụng và chính sách bảo mật của HD HOUSE
                </p>
              </form>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Cần tư vấn gấp? Gọi ngay cho chúng tôi!
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Đội ngũ chuyên viên HD HOUSE sẵn sàng hỗ trợ bạn 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white hover:text-primary"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  0969 620 037
                </Button>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat với chuyên viên
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;