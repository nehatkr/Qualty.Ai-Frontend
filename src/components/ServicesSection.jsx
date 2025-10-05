import { Package, MapPin, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuickInspection from "./QuickInspection";

const featuredServices = [
  {
    icon: <Package size={32} />,
    title: "Sourcing Inspection",
    description:
      "Get your cargo inspected at time of loading or production with comprehensive quality checks and documentation.",
    features: [
      "Commodity quality inspection",
      "Loading & stuffing inspections",
      "Packaging, fumigation & more",
      "Physical & chemical testing",
    ],
  },
  {
    icon: <MapPin size={32} />,
    title: "Destination Inspection",
    description:
      "Your cargo & commodity quality details at destination locations with comprehensive quality validation.",
    features: [
      "Unloading inspections",
      "Physical & chemical testing",
      "Quality validation at destination",
      "Documentation & reporting",
    ],
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-10 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="inline-block bg-white text-black text-2xl font-bold px-4 py-4 rounded-full mb-4">
          Our Services
        </span>
        <h2 className="text-4xl font-bold mb-4">
          Comprehensive Quality{" "}
          <span className="text-white">Inspection Services</span>
        </h2>
        <p className="text-white text-lg max-w-3xl mx-auto">
          We offer a complete suite of inspection services to ensure your cargo
          meets the highest standards across global markets.
        </p>
      </div>

      <div>
        <QuickInspection/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto my-15">
        {featuredServices.map((service, index) => (
          <div
            key={index}
            className="bg-black border border-gray-100 rounded-xl p-6 text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
          >
            <div className="flex items-center mb-4 text-white">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="mb-4 text-gray-50">{service.description}</p>
            <ul className="list-disc list-inside text-gray-50 space-y-1">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/services")}
          className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded transition hover:scale-[1.02]"
        >
          View All Services <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
