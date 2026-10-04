import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CourseInfoBar } from './components/CourseInfoBar';
import { CourseHighlightsStrip } from './components/CourseHighlightsStrip';
import { CourseOverview } from './components/CourseOverview';
import { WhatYoullGet } from './components/WhatYoullGet';
import { WhyLearnGenAI } from './components/WhyLearnGenAI';
import { Curriculum } from './components/Curriculum';
import { LearningJourney } from './components/LearningJourney';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { CourseExperience } from './components/CourseExperience';
import { LearningFormat } from './components/LearningFormat';
import { WhyNeuronixAI } from './components/WhyNeuronixAI';
import { BrandIntro } from './components/BrandIntro';
import { BuildYourFuture } from './components/BuildYourFuture';
import { FAQ } from './components/FAQ';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { handleApplyNow } from './config/enrollment';

export default function App() {
  // Single centralized handler that opens the Google Form in a new browser tab
  const handleApplyClick = () => {
    handleApplyNow();
  };

  const handleExploreClick = () => {
    const overviewElem = document.getElementById('course-overview');
    if (overviewElem) {
      overviewElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050B17] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Sticky Navigation with Minimal Scroll Progress Bar */}
      <Navbar onApplyClick={handleApplyClick} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onApplyClick={handleApplyClick}
          onExploreClick={handleExploreClick}
        />

        {/* 2. Course Information Bar directly below Hero */}
        <CourseInfoBar />

        {/* Course Topics Horizontal Strip */}
        <CourseHighlightsStrip />

        {/* 3. Course Overview ("Generative AI Course" & "What You'll Get") */}
        <CourseOverview onApplyClick={handleApplyClick} />
        <WhatYoullGet onApplyClick={handleApplyClick} />

        {/* 4. Why Learn Generative AI? (6 Core Reasons) */}
        <WhyLearnGenAI onApplyClick={handleApplyClick} />

        {/* 5. What You'll Learn (12 Modern Curriculum Cards) */}
        <Curriculum onApplyClick={handleApplyClick} />

        {/* 6. Learning Journey ("From Beginner to AI Builder" Timeline) */}
        <LearningJourney onApplyClick={handleApplyClick} />

        {/* 7. Who It's For (Learner Profiles) */}
        <WhoIsThisFor onApplyClick={handleApplyClick} />

        {/* 8. Course Experience (01 Learn, 02 Explore, 03 Practice, 04 Build, 05 Grow + Live Classroom Format) */}
        <CourseExperience onApplyClick={handleApplyClick} />
        <LearningFormat onApplyClick={handleApplyClick} />

        {/* 9. Why Neuronix AI ("Why Learn With Neuronix AI?" + Brand Intro + "Build Your Future With AI") */}
        <WhyNeuronixAI onApplyClick={handleApplyClick} />
        <BrandIntro onApplyClick={handleApplyClick} />
        <BuildYourFuture onApplyClick={handleApplyClick} />

        {/* 10. Frequently Asked Questions (Accordion) */}
        <FAQ />

        {/* 11. Final Apply CTA ("Your AI Journey Starts Here.") */}
        <CallToAction onApplyClick={handleApplyClick} />
      </main>

      {/* Footer */}
      <Footer onApplyClick={handleApplyClick} />
    </div>
  );
}
