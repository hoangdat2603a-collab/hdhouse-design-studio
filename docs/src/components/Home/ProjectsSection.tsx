import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Home, Building, Building2, Briefcase } from "lucide-react";
import bedroomImage from "@/assets/bedroom-elegant.jpg";
import kitchenImage from "@/assets/kitchen-modern.jpg";
import heroImage from "@/assets/hero-interior-1.jpg";

const ProjectsSection = () => {
  const categories = [
    { name: "Tất cả", count: 24, active: true },
    { name: "Nhà phố", count: 8, active: false },
    { name: "Chung cư", count: 10, active: false },
    { name: "Biệt thự", count: 4, active: false },
    { name: "Văn phòng", count: 2, active: false },
  ];

  const projects = [
    {
      id: 1,
      title: "Căn hộ cao cấp The Manor",
      category: "Chung cư",
      area: "85m²",
      style: "Hiện đại",
      image: heroImage,
      icon: <Building className="h-5 w-5" />,
      description: "Thiết kế nội thất căn hộ chung cư với phong cách hiện đại, tối giản"
    },
    {
      id: 2,
      title: "Nhà phố 3 tầng Hà Đông",
      category: "Nhà phố",
      area: "120m²",
      style: "Scandinavian",
      image: kitchenImage,
      icon: <Home className="h-5 w-5" />,
      description: "Không gian mở, ánh sáng tự nhiên với gam màu trung tính"
    },
    {
      id: 3,
      title: "Biệt thự Vinhomes Ocean Park",
      category: "Biệt thự",
      area: "200m²",
      style: "Luxury Modern",
      image: bedroomImage,
      icon: <Building2 className="h-5 w-5" />,
      description: "Thiết kế sang trọng với chất liệu cao cấp và đồ nội thất bespoke"
    },
    {
      id: 4,
      title: "Văn phòng công ty ABC",
      category: "Văn phòng",
      area: "300m²",
      style: "Corporate Modern",
      image: heroImage,
      icon: <Briefcase className="h-5 w-5" />,
      description: "Không gian làm việc hiện đại, tăng năng suất và sáng tạo"
    },
    {
      id: 5,
      title: "Căn hộ duplex Times City",
      category: "Chung cư",
      area: "150m²",
      style: "Industrial",
      image: kitchenImage,
      icon: <Building className="h-5 w-5" />,
      description: "Phong cách công nghiệp với điểm nhấn gỗ ấm áp"
    },
    {
      id: 6,
      title: "Nhà phố liền kề Nam An Khánh",
      category: "Nhà phố",
      area: "95m²",
      style: "Minimalist",
      image: bedroomImage,
      icon: <Home className="h-5 w-5" />,
      description: "Thiết kế tối giản với công năng tối ưu cho gia đình trẻ"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="text-primary mb-4">
            Dự án tiêu biểu
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thư viện dự án
            <span className="text-primary"> đã hoàn thành</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Khám phá những dự án nội thất tiêu biểu mà HD HOUSE đã thiết kế và thi công, 
            từ căn hộ chung cư đến biệt thự cao cấp.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className="px-6"
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-elegant transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Xem chi tiết
                  </Button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2 text-primary">
                  {project.icon}
                  <span className="text-sm font-medium">{project.category}</span>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Diện tích</div>
                    <div className="font-semibold text-sm">{project.area}</div>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="text-xs text-muted-foreground">Phong cách</div>
                    <div className="font-semibold text-sm">{project.style}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            <span className="mr-2">Xem tất cả dự án</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;