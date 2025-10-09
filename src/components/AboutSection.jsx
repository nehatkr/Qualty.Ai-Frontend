import {
  Award,
  Users,
  Target,
  TrendingUp,
  FilePlus,
  BadgeCheck,
  Eye,
  Globe2,
} from "lucide-react";
import Scene1 from "../assets/Scene1.mp4";
import Scene2 from "../assets/Scene2.mp4";
import CountUpOnView from "./CountUpOnView";

const achievements = [
  { icon: <Award size={32} />, number: 250, label: "Global Inspectors" },
  { icon: <Users size={32} />, number: 30, label: "Countries Covered" },
  {
    icon: <Target size={32} />,
    number: 69,
    label: "Productivity & Cost Saving (%)",
  },
  {
    icon: <TrendingUp size={32} />,
    number: 24,
    label: "Platform Support (hrs/day)",
  },
];

const values = [
  {
    title: "Raise Inspection Query",
    description:
      "Create your inspection requirements with budget and timeline specifications on our platform.",
    icon: <FilePlus size={28} className="text-white" />,
  },
  {
    title: "Choose the Best Quote",
    description:
      "Compare multiple quotes from verified global inspectors and select the best fit for your needs.",
    icon: <BadgeCheck size={28} className="text-white" />,
  },
  {
    title: "Better Transparency",
    description:
      "Track inspection progress with live updates and comprehensive reporting for complete visibility.",
    icon: <Eye size={28} className="text-white" />,
  },
  {
    title: "Global Inspector Network",
    description:
      "Access our vast network of certified inspectors across 50+ countries for worldwide coverage.",
    icon: <Globe2 size={28} className="text-white" />,
  },
];

export default function AboutSection() {
  return (
    <div>
    <section className="bg-black text-white py-20 px-6 sm:px-12 lg:px-20">
           <span className="inline-block text-center bg-white text-black text-2xl font-semibold px-4 py-1 rounded-full mb-4">
          About
        </span>
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-5 items-center"> 
          <div className="text-start mb-16 rounded-lg items-center my-6">
            <p className="text-gray-200 max-w-3xl mx-auto mb-6">
              Qualty.AI is a revolutionary B2B marketplace connecting global
              traders with certified inspection firms and freelancers. We
              eliminate the hassle of traditional communication methods by
              providing a centralized platform where you can create inspection
              demands and receive multiple competitive quotes.
            </p>
            <p className="text-gray-200 max-w-3xl mx-auto">
              Our platform maps the entire inspection process, providing status
              updates and live tracking for complete transparency. Add
              stakeholders to make quality decisions with instant updates and
              comprehensive reporting. Quality Inspections simplified.
            </p>
          </div>

          <div className="mb-16 flex justify-center border-gray-600 rounded-lg">
            <video
              className="rounded-xl shadow-lg w-full max-w-4xl transition-transform duration-300 hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
              src={Scene2}
            />
          </div>
        </div>

         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20 my-10">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-black border-gray-500 border-b-8 border-2 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-white mb-3 flex justify-center">
                {item.icon}
              </div>
              <CountUpOnView end={item.number} />
              <div className="text-gray-100 text-sm font-medium mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <video
            className="rounded-xl shadow-lg w-full transition-transform duration-300 hover:scale-105"
            autoPlay
            loop
            muted
            playsInline
            src={Scene1}
          />
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            What You Get With Qualty.AI
          </h3>
          <p className="text-gray-100 max-w-3xl mx-auto">
            Our platform provides comprehensive solutions for all your quality
            inspection needs with AI-based insights and market analytics for
            better trade decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-black border-gray-500 border-b-8 border-2 rounded-xl p-6 shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-center">
                {value.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white text-center">
                {value.title}
              </h4>
              <p className="text-gray-400 text-sm text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
     </div>
  );
}
