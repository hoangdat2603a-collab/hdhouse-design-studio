import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import hdLogo from "@/assets/hd-house-logo.png";

const Footer = () => {
  return (
    <footer className="bg-hd-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src={hdLogo} alt="HD HOUSE" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              HD HOUSE - Công ty thiết kế nội thất chuyên nghiệp với sứ mệnh tạo ra những không gian sống đẹp và tiện nghi cho mọi gia đình Việt.
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white hover:text-hd-navy">
                Liên hệ ngay
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">Giới thiệu</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">Dịch vụ</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors text-sm">Dự án</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors text-sm">Báo giá</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors text-sm">Tin tức</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Dịch vụ</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm">Thiết kế nội thất</li>
              <li className="text-gray-300 text-sm">Thi công nội thất</li>
              <li className="text-gray-300 text-sm">Cung cấp vật liệu</li>
              <li className="text-gray-300 text-sm">Gói trọn gói chìa khóa trao tay</li>
              <li className="text-gray-300 text-sm">Tư vấn miễn phí</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Thông tin liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-hd-blue-light mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Thạnh Lỗi - Nội Bài - Hà Nội</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-hd-blue-light flex-shrink-0" />
                <a href="tel:0969620037" className="text-gray-300 hover:text-white transition-colors text-sm">
                  0969 620 037
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-hd-blue-light flex-shrink-0" />
                <a href="mailto:hdhousedesign@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  hdhousedesign@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-hd-blue-light mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>T2-T6: 8:00 - 18:00</div>
                  <div>T7-CN: 8:00 - 17:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 HD HOUSE. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Chính sách bảo mật
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;