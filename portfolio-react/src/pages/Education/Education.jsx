import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
} from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "GIFT Autonomous College, Bhubaneswar",
    year: "2024 – 2026 (Pursuing)",
    achievements: ["Specialization: Computer Applications"],
    skills: [
      "Data Structures",
      "Java",
      "Web Development",
      "Database Management",
      "Software Engineering"
    ],
    description:
      "Currently pursuing MCA with a strong focus on full-stack development, programming concepts, and real-world software engineering practices.",
  },

  {
    degree: "Bachelor of Science (B.Sc) in Computer Science",
    school: "New Star Degree Science College",
    year: "2021 – 2023",
    achievements: ["Computer Science Major"],
    skills: [
      "C Programming",
      "Java",
      "Operating Systems",
      "Computer Networks",
      "DBMS"
    ],
    description:
      "Completed undergraduate studies in Computer Science, building strong fundamentals in programming, databases, and core computing concepts.",
  },

  {
    degree: "Council of Higher Secondary Education (CHSE)",
    school: "New Star Degree Science College",
    year: "2019 – 2021",
    achievements: ["Science Stream"],
    skills: [
      "Mathematics",
      "Physics",
      "Chemistry",
    ],
    description:
      "Completed higher secondary education with science background, developing logical thinking and problem-solving skills.",
  },

  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "B.S. Bidyapitha, Sagar",
    year: "2019",
    achievements: ["Secondary Education"],
    skills: [
      "Mathematics",
      "Science",
    ],
    description:
      "Completed secondary education with emphasis on mathematics and science fundamentals.",
  },
];


export default function EducationSection() {
  return (
    <section id="education" className="relative py-32 bg-[#04081A] overflow-hidden">

      {/* title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-24
        bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
      >
        Educational Journey
      </motion.h2>

      {/* center line */}
      <div className="absolute left-1/2 top-40 bottom-20 w-[2px]
        bg-gradient-to-b from-transparent via-teal-400 to-transparent" />

      <div className="max-w-6xl mx-auto space-y-28 relative">

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -120 : 120,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative flex flex-col md:flex-row items-center ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            {/* glowing dot */}
            <span
              className="absolute left-1/2 -translate-x-1/2
              w-5 h-5 rounded-full bg-teal-400
              shadow-[0_0_25px_#2dd4bf]"
            />

            {/* card */}
            <div
              className={`w-full md:w-[45%]
              bg-gray-900/60 backdrop-blur-xl
              border border-teal-400/20
              rounded-xl p-8
              hover:scale-[1.02] transition-all
              shadow-lg shadow-teal-500/10 ${
                index % 2 === 0
                  ? "md:mr-auto md:text-right"
                  : "md:ml-auto md:text-left"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {edu.degree}
              </h3>

              <p className="text-gray-300 flex items-center gap-2 mb-1">
                <BookOpen className="w-5 h-5 text-teal-400" />
                {edu.school}
              </p>

              <p className="text-gray-400 flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4" />
                {edu.year}
              </p>

              <p className="text-gray-300 italic border-l-2 border-teal-400 pl-4 mb-6">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {edu.achievements.map((a, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full
                    bg-teal-500/10 text-teal-400
                    flex items-center gap-2"
                  >
                    <Award className="w-4 h-4" />
                    {a}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {edu.skills.map((s, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded
                    bg-blue-500/10 text-blue-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
