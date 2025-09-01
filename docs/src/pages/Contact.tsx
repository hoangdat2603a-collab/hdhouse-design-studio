import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const contactInfo = [
    { icon: <MapPin className="h-6 w-6" />, title: "Địa chỉ", content: "Thạnh Lỗi – Nội Bài – Hà Nội" },
    { icon: <Phone className="h-6 w-6" />, title: "Điện thoại", content: "0969 620 037" },
    { icon: <Mail className="h-6 w-6" />, title: "Email", content: "hdhousedesign@gmail.com" },
    { icon: <Clock className="h-6 w-6" />, title: "Giờ làm việc", content: "T2-T6: 8:00-18:00\nT7-CN: 8:00-17:00" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast({ title: "Lỗi", description: "Vui lòng điền đầy đủ thông tin.", variant: "destructive" });
      return;
    }
    toast({ title: "Gửi thành công!", description: "Chúng tôi sẽ liên hệ với bạn sớm nhất." });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-to-b from-hd-blue/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-primary">Liên hệ HD HOUSE</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Liên hệ với <span className="text-primary">chúng tôi</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sẵn sàng tư vấn miễn phí và đồng hành cùng bạn tạo nên không gian sống hoàn hảo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">{info.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Gửi yêu cầu tư vấn</h2>
              <p className="text-muted-foreground mb-8">Điền thông tin, chúng tôi sẽ liên hệ trong 24h.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" /> Họ và tên *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> Số điện thoại *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Nhập số điện thoại"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" /> Nội dung tin nhắn *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Mô tả chi tiết nhu cầu của bạn..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Gửi yêu cầu tư vấn
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Vị trí của chúng tôi</h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.98500725146!2d105.8066937!3d21.0281269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="HD HOUSE Location"
                ></iframe>
              </div>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Liên hệ nhanh</h3>
                <div className="space-y-4">
                  <a href="tel:0969620037" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="p-2 bg-green-100 rounded-full text-green-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Gọi ngay</div>
                      <div className="text-sm text-muted-foreground">0969 620 037</div>
                    </div>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;