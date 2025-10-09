import { Shield, BarChart3, Zap, TestTube,Package,MapPin, PackageCheck, CheckCircle2 } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewHeader from "./NewHeader";

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
    whyFeatures: [
      "Maintaining quality at time of production",
      "Ensuring proper packaging and documentation",
      "Better control of your cargo from production stage",
      "Ensure transparency & traceability for your cargo",
      "Competitive pricing",
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
    whyFeatures: [
      "Ensure commodity quality after reaching destinations",
      "A validation & proof of your cargo quality before any clause or discounts",
      "Better transparency and visibility",
      "Add value to your cargo with quality proofs",
      "Ensure quality for better negotiations",
      "Competitive pricing",
    ],
  },
];

const additionalServices = [
  {
    icon: <Shield size={32} />,
    title: "Pre-Shipment Inspection (PSI)",
    description:
      "Final quality verification before goods are shipped to ensure they meet all requirements and standards.",
    features: [
      "Final quality checks",
      "Packaging inspection",
      "Quantity verification",
      "Compliance certification",
    ],
  },
  {
    icon: <BarChart3 size={32} />,
    title: "During Production Inspection (DUPRO)",
    description:
      "In-process quality monitoring to catch issues early and maintain consistent quality throughout production.",
    features: [
      "Real-time monitoring",
      "Process verification",
      "Quality control checks",
      "Progress reporting",
    ],
  },
  {
    icon: <Zap size={32} />,
    title: "Container Loading Inspection (CLI)",
    description:
      "Supervision of container loading process to prevent damage and ensure proper handling of goods.",
    features: [
      "Loading supervision",
      "Container condition check",
      "Proper stowage verification",
      "Damage prevention",
    ],
  },
  {
    icon:<TestTube size={32} />,
    title: "On-Site Laboratory Testing / Sampling",
    description:
      "Collects and tests samples to verify specifications, especially for agri-commodities, food, chemicals, and pharmaceuticals.",
    features: [
      "Moisture content analysis",
      "Purity verification",
      "Pesticide residue testing",
      "Technical parameter checks",
    ],
  },
  {
    icon:<PackageCheck size={32} />,
    title: "Post-Shipment Inspection",
    description:
      "Confirms that products match shipping documents and assess condition after arrival at destination.",
    features: [
      "Document verification",
      "Damage assessment",
      "Supplier performance evaluation",
      "Claims documentation",
    ],
  },
  {
    icon: <CheckCircle2 size={32} />,
    title: "Third-Party Inspection",
    description:
      "Independent inspection agencies provide objective evaluation of product quality, compliance, and documentation.",
    features: [
      "Neutral evaluation",
      "International buyer requirements",
      "Government compliance",
      "Objective quality assessment",
    ],
  },
];

export default function Service() {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen">
      <NewHeader />
      <section className="py-16 px-6 sm:px-12 lg:px-20 mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">
            Comprehensive Quality <span className="text-white">Inspection Services</span>
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
            We offer a complete suite of quality inspection services designed to ensure your cargo meets the highest standards and regulatory requirements across global markets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-white/10 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4 text-white text-2xl">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="list-disc list-inside text-gray-400 space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold mb-2 text-white">Why Choose This Service?</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {service.whyFeatures.map((why, idx) => (
                    <li key={idx}>{why}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {!showAll && (
            <div className="text-center mb-10">
              <button
                onClick={() => setShowAll(true)}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
              >
                View All Services <ChevronDown size={18} />
              </button>
            </div>
          )}

          {showAll && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-white/10 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="flex items-center gap-3 mb-4 text-white text-2xl">
                    {typeof service.icon === "string" ? <span>{service.icon}</span> : service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {showAll && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(false)}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
              >
                Show Less <ChevronUp size={18} />
              </button>
            </div>
          )}

          <div className="mt-20 text-center">
            <div className="bg-neutral-900 text-white rounded-xl p-8 max-w-3xl mx-auto shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-400 mb-6">
                Raise your inspection query with a budget and get multiple quotes from verified global inspectors. Choose the best for your cargo inspection needs.
              </p>
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-3 cursor-pointer bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
              >
                Request Inspection Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


