import React from 'react';
import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';
import PersonalSection from './PersonalSection';
import ExperienceSection from './ExperienceSection';

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontFamily: 'Helvetica',
  },
});

const ResumeDocument = ({ resumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <PersonalSection personal={resumeData.personal} />
        <ExperienceSection experiences={resumeData.experience} />
      </View>
    </Page>
  </Document>
);

export default ResumeDocument;
