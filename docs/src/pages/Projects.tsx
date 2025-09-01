import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, ArrowRight, Home, Building2, Castle, Briefcase } from "lucide-react";
import bedroomImage from "@/assets/bedroom-elegant.jpg";
import kitchenImage from "@/assets/kitchen-modern.jpg";
import heroImage from "@/assets/hero-interior-1.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "Tất cả", icon: <Home className="h-4 w-4" /> },
    { id: "apartment", name: "Chung cư", icon: <Building2 className="h-4 w-4" /> },
    { id: "house", name: "Nhà phố", icon: <Home className="h-4 w-4" /> },
    { id: "villa", name: "Biệt thự", icon: <Castle className="h-4 w-4" /> },
    { id: "office", name: "Văn phòng", icon: <Briefcase className="h-4 w-4" /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Thiết kế phòng ngủ hiện đại",
      category: "apartment",
      location: "Hà Nội",
      area: "25m²",
      year: "2024",
      image: bedroomImage,
      description: "Phòng ngủ master với thiết kế tối giản, tận dụng tối đa không gian."
    },
    {
      id: 2,
      title: "Bếp gia đình phong cách châu Âu",
      category: "house",
      location: "Hà Nội",
      area: "30m²", 
      year: "2024",
      image: kitchenImage,
      description: "Không gian bếp rộng rãi với đảo bếp trung tâm, tiện nghi hiện đại."
    },
    {
      id: 3,
      title: "Phòng khách sang trọng",
      category: "villa",
      location: "Hà Nội",
      area: "50m²",
      year: "2024", 
      image: heroImage,
      description: "Phòng khách biệt thự với thiết kế sang trọng, nội thất cao cấp."
    }
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-to-b from-hd-blue/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-primary">Dự án HD HOUSE</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Thư viện dự án <span className="text-primary">nội thất</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Khám phá những dự án nội thất ấn tượng mà HD HOUSE đã thực hiện.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="flex items-center gap-2"
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <div>📍 {project.location} • 📐 {project.area}</div>
                    <div className="font-semibold">{project.year}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;