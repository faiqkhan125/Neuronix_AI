export interface CourseTopic {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag?: string;
}

export interface CourseOverviewFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhatYoullGetItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CourseExperienceStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface WhyLearnItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface LearnerProfile {
  id: string;
  title: string;
  badge: string;
  description: string;
  benefits: string[];
  iconName: string;
}

export interface OnlineFeature {
  id: string;
  iconEmoji: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
