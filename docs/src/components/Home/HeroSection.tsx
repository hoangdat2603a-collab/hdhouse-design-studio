import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star } from "lucide-react";
import heroImage from "@/assets/hero-interior-1.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="HD HOUSE - Thiết kế nội thất chuyên nghiệp" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-hd-blue-light rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-hd-blue rounded-full animate-ping delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm">
            <Star className="h-4 w-4 text-yellow-400" />
            <span>Công ty thiết kế nội thất uy tín hàng đầu</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">HD HOUSE</span>
              <span className="block text-hd-blue-light">DESIGN</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-hd-blue-light font-medium mb-4">
              Không gian sống – Đẳng cấp thăng hoa
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
              Kiến tạo không gian sống đẳng cấp với dịch vụ thiết kế - thi công nội thật trọn gói chuyên nghiệp
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="font-semibold mb-2">Thiết kế miễn phí</h3>
              <p className="text-sm text-gray-300">Tư vấn và thiết kế 3D không tính phí</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="font-semibold mb-2">Giá từ 150K/m²</h3>
              <p className="text-sm text-gray-300">Chi phí thi công minh bạch, cạnh tranh</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="font-semibold mb-2">Bảo hành 5 năm</h3>
              <p className="text-sm text-gray-300">Cam kết chất lượng lâu dài</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-hd-blue hover:bg-hd-blue-dark text-white px-8 py-4 h-auto group"
            >
              <span className="mr-2">Đăng ký tư vấn miễn phí</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white hover:text-hd-navy px-8 py-4 h-auto"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span>0969 620 037</span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">500+</span>
              <span>Dự án hoàn thành</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">15+</span>
              <span>Năm kinh nghiệm</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">98%</span>
              <span>Khách hàng hài lòng</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;