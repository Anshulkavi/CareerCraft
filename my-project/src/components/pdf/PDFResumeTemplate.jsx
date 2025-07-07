import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  Svg,
  Path,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     backgroundColor: '#ffffff',
//     padding: 32,
//     fontFamily: 'Helvetica',
//     fontSize: 10,
//     color: '#111827',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 32,
//   },
//   headerLeft: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#000000',
//     marginBottom: 8,
//     letterSpacing: 1,
//   },
//   jobTitle: {
//     fontSize: 16,
//     color: '#06b6d4',
//     marginBottom: 16,
//     fontWeight: 500,
//   },
//   contactInfo: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 24,
//     fontSize: 9,
//     color: '#4b5563',
//   },
//   contactItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 4,
//   },
//   profilePhoto: {
//     width: 84,
//     height: 84,
//     borderRadius: 42,
//     marginLeft: 32,
//   },
//   mainContent: {
//     flexDirection: 'row',
//     gap: 32,
//   },
//   leftColumn: {
//     flex: 2,
//   },
//   rightColumn: {
//     flex: 1,
//   },
//   section: {
//     marginBottom: 32,
//   },
//   sectionTitle: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     color: '#374151',
//     marginBottom: 16,
//     paddingBottom: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#d1d5db',
//     textTransform: 'uppercase',
//     letterSpacing: 0.5,
//   },
//   experienceItem: {
//     marginBottom: 24,
//   },
//   jobTitleText: {
//     fontSize: 12,
//     fontWeight: 600,
//     color: '#000000',
//     marginBottom: 4,
//   },
//   companyRow: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     alignItems: 'center',
//     gap: 24,
//     fontSize: 9,
//     marginBottom: 8,
//   },
//   companyName: {
//     color: '#06b6d4',
//     fontWeight: 500,
//   },
//   dateLocation: {
//     flexDirection: 'row',
//     gap: 16,
//     color: '#4b5563',
//   },
//   responsibilities: {
//     fontSize: 9,
//     color: '#374151',
//     lineHeight: 1.4,
//   },
//   responsibilityItem: {
//     marginBottom: 8,
//     paddingLeft: 12,
//   },
//   educationItem: {
//     marginBottom: 16,
//   },
//   degree: {
//     fontSize: 10,
//     fontWeight: 600,
//     color: '#000000',
//   },
//   institution: {
//     fontSize: 9,
//     color: '#06b6d4',
//     fontWeight: 500,
//     marginTop: 2,
//   },
//   educationDetails: {
//     flexDirection: 'row',
//     gap: 16,
//     fontSize: 9,
//     color: '#4b5563',
//     marginTop: 4,
//   },
//   languageItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   languageText: {
//     flexDirection: 'row',
//     gap: 16,
//   },
//   languageName: {
//     fontWeight: 600,
//     color: '#000000',
//   },
//   languageLevel: {
//     fontSize: 9,
//     color: '#4b5563',
//   },
//   proficiencyDots: {
//     flexDirection: 'row',
//     gap: 4,
//   },
//   proficiencyDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//   },
//   proficiencyActive: {
//     backgroundColor: '#1f2937',
//   },
//   proficiencyInactive: {
//     backgroundColor: '#d1d5db',
//   },
//   summary: {
//     fontSize: 9,
//     color: '#374151',
//     lineHeight: 1.5,
//   },
//   achievementItem: {
//     flexDirection: 'row',
//     gap: 12,
//     marginBottom: 16,
//   },
//   achievementIcon: {
//     width: 24,
//     height: 24,
//     backgroundColor: '#e0f7fa',
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   achievementContent: {
//     flex: 1,
//   },
//   achievementTitle: {
//     fontSize: 10,
//     fontWeight: 600,
//     color: '#000000',
//     marginBottom: 4,
//   },
//   achievementDescription: {
//     fontSize: 9,
//     color: '#374151',
//     lineHeight: 1.4,
//   },
//   skillsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 8,
//   },
//   skillTag: {
//     backgroundColor: '#f3f4f6',
//     paddingHorizontal: 12,
//     paddingVertical: 4,
//     borderRadius: 12,
//     fontSize: 8,
//   },
//   certificationItem: {
//     marginBottom: 16,
//   },
//   certificationTitle: {
//     fontSize: 10,
//     fontWeight: 600,
//     color: '#06b6d4',
//     marginBottom: 4,
//   },
//   certificationDescription: {
//     fontSize: 9,
//     color: '#374151',
//     lineHeight: 1.4,
//   },
// });
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 24, // A4-optimized
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#111827",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24, // tighter
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  jobTitle: {
    fontSize: 14,
    color: "#06b6d4",
    marginBottom: 12,
    fontWeight: 500,
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    fontSize: 8,
    color: "#4b5563",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  profilePhoto: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginLeft: 24,
  },
  mainContent: {
    flexDirection: "row",
    gap: 24,
  },
  leftColumn: { flex: 2 },
  rightColumn: { flex: 1 },

  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 10,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  experienceItem: { marginBottom: 12 },
  jobTitleText: {
    fontSize: 10,
    fontWeight: 600,
    color: "#000000",
    marginBottom: 3,
  },
  companyRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 16,
    fontSize: 8,
    marginBottom: 6,
  },
  companyName: { color: "#06b6d4", fontWeight: 500 },
  dateLocation: {
    flexDirection: "row",
    gap: 12,
    color: "#4b5563",
  },
  responsibilities: {
    fontSize: 8,
    color: "#374151",
    lineHeight: 1.3,
  },
  responsibilityItem: {
    marginBottom: 4,
    paddingLeft: 10,
  },

  educationItem: { marginBottom: 12 },
  degree: {
    fontSize: 9,
    fontWeight: 600,
    color: "#000000",
  },
  institution: {
    fontSize: 8,
    color: "#06b6d4",
    fontWeight: 500,
    marginTop: 1,
  },
  educationDetails: {
    flexDirection: "row",
    gap: 12,
    fontSize: 8,
    color: "#4b5563",
    marginTop: 3,
  },

  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  languageText: {
    flexDirection: "row",
    gap: 10,
  },
  languageName: { fontWeight: 600, color: "#000000" },
  languageLevel: { fontSize: 8, color: "#4b5563" },
  proficiencyDots: {
    flexDirection: "row",
    gap: 3,
  },
  proficiencyDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  proficiencyActive: { backgroundColor: "#1f2937" },
  proficiencyInactive: { backgroundColor: "#d1d5db" },

  summary: {
    fontSize: 8,
    color: "#374151",
    lineHeight: 1.4,
  },

  achievementItem: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 12,
    marginRight: 10,
  },
  achievementIcon: {
    width: 20,
    height: 20,
    backgroundColor: "#e0f7fa",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  achievementTitle: {
    fontSize: 9,
    fontWeight: 600,
    color: "#000000",
    marginBottom: 3,
  },
  achievementDescription: {
    fontSize: 8,
    color: "#374151",
    lineHeight: 1.3,
  },

  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skillTag: {
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    fontSize: 7,
  },

  certificationItem: { marginBottom: 12 },
  certificationTitle: {
    fontSize: 9,
    fontWeight: 600,
    color: "#06b6d4",
    marginBottom: 3,
  },
  certificationDescription: {
    fontSize: 8,
    color: "#374151",
    lineHeight: 1.3,
  },

  projectItem: {
  marginBottom: 8,
},
projectTitle: {
  fontSize: 10,
  fontWeight: "bold",
  marginBottom: 2,
},
projectLink: {
  fontSize: 9,
  color: "#1f73b7", // optional: blue-ish link color
  marginBottom: 2,
},
techStack: {
  fontSize: 9,
  fontStyle: "italic",
  marginBottom: 2,
},
projectDescription: {
  fontSize: 9,
  color: "#333",
},

});

export default function PDFResumeTemplate({
  resumeData,
  customSectionConfig,
  isReplaced,
}) {
  const { personal } = resumeData || {};

  const dummyExperience = [
    {
      jobTitle: "Senior Digital Marketing Specialist",
      company: "Tech Innovate",
      startDate: "01/2022",
      endDate: "Present",
      location: "San Francisco, CA",
      responsibilities: `Led the development and execution of comprehensive digital marketing campaigns across Meta, Google, and TikTok, increasing user acquisition by 45% within 12 months.
Managed a $500K quarterly budget for paid acquisition channels, optimizing spend for a 30% improvement in ROAS.
Implemented advanced targeting and retargeting strategies that reduced CPA by 20%, while increasing conversion rates by 15%.
Conducted A/B testing on over 100 ad creatives, identifying top performers that led to a 25% increase in engagement.
Collaborated with cross-functional teams to align marketing efforts with product launches, resulting in a 40% increase in product adoption.
Analyzed campaign data to provide actionable insights, leading to a strategic pivot that captured a new user segment and contributed to a 35% increase in market share.`,
    },
    {
      jobTitle: "Digital Marketing Manager",
      company: "MarketGuru",
      startDate: "06/2019",
      endDate: "12/2021",
      location: "San Francisco, CA",
      responsibilities: `Managed and scaled paid search and social campaigns across Snapchat and Apple Search Ads, achieving a 50% increase in leads.
Designed and executed a landing page optimization strategy that lifted conversion rates by 18%.
Utilized Looker and Google Analytics to monitor campaign performance, driving a 10% decrease in bounce rates.
Orchestrated the creative testing process, enhancing ad performance and contributing to a 30% increase in CTR.
Collaborated with engineering to integrate new tracking systems, improving data accuracy and campaign efficiency.`,
    },
    {
      jobTitle: "Performance Marketing Analyst",
      company: "AdVantage Media",
      startDate: "03/2017",
      endDate: "05/2019",
      location: "San Francisco, CA",
      responsibilities: `Analyzed performance data across multiple digital channels, identifying trends that informed strategic decisions.
Supported the execution of campaigns that resulted in a 15% increase in user engagement.
Developed and maintained reporting dashboards for real-time performance tracking, enhancing team responsiveness.
Assisted in managing a portfolio of digital ads, optimizing for a 10% improvement in ad efficiency.`,
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

  const educationData =
    resumeData?.education?.length > 0 &&
    resumeData.education.some((edu) => edu.degree || edu.institution)
      ? resumeData.education
      : [
          {
            degree: "Master of Science in Marketing Analytics",
            institution: "University of California, Berkeley",
            location: "Berkeley, CA",
            startDate: "01/2015",
            endDate: "01/2017",
          },
          {
            degree: "Bachelor of Science in Business Administration",
            institution: "San Francisco State University",
            location: "San Francisco, CA",
            startDate: "01/2011",
            endDate: "01/2015",
          },
        ];

  const dummyLanguages = [
    { name: "English", level: "Native", proficiency: 5 },
    { name: "Spanish", level: "Advanced", proficiency: 3 },
  ];

  const hasUserLangs =
    resumeData?.languages &&
    resumeData.languages.some((lang) => lang.name?.trim());

  const langs = hasUserLangs ? resumeData.languages : dummyLanguages;

  const dummyAchievements = [
    {
      title: "45% User Acquisition Increase",
      description:
        "Spearheaded digital marketing initiatives at Tech Innovate that led to a 45% increase in user acquisition.",
    },
    {
      title: "30% ROAS Improvement",
      description:
        "Optimized ad spend across digital platforms at Tech Innovate, resulting in a 30% improvement in ROAS.",
    },
    {
      title: "Market Share Expansion",
      description:
        "Identified and captured a new user segment, contributing to a 35% increase in market share.",
    },
    {
      title: "Conversion Rate Optimization",
      description:
        "Implemented a successful landing page optimization strategy, lifting conversion rates by 18%.",
    },
  ];

  const userAchievements =
    resumeData?.achievements?.filter(
      (ach) => ach.title?.trim() || ach.description?.trim()
    ) || [];

  const achievementsToShow =
    userAchievements.length > 0 ? userAchievements : dummyAchievements;

  const safeSkills = resumeData?.skills || {};

const parsedSkills = [
  ...(safeSkills.technical?.split(",").map((s) => s.trim()) || []),
  ...(safeSkills.soft?.split(",").map((s) => s.trim()) || []),
];

const skills =
  parsedSkills.length > 0
    ? parsedSkills
    : [
        "Data Analysis",
        "Paid Acquisition",
        "Retargeting",
        "ROAS Optimization",
        "Cross-Functional Collaboration",
        "Google Analytics",
        "Looker",
        "Appsflyer",
        "Meta Advertising",
        "Google Ads",
        "TikTok Ads",
        "Snapchat Ads",
        "SQL",
      ];


const certifications = 
  resumeData?.certifications?.length > 0 &&
  resumeData.certifications.some((cert) => cert.title || cert.description)
    ? resumeData.certifications
    : [
        {
          title: "Advanced Google Analytics",
          description:
            "Focused on mastering Google Analytics for deep insights into user behavior, provided by Google.",
        },
        {
          title: "Effective Creative Testing",
          description:
            "Specialized in evaluating ad creative performance to maximize engagement, offered by Coursera.",
        },
      ];


  const renderCustomSection = () => {
    const { title, entries } = customSectionConfig || {};
    if (!entries || entries.length === 0) return null;

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {title?.toUpperCase() || "CUSTOM SECTION"}
        </Text>
        <View>
          {entries.map((entry, idx) => (
            <View key={idx} style={{ marginBottom: 16 }}>
              {entry.title && (
                <Text style={styles.achievementTitle}>{entry.title}</Text>
              )}
              {entry.description && (
                <Text style={styles.achievementDescription}>
                  {entry.description}
                </Text>
              )}
              {entry.year && (
                <Text
                  style={{
                    fontSize: 9,
                    color: "#6b7280",
                    fontStyle: "italic",
                    marginTop: 4,
                  }}
                >
                  {entry.year}
                </Text>
              )}
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>
              {(personal?.firstName || "ELLEN") +
                " " +
                (personal?.lastName || "JOHNSON")}
            </Text>
            <Text style={styles.jobTitle}>
              {personal?.jobTitle ||
                "Digital Marketing Manager | Growth Hacking | Data Analysis"}
            </Text>
            {/* <View style={styles.contactInfo}>
              <View style={styles.contactItem}>
                <Text>{personal?.email || "Virat@IPL.com"}</Text>
              </View>
              <View style={styles.contactItem}>
                <Text>{personal?.linkedin || "linkedin.com/in/yourprofile"}</Text>
              </View>
              <View style={styles.contactItem}>
                <Text>{personal?.location || "San Francisco, California"}</Text>
              </View>
            </View> */}

            <View style={styles.contactInfo}>
              {/* Email */}
              <View style={styles.contactItem}>
                <Svg width={14} height={14} viewBox="0 0 20 20">
                  <Path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    fill="#0891b2"
                  />
                  <Path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    fill="#0891b2"
                  />
                </Svg>
                <Text>{personal?.email || "Virat@IPL.com"}</Text>
              </View>

              {/* LinkedIn */}
              <View style={styles.contactItem}>
                <Svg width={14} height={14} viewBox="0 0 20 20">
                  <Path
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 
        1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 
        1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 
        1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 
        5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 
        11-2.828-2.828l3-3z"
                    fill="#0891b2"
                  />
                </Svg>
                <Text>
                  {personal?.linkedin || "linkedin.com/in/yourprofile"}
                </Text>
              </View>

              {/* Location */}
              <View style={styles.contactItem}>
                <Svg width={10} height={10} viewBox="0 0 20 20">
                  <Path
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 
        0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    fill="#0891b2"
                  />
                </Svg>
                <Text>{personal?.location || "San Francisco, California"}</Text>
              </View>
            </View>
          </View>

          {/* Profile Photo placeholder - @react-pdf/renderer has limited image support */}
          {personal?.photoUrl ? (
            <Image src={personal.photoUrl} style={styles.profilePhoto} />
          ) : (
            <View
              style={[
                styles.profilePhoto,
                {
                  backgroundColor: "#e5e7eb",
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <Text style={{ fontSize: 8, color: "#6b7280" }}>Photo</Text>
            </View>
          )}
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            {/* Experience */}
            
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>EXPERIENCE</Text>
              <View>
                {experiences?.map((exp, idx) => (
                  <View key={idx} style={styles.experienceItem}>
                    <Text style={styles.jobTitleText}>
                      {exp.jobTitle || "Job Title"}
                    </Text>
                    <View style={styles.companyRow}>
                      <Text style={styles.companyName}>
                        {exp.company || "Company Name"}
                      </Text>
                      <View style={styles.dateLocation}>
                        <Text>
                          {exp.startDate || "Start"} - {exp.endDate || "End"}
                        </Text>
                        <Text>{exp.location || "Location"}</Text>
                      </View>
                    </View>
                    {exp.responsibilities && (
                      <View style={styles.responsibilities}>
                        {exp.responsibilities
                          .split("\n")
                          .filter((line) => line.trim() !== "")
                          .map((line, i) => (
                            <Text key={i} style={styles.responsibilityItem}>
                              • {line.replace(/^•\s*/, "").trim()}
                            </Text>
                          ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            </View>

            {/* Projects
            {projects?.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>PROJECTS</Text>
                <View>
                  {projects.map((proj, idx) => (
                    <View key={idx} style={styles.projectItem}>
                      <Text style={styles.projectTitle}>
                        {proj.title || "Project Title"}
                      </Text>
                      {proj.link && (
                        <Text style={styles.projectLink}>{proj.link}</Text>
                      )}
                      {proj.techStack && (
                        <Text style={styles.techStack}>
                          Tech Stack: {proj.techStack}
                        </Text>
                      )}
                      {proj.description && (
                        <Text style={styles.projectDescription}>
                          {proj.description}
                        </Text>
                      )}
                    </View>
                  ))}
                </View>
              </View>
            )} */}

            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>EDUCATION</Text>
              <View>
                {educationData.map((edu, index) => (
                  <View key={index} style={styles.educationItem}>
                    <Text style={styles.degree}>{edu.degree}</Text>
                    <Text style={styles.institution}>{edu.institution}</Text>
                    <View style={styles.educationDetails}>
                      <Text>
                        {edu.startDate} - {edu.endDate}
                      </Text>
                      <Text>{edu.location}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>

            {/* Languages */}
            {isReplaced && isReplaced("languages")
              ? renderCustomSection()
              : langs.length > 0 && (
                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>LANGUAGES</Text>
                    <View>
                      {langs.map((lang, idx) => (
                        <View key={idx} style={styles.languageItem}>
                          <View style={styles.languageText}>
                            <Text style={styles.languageName}>{lang.name}</Text>
                            <Text style={styles.languageLevel}>
                              {lang.level}
                            </Text>
                          </View>
                          <View style={styles.proficiencyDots}>
                            {[1, 2, 3, 4, 5].map((dot) => (
                              <View
                                key={dot}
                                style={[
                                  styles.proficiencyDot,
                                  lang.proficiency >= dot
                                    ? styles.proficiencyActive
                                    : styles.proficiencyInactive,
                                ]}
                              />
                            ))}
                          </View>
                        </View>
                      ))}
                    </View>
                  </View>
                )}
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            {/* Summary */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>SUMMARY</Text>
              <Text style={styles.summary}>
                {resumeData?.personal?.summary?.trim()
                  ? resumeData.personal.summary.trim()
                  : "Motivated Digital Marketing Manager with over 3 years of experience in driving user acquisition and growth through strategic paid campaigns. Expert in data analysis, creative optimization, and cross-functional collaboration to achieve business objectives. Proven track record of scaling campaigns and enhancing ROI."}
              </Text>
            </View>

            {/* Achievements */}
            {isReplaced && isReplaced("achievements") ? (
              renderCustomSection()
            ) : (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>KEY ACHIEVEMENTS</Text>
                <View>
                  {achievementsToShow.map((ach, idx) => (
                    <View key={idx} style={styles.achievementItem}>
                      <View style={styles.achievementIcon}>
                        <Svg
                          width={10}
                          height={10}
                          viewBox="0 0 20 20"
                          fill="#0891b2"
                        >
                          <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </Svg>
                      </View>
                      <View style={styles.achievementContent}>
                        <Text style={styles.achievementTitle}>{ach.title}</Text>
                        <Text style={styles.achievementDescription}>
                          {ach.description}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Skills */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>SKILLS</Text>
              <View style={styles.skillsContainer}>
                {skills.map((skill, idx) => (
                  <Text key={idx} style={styles.skillTag}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>

            {/* Certifications */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>CERTIFICATION</Text>
              <View>
                {certifications.map((cert, idx) => (
                  <View key={idx} style={styles.certificationItem}>
                    <Text style={styles.certificationTitle}>{cert.title}</Text>
                    <Text style={styles.certificationDescription}>
                      {cert.description}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
