// PersonalSection.jsx
import React from "react";
import InputWithLabel from "../ui/InputwithLabel";
import TextareaWithLabel from "../ui/TextareawithLabel";
import PhotoUploadWithLabel from "../ui/PhotoUploadwithLabel";
import Section from "../ui/Section";

const PersonalSection = ({ resumeData, setResumeData, setHasChanges }) => {
  return (
    <Section title="Personal Information">
      <InputWithLabel
        id="firstName"
        label="First Name"
        placeholder="John"
        value={resumeData.personal.firstName}
        onChange={(e) => {
          setResumeData({
            ...resumeData,
            personal: { ...resumeData.personal, firstName: e.target.value },
          });
          setHasChanges(true);
        }}
      />
      <InputWithLabel
        id="lastName"
        label="Last Name"
        placeholder="Doe"
        value={resumeData.personal.lastName}
        onChange={(e) => {
          setResumeData({
            ...resumeData,
            personal: { ...resumeData.personal, lastName: e.target.value },
          });
          setHasChanges(true);
        }}
      />
      <InputWithLabel
        id="jobTitle"
        label="Job Title"
        placeholder="Software Engineer"
        value={resumeData.personal.jobTitle}
        onChange={(e) => {
          setResumeData({
            ...resumeData,
            personal: { ...resumeData.personal, jobTitle: e.target.value },
          });
          setHasChanges(true);
        }}
      />
      <InputWithLabel
        id="email"
        label="Email"
        type="email"
        placeholder="example@email.com"
        value={resumeData.personal.email}
        onChange={(e) => {
          setResumeData({
            ...resumeData,
            personal: { ...resumeData.personal, email: e.target.value },
          });
          setHasChanges(true);
        }}
      />
      <InputWithLabel
        id="phone"
        label="Phone"
        placeholder="(123) 456-7890"
        value={resumeData.personal.phone}
        onChange={(e) => {
          setResumeData({
            ...resumeData,
            personal: { ...resumeData.personal, phone: e.target.value },
          });
          setHasChanges(true);
        }}
      />
      <InputWithLabel
        id="location"
        label="Location"
        placeholder="San Francisco, CA"
        value={resumeData.personal.location}
        onChange={(e) => {
          setResumeData({
            ...resumeData,
            personal: { ...resumeData.personal, location: e.target.value },
          });
          setHasChanges(true);
        }}
      />
      <PhotoUploadWithLabel
        id="photo"
        label="Profile Photo"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setResumeData({
                ...resumeData,
                personal: { ...resumeData.personal, photoUrl: reader.result },
              });
            };
            reader.readAsDataURL(file);
          }
        }}
      />
      <InputWithLabel
        id="linkedin"
        label="LinkedIn Profile"
        placeholder="https://www.linkedin.com/in/yourprofile"
        value={resumeData.personal.linkedin}
        onChange={(e) =>
          setResumeData({
            ...resumeData,
            personal: { ...resumeData.personal, linkedin: e.target.value },
          })
        }
      />
      <TextareaWithLabel
        id="summary"
        label="Professional Summary"
        placeholder="Briefly introduce yourself"
        value={resumeData.personal.summary}
        onChange={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = `${e.target.scrollHeight}px`;

          setResumeData({
            ...resumeData,
            personal: { ...resumeData.personal, summary: e.target.value },
          });
          setHasChanges(true);
        }}
      />
    </Section>
  );
};

export default PersonalSection;
