/**
 * Centralized Google Form Configuration for Neuronix AI
 * 
 * All "Apply Now" buttons across the website reference this single centralized constant.
 * To update the Google Form destination, simply change the URL here.
 */
export const GOOGLE_FORM_URL: string = 'https://docs.google.com/forms/d/e/1FAIpQLSdZ6NkIKL6zhgL51PbP5-PqpIHiAfoQQZwlkcj1EJByLR1NFQ/viewform';

/**
 * Single centralized handler for every "Apply Now" button on the website.
 * Opens the Google Form in a new browser tab with rel="noopener,noreferrer"
 * while keeping the original Neuronix AI website open.
 */
export const handleApplyNow = (): void => {
  window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
};
