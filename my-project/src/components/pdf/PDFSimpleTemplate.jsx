import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Svg,
  Path,
} from "@react-pdf/renderer";

// Define styles using StyleSheet.create()
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 32,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#111827",
  },
  header: {
    marginBottom: 32,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 16,
    color: "#4b5563",
    marginBottom: 16,
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
    fontSize: 9,
    color: "#374151",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  mainContent: {
    flexDirection: "row",
    gap: 32,
  },
  leftColumn: {
    flex: 2,
  },
  rightColumn: {
    flex: 1,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
    paddingBottom: 4,
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.4,
  },
  experienceItem: {
    marginBottom: 16,
  },
  jobTitleExp: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
  },
  company: {
    fontSize: 10,
    color: "#4b5563",
    marginBottom: 4,
  },
  experienceDetails: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
    fontSize: 9,
    color: "#374151",
    marginBottom: 8,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    // gap: 8,
    marginBottom: 4,
  },
  responsibilities: {
    fontSize: 9,
    color: "#374151",
  },
  projectItem: {
    marginBottom: 16,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
  },
  projectDescription: {
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.4,
    marginBottom: 4,
  },
  projectDetails: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    fontSize: 9,
    color: "#374151",
    marginBottom: 4,
  },
  educationItem: {
    marginBottom: 16,
  },
  degree: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
  },
  institution: {
    fontSize: 9,
    color: "#4b5563",
    marginBottom: 4,
  },
  educationDetails: {
    flexDirection: "row",
    gap: 16,
    fontSize: 9,
    color: "#4b5563",
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillItem: {
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 9,
    textAlign: "center",
    borderRadius: 2,
    width: "45%",
  },
  achievementItem: {
    marginBottom: 12,
  },
  achievementTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
  },
  achievementDescription: {
    fontSize: 9,
    color: "#4b5563",
    lineHeight: 1.4,
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  languageInfo: {
    flex: 1,
  },
  languageName: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 2,
  },
  languageLevel: {
    fontSize: 9,
    color: "#4b5563",
  },
  proficiencyDots: {
    flexDirection: "row",
    gap: 4,
    marginLeft: 16,
  },
  proficiencyDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  dotFilled: {
    backgroundColor: "#6b7280",
  },
  dotEmpty: {
    backgroundColor: "#d1d5db",
  },
  link: {
    color: "#2563eb",
    textDecoration: "underline",
  },
});

export default function PDFSimpleTemplate({ resumeData }) {
  const { personal } = resumeData || {};

  const firstName = personal?.firstName || "John";
  const lastName = personal?.lastName || "Aarts";
  const jobTitle = personal?.jobTitle || "Customer Success Manager";
  const phone = personal?.phone || "+1-952-140-6600";
  const email = personal?.email || "john.xander@gmail.com";
  const linkedin = personal?.linkedin || "linkedin.com/@_XanderAarts_";
  const location = personal?.location || "Amsterdam, Netherlands";

  const summary =
    resumeData?.personal?.summary ||
    "Enthusiastic Customer Success Managers with seven years of experience coordinating Customer Success staff and analyzing complaints, developing new procedures, and implementing customer retention campaigns. Proven project team leader and problem solver. Focused on building excellent productive client relationships,quickly resolving issues to assure their business needs are met.";

  const educationData =
    resumeData?.education?.length > 0 &&
    resumeData.education.some((edu) => edu.degree || edu.institution)
      ? resumeData.education
      : [
          {
            degree: "Master of Sociology",
            institution: "University of Amsterdam",
            startDate: "2013",
            endDate: "2014",
            location: "Amsterdam",
          },
          {
            degree: "Bachelor of Economics",
            institution: "University of Amsterdam",
            startDate: "2009",
            endDate: "2012",
            location: "Amsterdam",
          },
        ];

  const dummyExperience = [
    {
      jobTitle: "Senior Customer Success Manager",
      company: "Blanchette",
      startDate: "2017",
      endDate: "Present",
      location: "Amsterdam, Netherlands",
      responsibilities: `Achieved an average 115% Net Retention Rate (NRR) on a target of 102%, for five consecutive quarters.
        Developed an end user training curriculum for Microsoft Office 365.
        Partnered with AE to grow book of business 25% YoY.
        Managed an EMEA book of business of USD $2-2.5M in ARR - achieved and exceeded renewal and up-sell targets.`,
    },
    {
      jobTitle: "Customer Success Manager",
      company: "Dufour",
      startDate: "2015",
      endDate: "2017",
      location: "Amsterdam, Netherlands",
      responsibilities: `Achieved 100% retention rate and restore the relationship for at-risk accounts.
        Proactively managed customer relationships and lifetime value; drove the recurring revenue up by 25%.
         Created strategic success plans for my client base that resulted in 100% customer outreach.
        Negotiate renewal contracts with a combined retention rate of 102% of monthly reoccurring revenue.
        Improved Customer Retention Rate from 65% to 78%.`,
    },
  ];

  const hasUserExperience =
    Array.isArray(resumeData?.experience) &&
    resumeData.experience.some(
      (exp) =>
        exp.company?.trim() ||
        exp.jobTitle?.trim() ||
        exp.startDate?.trim() ||
        exp.endDate?.trim() ||
        exp.location?.trim() ||
        exp.responsibilities?.trim()
    );

  const experiences = hasUserExperience
    ? resumeData.experience
    : dummyExperience;

  const renderBulletPoints = (text) => {
    return text
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line, i) => (
        <View
          key={i}
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginBottom: 2,
          }}
        >
          <Text style={{ width: 10, textAlign: "left" }}>•</Text>
          <Text
            style={{ flex: 1, fontSize: 9, color: "#374151", lineHeight: 1.2 }}
          >
            {line
              .replace(/^•\s*/, "")
              .replace(/[.,](?=\S)/g, " ")
              .trim()}
          </Text>
        </View>
      ));
  };

  const renderProficiencyDots = (proficiency) => {
    return [1, 2, 3, 4, 5].map((dot) => (
      <View
        key={dot}
        style={[
          styles.proficiencyDot,
          proficiency >= dot ? styles.dotFilled : styles.dotEmpty,
        ]}
      />
    ));
  };

  const skills =
    resumeData?.skills?.technical || resumeData?.skills?.soft
      ? [
          ...(resumeData.skills.technical?.split(",").map((s) => s.trim()) ||
            []),
          ...(resumeData.skills.soft?.split(",").map((s) => s.trim()) || []),
        ]
      : [
          "CRM",
          "Salesforce",
          "NetSuite",
          "MS Excel",
          "Hubspot",
          "Mailchimp",
          "CI Tools",
          "SimilarWeb",
        ];

  const userAchievements =
    resumeData?.achievements?.filter(
      (ach) => ach.title?.trim() || ach.description?.trim()
    ) || [];

  const dummyAchievements = [
    {
      title: "Negotiation and presentation",
      description: "Clear communicator and strong in deal closures.",
    },
    {
      title: "Research",
      description: "Prepared with industry-specific knowledge.",
    },
    {
      title: "Customer Relationship",
      description: "Building lasting bonds with clients.",
    },
    {
      title: "Conversion Rate Optimization",
      description:
        "Implemented a successful landing page optimization strategy, lifting conversion rates by 18%.",
    },
  ];

  const achievements =
    userAchievements.length > 0 ? userAchievements : dummyAchievements;

  const dummyLanguages = [
    { name: "English", level: "Native", proficiency: 5 },
    { name: "Dutch", level: "Proficient", proficiency: 4 },
  ];

  const hasUserLangs =
    resumeData?.languages &&
    resumeData.languages.some((lang) => lang.name?.trim());

  const langs = hasUserLangs ? resumeData.languages : dummyLanguages;

  const dummyProjects = [
    {
      title: "AI-Powered Resume Builder",
      description:
        "A web app that uses GPT to generate resume content, matching job descriptions with smart suggestions.",
      techStack: ["React", "Tailwind CSS", "OpenAI API"],
      githubLink: "https://github.com/user/repo",
      demoLink: "https://demo.example.com",
    },
    {
      title: "E-Commerce Backend",
      description:
        "Developed a scalable backend for an e-commerce site with JWT auth, cart, and payment gateway.",
      techStack: ["Django", "PostgreSQL", "Stripe"],
      githubLink: "https://github.com/user/repo",
      demoLink: "https://demo.example.com",
    },
  ];

  const hasUserProjects =
    Array.isArray(resumeData?.projects) &&
    resumeData.projects.some((proj) => proj.title?.trim());

  const projects = hasUserProjects ? resumeData.projects : dummyProjects;

  // Individual Icon Components
  const PhoneIconSmall = ({ size = 10 }) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      style={{ marginRight: 4 }}
    >
      <Path
        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
        fill="#666"
      />
    </Svg>
  );

  const EmailIconSmall = ({ size = 10 }) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      style={{ marginRight: 4 }}
    >
      <Path
        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
        fill="#666"
      />
      <Path
        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
        fill="#666"
      />
    </Svg>
  );

  const LinkedInIconSmall = ({ size = 10 }) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ marginRight: 4 }}
    >
      <Path
        fill="#666"
        d="M19 0h-14C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zm-11.538 20H4.538V9h2.923v11zM6 7.692C5.054 7.692 4.308 6.946 4.308 6s.746-1.692 1.692-1.692 1.692.746 1.692 1.692S6.946 7.692 6 7.692zm13.538 12.308h-2.923v-5.231c0-1.385-.028-3.169-1.923-3.169-1.923 0-2.218 1.5-2.218 3.054v5.346H9.538V9h2.807v1.5h.039c.392-.738 1.346-1.5 2.769-1.5 2.962 0 3.5 1.946 3.5 4.477v6.523z"
      />
    </Svg>
  );

  const LocationIconSmall = ({ size = 10 }) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      style={{ marginRight: 4 }}
    >
      <Path
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        fill="#666"
      />
    </Svg>
  );

  // Calendar Icon (for dates)
  const CalendarIcon = ({ size = 12 }) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      style={{ marginRight: 4 }}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#4B5563"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 
        2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 
        10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 
        000 2h8a1 1 0 100-2H6z"
      />
    </Svg>
  );

  // GitHub Icon Component
  const GitHubIcon = ({ githubLink, size = 12 }) => {
    if (!githubLink) return null;

    return (
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}
      >
        <Svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          style={{ marginRight: 6 }}
        >
          <Path
            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
            fill="#374151"
          />
        </Svg>
        <Link
          src={githubLink}
          style={{
            fontSize: 10,
            color: "#2563eb",
            textDecoration: "none",
          }}
        >
          View Code
        </Link>
      </View>
    );
  };

  // Live Demo Icon Component (using globe/world icon)
  const LiveDemoIcon = ({ demoLink, size = 12 }) => {
    if (!demoLink) return null;

    return (
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}
      >
        <Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          style={{ marginRight: 6 }}
        >
          {/* Outer circle */}
          <Path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
            fill="none"
            stroke="#374151"
            strokeWidth="1.5"
          />
          {/* Vertical line */}
          <Path d="M12 2v20" fill="none" stroke="#374151" strokeWidth="1.5" />
          {/* Horizontal lines */}
          <Path d="M2 12h20" fill="none" stroke="#374151" strokeWidth="1.5" />
          {/* Curved lines for globe effect */}
          <Path
            d="M2 12c0-2.5 4.5-4.5 10-4.5s10 2 10 4.5"
            fill="none"
            stroke="#374151"
            strokeWidth="1.5"
          />
          <Path
            d="M2 12c0 2.5 4.5 4.5 10 4.5s10-2 10-4.5"
            fill="none"
            stroke="#374151"
            strokeWidth="1.5"
          />
        </Svg>
        <Link
          src={demoLink}
          style={{
            fontSize: 10,
            color: "#2563eb",
            textDecoration: "none",
          }}
        >
          Live Demo
        </Link>
      </View>
    );
  };

  // Alternative version with a simpler filled circle approach
  const LiveDemoIconSimple = ({ demoLink, size = 12 }) => {
    if (!demoLink) return null;

    return (
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}
      >
        <Svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          style={{ marginRight: 6 }}
        >
          <Circle
            cx="8"
            cy="8"
            r="6"
            fill="none"
            stroke="#374151"
            strokeWidth="1.5"
          />
          <Path d="M8 2v12M2 8h12" stroke="#374151" strokeWidth="1.5" />
          <Path
            d="M2.5 5.5c3-1 5.5-1 11 0M2.5 10.5c3 1 5.5 1 11 0"
            stroke="#374151"
            strokeWidth="1.5"
            fill="none"
          />
        </Svg>
        <Link
          src={demoLink}
          style={{
            fontSize: 10,
            color: "#2563eb",
            textDecoration: "none",
          }}
        >
          Live Demo
        </Link>
      </View>
    );
  };

  // Skills Icon Component (React Native version)
  const SkillsIcon = ({ techStack, size = 12 }) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          style={{ color: "#374151" }}
        >
          <Path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
            fill="#374151"
          />
        </Svg>
        <Text>
          {Array.isArray(techStack) ? techStack.join(", ") : techStack}
        </Text>
      </View>
    );
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
          <View style={styles.contactInfo}>
            <View style={styles.contactItem}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <PhoneIconSmall />
                <Text style={styles.contactText}>{phone}</Text>
              </View>
            </View>
            <View style={styles.contactItem}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <EmailIconSmall />
                <Text style={styles.contactText}>{email}</Text>
              </View>
            </View>
            <View style={styles.contactItem}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <LinkedInIconSmall />
                <Text style={styles.contactText}>{linkedin}</Text>
              </View>
            </View>
            <View style={styles.contactItem}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <LocationIconSmall />
                <Text style={styles.contactText}>{location}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            {/* Summary */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>SUMMARY</Text>
              <Text style={styles.summaryText}>{summary}</Text>
            </View>

            {/* Experience */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>INTERNSHIP</Text>
              {experiences?.map((exp, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.experienceItem,
                    idx === experiences.length - 1 && { marginBottom: 0 }, // remove last extra space
                  ]}
                >
                  <Text style={styles.jobTitleExp}>{exp.jobTitle}</Text>
                  <Text style={styles.company}>{exp.company}</Text>
                  <View style={styles.experienceDetails}>
                    <View style={styles.detailItem}>
                      <CalendarIcon />
                      <Text>
                        {exp.startDate || "Start"} - {exp.endDate || "End"}
                      </Text>
                    </View>

                    <View style={styles.detailItem}>
                      <LocationIconSmall />
                      <Text>{exp.location || "Location"}</Text>
                    </View>
                  </View>
                  {exp.responsibilities && (
                    <View style={styles.responsibilities}>
                      {renderBulletPoints(exp.responsibilities)}
                    </View>
                  )}
                </View>
              ))}
            </View>

            {/* Projects */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>PROJECTS</Text>
              {projects?.map((proj, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.projectItem,
                    idx === projects.length - 1 && { marginBottom: 0 },
                  ]}
                >
                  <Text style={styles.projectTitle}>
                    {proj.title || "Project Title"}
                  </Text>

                  {proj.description ? (
                    <View style={styles.projectDescription}>
                      {renderBulletPoints(proj.description)}
                    </View>
                  ) : (
                    <Text style={styles.projectDescription}>
                      Project description
                    </Text>
                  )}

                  <View style={styles.projectDetails}>
                    {/* Tech Stack */}
                    {proj.techStack && (
                      <View style={styles.detailItem}>
                        <SkillsIcon techStack={proj.techStack} />
                      </View>
                    )}

                    {/* GitHub Icon with Link */}
                    <GitHubIcon githubLink={proj.githubLink} />

                    {/* Live Demo Icon with Link */}
                    <LiveDemoIcon demoLink={proj.demoLink} />
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>EDUCATION</Text>
              {educationData.map((edu, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.educationItem,
                    idx === educationData.length - 1 && { marginBottom: 0 },
                  ]}
                >
                  <Text style={styles.degree}>{edu.degree}</Text>
                  <Text style={styles.institution}>{edu.institution}</Text>
                  <View style={styles.educationDetails}>
                    <View style={styles.detailItem}>
                      <CalendarIcon />
                      <Text>
                        {edu.startDate || "Start"} - {edu.endDate || "End"}
                      </Text>
                    </View>

                    <View style={styles.detailItem}>
                      <LocationIconSmall />
                      <Text style={styles.contactText}>
                        {edu.location || "Location"}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            {/* Skills */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>SKILLS</Text>
              <View style={styles.skillsGrid}>
                {skills.map((skill, index) => (
                  <Text
                    key={index}
                    style={[
                      styles.skillItem,
                      index === langs.length - 1 && { marginBottom: 0 },
                    ]}
                  >
                    {skill}
                  </Text>
                ))}
              </View>
            </View>

            {/* Achievements */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>ACHIEVEMENTS</Text>
              {achievements.map((ach, i) => (
                <View
                  key={i}
                  style={[
                    styles.achievementItem,
                    i === achievements.length - 1 && { marginBottom: 0 },
                  ]}
                >
                  <Text style={styles.achievementTitle}>{ach.title}</Text>
                  <Text style={styles.achievementDescription}>
                    {ach.description}
                  </Text>
                </View>
              ))}
            </View>

            {/* Languages */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>LANGUAGES</Text>
              {langs.map((lang, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.languageItem,
                    idx === langs.length - 1 && { marginBottom: 0 },
                  ]}
                >
                  <View style={styles.languageInfo}>
                    <Text style={styles.languageName}>{lang.name}</Text>
                    <Text style={styles.languageLevel}>{lang.level}</Text>
                  </View>
                  <View style={styles.proficiencyDots}>
                    {renderProficiencyDots(lang.proficiency)}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
